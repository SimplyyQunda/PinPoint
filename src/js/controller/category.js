import api_key from "../token";

function CategoryController ($http, SERVER, $stateParams, CategoryService, ChannelService, $state, SubscriberService) {

	let vm = this;
	// vm.getChannel = getChannel;
	// vm.title = $stateParams.title;
		vm.channels = [];
		vm.subbies = [];
		vm.getSubscriber = getSubscriber;
	// console.log($stateParams)

	vm.choices = {};

	function getThumbnails () {
		$http({
			method: 'GET',
			url:'https://www.googleapis.com/youtube/v3/channels',
			params: {
				part: 'snippet',
				id: '${SERVER}categories/${google_id}/thumbnails',
				key: api_key
			}
		}).then((resp) => {
			console.log(vm.choices)
	      vm.choices = resp.data;
	      vm.channels = resp.data.channels;
	      
		}).catch(error => {
			// console.log(error)
		});
	}	
		

	function getSubscriber () {
		// console.log('working')
		SubscriberService.getSubscriber($stateParams.id).then((resp) => {
			vm.subbies = resp.data.subbies;
			console.log(vm.subbies)
			$state.go('root.category')
		}).catch(error => {
		console.log(error)
	})
	}

	function init () {
		ChannelService.getChannel($stateParams.id).then((resp) => {
			
			vm.getChannel = resp.data;
			vm.channels = resp.data.channels;
			// console.log(vm.getChannel)
			$state.go('root.category')
		});
	}

	init();

};




CategoryController.$inject = ['$http', 'SERVER', '$stateParams', 'CategoryService', 'ChannelService', '$state', 'SubscriberService']

export { CategoryController }
