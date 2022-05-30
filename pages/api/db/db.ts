import SequelizeAdapter from "@next-auth/sequelize-adapter";
import { Sequelize } from "sequelize";

const db = new Sequelize("mysql://root:123456@127.0.0.1:3306/szakdolgozat");

const adapter = SequelizeAdapter(db);

// const sequelize = new Sequelize("szakdolgozat", "root", "123456", {
//   host: "localhost",
//   dialect: "mysql",
// });

export default db;
