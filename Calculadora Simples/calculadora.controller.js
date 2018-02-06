app.controller('calculadoraController',function($scope, calculadoraFactory){
			var index = -1;
			 
			$scope.titulo="Calculadora Angular JS";
			
			$scope.somar = function(x, y){
				$scope.total = calculadoraFactory.somar(x,y);
			};
			$scope.diminuir = function(x, y){
				$scope.total = calculadoraFactory.subtrair(x,y);
			};
			
			$scope.multiplicar = function(x,y){
				$scope.total = calculadoraFactory.multiplicar(x,y);
			};
		
			$scope.dividir = function(x, y){
				$scope.total = calculadoraFactory.dividir(x,y);
			};

			$scope.calcPorcentagem=function(x,y){
				$scope.total = calculadoraFactory.porcentagem(x,y);
			};
			
		});