import { RequestsThread } from "../../../generated/schema";
import { Bytes, BigInt } from "@graphprotocol/graph-ts";

export function getRequestsThread(requestId: BigInt): RequestsThread {
  const id = requestId.toString();
  let entity = RequestsThread.load(id);

  if (entity == null) {
    entity = new RequestsThread(id);
  }

  return entity;
}