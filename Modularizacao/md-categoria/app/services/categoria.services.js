(function(app){

    'use strict';
    function categoriaServices(){

        var _categorias =[
            'Sucos',
            'Leite',
            'Bebidas',
            'Limpeza',
            'Massa',
            'Frios',
            'Açougue'
        ];

        this.getCategorias = function(filter){  
            filter = filter || '';
            return _categorias.filter(function(c){
                return (c.indexOf(filter) > -1);
            });
        };
        
        this.incluirCategoria = function(categoria){
            _categorias.push(categoria);
        };

        this.editarCategoria = function(categoria){

        };

        this.removerCategoria = function(categoria){
            var index = _categorias.indexOf(categoria);
            _categorias.splice(index,1);
        };
        
    }

    app.service('categoriaServices',[categoriaServices]);

})(appCategoria);