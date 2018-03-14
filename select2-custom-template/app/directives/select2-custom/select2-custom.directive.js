angular.module('appSelect2Custom',[]).directive('select2Custom', function(){


    return{
        retrict:'E',
        replace:true,
        templateUrl:'app/directives/select2-custom/select2-custom.html',
        scope:{
        },
        link:function(scope, element, attrs, ctrl){
            scope.clicked =false;
            scope.arrowUp =false;

            scope.toogleClick = function(){
                scope.clicked = !scope.clicked;
                scope.arrowUp = !scope.arrowUp;
            };  
            scope.array =['Goiás',
                'Distrito Federal',
                'São Paulo',
                'Rio de Janeiro',
                'Espírito Santo',
                'Minas Gerais', 
                'Mato Grosso do Sul',
                'Bahia',
                'Rio Grande do Norte'];
            
        }
        
    }
});