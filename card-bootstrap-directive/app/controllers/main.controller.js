app.controller('mainCtrl',function($scope, $rootScope){

    $rootScope.tituloDoc ="Trabalhando com diretivas.";
    
    $scope.tituloCard="Borboletas"
    $scope.descricaoCard=`As borboletas, panapanás ou panapanãs são insetos da ordem Lepidoptera classificados nas super famílias Hesperioidea e Papilionoidea, que constituem o grupo informal "Rhopalocera".`;
    $scope.imagem ="/images/borboleta.jpg";
    $scope.url ="https://pt.wikipedia.org/wiki/Borboleta";
});