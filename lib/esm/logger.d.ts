import { Option, Level } from "./interfaces/option";
export default class WALogger {
    private options;
    constructor(options?: Option);
    private createLogMessage;
    setLoggerLevel(level: Level): void;
    setUserEmail(email: string): void;
    log: (logMessage: string) => void;
    debug: (logMessage: string) => void;
    error: (logMessage: string) => void;
}
