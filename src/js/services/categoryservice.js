import { SERVER } from "../server";

function CategoryService ($http) {

  this.allCategories = function () {
    return $http.get(SERVER);
  };

};

CategoryService.$inject = ['$http'];
export { CategoryService };