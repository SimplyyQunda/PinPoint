
function ProfileController ($state, $stateParams, CategoryService, ChannelService, SubscriberService) {

	let vm = this;

  	this.createUser = createUser;
  	this.createCategory = createCategory;
  	this.categories = []
    this.subscriptions = []

  	function init() {
  		CategoryService.allCategories().then((resp) => {
  			console.log(resp.data);
  			vm.categories = resp.data;
  		});

      init()
  	}

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

    function initSubscript (subs) {
      SubscriberService.getSubscribers().then((resp) =>{

        vm.subscriptions = resp.data;
        console.log(vm.subscriptions)
        // console.log(vm.getSubscribers)
      })

    }

    initSubscript();

};

ProfileController.$inject = ['$state', '$stateParams', 'CategoryService', 'ChannelService', 'SubscriberService'];
export { ProfileController };