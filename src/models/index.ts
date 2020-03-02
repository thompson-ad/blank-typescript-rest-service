import { Sequelize } from "sequelize";
import config from "config";

const sequelize = new Sequelize(
  config.get<string>("db.mysql.database"),
  config.get<string>("db.mysql.username"),
  config.get<string>("db.mysql.password"),
  {
    host: config.get<string>("db.mysql.host"),
    dialect: "mysql"
  }
);

export default sequelize;
