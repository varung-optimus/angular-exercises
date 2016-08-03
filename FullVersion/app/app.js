
define(["angularAMD", "angular", "ui-router", "ui-grid"], function (angularAMD) {

    var app = angular.module('app', ["ui.router", "ui.grid"]);

    var controllerNameByParams = function ($stateParams) {
        // naive example of dynamic controller name mining
        // from incoming state params

        var controller = "OtherCtrl";

        if ($stateParams.id === 1) {
            controller = "DefaultCtrl";
        }

        return controller;
    }

    app.config([
        '$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.when('', '/ex2');

            $stateProvider
                .state('app', {
                    url: '',
                    controller: 'AppCtrl',
                    views: {
                        navbar: angularAMD.route({
                            templateUrl: 'js/core/templates/navbar.tpl.html',
                            controllerUrl: 'NavbarCtrl',
                            controller: 'NavbarCtrl'
                        }),
                        main: angularAMD.route({
                            templateUrl: 'js/core/templates/main.tpl.html'
                        })
                    }
                })
                .state('404', {
                    url: '/404',
                    templateUrl: 'js/core/templates/404.tpl.html',
                    controller: 'AppCtrl'
                })
                // Exercise 1
                .state("app.ex1", angularAMD.route({
                    url: "/ex1/{id:int}",
                    templateProvider: function ($stateParams) {
                        if ($stateParams.id === 1) {
                            return "<div>Hello {{title}}</div>";
                        }
                        return "<div>Good bye {{title}}</div>";
                    },
                    resolve: {
                        loadController: ['$q', '$stateParams',
                            function ($q, $stateParams) {
                                // get the controller name === here as a path to Controller_Name.js
                                // which is set in main.js path {}
                                var controllerName = controllerNameByParams($stateParams);

                                var deferred = $q.defer();
                                require([controllerName], function () { deferred.resolve(); });
                                return deferred.promise;
                            }]
                    },
                    controllerProvider: function ($stateParams) {
                        // get the controller name === here as a dynamic controller Name
                        var controllerName = controllerNameByParams($stateParams);
                        return controllerName;
                    },
                }))
                // Exercise 2 and exercise 3
                // Passing data from one controller to other and Page transitions
                .state('app.ex2', angularAMD.route({
                    url: "/ex2",
                    templateUrl: 'js/main/templates/home.tpl.html',
                    controllerUrl: 'Ex2Ctrl',
                    controller: 'Ex2Ctrl',
                    controllerAs: 'home'
                }))
                .state('app.search', angularAMD.route({
                    url: "/ex2/search",
                    templateUrl: 'js/main/templates/search.tpl.html',
                    controllerUrl: 'Ex2SearchCtrl',
                    controller: 'Ex2SearchCtrl',
                    controllerAs: 'search',
                    params: {
                        name: {
                            value: 'No Search Results yet'
                        },
                        hiddenParam: 'YES'
                    }
                }))
                // Exercise 4
                // Grid with sorting and filtering
                .state('app.ex4', angularAMD.route({
                    url: "/ex4",
                    templateUrl: 'js/main/templates/grid.tpl.html',
                    controllerUrl: 'Ex4GridCtrl',
                    controller: 'Ex4GridCtrl',
                    controllerAs: 'grid'
                }));
                // {
                //     url: '/ex4',
                //     templateUrl: 'js/main/templates/grid.tpl.html',
                //     controller: 'GridCtrl',
                //     controllerAs: 'grid'
                // });
        }
    ]);

    return angularAMD.bootstrap(app);
})