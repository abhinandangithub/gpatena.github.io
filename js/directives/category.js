
demoApp.directive('categoryDirective',function(){
     let directive = {
        restrict: 'E',
        //template: 'directive',
        templateUrl: 'views/category.html',
        controller: 'categoryController',
        controllerAs: 'categoryMenu',
        //bindToController: true,
        link: function (scope, element) {
        }
    };
    return directive;
});
