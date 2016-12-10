import api_key from "../token";

function CategoryController ($http, SERVER, $stateParams, CategoryService, ChannelService, $state, SubscriberService, CommentRateService) {

	let vm = this;
	// vm.getChannel = getChannel;
	// vm.title = $stateParams.title;
		vm.channels = [];
		vm.comments = [];
		vm.subbies = [];
		vm.getSubscriber = getSubscriber;
		vm.addComment = addComment;

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
			console.log(resp)
		}).catch(error => {
			// console.log(error)
		});
	}

	function getSubscriber () {
		// console.log('working')
		SubscriberService.getSubscriber($stateParams.id).then((resp) => {
			vm.subbies = resp.data;
			// console.log(vm.subbies)
		}).catch(error => {
		console.log(error)
	})
	}

	function getComments () {
		CommentRateService.getComments(channels).then((resp) => {
			// console.log('Hi')
			// console.log(resp)
			vm.comments = resp.data.comments
		}, (reject) => {
			// console.log(reject);
		})
	}

	function addComment (comment) {
		console.log(comment)
		CommentRateService.addComment(comment.channel_id,comment).then((resp) => {
			vm.addComments = resp.data.channels;

		})
	}

	function init () {
		ChannelService.getChannels($stateParams.id).then((resp) => {
			// console.log(vm.channels)
			vm.getChannel = resp.data;
			vm.channels = resp.data[0].channels;
			console.log("channels are: ", resp.data[0].channels)
			vm.channels.forEach(function(channel){
				getThumbnails(channel);
			})

		})

		// getComments();
	}

	init();

};




CategoryController.$inject = ['$http', 'SERVER', '$stateParams', 'CategoryService', 'ChannelService', '$state', 'SubscriberService', 'CommentRateService']

export { CategoryController }
