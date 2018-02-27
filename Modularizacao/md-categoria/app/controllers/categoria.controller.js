(function(app){
    'use strict';
    function categoriaController($scope, categoriaServices){
        var vm = this;
        vm.categorias = [];

        var _init = function(){
            vm.categorias = categoriaServices.getCategorias();            
        };

        _init();

    }
    app.controller('categoriaController',['$scope','categoriaServices', categoriaController]);
})(appCategoria);