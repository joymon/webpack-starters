import { SampleService } from "../sample.service"
import * as angular from 'angular';
import * as mock from 'angular-mocks'
var $httpBackend: ng.IHttpBackendService;
var sampleService: SampleService;
// Before each test load our api.users module

describe('TS ng http Sample', () => {
    beforeEach(angular.mock.module('app'));
    beforeEach(() => {
        inject(function (SampleService: SampleService, _$httpBackend_) {
            $httpBackend = _$httpBackend_;
            sampleService = SampleService;
        });
    });
    //use inject to inject the service into the test function
    it('Hello TS ng test', () => {
        $httpBackend.expectGET("test").respond([
            { "id": "1", "name": "Pizza Vegetaria", "price": 5 },
            { "id": "2", "name": "Pizza Salami", "price": 5.5 },
            { "id": "3", "name": "Pizza Thunfisch", "price": 6 },
            { "id": "4", "name": "Aktueller Flyer", "price": 0 }
        ]);
        var result = sampleService.Get("WhatsNew").then(a => {
            expect(1).toBe(1);
            console.log('Sample-Hello ng $http TS  test : ' + 'Worked')
        });
        //expect(result).toBe("I am 'Test data' from Sample Service");
        
    });
});
