
function ProfileController ($state) {

	let vm = this;

  	this.createUser = createUser;

  	function addContact (cont) {
    	ContactService.createUser(cont).then((resp) => {
      		$state.go('home');
    	});
  	};

};

ProfileController.$inject = ['$state'];
export { ProfileController };