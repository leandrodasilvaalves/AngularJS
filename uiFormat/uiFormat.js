//Autor:Leandro Alves
//Luziânia-GO
//23-Setembro-2017
//contato:(61) 9 9107-7157
//Referência: AngularJs - Rodrigo Branas

angular.module("uiFormat", []);
angular.module("uiFormat").directive('uiCep', function () {
    return {
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
            var _formatCEP = function (cep) {
                cep = cep.replace(/[^0-9]+/g, "");
                if (cep.length > 2) {
                    cep = cep.substring(0, 2) + "." + cep.substring(2);
                }
                if (cep.length > 6) {
                    cep = cep.substring(0, 6) + "-" + cep.substring(6, 10);
                }
                return cep;
            };

            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatCEP(ctrl.$viewValue));
                ctrl.$render();
            });

            /*
            ctrl.$parsers.push(function (value) {
                if (value.length > 10) {
                    return value;
                }
            });
            */
        }
    };
});
angular.module("uiFormat").directive('uiCnpj', function () {
    return {
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {

            var _formatCNPJ = function (cnpj) {
                cnpj = cnpj.replace(/[^0-9]+/g, "");
                if (cnpj.length > 2) {
                    cnpj = cnpj.substring(0, 2) + "." + cnpj.substring(2);
                }
                if (cnpj.length > 6) {
                    cnpj = cnpj.substring(0, 6) + "." + cnpj.substring(6);
                }
                if (cnpj.length > 10) {
                    cnpj = cnpj.substring(0, 10) + "/" + cnpj.substring(10);
                }
                if (cnpj.length > 15) {
                    cnpj = cnpj.substring(0, 15) + "-" + cnpj.substring(15, 17);
                }
                return cnpj;
            };

            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatCNPJ(ctrl.$viewValue));
                ctrl.$render();
            });

            /*
            ctrl.$parsers.push(function (value) {
                if (value.length > 18) {
                    return value;
                }
            });
            */

        }
    };
});
angular.module("uiFormat").directive("uiCpf", function () {
    return {
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {   
           
            
            function _validarCPF(strCPF) {
                var Soma;
                var Resto;
                Soma = 0;
                strCPF = strCPF.replace(/[^\d]+/g, "");

                if (strCPF.length != 11) return false;
                if (strCPF == "00000000000") return false;

                for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
                Resto = (Soma * 10) % 11;

                if ((Resto == 10) || (Resto == 11)) Resto = 0;
                if (Resto != parseInt(strCPF.substring(9, 10))) return false;

                Soma = 0;
                for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
                Resto = (Soma * 10) % 11;

                if ((Resto == 10) || (Resto == 11)) Resto = 0;
                if (Resto != parseInt(strCPF.substring(10, 11))) return false;
                return true;
            }

            var _formatCPF = function (cpf) {

                cpf = cpf.replace(/[^0-9]+/g, "");
                if (cpf.length > 3) {
                    cpf = cpf.substring(0, 3) + "." + cpf.substring(3);
                }
                if (cpf.length > 7) {
                    cpf = cpf.substring(0, 7) + "." + cpf.substring(7);
                }
                if (cpf.length > 11) {
                    cpf = cpf.substring(0, 11) + "-" + cpf.substring(11, 13);
                }
                return cpf;
            };

            ctrl.$validators.cpfInvalido = function (modelValue, viewValue) {
                return _validarCPF(viewValue);
            };

            element.bind("keyup", function () {
                
                ctrl.$setViewValue(_formatCPF(ctrl.$viewValue));
                ctrl.$render();
            });
            
            /*
            ctrl.$parsers.push(function (value) {
                if (value.length >= 13) {
                    return value;
                }
            });
            */
        }
    };
});
angular.module("uiFormat").directive('uiDate', function () {
    return {
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
            
            var _validarData = function (d) {
                var regExpData = /(((0[1-9]|[12][0-9]|3[01])([-./])(0[13578]|10|12)([-./])(\d{4}))|(([0][1-9]|[12][0-9]|30)([-./])(0[469]|11)([-./])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([-./])(02)([-./])(\d{4}))|((29)(\.|-|\/)(02)([-./])([02468][048]00))|((29)([-./])(02)([-./])([13579][26]00))|((29)([-./])(02)([-./])([0-9][0-9][0][48]))|((29)([-./])(02)([-./])([0-9][0-9][2468][048]))|((29)([-./])(02)([-./])([0-9][0-9][13579][26])))/;
                return regExpData.test(d);
            };
            var _formatDate = function (date) {
                date = date.replace(/[^0-9]+/g, "");
                if (date.length > 2) {
                    date = date.substring(0, 2) + "/" + date.substring(2);
                }
                if (date.length > 5) {
                    date = date.substring(0, 5) + "/" + date.substring(5, 9);
                }
                return date;
            };

            ctrl.$validators.dataInvalida=function(modelValue, viewValue){
                return _validarData(viewValue);
            };

            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
                ctrl.$render();
            });
            /*
            ctrl.$parsers.push(function (value) {
                if (value.length === 10) {
                    var dateArray = value.split("/");
                    return new Date(dateArray[2], dateArray[1] - 1, dateArray[0]);
                    //só retorna para o controller quando a formatação estiver completa, ou seja, uma data válida.
                }
            });
            */
        }
    };
});
angular.module("uiFormat").directive("uiMoeda", function () {
    return {
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
            var _formatMoeda = function (moeda) {

                if (moeda == undefined) { return; }
                if (typeof moeda === 'number') {
                    moeda = moeda.toString();
                }
                var inteiro, decimal;

                if (moeda.length > 0) {
                    moeda = moeda.replace(/[^0-9]+/g, "");  //limpa caracteres diferente de número.                     
                    if (moeda.length === 1) {
                        return "R$ 0,0" + moeda;
                    }
                    if (moeda.length === 2) {
                        return "R$ 0," + moeda;
                    }
                    if (moeda.length > 2) {
                        decimal = moeda.substring(moeda.length - 2, moeda.length);
                        inteiro = moeda.substring(0, moeda.length - 2)
                            .replace(/[.]/g, ",").replace(/\d(?=(?:\d{3})+(?:\D|$))/g, "$&.");//separa milhares com ponto.

                        inteiro = inteiro.replace(/^[0]{1,2}[.?]/, "");//remove os zeros a esquerda
                        return 'R$ ' + inteiro + "," + decimal;
                    }
                }
            };

            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatMoeda(ctrl.$viewValue));
                ctrl.$render();
            });
        }
    };
});
angular.module("uiFormat").directive('uiCelular', function () {
    return {
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
            var _formatCelular = function (celular) {
                celular = celular.replace(/[^0-9]+/g, ""); //(61) 9 99107-7157

                if (celular.length >= 1) {
                    celular = "(" + celular;
                }
                if (celular.length > 3) {
                    celular = celular.substring(0, 3) + ") " + celular.substring(3);
                }
                if (celular.length > 6) {
                    celular = celular.substring(0, 6) + " " + celular.substring(6);
                }
                if (celular.length > 11) {
                    celular = celular.substring(0, 11) + "-" + celular.substring(11, 15);
                }

                return celular;

            };

            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatCelular(ctrl.$viewValue));
                ctrl.$render();
            });

            /*
            ctrl.$parsers.push(function (value) {
                if (value.length > 15) {
                    return value;
                }
            });
            */
        }
    };
});
angular.module("uiFormat").directive('uiTelfixo', function () {
    return {
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
            var _formatTelefone = function (telefone) {
                telefone = telefone.replace(/[^0-9]+/g, "");

                if (telefone.length >= 1) {
                    telefone = "(" + telefone;
                }
                if (telefone.length > 3) {
                    telefone = telefone.substring(0, 3) + ") " + telefone.substring(3);
                }
                if (telefone.length > 9) {
                    telefone = telefone.substring(0, 9) + "-" + telefone.substring(9, 13);
                }

                return telefone;

            };

            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatTelefone(ctrl.$viewValue));
                ctrl.$render();
            });

            /*
            ctrl.$parsers.push(function (value) {
                if (value.length > 13) {
                    return value;
                }
            });
            */

        }
    };
});