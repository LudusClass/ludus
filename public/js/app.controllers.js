/**
 * Created by celeste on 24/02/2016.
 */
angular.module('app.controllers',[])
    .controller("TurmaController",["$scope","$http","$location","$routeParams",
        function($scope,$http,$location,$routeParams){
            /**
             * @desc Todas as variáveis de escopo localizadas
             *
             */
            $scope.id = $routeParams.id;
            $scope.turma = {};
            $scope.turmas = {};
            $scope.error = {};

            /**
             * @desc funções privadas
             */
            var criarTurma = function(turma){

                $http.post("/turma",turma)
                    .success(function(data,status) {
                        if (data == 1 && status == 200) {
                            $scope.error.valid = false;
                            $location.path('/');
                        }
                        else {
                            $scope.error.valid = true;
                            $scope.error.message =  "Ocorreu um erro durante a gravação!";
                        }
                        })
                    .error(function(){
                        $scope.error.valid = true;
                        $scope.error.message =  "Ocorreu um erro durante a gravação!";
                    });
            };

            var atualizarTurma = function(turma){
                $http.put("/turma",turma)
                    .success(function(data,status) {
                        if (data == 1 && status == 200) {

                            $scope.error.valid = false;
                            $location.path('/');
                        }
                        else {
                            $scope.error.valid = true;
                            $scope.error.message =  "Ocorreu um erro durante a gravação!";
                        }
                    })
                    .error(function(){
                        $scope.error.valid = true;
                        $scope.error.message =  "Ocorreu um erro durante a gravação!";
                    });
            }

            var obterTurmas = function(){
                $http.get('/turma')
                    .success(function(data,status){
                        if(status == 200){
                            $scope.turmas =  data;
                        }
                    })
                    .error(function(){
                        return "Ocorreu um erro durante a busca de turmas";
                    })
            };

            var obterTurma = function(id){
                if(id !== 'undefined')
                    $http.get('/turma/'+id)
                        .success(function(data,status){
                            if(status == 200){
                                $scope.turma =  data;
                            }
                        })
                        .error(function(){
                            return "Ocorreu um erro durante a busca de turmas";
                        });
            };

            var deleteTurma = function($id){
                if(confirm("Você tem certeza que deseja excluir esta turma?")) {
                    $http.delete('/turma/' + $id);
                    obterTurmas();
                }else return;
            }



            /**
             * @desc funções públicas
             */

            $scope.salvar = function(turma){
                criarTurma(turma);
            }

            $scope.delete = function(id){
                deleteTurma(id);
            }

            $scope.getTurma = function(id){
                obterTurma(id);
            }

            $scope.getTurmas = function(){
                obterTurmas();
            }



    }])
    .controller("AlunoController",["$scope","$http","$location","$routeParams",
        function($scope,$http,$location,$routeParams){

            //variáveis
            $scope.id = $routeParams.id;
            $scope.idTurma = (!angular.isUndefined($routeParams.idTurma))?$routeParams.idTurma:0;
            $scope.alunos = {};
            $scope.aluno = {};
            $scope.turmas = {};
            $scope.error = {};

            //funções privadas

            var obterAlunos = function(turmaId){
                $http({
                    url:"/aluno",
                    method:"GET",
                    params:{ "turma_id":turmaId}
                })
                    .success(function(data,status){
                        if(status==200) {
                            $scope.alunos = data;
                        }
                    })
                    .error(function(){
                        alert("Ocorreu um erro durante a busca, tente novamente!");
                    })
            }

            var obterAluno = function(id){
                if(id !== 'undefined')
                    $http.get('/aluno/'+id)
                        .success(function(data,status){
                            if(status == 200){
                                $scope.aluno =  data;
                            }
                        })
                        .error(function(){
                            return "Ocorreu um erro durante a busca de turmas";
                        });
            }

            var salvarAluno = function(aluno){
                $http.post("/aluno",aluno)
                    .success(function(data,status) {
                        if (data == 1 && status == 200) {
                            $scope.error.valid = false;
                            
                            if($location.url().substr(0,7) == '/aluno/')
                                $location.path('/aluno');
                            else
                                $location.path('/');
                        }
                        else {
                            $scope.error.valid = true;
                            $scope.error.message =  data;
                        }

                    })
                    .error(function(e){
                        $scope.error.valid = true;
                        $scope.error.message = e;
                    });
            };

            var obterTurmas = function(){
                $http.get('/turma')
                    .success(function(data,status){
                        if(status == 200){
                            $scope.turmas = data;
                        }
                    })
                    .error(function(){
                        return "Ocorreu um erro durante a busca de turmas";
                    })
            };

            //funções públicas
            $scope.salvar = function(aluno){
                salvarAluno(aluno);
            }


            $scope.getAluno = function(id){
                obterAluno(id);
            }

            $scope.getAlunos = function(turmaId){
                obterAlunos(turmaId);
            }

            $scope.getTurmas = function(){
               obterTurmas();
            }
        }]);

