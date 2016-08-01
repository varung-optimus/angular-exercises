// Sub-application/main Level State
app.config(['$stateProvider', function ($stateProvider) {

  $stateProvider
    .state('app.home', {
      url: '/home',
      templateUrl: 'js/main/templates/home.tpl.html',
      controller: 'HomeCtrl',
      controllerAs: 'home'
    });
}]);