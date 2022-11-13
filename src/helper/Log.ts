import logging from "@lib/LogManager";

logging.configure({
  minLevels: {
    '': 'info',
    'core': 'warn',
    'middleware': 'info'
  }
}).registerConsoleLogger();
