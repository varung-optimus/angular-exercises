app.controller('FieldsCtrl', ['$scope', function ($scope) {
    var vm = this;
    // Initialize the values as 0
    vm.first = 0;
    vm.second = 0;
    vm.third = 0;

    vm.sum = function () {
        this.result = this.first + this.second + this.third;
    };

    vm.distribute = function () {
        var sum = this.first + this.second + this.third;
        var ratio_f = this.first / sum;
        var ratio_s = this.second / sum;
        var ratio_t = this.third / sum;

        // Distribute the result in fields
        this.first = ratio_f * this.result;
        this.second = ratio_s * this.result;
        this.third = ratio_t * this.result;
    };
}]);