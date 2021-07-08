enum LevelEnum {
  info,
  debug,
}
/**
 * This is equivalent to:
 * type Level = "info" | "debug";
 */
export type Level = keyof typeof LevelEnum;

export interface Option {
  level?: Level;
  data?: {
    email?: string;
  };
}
