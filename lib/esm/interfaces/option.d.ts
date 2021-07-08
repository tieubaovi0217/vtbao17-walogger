declare enum LevelEnum {
    info = 0,
    debug = 1
}
/**
 * This is equivalent to:
 * type Level = "info" | "debug";
 */
export declare type Level = keyof typeof LevelEnum;
export interface Option {
    level?: Level;
    data?: {
        email?: string;
    };
}
export {};
