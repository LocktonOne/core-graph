import {
  AddedPermissions as AddedPermissionsEvent,
  AddedRoleWithDescription as AddedRoleWithDescriptionEvent,
  GrantedRoles as GrantedRolesEvent,
  RemovedPermissions as RemovedPermissionsEvent,
  RevokedRoles as RevokedRolesEvent,
} from "../generated/Contract/Contract";
import {
  AddedPermissions,
  AddedRoleWithDescription,
  GrantedRoles,
  RemovedPermissions,
  RevokedRoles,
} from "../generated/schema";

export function handleAddedPermissions(event: AddedPermissionsEvent): void {
  let entity = new AddedPermissions(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.role = event.params.role;
  entity.resource = event.params.resource;
  entity.permissionsToAdd = event.params.permissionsToAdd;
  entity.allowed = event.params.allowed;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleAddedRoleWithDescription(event: AddedRoleWithDescriptionEvent): void {
  let entity = new AddedRoleWithDescription(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.role = event.params.role;
  entity.description = event.params.description;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleGrantedRoles(event: GrantedRolesEvent): void {
  let entity = new GrantedRoles(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.to = event.params.to;
  entity.rolesToGrant = event.params.rolesToGrant;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRemovedPermissions(event: RemovedPermissionsEvent): void {
  let entity = new RemovedPermissions(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.role = event.params.role;
  entity.resource = event.params.resource;
  entity.permissionsToRemove = event.params.permissionsToRemove;
  entity.allowed = event.params.allowed;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRevokedRoles(event: RevokedRolesEvent): void {
  let entity = new RevokedRoles(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.from = event.params.from;
  entity.rolesToRevoke = event.params.rolesToRevoke;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
