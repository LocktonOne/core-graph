const execSync = require("child_process").execSync;
const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config();

const SUBGRAPH_NAME = process.env.SUBGRAPH_NAME || "core";
const DIRECTORY = process.env.SUBGRAPH_DIR || "./";
const NETWORK = process.env.NETWORK || "mainnet";

async function initSubgraph(contractAddress, contractName) {
  const abiPath = `./abis/${contractName}.json`;
  try {
    const initCommand = `graph init --from-contract ${contractAddress} --network ${NETWORK} --contract-name ${contractName} --abi ${abiPath} ${DIRECTORY} ${SUBGRAPH_NAME}`;
    execSync(initCommand, { stdio: "inherit" });
    console.log("Subgraph initialized successfully.");
  } catch (error) {
    console.error("Error initializing subgraph:", error);
    process.exit(1);
  }
}

async function addContract(contractAddress, contractName) {
  const abiPath = `./abis/${contractName}.json`;
  try {
    const addCommand = `graph add ${contractAddress} --contract-name ${contractName} --abi ${abiPath} subgraph.yaml`;
    execSync(addCommand, { stdio: "inherit" });
    console.log("Contract added to subgraph successfully.");
  } catch (error) {
    console.error("Error adding contract to subgraph:", error);
    process.exit(1);
  }
}

async function main() {
  const vault = require("node-vault")({
    apiVersion: "v1",
    endpoint: process.env.VAULT_ENDPOINT,
    token: process.env.VAULT_TOKEN,
  });

  const responseBody = (await vault.read(process.env.VAULT_CONFIG_PATH)).data;
  if (!responseBody.data.addresses) {
    console.error(`Contracts addresses is not set in the vault`);
    process.exit(1);
  }

  console.log(responseBody);
  const addresses = Object.keys(responseBody.data.addresses);

  await initSubgraph(responseBody.data.addresses[addresses[0]], addresses[0]);

  for (let contract of addresses) {
    if (contract == "ConstantsRegistry") continue;
    console.log(`Adding contract ${contract} to subgraph...`);
    await addContract(responseBody.data.addresses[contract], contract);
  }
}

main();
