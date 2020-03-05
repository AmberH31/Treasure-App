const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
<<<<<<< HEAD
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
require("dotenv").config();
=======
// const bodyParser = require("body-parser");/
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
require("dotenv").config();

>>>>>>> 2e11d73228650129b8809f9e81c69b3b66140e2c
// import routes
const userAuthRoutes = require("./routes/userAuth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
<<<<<<< HEAD
// import custom middlewares
const userAuthMiddleware = require("./middlewares/userAuthMiddleware");
=======

>>>>>>> 2e11d73228650129b8809f9e81c69b3b66140e2c
// initialize app
const app = express();
const PORT = process.env.PORT || 3000;
// If deployed, use the deployed database. Otherwise use the local treasure_app database
const DATABASE = process.env.DATABASE;
<<<<<<< HEAD
=======

>>>>>>> 2e11d73228650129b8809f9e81c69b3b66140e2c
mongoose.connect(DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
<<<<<<< HEAD
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
=======

const connection = mongoose.connection;
// Middleware
app.use(morgan("dev"));
app.use(express.json());
>>>>>>> 2e11d73228650129b8809f9e81c69b3b66140e2c
app.use(cookieParser());
app.use(expressValidator());
// the cors package is used so that our API will be able to handle request
// coming from different origin. backend might be on port 8080 while
// frontend may be running on port 3000.
app.use(cors());
app.use(express.urlencoded({ extended: true }));
<<<<<<< HEAD
=======
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

>>>>>>> 2e11d73228650129b8809f9e81c69b3b66140e2c
// Routes middleware
app.use("/api", userAuthRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
<<<<<<< HEAD
app.use("/api", userAuthMiddleware, productRoutes);
=======
app.use("/api", productRoutes);

>>>>>>> 2e11d73228650129b8809f9e81c69b3b66140e2c
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
