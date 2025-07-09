import express from "express";
import config from "config";
import logger from "./utils/logger";
import router from "./routes/routes";

const port = config.get<number>("port");
const app = express();
app.use(express.json());
app.use("/api", router);

app.listen(port, () => {
  logger.info(`App is running at port ${port}`);
});
