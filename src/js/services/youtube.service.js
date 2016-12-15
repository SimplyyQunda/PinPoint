function ChannelService ($http, SERVER, CategoryService) {

	this.addChannel = addChannel;
	this.getChannels = getChannels;
	this.getThumbnails = getThumbnails;
	this.getSingleChannel = getSingleChannel;

	function addChannel (channel) {
		console.log(SERVER)
    	return $http.post(`${SERVER}channels`, channel);
	}

	function getChannels (id) {
		console.log(`${SERVER}categories/${id}`)
		return $http.get(`${SERVER}categories/${id}`);
	}

	function getSingleChannel (id) {
		return $http.get(`${SERVER}channels/${id}`);
	}

	function getThumbnails (id) {
		return $http.get(`${SERVER}categories/${id}`);
	}
};

ChannelService.$inject = ['$http', 'SERVER', 'CategoryService'];
export { ChannelService };