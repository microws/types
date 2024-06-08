import { ISODateTime } from "../shared/index.js";

export type ExlcudeUpperCaseKeys<T> = {
  [K in keyof T]: K extends Capitalize<string> ? never : K;
}[keyof T];

export type DBTypeToType<T> = {
  [P in ExlcudeUpperCaseKeys<T>]: T[P];
};

export type MicrowsModule = {
  id: string;
  dev?: {
    date: ISODateTime;
    version: string;
  };
  qa?: {
    date: ISODateTime;
    version: string;
  };
  all?: {
    date: ISODateTime;
    version: string;
  };
};
export type MicrowsModuleDB = MicrowsModule & {
  PK: `module-${string}`;
  SK: ISODateTime;
  TypePK: "MicrowsModule";
  TypeSK: ISODateTime;
  id: string;
};
