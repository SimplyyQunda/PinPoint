
function HomeController ($stateParams, CategoryService) {

	let vm = this;

	vm.pin = [];
	vm.categories = [];

	function init () {
    CategoryService.allCategories().then((resp) => {
      vm.pin = resp.data;
      vm.categories = resp.data;
      console.log("this is it ",vm.pin)
    });
};
	init();
};

HomeController.$inject = ['$stateParams', 'CategoryService']  
export {HomeController}  