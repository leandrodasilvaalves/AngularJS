app.directive('ngCard', function ($filter, $timeout) {
    return {
        templateUrl: 'app/directives/ng-card/ng-card.html',
        restrict: 'AE',
        replace: true,
        transclude: true,
        scope: {
            titulo: '@',
            imagem: '@',
            url: '@',
            ellipsis: '@'
        },
        link: function (scope, element, attrs, $transclude) {
            var paragrafo = element[0].getElementsByTagName('p')[0]
            $timeout(function () {
                paragrafo.innerText = $filter("ellipsis")(scope.textoTransclude, scope.ellipsis);
            });
        },
        controller: function ($scope, $transclude, $timeout) {
            $transclude(function (clone) {
                $timeout(function () {
                    $scope.textoTransclude = clone.text().trim();
                });
            });

        }
    }
});
