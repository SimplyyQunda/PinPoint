import angular from 'angular';
import api_key from "./token";

import { routerConfig } from './route'

import { HomeController } from './controller/home';
import { CategoryController } from './controller/category';
import { LayoutController } from './controller/layout';
import { CategoryService } from './services/categoryservice';

import 'angular-ui-router';

angular
  .module('app', ['ui.router'])
  .config(routerConfig)
  .controller('CategoryController', CategoryController)
  .controller('LayoutController', LayoutController)
  .controller('HomeController', HomeController)
  .service('CategoryService', CategoryService)
  // .constant('SERVER', SERVER);