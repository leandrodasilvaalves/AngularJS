angular.module('appSelect2Custom',['ngSanitize']);

angular.module('appSelect2Custom').directive('select2Custom', function(){

    return{
        retrict:'E',
        replace:true,
        template:'<div><style>.select_custom{display:block;border:.05em solid #aaa;border-radius:.25em;width:100%;min-height:1.9em}.select_rendered{display:block;padding-left:.6em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.6em;margin-bottom:.25em;cursor:pointer}.select_placeholder{color:#aaa}.select_arrow{color:#aaa;height:1.6em;position:absolute;right:1em;width:1.1em}.select_arrow_up{bottom:.2em}.select_arrow_down{top:2.2em}.select_dropdown{border:.05em solid #aaa;border-bottom-right-radius:.25em;border-bottom-left-radius:.25em;background-color:#fff;display:block;position:absolute;z-index:9999;width:calc(100% - 1.8em);box-shadow:.04em .04em .17em .05px #bdbcbc}.select_search{margin-left:.3em}.select_search input{width:calc(100% - .6em);border-radius:.2em;border:.05em solid #aaa;padding-left:.3em;margin-top:.25em}.select_search i{color:#999696;cursor:pointer;position:absolute;right:.8em;top:.55em}.select_listitens{margin-top:.35em;margin-bottom:.25em;list-style:none;width:100%;padding-left:0;max-height:8em;overflow-y:scroll;overflow-x:hidden}.select_listitens li{display:list-item;min-height:2em;padding-left:.5em}.select_listitens li:hover{background-color:#4d9df3;color:#fff;cursor:pointer}</style><div><div class="select_custom"><div ng-click="toogleClick()"><span class="select_rendered" ng-bind-html="selected"></span> <span class="select_rendered select_placeholder" ng-bind="placeholder" ng-show="!hasSelected"></span> <span class="select_arrow" ng-class="isOpened ? "select_arrow_down" : "select_arrow_up"><i class="fa fa-angle-up" ng-show="arrowUp"></i> <i class="fa fa-angle-down" ng-show="!arrowUp"></i></span></div></div><div class="select_dropdown" ng-show="isOpened"><span class="select_search"><input type="text" ng-model="search" autofocus> <i class="fa fa-close" ng-click="cleanSearch()" ng-show="showClean"></i></span><ul class="select_listitens"><li ng-if="withTemplate" ng-repeat="ar in template | filter:search track by $index" ng-click="setSelected(ar)" ng-bind-html="render(ar)"></li><li ng-if="!withTemplate" ng-repeat="ar in array | filter:search track by $index" ng-click="setSelected(ar)" ng-bind="ar"></li></ul></div></div></div>',
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
            $scope.placeholder = 'Selecione...';
            $scope.withTemplate = false;
            $scope.showClean = false;

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
                $scope.cleanSearch();
                $scope.hasSelected = true;
            };
        
            $scope.render=function(obj){
                return $sce.trustAsHtml(obj);                
            };

            $scope.cleanSearch=function(){
                $scope.search = '';
            };

            $scope.$watch(function(){
                if($scope.search == '' || $scope.search == null || $scope.search == undefined)
                    $scope.showClean = false;
                else
                    $scope.showClean = true;
            });

            var _getModel = function(obj){
                var index = $scope.template.indexOf(obj);
                return $scope.array[index];
            };

            var _init =function(){
                $scope.withTemplate = $scope.template != undefined;
            };

            _init();
        }
        
    };
});