import express from "express";
import config from "config";
import logger from "./utils/logger";
import router from "./routes/routes";
import cors, { CorsOptions } from "cors";

const port = config.get<number>("port");
const app = express();

app.use(express.json());

const corsOptions: CorsOptions = {
  origin: "http://localhost:4200",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));

app.use("/api", router);

app.listen(port, () => {
  logger.info(`App is running at port ${port}`);
});
