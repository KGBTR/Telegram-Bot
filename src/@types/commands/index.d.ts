import { Context } from "telegraf";

export interface SessionData {
  admin: boolean;
  command: {
    text: string;
    command: string;
    bot: string;
    args: string;
    splitArgs: Array<string>;
  };
}

export interface BotContext extends Context {
  session?: SessionData;
}
