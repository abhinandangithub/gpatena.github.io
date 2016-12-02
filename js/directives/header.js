
demoApp.directive('headerDirective',function(){
     let directive = {
        restrict: 'E',
        //template: 'directive',
        templateUrl: 'views/header.html',
        //controller: 'HeaderController',
        //controllerAs: 'pgHdr',
        //bindToController: true,
        link: function (scope, element) {
        }
    };
    return directive;
});
