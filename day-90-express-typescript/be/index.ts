console.log("Day-90: Express TypeScript");

// const express = require("express");
// const mongoose = require("mongoose");
import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import theaterRouter from './routes/theaters.api';
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_DB_URL || "mongodb://localhost:27017/test";

let name: string = "<h1>Day-90: Express TypeScript</h1>";
let phoneNumber: number = 99119911;
let isMarried: boolean = false;
let sheeps: Array<string> = ["sheep1", "sheep2", "sheep3"];
let sheep: string[] = ["sheep1", "sheep2", "sheep3"];

let sheepObject: { name: string; age: number } = {
  name: "sheep1",
  age: 1,
};

sheepObject.name = "sheep2";
sheepObject.age = 2; // error

interface Student {
  name: string,
  age: number,
  isVerified: boolean,
}


// name = 12;

app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send(name);
});

app.use('/theaters', theaterRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
});
