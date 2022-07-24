import mongoose from "mongoose";

export interface SessionDocument extends mongoose.Document {
  user: SessionDocument["_id"];
  userAgent: string;
  valid: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const sessionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    valid: {
      type: Boolean,
      default: true,
    },
    userAgent: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const SessionModel = mongoose.model<SessionDocument>(
  "Session",
  sessionSchema,
  "sessions"
);

export default SessionModel;
