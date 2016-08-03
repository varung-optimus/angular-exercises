define(['app'], function (app) {
    app.controller('NavbarCtrl', function ($scope) {
        $scope.items = [{
            name: 'ex2',
            title: 'Exercise 2 & 3'
        }, {
                name: 'ex4',
                title: 'Exercise 4'
            }, {
                name: 'ex5',
                title: 'Exercise 5'
            }, {
                name: 'ex6',
                title: 'Exercise 6'
            }, {
                name: 'ex7',
                title: 'Exercise 7'
            }, {
                name: 'ex8',
                title: 'Exercise 8'
            }];
    });
}); 
