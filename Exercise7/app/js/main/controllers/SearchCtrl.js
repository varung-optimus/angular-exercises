app.controller('SearchCtrl', ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {
    var vm = this;

    vm.name = $stateParams.name;
}]);