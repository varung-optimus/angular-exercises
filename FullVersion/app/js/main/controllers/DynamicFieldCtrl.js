define(['app'], function (app) {
    app.controller('DynamicFieldCtrl', ['$scope', function ($scope) {
        var vm = this;
        vm.updateCursor = function () {
            this.next().focus();
        }
    }]);
}); 