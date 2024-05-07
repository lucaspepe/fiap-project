import express, { Request, Response } from "express";

export const loginRoute = express.Router();

loginRoute.post("/", async (req: Request, res: Response) => {
    res.send({text: 'ola'})
});
