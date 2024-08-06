import { Constant } from "../../../generated/schema";
import { Bytes } from "@graphprotocol/graph-ts";
import { SolidityTypes } from "../global/SolidityTypes";

export function getConstant(
  id: string,
  value: Bytes = Bytes.empty(),
  type: SolidityTypes = SolidityTypes.BYTES,
): Constant {
  let entity = Constant.load(id);

  if (entity == null) {
    entity = new Constant(id);
    entity.value = value;
    entity.type = type;
  }

  return entity;
}
