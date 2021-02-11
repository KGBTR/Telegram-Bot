import { createLogger, transports, format, addColors, config } from "winston";
import * as chalk from "chalk";
const { combine, timestamp, printf, splat } = format;
import { createWriteStream } from "fs";
import { resolve } from "path";

const BotLevels = {
  levels: {
    ...config.syslog.levels,

    "command:user": 8,
    "command:admin": 9,
    "command:error": 10,
  },
  colors: {
    ...config.syslog.colors,

    "command:user": "green",
    "command:admin": "magenta",
    "command:error": "red",
  },
};

addColors(BotLevels.colors);

export default createLogger({
  level: process.env.LOG_LEVEL || "command:error",
  levels: BotLevels.levels,
  format: combine(
    splat(),
    timestamp({
      format: "DD/MM/YYYY HH:mm:ss.SSS",
    }),
    printf(({ level, message, timestamp }) => {
      return `${chalk.gray.bold(timestamp)} ${chalk.bgRedBright.white.bold(
        ` ${level.toUpperCase()} `
      )} ${chalk.gray(">")} ${message}`;
    })
  ),
  transports: [
    new transports.Console(),
    new transports.Stream({
      stream: createWriteStream(
        resolve(__dirname, "../../logs/command/admin.log")
      ),
      level: "command:admin",
    }),
    new transports.Stream({
      stream: createWriteStream(
        resolve(__dirname, "../../logs/command/user.log")
      ),
      level: "command:user",
    }),
    new transports.Stream({
      stream: createWriteStream(
        resolve(__dirname, "../../logs/command/error.log")
      ),
      level: "command:error",
    })
  ],
});
