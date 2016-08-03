define(['app', 'moveNextOnMaxlength'], function (app) {
    app.controller('Ex8DynamicFieldCtrl', ['$scope', function ($scope) {
        var vm = this;
        vm.updateCursor = function () {
            this.next().focus();
        }
    }]);
}); 