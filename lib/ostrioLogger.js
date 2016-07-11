// Initialize Logger
this.log = new Logger();

// Initialize LoggerFile:
var LogFile = new LoggerFile(log, {
  fileNameFormat: function(time) {
    /* Create log-files hourly */
    return (time.getDate()) + "-" + (time.getMonth() + 1) + "-" + (time.getFullYear()) + "_" + (time.getHours()) + ".log";
  },
  format: function(time, level, message, data, userId) {
    /* Omit Date and hours from messages */
    return "[" + level + "] | " + (time.getMinutes()) + ":" + (time.getSeconds()) + " | \"" + message + "\" | User: " + userId + "\r\n";
  }
  // ,path: '/data/logs/' /* Use absolute storage path */
});

// Enable LoggerFile with default settings
LogFile.enable();