import mongoose from "mongoose";
import * as nanoid from "nanoid";
import { ClientDocument } from "./client.model";
import { UserDocument } from "./user.model";

const setNanoId = nanoid.customAlphabet(
  "abcdefghijklmnopqrstuvwxyz0123456789",
  10
);

export enum EnumProjectStatus {
  NotStarted = "Not Started",
  InProgress = "In Progress",
  Completed = "Completed",
}

export interface IProjectInput {
  clientId: ClientDocument["_id"];
  projectId?: string;
  name: string;
  description: string;
  status: EnumProjectStatus;
}

export interface ProjectDocument extends IProjectInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new mongoose.Schema(
  {
    projectId: {
      type: String,
      required: true,
      unique: true,
      default: () => `PROJECT_${setNanoId(8)}`,
    },
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(EnumProjectStatus),
    },
  },
  {
    timestamps: true,
  }
);

const ProjectModel = mongoose.model<ProjectDocument>(
  "Project",
  productSchema,
  "products"
);

export default ProjectModel;
