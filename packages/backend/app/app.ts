import express, {
  Request,
  Response,
  Errback,
  NextFunction,
  Router,
} from "express";
const app = express();
const port = 3000;
const workoutRouter = require("./routes/workout");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/workout", workoutRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
