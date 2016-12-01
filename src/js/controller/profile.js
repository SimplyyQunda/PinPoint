
function ProfileController ($state, CategoryService) {

	let vm = this;

  	this.createUser = createUser;

  	function createUser (pin) {
    	CategoryService.createUser(pin).then((resp) => {
      		$state.go('root.home')
    	});
  	};

};

ProfileController.$inject = ['$state', 'CategoryService'];
export { ProfileController };