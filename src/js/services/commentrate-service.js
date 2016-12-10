function CommentRateService ($http, SERVER, $stateParams, ChannelService, UserService) {
	this.getComments = getComments;
	this.addComment = addComment;
	this.deleteComments = deleteComments;

	function getComments (id)	{
		return $http.get(`${SERVER}channels/${id}`);
	}

	function addComment (id,comment) {
		return $http.post(`${SERVER}channels/${id}/comments`, comment, { headers: UserService.getHeaders() });
	}

	function deleteComments () {
		return $http.delete(`${SERVER}channels/${id}/comments/${comment_id}`, { headers: UserService.getHeaders() });
	}

};

CommentRateService.$inject = ['$http', 'SERVER', '$stateParams', 'ChannelService', 'UserService']
export { CommentRateService };