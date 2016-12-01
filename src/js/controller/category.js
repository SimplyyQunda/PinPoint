import api_key from "../token";

function CategoryController ($http,$stateParams) {

	let vm = this

	vm.choices = {};

	$http({
		method: 'GET',
		url:'https://www.googleapis.com/youtube/v3/channels',
		params: {
			part: 'snippet,statistics',
			id: 'UCWD296-oeygjyIY8WSOFbBA',
			key: api_key
		}
	}).then((resp) => {
      vm.choices = resp.data;
      console.log(resp.data)
	}).catch(error => {
		console.log(error)
	});

};


CategoryController.$inject = ['$http','$stateParams']

export { CategoryController }
