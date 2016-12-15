import api_key from "../token";

function CategoryController ($http, SERVER, $stateParams, CategoryService, ChannelService, $state, SubscriberService, CommentRateService) {

	let vm = this;
	// vm.getChannel = getChannel;
	// vm.title = $stateParams.title;
		vm.channels = [];
		// vm.comments = [];
		vm.rate = [];
		vm.subbies = [];
		vm.getSubscriber = getSubscriber;
		// vm.addComment = addComment;
		vm.rateChannel = rateChannel;
		vm.count = 0;
		vm.add = true;

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
			if (channel.snippet.description.length > 255)
					channel.snippet.description = channel.snippet.description.substr(0, 255);
			console.log(resp)
		}).catch(error => {
			// console.log(error)
		});
	}

// 	function getYoutubeVidz (channel) {
// 		console.log(channel.google_id)
// 		$http({
// 			method: 'GET',
// 			url: 'https://www.googleapis.com/youtube/v3/search',
// 			params:{
// 				part: 'snippet',
// 				channelId: channel.google_id,
// 				key: api_key
// 			}
// 		}).then((resp) => {
// 			channel.videos = resp.data.items;
// //			vm.videos = resp.data.items;
// 			console.log('youtube videos: ', resp.data.items[0].id.videoId)
// 		})
// 	}

	// function upVote () {
	// 	CommentRateService.upVote().then((resp) => {
	// 		if(vm.add) {
	// 		vm.count += 1;
	// 		} else {
	// 		vm.count -= 1;
	// 		console.log("Hi")
	// 	}
	// 	})
	// }


	function getSubscriber () {
		// console.log('working')
		SubscriberService.getSubscriber($stateParams.id).then((resp) => {
			vm.subbies = resp.data;
			// console.log(vm.subbies)
		}).catch(error => {
		// console.log(error)
	})
	}

	// function getComments (channel) {
	// 	CommentRateService.getComments(channel.id).then((resp) => {
	// 		// console.log(resp)
	// 		channel.comments = resp.data.comments;
	// 		// vm.comments = resp.data.comments;
	// 		console.log('comments are: ', vm.comments)

	// 	}, (reject) => {
	// 		// console.log(reject);
	// 	})
	// }

	function rateChannel (id,score) {
		CommentRateService.rateChannel(id,score).then((resp) => {
			console.log(resp.data)
			console.log('score now is: ', resp.data.channel.score)
			vm.channels.forEach(channel => {
				if (channel.id === id) channel.score = resp.data.channel.score;
			})
			vm.channels.sort(function(a, b) {
				console.log(a.score, b.score)
			  return b.score - a.score;
			})
			// vm.rate = resp.data.rate
			// vm.upVote = (function(){
			// 	console.log('clicked')
			// 	if(vm.add) {
			// 		vm.count += 1;
			// 	} else {
			// 		vm.count -= 1;
			// 	}
			// })
				// console.log('hi')
		})
	}

	// function addComment (comment) {
	// 	console.log(comment)
	// 	CommentRateService.addComment(comment.channel_id,comment).then((resp) => {
	// 		vm.addComments = resp.data.channels;
	// 		console.log(resp)
	// 	})
	// }




	function init () {
		ChannelService.getChannels($stateParams.id).then((resp) => {
			// console.log(vm.channels)
			vm.getChannel = resp.data;
			console.log(resp.data)
			vm.channels = resp.data.channels;
			console.log("channels are: ", resp.data.channels)
			if (vm.channels) vm.channels.forEach(function(channel){
				getThumbnails(channel);
				// getYoutubeVidz(channel);
				// getComments(channel);
			})

		}, (reject)=>{
			console.log(reject)
		})

	}

	init();

};




CategoryController.$inject = ['$http', 'SERVER', '$stateParams', 'CategoryService', 'ChannelService', '$state', 'SubscriberService', 'CommentRateService']

export { CategoryController }
