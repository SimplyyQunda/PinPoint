function CategoryService ($http, SERVER, UserService) {

  this.allCategories = allCategories;
  this.createCategory = createCategory;
  this.addCategory = addCategory;
  this.updateCategory = updateCategory;


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

  function updateCategory (category) {
    return $http.put(`${SERVER}categories/${category.id}`, category, { headers: UserService.getHeaders() });

  }


};

CategoryService.$inject = ['$http', 'SERVER', 'UserService'];
export { CategoryService };