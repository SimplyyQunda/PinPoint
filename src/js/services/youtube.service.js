function ChannelService ($http, SERVER) {

	this.addChannel = addChannel;

	function addChannel (channel) {
		console.log(SERVER)
    	return $http.post(`${SERVER}channels`, channel);
	}
};

ChannelService.$inject = ['$http', 'SERVER'];
export { ChannelService };