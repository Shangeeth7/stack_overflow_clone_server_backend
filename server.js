const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const db = require("./db");
const PORT = process.env.PORT || 6677;
const router = require("./routers");

db.connect();

app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "500mb" }));

app.use(express.json());

app.use("/api", router);

app.get("/", (req, res) =>
  res.send(` 
Backend Server of Stackoverflow
`)
);

app.use(cors());

app.listen(PORT, () => {
  console.log(`Stack Overflow Clone API is running on PORT No- ${PORT}`);
});
