import logger from "./logger"
import * as chalk from "chalk";

export default function (env_var: string) {
  env_var = env_var.toUpperCase();
  if (process.env[env_var] === undefined) {
    logger.error(
      `${chalk.bgRedBright.white.bold(
        env_var
      )} .env değişkeni tanımlı olmak zorunda!`
    );
    return null;
  }
  else return process.env[env_var];
}
