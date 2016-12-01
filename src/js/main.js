import angular from 'angular';
import api_key from "./token";
import 'angular-cookies';

import { routerConfig } from './route'

import { HomeController } from './controller/home';
import { CategoryController } from './controller/category';
import { LayoutController } from './controller/layout';
import { CategoryService } from './services/categoryservice';
import { ProfileController } from './controller/profile';
import { LoginController } from './controller/login';

import 'angular-ui-router';

angular
  .module('app', ['ui.router','ngCookies'])
  .config(routerConfig)
  .controller('CategoryController', CategoryController)
  .controller('LayoutController', LayoutController)
  .controller('HomeController', HomeController)
  .controller('ProfileController',ProfileController)
  .controller('LoginController',LoginController)
  .service('CategoryService', CategoryService)
  // .constant('SERVER', SERVER);