
function ProfileController ($state, CategoryService) {

	let vm = this;

  	this.createUser = createUser;
  	this.createCategory = createCategory;

  	function createUser (pin) {
    	CategoryService.createUser(pin).then((resp) => {
      		$state.go('root.home')
    	});
  	};

  	function createCategory (cat) {
  		CategoryService.createCategory(cat).then((resp) => {
  			console.log(resp)
      		$state.go('root.category')
    	});
  	};

};

ProfileController.$inject = ['$state', 'CategoryService'];
export { ProfileController };