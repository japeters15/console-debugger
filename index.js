/**
 * Overrides console.log message.
 * Adds UTC timestamp to log event.
 * Suppresses console.log messages if LOG_DEBUG is false.
 * Writes values to server.log file in logs/ at directory root.
 * @param {string} msg
 */

// Assign console to new Console object.
const Console = console;
// imports values from .env file
require('dotenv').config();
// provides access to the file system
const fs = require('fs');
// creates log_file instance at the file path
const logFile = fs.createWriteStream('logs/server.log', { flags: 'w' });

// sets current UTC timestamp
const timestamp = new Date().toISOString();
// logs server start with timestamp
logFile.write(timestamp + ' Server started.\n');
// logs value .env debug value
logFile.write('Logging set to DEBUG -- ' + process.env.LOG_DEBUG + '\n');

// overrides console.log
Console.log = (msg) => {
  // checks to see if .env debug value is set to true
  if (process.env.LOG_DEBUG === 'true') {
    // writes log message with timestamp and message
    logFile.write(new Date().toISOString() + ' :: ' + msg + '\n');
  }
};
