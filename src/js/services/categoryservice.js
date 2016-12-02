function CategoryService ($http, SERVER, UserService) {

  this.allCategories = allCategories;
  this.createCategory = createCategory;
  this.addCategory = addCategory;

  function createCategory(cat){
  	return $http.post(`${SERVER}categories`, cat, { headers: UserService.getHeaders() });
  };	  
  
  function allCategories () {
  	console.log(SERVER)
    return $http.get(`${SERVER}categories`);
  }

  function addCategory (list) {
    let dem = {
      url: `${SERVER}categories`,
      method: 'POST',
      params: {
      	data:'title'
      }
    };

    return $http(dem);
  }


};

CategoryService.$inject = ['$http', 'SERVER', 'UserService'];
export { CategoryService };