import { clerkClient, clerkMiddleware } from "@clerk/express";
import cors from "cors";
import "dotenv/config";

import express from "express";
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173"
  })
);

// app.use((req, res, next) => {
//   res.setHeader("access-control-allow-origin", "*");
//   next();
// });

app.use(clerkMiddleware());

// const fakeClerkMiddleware = (req, res, next) => {
//   const token = req.headers.authorization;

//   // parse the token to userId

//   // store the userId in the req.auth.userId
// };

app.get("/current-user", async (req, res) => {
  // @ts-ignore
  const currentUser = await clerkClient.users.getUser(req.auth.userId);

  res.json(currentUser);
});

app.listen(8000, () => {
  console.log(`[server]: listening at http://localhost:8000`);
});
