function CommentrateService ($http, SERVER, $stateParams, ChannelService) {
	this.getComments = getComments;
	this.addComments = addComments;
	this.deleteComments = deleteComments;

	function getComments (id)	{
		return $http.get(`${SERVER}channels/${id}`);
	}

	function addComments (id) {
		return $http.post(`${SERVER}channels/${id}/comments`);
	}

	function deleteComments () {
		return $http.delete(`${SERVER}channels/${id}/comments/${comment_id}`);
	}

};

CommentrateService.$inject = ['$http', 'SERVER', '$stateParams', 'ChannelService']
export { CommentrateService };