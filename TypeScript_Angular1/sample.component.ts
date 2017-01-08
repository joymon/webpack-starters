var ngMod = require("./ngmodule")
//document.write(content);
//var loggerModule = require("./logger");
//var logger = new loggerModule.logger();
//logger.log("TypeScript Worked !!!");
//var angular = require('./ngmodule');
//alert(angular); 
export class SampleComponent implements ng.IComponentOptions {
        public templateUrl: string;
        constructor() {
            this.templateUrl = './sample.component.html';
        }
}
ngMod.AppModule.getInstance().registerComponent("sample",new SampleComponent());
