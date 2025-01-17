import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("sending you the resource");
});

app.listen(8000, () => {
  console.log(`[server]: listening at http://localhost:8000`);
});
