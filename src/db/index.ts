import { connect, connection, set } from "mongoose";
import * as chalk from "chalk";
import { User } from "./schema/Users";
import { envChecker, logger } from "../helpers";

connect(envChecker("MONGODB_URI"), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  dbName: envChecker("MONGODB_NAME"),
});

set('useCreateIndex', true)

connection.on("error", (err) => {
  logger.error(`${chalk.redBright.white.bold(" ERROR ")} ${err}`);
});
connection.once("open", () => {
  logger.info(
    `${chalk.bgGreenBright.white.bold(" SUCCESSFUL ")} MONGODB Connection`
  );
});

export { User };
