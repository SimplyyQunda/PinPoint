
function HomeController ($stateParams) {

	let vm = this;

	vm.pin = [];

	function init () {
    ContactService.allCategories().then((resp) => {
      vm.pin = resp.data;
      console.log(vm.pin)
    });
};
	init();
};

HomeController.$inject = ['$stateParams']    