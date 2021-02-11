import { BotContext } from "../@types";

const regex = /^\/([^@\s]+)@?(?:(\S+)|)\s?([\s\S]+)?$/i;

export default function (ctx: BotContext, next: () => Promise<void>) {
  // const parts = regex.exec(ctx.message.text.trim());
  if (ctx.message === undefined) return next();
  if (!("text" in ctx.message)) return next();
  const parts = regex.exec(ctx.message.text);
  if (!parts) return next();
  
  ctx.state.command = {
    text: ctx.message.text,
    command: parts[1],
    bot: parts[2],
    args: parts[3],
    get splitArgs() {
      return !parts[3] ? [] : parts[3].split(/\s+/).filter((arg) => arg.length);
    },
  };

  return next();
}
