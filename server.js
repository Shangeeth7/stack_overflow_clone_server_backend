const express = require("express");

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
const path = require("path");
const bodyParser = require("body-parser");
const db = require("./db");
const router = require("./routers");

db.connect();

app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "500mb" }));

const PORT = process.env.PORT || 6677;

app.use("/api", router);

app.get("/", (req, res) =>
  res.send(` 
Backend Server of Stackoverflow
`)
);

app.listen(PORT, () => {
  console.log(`Stack Overflow Clone API is running on PORT No- ${PORT}`);
});
