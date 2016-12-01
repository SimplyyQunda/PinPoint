function LayoutController ($rootScope, CategoryService) {

  let vm = this;

  vm.clickMe = clickMe;
  vm.admin = CategoryService.isAdmin();
  vm.loggedIn = CategoryService.isLoggedIn();
  vm.logout = logout;

  $rootScope.$on('loginChange', (event, data) => {
    vm.loggedIn = CategoryService.isLoggedIn();
    vm.admin = CategoryService.isAdmin();
 });

  function logout () {
    CategoryService.logout();
    vm.loggedIn = false;
    vm.admin = false;
  }

  function clickMe () {
    // console.log("its been clicked");
  };
};

LayoutController.$inject = ['$rootScope', 'CategoryService'];
export { LayoutController };