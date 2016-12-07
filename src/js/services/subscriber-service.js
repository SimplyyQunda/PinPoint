function SubscriberService ($http, SERVER, CategoryService, $stateParams, UserService) {

	this.getSubscriber = getSubscriber;
	this.getSubscribers = getSubscribers;
	// this.id = $stateParams.id;

	// this.Subscirber = Subscriber;

	function getSubscriber (id) {
		// console.log('subscribe to me')
		return $http.post(`${SERVER}categories/${id}/subscribe`, {}, { headers: UserService.getHeaders() });
	}

	function getSubscribers () {
		return $http.get(`${SERVER}subscriptions`, { headers: UserService.getHeaders() });
	}

};

SubscriberService.$inject = ['$http', 'SERVER', 'CategoryService', '$stateParams', 'UserService'];
export { SubscriberService };