import { BotContext } from "../@types";

function checkAdmin(ctx: BotContext, next, config) {
  ctx.session.admin = false;
}

export { checkAdmin };
