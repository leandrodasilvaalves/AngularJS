app.directive('ngCard', function () {
    return {
        templateUrl: 'directive.html',
        restrict: 'AE',
        replace: true,
        transclude: true,
        scope: {
            titulo: '@'
        }
    }
});