demoApp.config(function($stateProvider){
	
	$stateProvider
	.state('home',{
		url: '/',
    	templateUrl: 'views/home.html',
		controller: 'HomeController',
		controllerAs: 'home'
	});
});
