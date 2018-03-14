angular.module('appSelect2Custom').directive('select2Custom', function(){

    return{
        retrict:'E',
        replace:true,
        templateUrl:'app/directives/select2-custom/select2-custom.html',
        require:'ngModel',
        scope:{
            array:'=list',
            template:'=template',
            placeholder:'@',
            model:'=ngModel'
        },
        link:function(scope, element, attrs, ctrl){
        },
        controller:function($scope, $sce){

            $scope.clicked =false;
            $scope.arrowUp =false;
            $scope.selected ='';
            $scope.placeholder='Selecione...'
            $scope.withTemplate=false;

            $scope.toogleClick = function(){
                $scope.clicked = !$scope.clicked;
                $scope.arrowUp = !$scope.arrowUp;
            }; 
            
            $scope.setSelected = function (obj) {  
                if($scope.withTemplate){
                    $scope.model= _getModel(obj);
                    $scope.selected = $sce.trustAsHtml(obj); 
                }
                else{
                    $scope.selected = obj;
                    $scope.model = obj;
                }
                $scope.toogleClick();
                $scope.search = '';
                console.log($scope.model);
            };
        
            $scope.render=function(obj){
                return $sce.trustAsHtml(obj);                
            };

            var _getModel = function(obj){
                var index = $scope.template.indexOf(obj);
                console.log(index);
                return $scope.array[index];
            }

            var _init =function(){
                $scope.withTemplate = $scope.template != undefined;
            };
            _init();
        }
        
    }
});