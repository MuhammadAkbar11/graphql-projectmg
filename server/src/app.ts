import connectDB from "@config/db.config";
import * as envCfg from "@config/env.config";
envCfg.envConfig;
import log from "@utils/logger.utils";
import createServer from "@utils/server.utils";

const app = createServer();

app.listen(envCfg.PORT, async () => {
  log.info(`[express] App is running on Port http://localhost:${envCfg.PORT}`);
  await connectDB();
});
