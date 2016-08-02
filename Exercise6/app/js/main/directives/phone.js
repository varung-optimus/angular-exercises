app.directive('inputPhone', phoneDirective);

function phoneDirective() {
    return {
        require: 'ngModel',
        restrict: 'E',
        templateUrl: 'js/main/templates/directives/phone.directive.tpl.html'
    }
};