import express from "express";
import AuthController from "../../../app/controllers/AuthController";

export const loginRoute = express.Router();
loginRoute.post('/', AuthController.authenticate)
