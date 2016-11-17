describe("Filter Tests", function () {

    var filterInstance, reverseStringInstance;

    beforeEach(angular.mock.module("exampleApp"));

    beforeEach(angular.mock.inject(function($filter) {
        filterInstance = $filter("labelCase");
        reverseStringInstance = $filter("reverseString");
    }));

    it("Changes case", function() {
        var result = filterInstance("test phrase");
        expect(result).toEqual("Test phrase");
    });

    it("Reverse case", function() {
        var result = filterInstance("test phrase", true);
        expect(result).toEqual("tEST PHRASE");
    });

    it("Reverse string", function() {
      var result = reverseStringInstance('Artem');
      expect(result).toEqual('metrA');
    });

});
