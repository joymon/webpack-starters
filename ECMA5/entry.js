document.write("Webpack working");
var content = require("./content")
document.write(content);

var logger = require("./logger");
logger("Logger worked");