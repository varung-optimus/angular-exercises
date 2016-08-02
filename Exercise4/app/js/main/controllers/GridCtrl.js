app.controller('GridCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.gridOptions1 = {};

    $scope.gridOptions1 = {
        enableSorting: true,
        columnDefs: [
            { displayName: "Student Name", field: "name" },
            { displayName: "Country", field: "country" },
            { displayName: "Skill", field: "skill" }
        ]
    };

    $http.get('/app/api/students.json').then(function (resp) {
        $scope.gridOptions1.data = resp.data.students;
    });
}]);