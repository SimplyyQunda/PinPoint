function ChannelService ($http, SERVER, CategoryService) {

	this.addChannel = addChannel;
	this.getChannel = getChannel;
	this.getThumbnails = getThumbnails;

	function addChannel (channel) {
		console.log(SERVER)
    	return $http.post(`${SERVER}channels`, channel);
	}

	function getChannel (id) {
		return $http.get(`${SERVER}categories/${id}`);
	}

	function getThumbnails (id) {
		return $http.get(`${SERVER}categories/${id}`);
	}
};

ChannelService.$inject = ['$http', 'SERVER', 'CategoryService'];
export { ChannelService };