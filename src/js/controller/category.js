import api_key from "../token";

function CategoryController ($http,$stateParams,CategoryService, ChannelService, $state, SubscriberService) {

	let vm = this;
	// vm.getChannel = getChannel;
	// vm.title = $stateParams.title;
		vm.channels = [];
		vm.subbies = [];
		vm.getSubscriber = getSubscriber;
	// console.log($stateParams)

	vm.choices = {};

	$http({
		method: 'GET',
		url:'https://www.googleapis.com/youtube/v3/channels',
		params: {
			part: 'snippet,statistics',
			id: '${SERVER}categories/${google_id}',
			key: api_key
		}
	}).then((resp) => {
		// console.log(resp.data.channels)
      vm.choices = resp.data;
      
	}).catch(error => {
		// console.log(error)
	});

	function getSubscriber () {
		// console.log('working')
		SubscriberService.getSubscriber($stateParams.id).then((resp) => {
			vm.subbies = resp.data.subbies;
			// console.log('Hi')
			$state.go('root.category')
		}).catch(error => {
		console.log(error)
	})
	}

	function init () {
		ChannelService.getChannel($stateParams.id).then((resp) => {
			
			vm.getChannel = resp.data;
			vm.channels = resp.data.channels;
			console.log(vm.getChannel)
			$state.go('root.category')
		});
	}

	init();

};




CategoryController.$inject = ['$http','$stateParams', 'CategoryService', 'ChannelService', '$state', 'SubscriberService']

export { CategoryController }
