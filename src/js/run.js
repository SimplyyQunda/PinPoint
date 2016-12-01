function run ($rootScope, $state, CategoryService) {

$rootScope.$on('$stateChangeStart', (event, toState) => {
	
	if (invalidRoute(toState)) {
		event.preventDefault();
      	$state.go('root.login');
	}
});

function invalidRoute (toState) {
	let loggedIn = CategoryService.isLoggedIn();
    let safeRoutes = ['root.home', 'root.login', 'root.register'];

     return !(loggedIn || safeRoutes.includes(toState.name));
	};

};

run.$inject = ['$rootScope', '$state', 'CategoryService'];
export { run };