/**
 * Created by celeste on 21/02/2016.
 */
angular.module("app",['app.controllers',"ngRoute"])
    .config(function($routeProvider){
        $routeProvider
            .when("/",{
               templateUrl:"/js/views/index.html",
                controller:'TurmaController'
            })
            .when("/turma",{
                templateUrl:"/js/views/turma.create.edit.html",
                controller:"TurmaController"
            })
            .when("/turma/:id",{
                templateUrl:"/js/views/turma.create.edit.html",
                controller:"TurmaController"
            })
            .when("/aluno",{
                templateUrl:"/js/views/aluno.index.html",
                controller:"AlunoController"
            })
            .when("/:idTurma/aluno",{
                templateUrl:"/js/views/aluno.create.edit.html",
                controller:"AlunoController"
            })
            .when("/aluno/create",{
                templateUrl:"/js/views/aluno.create.edit.html",
                controller:"AlunoController"
            })
            .when("/aluno/:id",{
                templateUrl:"/js/views/aluno.create.edit.html",
                controller:"AlunoController"
            })
    })