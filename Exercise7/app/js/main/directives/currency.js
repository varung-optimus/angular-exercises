app.directive('inputCurrency', currencyDirective);

function currencyDirective() {
    return {
        require: 'ngModel',
        restrict: 'E',
        templateUrl: 'js/main/templates/directives/currency.directive.tpl.html'
    }
};