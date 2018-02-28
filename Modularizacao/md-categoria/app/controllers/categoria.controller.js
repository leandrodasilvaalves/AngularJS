(function (app) {
    'use strict';
    function categoriaController($scope, categoriaServices) {
        var vm = this;
        vm.categorias = [];

        var _init = function () {
            vm.listarCategorias();
        };

        vm.listarCategorias = function (filter) {            
            vm.categorias = categoriaServices.getCategorias();
            console.log(vm.categorias)
        };

        vm.incluir = function (categoria) {
            categoriaServices.incluirCategoria(categoria);
            delete $scope.categoria;
            vm.listarCategorias();
        };

        vm.editar = function (categoria) {

        };

        vm.remover = function (categoria) {
            swal({
                title: "Deseja realmente excluir a categoria: (" + categoria + ") ?",
                text: "ATENÇÃO! Esta operação é irreversível",
                icon: "error",
                buttons: {
                    cancel: "Cancelar",
                    confirm: "Excluir"
                },
                dangerMode: true,
            })
                .then(function (willDelete) {
                    if (willDelete) {
                        categoriaServices.removerCategoria(categoria);                        
                        swal("Excluído!", "Categoria excluída com sucesso!", "success");
                        vm.listarCategorias();
                    }
                });
        };

        vm.setIndex = function(index){
            return index + 1;
        };

        _init();

    }
    app.controller('categoriaController', ['$scope', 'categoriaServices', categoriaController]);
})(appCategoria);