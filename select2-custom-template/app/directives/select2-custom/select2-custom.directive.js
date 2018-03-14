angular.module('appSelect2Custom').directive('select2Custom', function(){


    return{
        retrict:'E',
        replace:true,
        templateUrl:'app/directives/select2-custom/select2-custom.html',
        scope:{
            array:'=list'
        },
        link:function(scope, element, attrs, ctrl){
            scope.clicked =false;
            scope.arrowUp =false;

            scope.toogleClick = function(){
                scope.clicked = !scope.clicked;
                scope.arrowUp = !scope.arrowUp;
            };  
        }
        
    }
});