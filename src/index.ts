import express from "express";

import { usersRoutes } from "./routes/users.routes";
import { errorMiddleware } from "./shared/infra/http/middlewares/ErrorMiddleware";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);
app.use(errorMiddleware);

export { app };
