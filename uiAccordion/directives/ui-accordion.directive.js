(function (app) {    
    'use stric';
    function uiAccordion(){
        return{
            templateUrl: "app/views/ui-accordion/ui-accordion.html",
            transclude: true,
            scope:{
                title: "@",                
            },
            require: "^uiAccordions",
            link: function(scope, element, attrs, ctrl){
                ctrl.registerAccordion(scope);
                scope.open = function(){
                    ctrl.closeAll();
                    scope.isOpened = true;
                };
            }
        };
    }
    app.directive('uiAccordion', [uiAccordion]);
})(myapp);