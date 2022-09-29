import SequelizeAdapter from "@next-auth/sequelize-adapter";
import { Sequelize } from "sequelize";

export const db = new Sequelize(
  "mysql://root:123456@127.0.0.1:3306/szakdolgozat"
);

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

export const adapter = SequelizeAdapter(db);
