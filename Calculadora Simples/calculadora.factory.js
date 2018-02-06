app.factory('calculadoraFactory', function(){

			var _somar = function(x,y){
				return x + y;

			};

			var _subtrair = function(x,y){
			  	return x - y;
			};
		
			var _multiplicar = function(x,y){
				return x * y;
			};

			var _dividir = function(x, y){
				var isValid =_validarDivisao(x,y);
				if(isValid == true)
					return x / y;

				return isValid;
			};
			
			var _porcentagem = function(x,y){
				return x * (y/100);
			};

			var _validarDivisao = function(x,y){
				if(y ==0)
					return "Impossivel dividir por zero.";
				return true;
			};

			return{
				somar: _somar,
				subtrair: _subtrair,
				multiplicar: _multiplicar,
				dividir : _dividir,
				porcentagem: _porcentagem
			}

		});