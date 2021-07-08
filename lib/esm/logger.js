const ERROR_MESSAGE = "Log level is not compatible...";
export default class WALogger {
    constructor(options) {
        this.log = (logMessage) => {
            if (this.options.level === "info" || this.options.level === "debug") {
                console.log(this.createLogMessage(logMessage));
                return;
            }
            this.error(ERROR_MESSAGE);
        };
        this.debug = (logMessage) => {
            if (this.options.level === "debug") {
                console.log(this.createLogMessage(logMessage));
                return;
            }
            this.error(ERROR_MESSAGE);
        };
        this.error = (logMessage) => {
            console.error(this.createLogMessage(logMessage));
        };
        const defaultOptions = {
            level: "info",
            data: {
                email: "example@gmail.com",
            },
        };
        this.options = options || defaultOptions;
    }
    createLogMessage(logMessage) {
        const date = new Date();
        const day = date.toLocaleString().split(",")[0];
        const time = date.toTimeString().split(" ")[0];
        return `[${this.options.data?.email} - ${day}, ${time}]: ${logMessage}`;
    }
    setLoggerLevel(level) {
        this.options.level = level;
    }
    setUserEmail(email) {
        this.options.data.email = email;
    }
}
