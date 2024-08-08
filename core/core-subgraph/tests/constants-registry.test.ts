import { assert, describe, test, clearStore, beforeAll, afterAll } from "matchstick-as/assembly/index";
import { Bytes } from "@graphprotocol/graph-ts";
import { AddedAddress } from "../generated/schema";
import { AddedAddress as AddedAddressEvent } from "../generated/ConstantsRegistry/ConstantsRegistry";
import { handleAddedAddress } from "../src/constants-registry";
import { createAddedAddressEvent } from "./constants-registry-utils";

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let name = "Example string value";
    let value = Bytes.fromI32(1234567890);
    let newAddedAddressEvent = createAddedAddressEvent(name, value);
    handleAddedAddress(newAddedAddressEvent);
  });

  afterAll(() => {
    clearStore();
  });

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AddedAddress created and stored", () => {
    assert.entityCount("AddedAddress", 1);

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals("AddedAddress", "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1", "name", "Example string value");
    assert.fieldEquals("AddedAddress", "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1", "value", "1234567890");

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  });
});
