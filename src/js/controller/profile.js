
function ProfileController ($state) {

	let vm = this;

  	this.createUser = createUser;

  	function createUser (pin) {
    	.createUser(cont).then((resp) => {
      		$state.go('home');
    	});
  	};

};

ProfileController.$inject = ['$state'];
export { ProfileController };