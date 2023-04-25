import express from "express";
import mongoose from 'mongoose'

import routes from "./routes";

class App {
  public server;
   MONGO_CONNECTION_STRING =
      "mongodb+srv://khangaikhuu_teacher:4dgZigRuS7evf3WG@mern-black.kosj6y7.mongodb.net/test";

  constructor() {
    this.server = express();
    mongoose
        .connect(this.MONGO_CONNECTION_STRING)
        .then(() => console.log("Database connected succesfully"))
        .catch((error) => console.error(error))


    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
