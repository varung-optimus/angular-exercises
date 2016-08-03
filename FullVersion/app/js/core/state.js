// define(["angularAMD", "angular", "ui-router"], function (angularAMD) {

//     var app = angular.module('app', ["ui.router"]);

//     app.config([
//         '$stateProvider', '$urlRouterProvider',
//         function ($stateProvider, $urlRouterProvider) {
//             $urlRouterProvider.when('', '/home');

//             $stateProvider
//                 .state('app', {
//                     url: '',
//                     controller: 'AppCtrl',
//                     views: {
//                         'navbar': {
//                             templateUrl: 'js/core/templates/navbar.tpl.html',
//                             controller: 'NavbarCtrl'
//                         },
//                         'main': {
//                             templateUrl: 'js/core/templates/main.tpl.html'
//                         }
//                     }
//                 })
//                 .state('404', {
//                     url: '/404',
//                     templateUrl: 'js/core/templates/404.tpl.html',
//                     controller: 'AppCtrl'
//                 });

//         }
//     ]);

//     return angularAMD.bootstrap(app);
// })