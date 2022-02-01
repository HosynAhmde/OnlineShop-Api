require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const connectDB = require("./db/connect");

/////////////routes
const mobileRouter = require("./routes/mobile");

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

app.use(express.json());
app.use("/api/v1", mobileRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGODB_URI);

    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
