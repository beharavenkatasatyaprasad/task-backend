const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  cors = require("cors"),
  morgan = require("morgan"),
  parser = require("body-parser"),
  routes = require("./routes");

app.use(express.json());
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());
app.use(morgan("dev"));
require("dotenv").config({ path: __dirname + "/.env" });
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send({ message: "No cookie for you" });
});

app.use("/api-v1", routes);
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(
    () => {
      console.log("Database Connected");
    },
    (err) => {
      console.log(err);
    }
  );

const port = process.env.PORT || 8001;

app.listen(port, () => {
  console.log(`Server running on port ${port} 🔥`);
});
