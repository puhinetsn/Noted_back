import express from "express";
import config from "config";
import logger from "./utils/logger";
import routes from "./routes";

const port = config.get<number>("port");
const app = express();

app.listen(port, () => {
  logger.info(`App is running at port ${port}`);

  routes(app);
});
