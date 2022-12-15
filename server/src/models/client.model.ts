import mongoose from "mongoose";
import * as nanoid from "nanoid";
import { UserDocument } from "./user.model";

const setNanoId = nanoid.customAlphabet(
  "abcdefghijklmnopqrstuvwxyz0123456789",
  10
);

export interface IClientInput {
  // user: UserDocument["_id"];
  clientId?: string;
  name: string;
  email: string;
  phone: number;
}

export interface ClientDocument extends IClientInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new mongoose.Schema(
  {
    clientId: {
      type: String,
      required: true,
      unique: true,
      default: () => `CLIENT_${setNanoId(8)}`,
    },
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    // },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ClientModel = mongoose.model<ClientDocument>(
  "Client",
  productSchema,
  "products"
);

export default ClientModel;
