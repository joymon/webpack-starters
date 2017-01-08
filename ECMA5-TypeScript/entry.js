//document.write("Simple JS module worked with webpack" + "<br/>");

//var content = require("./content")
//document.write("Loaded another JS component &" +content);
var loggerModule = require("./logger");
var logger = new loggerModule.logger();
logger.log("TypeScript Worked !!! - module loaded <br/>");

var tscomponent = require("./tscomponent");
var provider = new tscomponent.provider();
document.write("TS component which has dependency on JS component worked. Data from JS module- " + provider.getContent());
