import api_key from "../token";

function ChannelController ($http, SERVER, $state, $stateParams, CategoryService, ChannelService, CommentRateService) {
	let vm = this;
	vm.getChannel = null;
	vm.comments = [];
	vm.addChannel = addChannel;
	vm.addComment = addComment;
	vm.id = $stateParams.id;
	vm.showComments = false;


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

  	function getYoutubeVidz (channel) {
		console.log(channel.google_id)
		$http({
			method: 'GET',
			url: 'https://www.googleapis.com/youtube/v3/search',
			params:{
				part: 'snippet',
				channelId: channel.google_id,
				key: api_key
			}
		}).then((resp) => {
			channel.videos = resp.data.items;
//			vm.videos = resp.data.items;
			// console.log('youtube videos: ', resp.data.items[0].id.videoId)
		})
	}

	function getComments (channel) {
		CommentRateService.getComments(channel.id).then((resp) => {
			// console.log(resp)
			vm.comments = resp.data.comments;
			console.log(vm.comments)
			// vm.comments = resp.data.comments;
			// console.log('comments are: ', vm.comments)

		}, (reject) => {
			// console.log(reject);
		})
	}

	function addComment (comment) {
		console.log(comment)
		CommentRateService.addComment(comment.channel_id,comment).then((resp) => {
			vm.addComments = resp.data.channels;
			console.log(resp)
		})
	}

	function init () {
		ChannelService.getSingleChannel($stateParams.id).then((resp) => {
			// console.log(vm.channels)
			console.log(resp.data);
			vm.getChannel = resp.data;
			getYoutubeVidz(vm.getChannel);
			getComments(vm.getChannel);
		})

	}

	init();



}
ChannelController.$inject = ['$http', 'SERVER', '$state', '$stateParams', 'CategoryService', 'ChannelService', 'CommentRateService'];
export { ChannelController };