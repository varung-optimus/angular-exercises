define(['app'], function (app) {
    app.controller('Ex4GridCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.gridOptions1 = {};

        $scope.gridOptions1 = {
            enableSorting: true,
            enableFiltering: true,
            columnDefs: [
                {
                    displayName: "Student Name",
                    field: "name",
                    filter: {
                        placeholder: 'Filter by Name'
                    }
                },
                {
                    displayName: "Country",
                    field: "country",
                    filter: {
                        placeholder: 'Filter by Country'
                    }
                },
                {
                    displayName: "Skill",
                    field: "skill",
                    filter: {
                        placeholder: 'Filter by Skill'
                    }
                }
            ]
        };

        $http.get('/app/api/students.json').then(function (resp) {
            $scope.gridOptions1.data = resp.data.students;
        });
    }]);
}); 