// Sub-application/main Level State
app.config(['$stateProvider', function ($stateProvider) {

  $stateProvider
    // Exercise 2 and exercise 3
    // Passing data from one controller to other and Page transitions
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
    })
    // Exercise 4
    // Grid with sorting and filtering
    .state('app.grid', {
      url: '/grid',
      templateUrl: 'js/main/templates/grid.tpl.html',
      controller: 'GridCtrl',
      controllerAs: 'grid'
    });
}]);