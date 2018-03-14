angular.module('appSelect2Custom').controller('mainController',function($scope){
    $scope.nomes=['Leandro','Carlos', 'Eduardo', 'Meiry', 'Isa', 'Gleisson'];
    $scope.estados = ['Goiás', 'Distrito Federal', 'São Paulo', 'Minas Gerais','Bahia','Pernambuco', 'Paraíba', 'Rio Grande do Norte', 'Mato Grosso do Sul', 'Mato Grosso'];
    $scope.template =[];
    $scope.icones = [
        {icon:'fa fa-address-book', description:'fa fa-address-book'},
        {icon:'fa fa-address-card', description:'fa fa-address-card'},
        {icon:'fa fa-anchor', description:'fa fa-anchor'},
        {icon:'fa fa-at', description:'fa fa-at'},
        {icon:'fa fa-bank', description:'fa fa-bank'}
    ];

    var _prepararTemplate = function(){
        $scope.icones.forEach(function(i){
            $scope.template.push(`
            <div class="row">
                <div class="col-2">
                    <i class="` + i.icon + `"></i>
                </div>
                <div class="col-10">
                    ` + i.description + `
                </div>
            </div> `);
        });
    }

    _prepararTemplate();
});