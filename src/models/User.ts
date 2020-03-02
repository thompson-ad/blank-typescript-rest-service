import { Model, DataTypes } from "sequelize";
import sequelize from "./index";

class User extends Model {
  public username!: string;
  public birthday!: Date;
}

User.init(
  {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE
  },
  { sequelize, modelName: "user" }
);

export default User;
