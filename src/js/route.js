import client_id from "./token";

function routerConfig ($stateProvider, $urlRouterProvider){
	$stateProvider
	    .state('root', {
	      abstract: true,
	      templateUrl: 'templates/layout.tpl.html',
	      controller: 'LayoutController as layout'
	    })
		.state('root.home', {
	      url: '/home',
	      templateUrl: 'templates/home.tpl.html',
	      controller: 'HomeController as home'
	    })
	    .state('root.profile', {
	      url: '/profile',
	      templateUrl: 'templates/profile.tpl.html',
	      controller: 'ProfileController as profiles'
	    })
	    .state('root.about', {
	      url: '/about',
	      templateUrl: 'templates/about.tpl.html'
	    })

	    .state('root.category', {
	      url: '/category/:id',
	      templateUrl: 'templates/category.tpl.html',
	      controller: 'CategoryController as categories'
	    })

	    $urlRouterProvider.otherwise('/');
	};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider']
export { routerConfig };