var appmodule = require('./ngmodule');
   
    export class SampleService {
        static $inject = ["$http", "$q"];

        http: ng.IHttpService;
        q: ng.IQService;
        constructor($http: ng.IHttpService, $q: ng.IQService) {
            this.http = $http;
            this.q = $q;
        }
        sourceToUrlMap = {
            WhatsNew: "http://joymon.github.io/Data/Home/WhatsNew.html",
            WhoAmI: "http://joymon.github.io/Data/Home/WhoAmI.html"
        };
        GetUrl(source: string): string {
            return this.sourceToUrlMap[source];
        }
        Get(feedURL: string): ng.IHttpPromise<any> {
            let lurl = this.GetUrl(feedURL);
            var deffered = this.q.defer<any>();
            this.http.get<any>(lurl)
                .catch((err) => { deffered.reject(err); })
                .then((s) => {
                    deffered.resolve({ data: s });
                });
            return deffered.promise;
        }
        GetSampleData(): string {
            return "I am 'Test data' from Sample Service";
        }
    }
    appmodule.AdvModule.AppModule.getInstance().registerService("SampleService", SampleService);
   