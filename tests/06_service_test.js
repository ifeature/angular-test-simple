describe("Service Tests", function () {
    beforeEach(angular.mock.module("exampleApp"));

    let counterService;
    beforeEach(angular.mock.inject(function(_counterService_) {
      counterService = _counterService_;
    }));

    it("Increments the counter", function () {
            expect(counterService.getCounter()).toEqual(0);
            counterService.incrementCounter();
            expect(counterService.getCounter()).toEqual(1);
    });
});
