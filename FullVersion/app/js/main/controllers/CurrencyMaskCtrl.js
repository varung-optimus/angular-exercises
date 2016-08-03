define(['app'], function (app) {
    app.controller('CurrencyMaskCtrl', ['$scope', function ($scope) {
        var vm = this;
        vm.mask = "$ 9";

        vm.updateMask = function () {
            this.mask = "$ 9,999,999";
        };
    }]);
}); 