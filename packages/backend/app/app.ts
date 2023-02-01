import express from "express";
import { logger } from "./lib/log/logger";
import { workoutRouter } from "./routes/workout";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/workout", workoutRouter);

app.listen(port, () => {
  logger.info(`app listening on port ${port}`);
});
