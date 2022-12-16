import mongoose from "mongoose";
import ProjectModel, { ProjectDocument } from "@model/project.model";
import logger from "../utils/logger.utils";

export async function findProjectService(
  query: mongoose.FilterQuery<ProjectDocument>,
  opts: mongoose.QueryOptions = { lean: true }
) {
  try {
    return await ProjectModel.find(query, {}, opts);
  } catch (error: any) {
    logger.error(error);
    throw new Error(error);
  }
}

export async function findOneProjectService(
  query: mongoose.FilterQuery<ProjectDocument>,
  opts: mongoose.QueryOptions = {}
) {
  try {
    return await ProjectModel.findOne(query, {}, opts);
  } catch (error: any) {
    logger.error(error);
    throw new Error(error);
  }
}
