require('dotenv').config();
require('express-async-errors');

const express=require('express');
const app=express();
const connectDB=require('./db/conect');
/////////////routes


const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

app.use(express.json())

app.use(notFoundMiddleware);
app.use(errorMiddleware);


const port = process.env.PORT || 3000;

const start = async () => {
    try {
      // connectDB
      await connectDB(process.env.MONGO_URI);
      app.listen(port, () => console.log(`Server is listening port ${port}...`));
    } catch (error) {
      console.log(error);
    }
  };
  start()