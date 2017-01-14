var ngMod = require("./ngmodule")
//document.write(content);
//var loggerModule = require("./logger");
//var logger = new loggerModule.logger();
//logger.log("TypeScript Worked !!!");
//var angular = require('./ngmodule');
module SampleModule { 
    export class SampleController implements ng.IController {

        //static $inject = ['DataService'];
        constructor($scope:any,contentServie:  SampleService) {
            // contentServie.Get($scope.ctrl.source)
            //     .then((value: ng.IHttpPromiseCallbackArg<any>) => {
            //         console.log(value.data.feed);
            //         this.content = value.data;
            //     })
            //     .catch((err) => { console.log("Error" + err); });
            // this.content = $scope.ctrl.source;
            this.content = contentServie.GetSampleData();
        }
        public content: string;
    }
    ngMod.AdvModule.AppModule.getInstance().registerControllerWithFactory("SampleController", ($scope:any, SampleService: SampleService) => new SampleController($scope,SampleService));
    export class SampleComponent implements ng.IComponentOptions {
        public templateUrl: string;
        public controller:string;
        constructor() {
            this.templateUrl = './sample.component.html';
            this.controller = 'SampleController'; 
        }
    }
    ngMod.AdvModule.AppModule.getInstance().registerComponent("sample",new SampleComponent());
}