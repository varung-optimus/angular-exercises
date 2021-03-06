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
    })
    // Exercise 5
    // Format phone number as (999) 999-9999
    .state('app.phone', {
      url: '/phone',
      templateUrl: 'js/main/templates/phone.mask.tpl.html',
      controller: 'PhoneMaskCtrl',
      controllerAs: 'phone'
    })
    // Exercise 6
    // Format currency as $ 1,234
    .state('app.currency', {
      url: '/currency',
      templateUrl: 'js/main/templates/currency.mask.tpl.html',
      controller: 'CurrencyMaskCtrl',
      controllerAs: 'currency'
    })
    // Exercise 7
    // Input fields and additional field logic
    .state('app.fields', {
      url: '/fields',
      templateUrl: 'js/main/templates/fields.tpl.html',
      controller: 'FieldsCtrl',
      controllerAs: 'fields'
    });
}]);