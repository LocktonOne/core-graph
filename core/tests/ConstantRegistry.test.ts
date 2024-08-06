import { assert, clearStore, describe, newMockEvent, test, afterEach, beforeEach } from "matchstick-as";
import { Address, BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts";
import {
  AddedAddress,
  AddedBytes,
  AddedBytes32,
  AddedString,
  AddedUint256,
  Removed,
} from "../generated/ConstantsRegistry/ConstantsRegistry";
import {
  onAddedAddress,
  onAddedBytes,
  onAddedBytes32,
  onAddedString,
  onAddedUint256,
  onRemoved,
} from "../src/mappings/ConstantsRegistry";
import { getBlock, getTransaction } from "./utils/utils";
import { SolidityTypes } from "../src/entities/global/SolidityTypes";

function createAddedEvent<T extends ethereum.Event>(
  name: string,
  value: Bytes,
  block: ethereum.Block,
  tx: ethereum.Transaction,
): T {
  let event = changetype<T>(newMockEvent());

  event.parameters = new Array();
  event.parameters.push(new ethereum.EventParam("name", ethereum.Value.fromString(name)));
  event.parameters.push(new ethereum.EventParam("value", ethereum.Value.fromBytes(value)));

  event.block = block;
  event.transaction = tx;

  return event;
}

function createRemovedEvent(name: string, block: ethereum.Block, tx: ethereum.Transaction): Removed {
  let event = changetype<Removed>(newMockEvent());

  event.parameters = new Array();
  event.parameters.push(new ethereum.EventParam("name", ethereum.Value.fromString(name)));

  event.block = block;
  event.transaction = tx;

  return event;
}

const block = getBlock(BigInt.fromI32(1), BigInt.fromI32(1));
const tx = getTransaction(Bytes.fromByteArray(Bytes.fromBigInt(BigInt.fromI32(1))));

const name = "first constant";

describe("ConstantRegistry", () => {
  afterEach(() => {
    clearStore();
  });

  test("should handle AddedBytes", () => {
    let value = Bytes.fromHexString("0x1337");
    let event = createAddedEvent<AddedBytes>(name, value, block, tx);

    onAddedBytes(event);

    assertConstant(name, value, SolidityTypes.BYTES);
  });

  test("should handle AddedString", () => {
    let value = Bytes.fromUTF8("some constant value");
    let event = createAddedEvent<AddedString>(name, value, block, tx);

    onAddedString(event);

    assertConstant(name, value, SolidityTypes.STRING);
  });

  test("should handle AddedUint256", () => {
    let value = Bytes.fromI32(123);
    let event = createAddedEvent<AddedUint256>(name, value, block, tx);

    onAddedUint256(event);

    assertConstant(name, value, SolidityTypes.UINT256);
  });

  test("should handle AddedAddress", () => {
    let value = Address.fromString("0x989F7514C41746bB6e1A12249EE8a851Ba6726BB");
    let event = createAddedEvent<AddedAddress>(name, value, block, tx);

    onAddedAddress(event);

    assertConstant(name, value, SolidityTypes.ADDRESS);
  });

  test("should handle AddedBytes32", () => {
    let value = Bytes.fromHexString("0x0000000000000000000000000000000000000000000000000000000000000001");
    let event = createAddedEvent<AddedBytes32>(name, value, block, tx);

    onAddedBytes32(event);

    assertConstant(name, value, SolidityTypes.BYTES32);
  });

  describe("if constant is created", () => {
    beforeEach(() => {
      let value = Bytes.fromHexString("0x1337");
      let event = createAddedEvent<AddedBytes>(name, value, block, tx);

      onAddedBytes(event);
    });

    test("should handle RemovedConstant", () => {
      let event = createRemovedEvent(name, block, tx);

      onRemoved(event);

      assert.notInStore("Constant", name);
    });
  });
});

function assertConstant(name: string, value: Bytes, type: SolidityTypes): void {
  assert.fieldEquals("Constant", name, "value", value.toHexString());
  assert.fieldEquals("Constant", name, "type", type);
}
