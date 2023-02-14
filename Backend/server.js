require("dotenv").config();
const express = require("express");
const dbConnect = require("./dbConnect");
const movieRoutes = require("./routes/lists");
const cors = require("cors");
const app = express();
const multer=require('multer');

dbConnect();

app.use(express.json());
app.use(cors());

app.use("/api", movieRoutes);

const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Listening on port ${port}...`));
