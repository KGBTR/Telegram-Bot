import { Telegraf, session } from "telegraf";
import * as chalk from "chalk";
import { config } from "dotenv";
import { resolve } from "path";

import { BotContext } from "./@types";
import { Admin, User } from "./commands";
import { logger, envChecker } from "./helpers";
import { parseCommand } from "./middlewares";

config({ path: resolve(__dirname, "../.env") });

const bot = new Telegraf<BotContext>(envChecker("BOT_TOKEN"), {
  telegram: { webhookReply: true },
});

bot.use(session());
bot.use(parseCommand);

// bot.start((ctx) => ctx.replyWithDice());

bot.command("ban", Admin.Ban);
bot.command("unban", Admin.UnBan);
bot.command("mute", Admin.Mute);
bot.command("unmute", Admin.UnMute);
bot.command("ping", Admin.Ping);

// bot.use(Telegraf.log());
bot.launch();
bot.telegram.getMe().then((botInfo) => {
  logger.info(
    `${chalk.blueBright.bold("%s")} Emrinize Âmâde`,
    botInfo.username
  );
});

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
