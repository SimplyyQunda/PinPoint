import client_id from "./token";

function routerConfig ($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home', {
	      url: '/',
	      templateUrl: 'templates/home.tpl.html',
	      controller: 'HomeController as home'
	    })
	    .state('category', {
	      url: '/category/:id',
	      templateUrl: 'templates/category.tpl.html',
	      controller: 'CategoryController as categories'
	    })

	    $urlRouterProvider.otherwise('/');
	};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider']
export { routerConfig };