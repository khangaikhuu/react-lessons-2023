import { Router } from "express";
import {
  getTheaters,
  getTheaterById,
  searchTheaters,
  createTheater,
} from "../controllers/theater.controller";

const theaterRouter = Router();

theaterRouter.get("/list", getTheaters);
theaterRouter.post("/create", createTheater);

theaterRouter.get("/byId/:id", getTheaterById);

theaterRouter.get("/search", searchTheaters);

export default theaterRouter;
