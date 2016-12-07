import api_key from "../token";

function CategoryController ($http, SERVER, $stateParams, CategoryService, ChannelService, $state, SubscriberService) {

	let vm = this;
	// vm.getChannel = getChannel;
	// vm.title = $stateParams.title;
		vm.channels = [];
		vm.subbies = [];
		vm.getSubscriber = getSubscriber;
		// vm.google_id = channels.google_id;
	// console.log($stateParams)

	vm.choices = {};

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
			console.log(channel)
		}).catch(error => {
			// console.log(error)
		});
	}	
		

	function getSubscriber () {
		// console.log('working')
		SubscriberService.getSubscriber($stateParams.id).then((resp) => {
			vm.subbies = resp.data;
			console.log(vm.subbies)
		}).catch(error => {
		console.log(error)
	})
	}

	function init () {
		ChannelService.getChannel($stateParams.id).then((resp) => {
			
			vm.getChannel = resp.data;
			vm.channels = resp.data.channels;
			// console.log(vm.getChannel)
			vm.channels.forEach(function(channel){
				getThumbnails(channel);
			})

		})
	}

	init();

};




CategoryController.$inject = ['$http', 'SERVER', '$stateParams', 'CategoryService', 'ChannelService', '$state', 'SubscriberService']

export { CategoryController }
