import api_key from "../token";

function CategoryController ($http,$stateParams,CategoryService, ChannelService, $state) {

	let vm = this;
	// vm.getChannel = getChannel;
	// vm.title = $stateParams.title;
		vm.channels = [];
	// console.log($stateParams)

	vm.choices = {};

	// $http({
	// 	method: 'GET',
	// 	url:'https://www.googleapis.com/youtube/v3/channels',
	// 	params: {
	// 		part: 'snippet,statistics',
	// 		id: 'UCWD296-oeygjyIY8WSOFbBA',
	// 		key: api_key
	// 	}
	// }).then((resp) => {
 //      vm.choices = resp.data;
 //      console.log(resp.data)
	// }).catch(error => {
	// 	// console.log(error)
	// });

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




CategoryController.$inject = ['$http','$stateParams', 'CategoryService', 'ChannelService', '$state']

export { CategoryController }
