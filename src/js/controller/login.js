function LoginController (CategoryService, $state, $rootScope) {

  let vm = this;

  vm.activate = activate;

  function activate (user) {
    CategoryService.login(user).then(
      resp => {
        CategoryService.setUser(resp.data);
        $rootScope.$broadcast('loginChange', {});
        $state.go('root.home');
      },
      errors => {
        // console.log(errors.data.error);
      }
    );
  };

};

LoginController.$inject = ['CategoryService', '$state', '$rootScope'];
export { LoginController };