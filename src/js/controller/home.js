
function HomeController ($stateParams, CategoryService) {

	let vm = this;

	vm.pin = [];

	function init () {
    CategoryService.allCategories().then((resp) => {
      vm.pin = resp.data;
      console.log(vm.pin)
    });
};
	init();
};

HomeController.$inject = ['$stateParams', 'CategoryService']  
export {HomeController}  