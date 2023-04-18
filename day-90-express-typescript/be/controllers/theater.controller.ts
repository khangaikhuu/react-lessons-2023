import TheaterModel from "../models/theaters.model";
import { NextFunction, Request, Response } from "express";
import BookModel from "../models/books.model";

export const getTheaters = async (req: Request, res: Response) => {
  const page: number = Number(req.query.page) || 0;
  const moviesPerPage: number = Number(req.query.moviesPerPage) || 5;

  try {
    const theaters = await TheaterModel.find({})
      .limit(moviesPerPage)
      .skip(moviesPerPage * page);
    res.status(200).json(theaters);
  } catch (error) {
    res.status(404).json({ data: [] });
  }
};

export const getTheaterById = async (req: Request, res: Response) => {
  try {
    const theater = await TheaterModel.find({
      theaterId: Number(req.params.id),
    });
    res.status(200).json(theater);
  } catch (error) {
    res.status(404).json({ data: [] });
  }
};

export const searchTheaters = async (req: Request, res: Response) => {
  const keyword: string = req.query.keyword;
};

export const createTheater = async (req: Request, res: Response) => {
  const maxId = await BookModel.findOne().sort("-itemId").select("itemId");
  console.log(maxId);

  const result = await BookModel.create({
    itemId: (maxId && maxId.itemId + 1) || 1,
    name: "kundan kumar",
    address: "Indore MP",
    pincode: 452015,
    linkedin_url: "shorturl.at/frALR",
  });

  res.send(result);
};
