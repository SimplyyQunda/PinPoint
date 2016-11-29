import api_key from "../token";

function CategoryController ($http,$stateParams) {

	let vm = this

	vm.choices = {};

	$http({
		method: 'GET',
		url:'https://www.googleapis.com/youtube/v3/videos',
		params: {
			part: 'id,snippet',
			chart: 'mostPopular',
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
