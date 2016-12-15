import api_key from "../token";
function ProfileController ($http, $state, $stateParams, CategoryService, ChannelService, SubscriberService) {

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

    function getThumbnails (channel) {

      $http({
        method: 'GET',
        url:'https://www.googleapis.com/youtube/v3/channels',
        params: {
          part: 'snippet',
          id: channel.google_id,
          key: api_key
        }
      }).then((resp) => {
        channel.snippet = resp.data.items[0].snippet;
        console.log(resp)
      }).catch(error => {
        // console.log(error)
      });
    } 

    function initSubscript (subs) {
      SubscriberService.getSubscribers().then((resp) =>{

        vm.subscriptions = resp.data;
        console.log(vm.subscriptions)
        vm.subscriptions.forEach(function(channel) {
          getThumbnails(channel);
        })
        // console.log(vm.getSubscribers)
      })

    }

    initSubscript();

};

ProfileController.$inject = ['$http','$state', '$stateParams', 'CategoryService', 'ChannelService', 'SubscriberService'];
export { ProfileController };