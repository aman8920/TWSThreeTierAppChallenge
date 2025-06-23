const express = require("express");
const cors = require("cors");
const { connectToDb } = require("./db"); // only this is needed
const tasks = require("./routes/tasks");

const app = express();

connectToDb(); // connect and sync

app.use(express.json());
app.use(cors());

app.get("/ok", (req, res) => {
  res.status(200).send("ok");
});

app.use("/api/tasks", tasks);

const port = process.env.PORT || 3500;
app.listen(port, () => console.log(`🚀 Listening on port ${port}...`));
