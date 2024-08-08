import { newMockEvent } from "matchstick-as";
import { ethereum, Address } from "@graphprotocol/graph-ts";
import {
  AddedPermissions,
  AddedRoleWithDescription,
  GrantedRoles,
  RemovedPermissions,
  RevokedRoles,
} from "../generated/Contract/Contract";

export function createAddedPermissionsEvent(
  role: string,
  resource: string,
  permissionsToAdd: Array<string>,
  allowed: boolean,
): AddedPermissions {
  let addedPermissionsEvent = changetype<AddedPermissions>(newMockEvent());

  addedPermissionsEvent.parameters = new Array();

  addedPermissionsEvent.parameters.push(new ethereum.EventParam("role", ethereum.Value.fromString(role)));
  addedPermissionsEvent.parameters.push(new ethereum.EventParam("resource", ethereum.Value.fromString(resource)));
  addedPermissionsEvent.parameters.push(
    new ethereum.EventParam("permissionsToAdd", ethereum.Value.fromStringArray(permissionsToAdd)),
  );
  addedPermissionsEvent.parameters.push(new ethereum.EventParam("allowed", ethereum.Value.fromBoolean(allowed)));

  return addedPermissionsEvent;
}

export function createAddedRoleWithDescriptionEvent(role: string, description: string): AddedRoleWithDescription {
  let addedRoleWithDescriptionEvent = changetype<AddedRoleWithDescription>(newMockEvent());

  addedRoleWithDescriptionEvent.parameters = new Array();

  addedRoleWithDescriptionEvent.parameters.push(new ethereum.EventParam("role", ethereum.Value.fromString(role)));
  addedRoleWithDescriptionEvent.parameters.push(
    new ethereum.EventParam("description", ethereum.Value.fromString(description)),
  );

  return addedRoleWithDescriptionEvent;
}

export function createGrantedRolesEvent(to: Address, rolesToGrant: Array<string>): GrantedRoles {
  let grantedRolesEvent = changetype<GrantedRoles>(newMockEvent());

  grantedRolesEvent.parameters = new Array();

  grantedRolesEvent.parameters.push(new ethereum.EventParam("to", ethereum.Value.fromAddress(to)));
  grantedRolesEvent.parameters.push(
    new ethereum.EventParam("rolesToGrant", ethereum.Value.fromStringArray(rolesToGrant)),
  );

  return grantedRolesEvent;
}

export function createRemovedPermissionsEvent(
  role: string,
  resource: string,
  permissionsToRemove: Array<string>,
  allowed: boolean,
): RemovedPermissions {
  let removedPermissionsEvent = changetype<RemovedPermissions>(newMockEvent());

  removedPermissionsEvent.parameters = new Array();

  removedPermissionsEvent.parameters.push(new ethereum.EventParam("role", ethereum.Value.fromString(role)));
  removedPermissionsEvent.parameters.push(new ethereum.EventParam("resource", ethereum.Value.fromString(resource)));
  removedPermissionsEvent.parameters.push(
    new ethereum.EventParam("permissionsToRemove", ethereum.Value.fromStringArray(permissionsToRemove)),
  );
  removedPermissionsEvent.parameters.push(new ethereum.EventParam("allowed", ethereum.Value.fromBoolean(allowed)));

  return removedPermissionsEvent;
}

export function createRevokedRolesEvent(from: Address, rolesToRevoke: Array<string>): RevokedRoles {
  let revokedRolesEvent = changetype<RevokedRoles>(newMockEvent());

  revokedRolesEvent.parameters = new Array();

  revokedRolesEvent.parameters.push(new ethereum.EventParam("from", ethereum.Value.fromAddress(from)));
  revokedRolesEvent.parameters.push(
    new ethereum.EventParam("rolesToRevoke", ethereum.Value.fromStringArray(rolesToRevoke)),
  );

  return revokedRolesEvent;
}
