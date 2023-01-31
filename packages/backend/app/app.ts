import express, {
  Request,
  Response,
  Errback,
  NextFunction,
  Router,
} from "express";
const app = express();
const port = 3000;
const fiveByFiveRouter = require("./routes/fiveByFive");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/five-by-five", fiveByFiveRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
