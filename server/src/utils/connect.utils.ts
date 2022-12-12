import mongoose from "mongoose";
import logger from "./logger.utils";
import { DB_URI } from "../../config/env.config";

async function connectDB() {
  const dbUri = DB_URI as string;

  try {
    const conn = await mongoose.connect(dbUri);
    logger.info("[mongoose] Connected to DB");
    logger.info(
      `[mongoose] connected on 'mongodb://*****:*****@${conn.connection.host}:${conn.connection.port}' `
    );
    logger.info(`[mongoose] mongo database : ${conn.connection.name}`);
  } catch (error) {
    logger.info("could not connect to DB");
    logger.info(error);
    process.exit(1);
  }
}

export default connectDB;
