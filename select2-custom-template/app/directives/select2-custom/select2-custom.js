angular.module('appSelect2Custom').directive('select2Custom', function(){


    return{
        retrict:'E',
        replace:true,
        templateUrl:'app/directives/select2-custom/select2-custom.html',
        scope:{
            array:'=list',
            placeholder:'@'
        },
        link:function(scope, element, attrs, ctrl){

        },
        controller:function($scope, $sce){

            $scope.clicked =false;
            $scope.arrowUp =false;
            $scope.selected ='';
            $scope.placeholder='Selecione...'

            $scope.toogleClick = function(){
                $scope.clicked = !$scope.clicked;
                $scope.arrowUp = !$scope.arrowUp;
            }; 
            
            $scope.setSelected = function (obj) {                
                $scope.selected = $sce.trustAsHtml(obj);
                $scope.toogleClick();
                $scope.search = '';
                };
        
            $scope.render=function(obj){
                return $sce.trustAsHtml(obj);
            };
        }
        
    }
});