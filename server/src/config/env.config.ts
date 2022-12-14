import dotenv from "dotenv";
import path from "path";
import { ROOT_FOLDER } from "../utils/constants.utils";

const mode = process.env.TS_NODE_DEV ? "development" : "production";
const envPath = {
  production: path.join(ROOT_FOLDER, ".env"),
  development: path.join(ROOT_FOLDER, ".env.dev"),
  testing: path.join(ROOT_FOLDER, ".env.test"),
};

export const envConfig = dotenv.config({
  path: envPath[mode],
});

export const MODE = mode;
export const SALTWORKFACTOR = 10;
export const ACCESSTOKENTTL = "15m";
export const REFRESHTOKENTTL = "7d";
export const PORT = process.env.PORT || "4000";
export const PRIVATE_KEY = process.env.PRIVATE_KEY || null;
export const PUBLIC_KEY = process.env.PUBLIC_KEY || null;
export const DB_URI = process.env.DB_URI || "";
