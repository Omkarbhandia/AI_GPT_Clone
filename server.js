const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const colors = require("colors");
const path = require('path')
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const errorHandler = require("./middlewares/errorMiddleware");

//routespath
const authRoute = require("./routes/authRoute");
const openaiRoute = require("./routes/openaiRoutes");
//dotenv
dotenv.config();

//DB Connection
connectDb();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(errorHandler);

//static files
app.use(express.static(path.join(__dirname, './client/build')));
app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, './client/build/index.html'));
})



//port
const PORT = process.env.PORT || 8081;

//API routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/openai", openaiRoute);


//listen to server
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.DEV_MODE} mode on Port Number ${PORT}`
      .bgCyan.white
  );
});
