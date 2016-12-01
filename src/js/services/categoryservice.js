function CategoryService ($http, SERVER) {

  this.allCategories = allCategories;	  
  
  function allCategories () {
  	console.log(SERVER)
    return $http.get(SERVER);
  };

};

CategoryService.$inject = ['$http', 'SERVER'];
export { CategoryService };