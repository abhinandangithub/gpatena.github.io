
demoApp.directive('headerDirective',function($window){
     let directive = {
        restrict: 'E',
        //template: 'directive',
        templateUrl: 'views/header.html',
        controller: 'HeaderController',
        //controllerAs: 'pgHdr',
        //bindToController: true,
        link: function (scope, element) {
            let navbar = element.children().children()[0];
            let navbarOriginalHgt = navbar.offsetHeight;

            angular.element($window).bind("scroll", function () {
                console.log(this.pageYOffset, "hello", window.innerHeight, scope.sticky);
                if (this.pageYOffset >= 50) {
                    if (!scope.sticky) {
                        //$rootScope.$emit("isHeaderSticky", { state: true });
                    }
                    scope.sticky = true;

                } else {
                    scope.sticky = false;
                    //$rootScope.$emit("isHeaderSticky", { state: false });
                }
                scope.$apply();
            });
        }
    };
    return directive;
});
