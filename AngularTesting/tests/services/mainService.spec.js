describe('services',function(){

    beforeEach(module('MyApp'));

    describe('myService Tests',function(){

        var service, httpBackend;
        beforeEach(inject(function(_myService_,$httpBackend){
            service = _myService_;
            httpBackend = $httpBackend;
            httpBackend.whenGET("https://jsonplaceholder.typicode.com/posts/1").respond({
                mockObj : {
                   mockData: 'mockData'
                }
            });
        }));

        it('Mode should be service', function () {  
            expect(service.mode).toBe('service');
        });

        it('http service should return mock data', function () { 
            service.getUserData().then(function(response) {
                var result = response.data.mockObj.mockData;
                expect(result).toEqual("mockData");
              },function(error){
                  console.error(error);
              });
              httpBackend.flush();
        });

    });

});