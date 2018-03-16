angular.module('select2Cust').controller('mainController',function($scope){
    $scope.nomes=['Leandro','Carlos', 'Eduardo', 'Meiry', 'Isa', 'Gleisson'];
    $scope.estados = ['Goiás', 'Distrito Federal', 'São Paulo', 'Minas Gerais','Bahia','Pernambuco', 'Paraíba', 'Rio Grande do Norte', 'Mato Grosso do Sul', 'Mato Grosso'];
    $scope.templateIcones =[];
    $scope.templateCores = [];

    $scope.icones = [
        {icon:'fa fa-address-book', description:'fa fa-address-book'},
        {icon:'fa fa-address-card', description:'fa fa-address-card'},
        {icon:'fa fa-anchor', description:'fa fa-anchor'},
        {icon:'fa fa-at', description:'fa fa-at'},
        {icon:'fa fa-bank', description:'fa fa-bank'},
        {icon:'fa fa-bomb', description:'fa fa-bomb'},
        {icon:'fa fa-bed', description:'fa fa-bed'}
    ];
    $scope.cores =[
        {hex:'#6A5ACD', description:'SlateBlue'},
        {hex:'#00BFFF', description:'DeepSkyBlue'},
        {hex:'#00FF7F', description:'SpringGreen'},
        {hex:'#8B4513', description:'SaddleBrown'},
        {hex:'#FF1493', description:'DeepPink'}
    ];

    var _prepararTemplateIcones = function(){
        $scope.icones.forEach(function(i){
            $scope.templateIcones.push(`
            <div class="row">
                <div class="col-2">
                    <i class="` + i.icon + `"></i>
                </div>
                <div class="col-8">
                    ` + i.description + `
                </div>
            </div> `);
        });
    };

    var _prepararTemplateCores = function(){
        $scope.cores.forEach(function(c){
            $scope.templateCores.push(`
                <div class="row">
                    <div class="col-2">
                        <span style="height: 20px;
                        width: 20px;
                        display: block;
                        background-color:`+ c.hex + `;
                        border-radius: 20px;
                        margin-top: 5px;"></span>
                    </div>
                    <div class="col-9">
                        ` + c.description + `
                    </div>
                </div>
            `);
        });
    };

    _prepararTemplateIcones();
    _prepararTemplateCores();

});