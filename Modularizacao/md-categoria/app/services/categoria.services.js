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


        
    }

    app.service('categoriaServices',[categoriaServices]);

})(appCategoria);