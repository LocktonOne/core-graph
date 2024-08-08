import {
  AddedAddress as AddedAddressEvent,
  AddedBytes as AddedBytesEvent,
  AddedBytes32 as AddedBytes32Event,
  AddedString as AddedStringEvent,
  AddedUint256 as AddedUint256Event,
  Removed as RemovedEvent,
} from "../generated/ConstantsRegistry/ConstantsRegistry";
import { AddedAddress, AddedBytes, AddedBytes32, AddedString, AddedUint256, Removed } from "../generated/schema";

export function handleAddedAddress(event: AddedAddressEvent): void {
  let entity = new AddedAddress(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.name = event.params.name;
  entity.value = event.params.value;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleAddedBytes(event: AddedBytesEvent): void {
  let entity = new AddedBytes(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.name = event.params.name;
  entity.value = event.params.value;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleAddedBytes32(event: AddedBytes32Event): void {
  let entity = new AddedBytes32(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.name = event.params.name;
  entity.value = event.params.value;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleAddedString(event: AddedStringEvent): void {
  let entity = new AddedString(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.name = event.params.name;
  entity.value = event.params.value;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleAddedUint256(event: AddedUint256Event): void {
  let entity = new AddedUint256(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.name = event.params.name;
  entity.value = event.params.value;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRemoved(event: RemovedEvent): void {
  let entity = new Removed(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.name = event.params.name;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
