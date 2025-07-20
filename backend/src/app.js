import express from "express";
import config from "./config/config.js";
import productRouter from "./routes/productRoute.js";

const app = express();

app.get("/detail", (req, res) => {
  res.json({
    name: config.name,
    port: config.port,
    version: config.version,
  });
});

app.use("/hello", productRouter);

app.listen(5000, () => {
  console.log("server is running in port 5000 ...");
});
