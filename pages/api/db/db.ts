import SequelizeAdapter from "@next-auth/sequelize-adapter";
import { Sequelize } from "sequelize";

export const db = new Sequelize(
  "mysql://root:123456@127.0.0.1:3306/szakdolgozat"
);

export const adapter = SequelizeAdapter(db);
