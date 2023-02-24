import { store } from "@graphprotocol/graph-ts";
import {
  AddedBytes,
  AddedString,
  AddedUint256,
  AddedAddress,
  AddedBytes32,
  Removed,
} from "../../generated/ConstantsRegistry/ConstantsRegistry";
import { getConstant } from "../entities/registries/Constant";
import { SolidityTypes } from "../entities/global/SolidityTypes";

export function onAddedBytes(event: AddedBytes): void {
  getConstant(event.params.name, event.params.value, SolidityTypes.BYTES).save();
}

export function onAddedString(event: AddedString): void {
  getConstant(event.params.name, event.params.value, SolidityTypes.STRING).save();
}

export function onAddedUint256(event: AddedUint256): void {
  getConstant(event.params.name, event.params.value, SolidityTypes.UINT256).save();
}

export function onAddedAddress(event: AddedAddress): void {
  getConstant(event.params.name, event.params.value, SolidityTypes.ADDRESS).save();
}

export function onAddedBytes32(event: AddedBytes32): void {
  getConstant(event.params.name, event.params.value, SolidityTypes.BYTES32).save();
}

export function onRemoved(event: Removed): void {
  store.remove("Constant", event.params.name);
}
