import express from "express";
import { logger } from "./lib/log/logger";
import { initialize } from "./lib/account/session";
import { sessionRouter } from "./routes/session";
import { usersRouter } from "./routes/users";
import { workoutRouter } from "./routes/workout";
import bodyParser from "body-parser";
import flash from "connect-flash";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(flash());
app.use(initialize());

app.use("/session", sessionRouter);
app.use("/users", usersRouter);
app.use("/workout", workoutRouter);

app.listen(port, () => {
  logger.info(`app listening on port ${port}`);
});
