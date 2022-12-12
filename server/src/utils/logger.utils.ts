import pino from "pino";
import dayjsUTC from "./dayjsUTC.utils";

const logger = pino({
  prettifier: true,

  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      ignore: "pid,hostname",
    },
  },
  timestamp: () => `,"time": "${dayjsUTC().format("")}"`,
});

export default logger;
