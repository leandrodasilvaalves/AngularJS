angular.module('appSelect2Custom',[]).directive('select2Custom', function(){

    return{
        retrict:'E',
        replace:true,
        templateUrl:'app/directives/select2-custom/select2-custom.html',
        scope:{
            clicked:'@'
        },
        link:function(scope, element, attrs){
            scope.clicked =false
        }
        
    }
});