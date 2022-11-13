import { EventEmitter } from "events";

import { ILogOptions, ILogEntry } from "@interface/Logger";
import Logger from "@lib/Logger";

export class LogManager extends EventEmitter {
  private options: ILogOptions = {
    minLevels: {
      '': 'info'
    }
  };

  private loggerRegistered: boolean = false;

  public configure(options: ILogOptions): LogManager {
    this.options = Object.assign({}, this.options, options);
    return this;
  }

  public getLogger(module: string): Logger {
    let minLevel = 'none';
    let match = '';

    for (const key in this.options.minLevels) {
      if (module.startsWith(key) && key.length >= match.length) {
        minLevel = this.options.minLevels[key];
        match = key;
      }
    }

    return new Logger(this, module, minLevel);
  }

  public onLogEntry(listener: (logEntry: ILogEntry) => void): LogManager {
    this.on('log', listener);
    return this;
  }

  public registerConsoleLogger(): LogManager {
    if (this.loggerRegistered) return this;

    this.onLogEntry(logEntry => {
      const msg = `[${logEntry.module}] ${logEntry.message}`;
      switch (logEntry.level) {
        case 'trace':
          console.trace(`${logEntry.location} ${msg}`);
          break;
        case 'debug':
          console.debug(msg);
          break;
        case 'info':
          console.info(msg);
          break;
        case 'warn':
          console.warn(msg);
          break;
        case 'error':
          console.error(`${logEntry.location} ${msg}`);
          break;
        default:
          console.log(`{${logEntry.level}} ${msg}`);
      }
    });

    this.loggerRegistered = true;
    return this;
  }
}

export default new LogManager();
