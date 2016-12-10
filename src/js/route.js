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
	      controller: 'ProfileController as profile'
	    })

	    .state('root.about', {
	      url: '/about',
	      templateUrl: 'templates/about.tpl.html'
	    })

	    .state('root.add', {
	    	url:'/add',
	    	templateUrl: 'templates/add.tpl.html',
	    	controller: 'AddController as add'
	    })

	    .state('root.category', {
	      url: '/category/:id',
	      templateUrl: 'templates/category.tpl.html',
	      controller: 'CategoryController as category'
	    })
	    .state('root.register', {
	      url: '/register',
	      templateUrl: 'templates/register.tpl.html',
	      controller: 'RegisterController as register'
	    })
	    .state('root.login', {
	      url: '/login',
	      templateUrl: 'templates/login.tpl.html',
	      controller: 'LoginController as login'
	    })

	    $urlRouterProvider.otherwise('/home');
	};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider']
export { routerConfig };