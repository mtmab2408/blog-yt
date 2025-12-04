const logger = {
  info: (message, data = null) => {
    console.info(`INFO: ${message}`, data);
  },

  warn: (message, data = null) => {
    console.warn(`WARN: ${message}`, data);
  },

  error: (message, error = null) => {
    console.error(`ERROR: ${message}`, error);
  },

  debug: (message, data = null) => {
    console.debug(`DEBUG: ${message}`, data);
  },
};

export default logger;
