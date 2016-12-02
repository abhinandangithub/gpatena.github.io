
demoApp.directive('mainDirective',function(){
     let directive = {
        restrict: 'E',
        templateUrl: 'views/mainbody.html',
        controller: 'mainController'
    };
    return directive;
});
