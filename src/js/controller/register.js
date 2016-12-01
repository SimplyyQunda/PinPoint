function RegisterController (CategoryService, $state) {

  let vm = this;

  vm.makeUser = makeUser;

  function makeUser (user) {
    CategoryService.create(user).then((resp) => {
      // console.log('Created User: ', resp);
      $state.go('root.home');
    });
  };
};

RegisterController.$inject = ['CategoryService', '$state'];
export { RegisterController };