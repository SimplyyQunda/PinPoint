import { SERVER } from "../server";

function CategoryService ($http, $cookies, SERVER) {

  this.allCategories = allCategories;	  
  this.login = login;
  this.create = create;
  this.isLoggedIn = isLoggedIn;
  this.isAdmin = isAdmin;
  this.setUser = setUser;
  this.logout = logout;
  this.getHeaders = getHeaders;


  function allCategories () {
    return $http.get(SERVER);
  };

  function login (user) {
  	return $http.post(`${SERVER}/login`, user);
  }

  function create (user) {
  	return $http.post(`${SERVER}/users`,user);
  }

  function isLoggedIn () {
    return $cookies.get('username') ? true : false;
  }

  function isAdmin () {
    return $cookies.get('admin') === 'true';
  }

  function logout () {
    $cookies.remove('username');
    $cookies.remove('access_token');
  }

   function setUser (data) {
    $cookies.put('username', data.username);
    $cookies.put('access_token', data.access_token);
    $cookies.put('admin', data.admin);
  }

  function getHeaders () {
    let token = $cookies.get('access_token');
    return {
      Authorization: `Bearer ${token}`
    };
  };

};

CategoryService.$inject = ['$http', '$cookies', 'SERVER'];
export { CategoryService };