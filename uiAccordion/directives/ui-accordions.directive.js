(function (app) {    
    'use stric';
    function uiAccordions(){
        return{
            controller: function($scope, $element, $attrs){
                var _accordions = [];

                this.registerAccordion = function(accordion){
                    _accordions.push(accordion);
                };

                this.closeAll = function(){
                    _accordions.forEach(function(accordion){
                        accordion.isOpened = false;
                    });
                }
            }
        }
    }
    app.directive('uiAccordions', [uiAccordions]);
})(myapp);