function SubscriberService ($http, SERVER, CategoryService, $stateParams, UserService) {

	this.getSubscriber = getSubscriber;
	// this.id = $stateParams.id;

	// this.Subscirber = Subscriber;

	function getSubscriber (id) {
		// console.log('subscribe to me')
		return $http.post(`${SERVER}categories/${id}/subscribe`, {}, { headers: UserService.getHeaders() });
	}

};

SubscriberService.$inject = ['$http', 'SERVER', 'CategoryService', '$stateParams', 'UserService'];
export { SubscriberService };