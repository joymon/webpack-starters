import {SampleService} from "../sample.service"
import * as angular from 'angular';
import * as mock from 'angular-mocks'
var $httpBackend : ng.IHttpBackendService;
  // Before each test load our api.users module
  beforeEach(angular.mock.module('app'));
describe('TS ng Sample',  ()=> {
//use inject to inject the service into the test function
        it('Hello TS ng test', inject(function(SampleService: SampleService) : void {
            var result = SampleService.GetSampleData();
            expect(result).toBe("I am 'Test data' from Sample Service");
            console.log('Sample-Hello TS ng test : '+'Worked')
        }))
});
  
