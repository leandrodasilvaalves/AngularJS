app.directive('ngCard', function () {
    return {
        templateUrl: 'app/directives/ng-card/ng-card.html',
        restrict: 'AE',
        replace: true,
        transclude: true,
        scope: {
            titulo: '@',
            imagem: '@',
            url: '@'
        }
    }
});