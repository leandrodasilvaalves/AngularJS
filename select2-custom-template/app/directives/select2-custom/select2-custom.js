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
        controller:function($scope, $sce){

            $scope.isOpened = false;
            $scope.arrowUp = false;
            $scope.selected = '';
            $scope.hasSelected=false;
            $scope.placeholder = 'Selecione...'
            $scope.withTemplate = false;

            $scope.toogleClick = function(){
                $scope.isOpened = !$scope.isOpened;
                $scope.arrowUp = !$scope.arrowUp;
            }; 
            
            $scope.setSelected = function (obj) {  
                if($scope.withTemplate){
                    $scope.model = _getModel(obj);
                    $scope.selected = $sce.trustAsHtml(obj); 
                }
                else{
                    $scope.selected = obj;
                    $scope.model = obj;
                }
                $scope.toogleClick();
                $scope.search = '';
                $scope.hasSelected = true;
            };
        
            $scope.render=function(obj){
                return $sce.trustAsHtml(obj);                
            };

            var _getModel = function(obj){
                var index = $scope.template.indexOf(obj);
                return $scope.array[index];
            };

            var _init =function(){
                $scope.withTemplate = $scope.template != undefined;
            };
            

            _init();
        }
        
    }
});