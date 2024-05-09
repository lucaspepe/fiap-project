import express from "express";
import TarefaController from "../../../app/controllers/TarefaController";

export const tarefaRoute = express.Router();
tarefaRoute.post('/', TarefaController.create)
tarefaRoute.put('/', TarefaController.update)
tarefaRoute.get('/', TarefaController.list)
