define(['app'], function (app) {
    app.controller('Ex2SearchCtrl', ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {
        var vm = this;

        vm.name = $stateParams.name;
    }]);
}); 
