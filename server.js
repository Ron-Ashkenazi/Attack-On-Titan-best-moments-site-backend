const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

connectDB();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/aot/moments", require("./routes/momentRoute"));
app.use(
  "/api/aot/moments-relax-stats",
  require("./routes/momentRelaxStatsRoute")
);

app.use("/api/aot/moments-hth-stats", require("./routes/momentHTHStatsRoute"));

const port = 5000 || process.env.PORT;

app.listen(port, () => console.log("Backend server live on " + port));
