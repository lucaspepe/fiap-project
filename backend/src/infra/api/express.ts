import express, { Express } from "express";
import cors from 'cors'
import { Sequelize } from "sequelize-typescript";
import TarefaModel from '../database/sequelize/models/tarefa.model';
import { loginRoute } from './routes/login.routes';
import { tarefaRoute } from "./routes/tarefa.routes";

export const app: Express = express();
app.use(cors());
app.use(express.json());
app.use("/login", loginRoute);
app.use("/tarefas", tarefaRoute);

export let sequelize: Sequelize;

async function setupDb() {
  sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite",
    logging: false,
  });
  sequelize.addModels([TarefaModel]);
  await sequelize.sync();
}
setupDb();
