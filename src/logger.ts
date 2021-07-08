import { Option, Level } from "./interfaces/option";

const ERROR_MESSAGE = "Log level is not compatible...";

export default class WALogger {
  private options: Option;

  constructor(options?: Option) {
    const defaultOptions: Option = {
      level: "info",
      data: {
        email: "example@gmail.com",
      },
    };
    this.options = options || defaultOptions;
  }

  private createLogMessage(logMessage: string) {
    const date = new Date();
    const day: string = date.toLocaleString().split(",")[0];
    const time: string = date.toTimeString().split(" ")[0];
    return `[${this.options.data?.email} - ${day}, ${time}]: ${logMessage}`;
  }

  setLoggerLevel(level: Level) {
    this.options.level = level;
  }

  setUserEmail(email: string) {
    this.options.data!.email = email;
  }

  log = (logMessage: string) => {
    if (this.options.level === "info" || this.options.level === "debug") {
      console.log(this.createLogMessage(logMessage));
      return;
    }
    this.error(ERROR_MESSAGE);
  };

  debug = (logMessage: string) => {
    if (this.options.level === "debug") {
      console.log(this.createLogMessage(logMessage));
      return;
    }
    this.error(ERROR_MESSAGE);
  };

  error = (logMessage: string) => {
    console.error(this.createLogMessage(logMessage));
  };
}
