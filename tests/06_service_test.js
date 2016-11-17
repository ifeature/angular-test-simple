describe("Service Tests", function() {
    beforeEach(angular.mock.module("exampleApp"));

    let counterService, myService;
    beforeEach(angular.mock.inject(function(_counterService_, _myService_) {
      counterService = _counterService_;
      myService = _myService_;
    }));

    it("Increments the counter", function() {
            expect(counterService.getCounter()).toEqual(0);
            counterService.incrementCounter();
            expect(counterService.getCounter()).toEqual(1);
    });

    it("Should test async function", function(done) {
      myService.asyncFunc(function(x) {
        expect(x).toBe('Hello');
      });
      done();
    });


});
