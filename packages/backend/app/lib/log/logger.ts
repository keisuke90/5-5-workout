// log4js.ts
import log4js from "log4js";

log4js.configure({
  appenders: {
    console: { type: "console" },
    file: { type: "file", filename: "logs/debug.log" },
  },
  categories: {
    default: { appenders: ["console", "file"], level: "debug" },
  },
});

export const logger = log4js.getLogger();
