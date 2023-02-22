import express from "express";
import { logger } from "./lib/log/logger";
import { usersRouter } from "./routes/users";
import { workoutRouter } from "./routes/workout";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/users", usersRouter);
app.use("/workout", workoutRouter);

app.listen(port, () => {
  logger.info(`app listening on port ${port}`);
});
