import { newMockEvent } from "matchstick-as";
import { ethereum, Bytes } from "@graphprotocol/graph-ts";
import {
  AddedAddress,
  AddedBytes,
  AddedBytes32,
  AddedString,
  AddedUint256,
  Removed,
} from "../generated/ConstantsRegistry/ConstantsRegistry";

export function createAddedAddressEvent(name: string, value: Bytes): AddedAddress {
  let addedAddressEvent = changetype<AddedAddress>(newMockEvent());

  addedAddressEvent.parameters = new Array();

  addedAddressEvent.parameters.push(new ethereum.EventParam("name", ethereum.Value.fromString(name)));
  addedAddressEvent.parameters.push(new ethereum.EventParam("value", ethereum.Value.fromBytes(value)));

  return addedAddressEvent;
}

export function createAddedBytesEvent(name: string, value: Bytes): AddedBytes {
  let addedBytesEvent = changetype<AddedBytes>(newMockEvent());

  addedBytesEvent.parameters = new Array();

  addedBytesEvent.parameters.push(new ethereum.EventParam("name", ethereum.Value.fromString(name)));
  addedBytesEvent.parameters.push(new ethereum.EventParam("value", ethereum.Value.fromBytes(value)));

  return addedBytesEvent;
}

export function createAddedBytes32Event(name: string, value: Bytes): AddedBytes32 {
  let addedBytes32Event = changetype<AddedBytes32>(newMockEvent());

  addedBytes32Event.parameters = new Array();

  addedBytes32Event.parameters.push(new ethereum.EventParam("name", ethereum.Value.fromString(name)));
  addedBytes32Event.parameters.push(new ethereum.EventParam("value", ethereum.Value.fromBytes(value)));

  return addedBytes32Event;
}

export function createAddedStringEvent(name: string, value: Bytes): AddedString {
  let addedStringEvent = changetype<AddedString>(newMockEvent());

  addedStringEvent.parameters = new Array();

  addedStringEvent.parameters.push(new ethereum.EventParam("name", ethereum.Value.fromString(name)));
  addedStringEvent.parameters.push(new ethereum.EventParam("value", ethereum.Value.fromBytes(value)));

  return addedStringEvent;
}

export function createAddedUint256Event(name: string, value: Bytes): AddedUint256 {
  let addedUint256Event = changetype<AddedUint256>(newMockEvent());

  addedUint256Event.parameters = new Array();

  addedUint256Event.parameters.push(new ethereum.EventParam("name", ethereum.Value.fromString(name)));
  addedUint256Event.parameters.push(new ethereum.EventParam("value", ethereum.Value.fromBytes(value)));

  return addedUint256Event;
}

export function createRemovedEvent(name: string): Removed {
  let removedEvent = changetype<Removed>(newMockEvent());

  removedEvent.parameters = new Array();

  removedEvent.parameters.push(new ethereum.EventParam("name", ethereum.Value.fromString(name)));

  return removedEvent;
}
