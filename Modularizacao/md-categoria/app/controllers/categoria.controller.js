(function (app) {
    'use strict';
    function categoriaController($scope, categoriaServices) {
        var vm = this;
        vm.categorias = [];
        vm.titulo="Incluir Categoria";

        var _init = function () {
            vm.listarCategorias();
        };

        vm.listarCategorias = function (filter) {            
            vm.categorias = categoriaServices.getCategorias();
        };

        vm.incluir = function (categoria) {
            categoriaServices.incluirCategoria(categoria);
            vm.listarCategorias();
            vm.limparDados();
        };

        vm.editar = function (categoria) {
            vm.titulo = "Editar Categoria";
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
                        $scope.$apply(function(){ 
                            vm.listarCategorias();
                        });
                    }
                });
        };

        vm.setIndex = function(index){
            return index + 1;
        };

        vm.limparDados = function(){
            vm.titulo="Incluir Categoria";
            delete $scope.categoria;
            vm.frmCategoria.$setPristine();
            $('#categoria').val('');
            $('.modal').modal('hide');
        }

        console.log(vm);
        _init();

    }
    app.controller('categoriaController', ['$scope', 'categoriaServices', categoriaController]);
})(appCategoria);