import { assert, describe, test, clearStore, beforeAll, afterAll } from "matchstick-as/assembly/index";
import { Address } from "@graphprotocol/graph-ts";
import { AddedPermissions } from "../generated/schema";
import { AddedPermissions as AddedPermissionsEvent } from "../generated/Contract/Contract";
import { handleAddedPermissions } from "../src/contract";
import { createAddedPermissionsEvent } from "./contract-utils";

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let role = "Example string value";
    let resource = "Example string value";
    let permissionsToAdd = ["Example string value"];
    let allowed = "boolean Not implemented";
    let newAddedPermissionsEvent = createAddedPermissionsEvent(role, resource, permissionsToAdd, allowed);
    handleAddedPermissions(newAddedPermissionsEvent);
  });

  afterAll(() => {
    clearStore();
  });

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AddedPermissions created and stored", () => {
    assert.entityCount("AddedPermissions", 1);

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AddedPermissions",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "role",
      "Example string value",
    );
    assert.fieldEquals(
      "AddedPermissions",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "resource",
      "Example string value",
    );
    assert.fieldEquals(
      "AddedPermissions",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "permissionsToAdd",
      "[Example string value]",
    );
    assert.fieldEquals(
      "AddedPermissions",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "allowed",
      "boolean Not implemented",
    );

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  });
});
