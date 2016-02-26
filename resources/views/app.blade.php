<!DOCTYPE html>
<html >
    <head>
        <meta charset="UTF-8"/>
        <title>Ludus</title>

        <link href="/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <!-- bootstrap e Jquery-->
        <script src="/jquery/dist/jquery.min.js"></script>
        <script src="/bootstrap/dist/js/bootstrap.min.js"></script>
        <!-- angular js -->
        <script src="/angular/angular.min.js"></script>
        <!-- angular route -->
        <script src="/angular-route/angular-route.min.js"></script>
        <script src="{{asset('/js/app.js')}}"></script>
        <script src="{{asset('/js/app.controllers.js')}}"></script>
    </head>
    <body ng-app="app">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#/">LUDUS</a>
                </div>
                <ul class="nav navbar-nav">
                    <li><a href="#/">Turma</a></li>
                    <li><a href="#/aluno">Aluna</a></li>
                    <li><a href="#/pagamento">Pagamento</a></li>
                </ul>
            </div>
        </nav>

        <div ng-view></div>

    </body>
</html>
