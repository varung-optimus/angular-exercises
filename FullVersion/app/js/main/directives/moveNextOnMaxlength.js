define(['app'], function (app) {
    app.directive("moveNextOnMaxlength", function() {
    return {
        restrict: "A",
        link: function($scope, element) {
            element.on("input", function(e) {
                // Move next if max length is achieved
                if(element.val().length == element.attr("maxlength")) {
                    var $nextElement = e.currentTarget.nextElementSibling.nextElementSibling;
                    if($nextElement) {
                        $nextElement.focus();
                    }
                }
                // Move previous if previous exists and length of element is 0
                if(element.val().length == 0) {
                    var $prevElement = e.currentTarget.previousElementSibling.previousElementSibling;
                    if($prevElement) {
                        $prevElement.focus();
                    }
                }
            });
        }
    }
});
}); 