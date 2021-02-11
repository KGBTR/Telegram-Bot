import * as chalk from "chalk";
import { BotContext } from "../../@types";
import logger from "../../helpers/logger";
import { User } from "../../db";

export function Ban(ctx: BotContext) {
  logger.log("command:admin", ctx.state.command);
}

export function UnBan(ctx: BotContext) {}

export function Mute(ctx: BotContext) {}

export function UnMute(ctx: BotContext) {}

export function Ping(ctx: BotContext) {
  // logger.log("command:user", new Date(ctx.message.date).toUTCString());
  logger.log("command:admin", ctx.state.command);
  ctx.replyWithMarkdownV2(`\`${12} ms\` gecikme ile *Pong*`);
}
