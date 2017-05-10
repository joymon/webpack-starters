var ngMod = require("./ngmodule")
import {version} from "./version";
import {SampleService} from "./sample.service"
module SampleModule { 
    export class SampleController implements ng.IController {

        static $inject = ['SampleService'];
        constructor(contentServie:  SampleService) {
            this.content = contentServie.GetSampleData();
            this.version = version;
        }
        public content: string;
           public version: string;
    }
    export class SampleComponent implements ng.IComponentOptions {
        public templateUrl: string;
        public controller: any;
        constructor() {
            this.templateUrl = './sample.component.html';
            this.controller = SampleController; 
        }
    }
    ngMod.AdvModule.AppModule.getInstance().registerComponent("sample",new SampleComponent());
}