define(['app'], function (app) {
    app.controller('Ex2Ctrl', ['$scope', '$state', function ($scope, $state) {
        var vm = this;

        // Helper functions
        vm.search = function searchName() {
            $state.go('app.search', {
                name: this.name
            });
        }
    }]);
}); 
