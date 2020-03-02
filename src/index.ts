import express from "express";
import config from "config";
import sequelize from "./models";
import routes from "./routes";
import checkToken from "./middleware/token";

const app = express();

app.use(checkToken);
app.use(routes);

(async () => {
  await sequelize.sync();
  app.listen(config.get<number>("port"));
})();
