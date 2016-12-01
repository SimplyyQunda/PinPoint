function RegisterController (UserService, $state) {

  let vm = this;

  vm.makeUser = makeUser;

  function makeUser (user) {
    UserService.create(user).then((resp) => {
      // console.log('Created User: ', resp);
      $state.go('root.home');
    });
  };
};

RegisterController.$inject = ['UserService', '$state'];
export { RegisterController };