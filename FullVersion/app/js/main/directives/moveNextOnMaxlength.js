app.directive("moveNextOnMaxlength", function() {
    return {
        restrict: "A",
        link: function($scope, element) {
            element.on("input", function(e) {
                // Move next if max length is achieved
                if(element.val().length == element.attr("maxlength")) {
                    var $nextElement = element.nextAll('input').first();
                    if($nextElement.length) {
                        $nextElement[0].focus();
                    }
                }
                // Move previous if previous exists and length of element is 0
                if(element.val().length == 0) {
                    var $prevElement = element.prevAll('input').first();
                    if($prevElement.length) {
                        $prevElement[0].focus();
                    }
                }
            });
        }
    }
});