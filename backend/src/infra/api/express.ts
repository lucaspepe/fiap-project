import express, { Express } from "express";
import { Sequelize } from "sequelize-typescript";
import UserModel from '../database/sequelize/models/user.model';
import { loginRoute } from './routes/login.routes';

export const app: Express = express();
app.use(express.json());
app.use("/login", loginRoute);

export let sequelize: Sequelize;

async function setupDb() {
  sequelize = new Sequelize({
    dialect: "sqlite",
    storage: ":memory:",
    logging: false,
  });
  sequelize.addModels([UserModel]);
  await sequelize.sync();
}
setupDb();
