function ChannelService ($http, SERVER, CategoryService) {

	this.addChannel = addChannel;
	this.getChannels = getChannels;
	this.getThumbnails = getThumbnails;

	function addChannel (channel) {
		console.log(SERVER)
    	return $http.post(`${SERVER}channels`, channel);
	}

	function getChannels (id) {
		return $http.get(`${SERVER}categories/${id}`);
	}

	function getThumbnails (id) {
		return $http.get(`${SERVER}categories/${id}`);
	}
};

ChannelService.$inject = ['$http', 'SERVER', 'CategoryService'];
export { ChannelService };