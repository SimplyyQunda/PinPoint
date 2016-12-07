
function ProfileController ($state, $stateParams, CategoryService, ChannelService, SubscriberService) {

	let vm = this;

  	this.createUser = createUser;
  	this.createCategory = createCategory;
  	this.addChannel = addChannel;
  	this.categories = []
    this.subscript = []

  	function init() {
  		CategoryService.allCategories().then((resp) => {
  			console.log(resp.data);
  			vm.categories = resp.data;
  		});

      initSubscript()
  	}

  	init();

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

  	function addChannel (channel) {
		let urlString = channel.google_id;
		let channel_id = urlString.slice(urlString.lastIndexOf('/') + 1);
		channel.google_id = channel_id;
		/*Change the category id into a nummber*/
		channel.category_id = Number(channel.category_id);

		console.log("channel", channel)

  		ChannelService.addChannel(channel).then((resp) =>{
  			$state.go('root.category')
  		}, (error) => {
  			console.log(error)
  		}) 
  	}

    function initSubscript () {
      SubscriberService.getSubscribers().then((resp) =>{

        vm.getSubscribers = resp.data;
        console.log(resp.data)
        // console.log(vm.getSubscribers)
      })

    }

    init();

};

ProfileController.$inject = ['$state', '$stateParams', 'CategoryService', 'ChannelService', 'SubscriberService'];
export { ProfileController };