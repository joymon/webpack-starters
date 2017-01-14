var angular = require('angular');
 module AdvModule {
export class AppModule {
        //Do not expose the property as it is not expected to change from outside.
        private static currentCountryModule: AppModule;
        public static getInstance(): AppModule {
            return AppModule.currentCountryModule;
        }
        private app:  ng.IModule;
        constructor() {
            this.app = angular.module("app", []);
            AppModule.currentCountryModule = this;
        }
        registerService(name: string, serviceConstructor: Function): void {
            console.log("Registered service " + name);
            this.app.service(name, serviceConstructor);
        }
        registerController(name: string, controllerConstructor: ng.IController): void {
            this.app.controller(name, () => controllerConstructor);
            var f: Function;
        }
        registerControllerWithFactory(name: string, factory: (...args: any[])=>ng.IController) {
            this.app.controller(name,factory);
        }
        
        registerFilter(name: string,fun:Function) {
            this.app.filter(name, fun);
        }
        registerComponent(name: string, options: ng.IComponentOptions) {
            this.app.component(name, options);
        }
    }
}