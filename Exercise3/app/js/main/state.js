// Sub-application/main Level State
app.config(['$stateProvider', function ($stateProvider) {

  $stateProvider
    .state('app.home', {
      url: '/home',
      templateUrl: 'js/main/templates/home.tpl.html',
      controller: 'HomeCtrl',
      controllerAs: 'home'
    })
    .state('app.search', {
      params: {
        name: {
          value: 'No Search Results yet'
        },
        hiddenParam: 'YES'
      },
      url: '/search',
      templateUrl: 'js/main/templates/search.tpl.html',
      controller: 'SearchCtrl',
      controllerAs: 'search'
    });
}]);