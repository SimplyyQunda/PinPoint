function AddController ($state, $stateParams, CategoryService, ChannelService) {
	let vm = this;

	this.addChannel = addChannel;
	this.createCategory = createCategory
  this.updateCategory = updateCategory
	this.categories = []
	this.background_url = []

	function init () {
    CategoryService.allCategories().then((resp) => {
      vm.pin = resp.data;
      vm.categories = resp.data;
      console.log("this is it ",vm.categories)
    });
	};
	init();


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

  	function createCategory (cat) {
  		CategoryService.createCategory(cat).then((resp) => {
  			console.log(resp)
      		$state.go('root.category')
    	});
  	};

  	function updateCategory (category) {
      console.log('hi')
  		CategoryService.updateCategory(category).then((resp) => {
  			vm.background = resp.background;
  			console.log(resp)
  			$state.go('root.category',{id:category.id})
  		})
  	}

}
AddController.$inject = ['$state', '$stateParams', 'CategoryService', 'ChannelService'];
export { AddController };