import connectDB from "./utils/connect.utils";
import log from "./utils/logger.utils";
import createServer from "./utils/server.utils";
import * as envCfg from "../config/env.config";

envCfg.envConfig;

const app = createServer();

app.listen(envCfg.PORT, async () => {
  log.info(`[express] App is running on Port http://localhost:${envCfg.PORT}`);

  await connectDB();
});
