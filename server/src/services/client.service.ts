import mongoose from "mongoose";
import ClientModel, { ClientDocument } from "@model/client.model";
import logger from "../utils/logger.utils";

export async function findClientService(
  query: mongoose.FilterQuery<ClientDocument>,
  opts: mongoose.QueryOptions = { lean: true }
) {
  try {
    return await ClientModel.find(query, {}, opts);
  } catch (error: any) {
    logger.error(error);
    throw new Error(error);
  }
}

export async function findOneClientService(
  query: mongoose.FilterQuery<ClientDocument>,
  opts: mongoose.QueryOptions = {}
) {
  try {
    return await ClientModel.findOne(query, {}, opts);
  } catch (error: any) {
    logger.error(error);
    throw new Error(error);
  }
}
