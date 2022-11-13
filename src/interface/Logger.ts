export interface ILogEntry {
  level: string;
  module: string;
  location?: string;
  message: string;
}

export interface ILogOptions {
  minLevels: { [module: string]: string }
}
