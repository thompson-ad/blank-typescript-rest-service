import express from "express";
import User from "./models/User";

const app = express();

app.get("/", async (_, res) => {
  res.send(await User.findAll());
});

app.get("/:id", async (req, res) => {
  const user = await User.findOne({
    where: {
      id: req.params.id
    }
  });
  if (!user) {
    res.send(404);
    return;
  }
  res.send(user);
});

export default app;
