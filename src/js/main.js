import angular from 'angular';
import client_id from "./token";

import { routerConfig } from './route'

import { CategoryController } from './controller/category';

import 'angular-ui-router';

angular
  .module('app', ['ui.router'])
  .config(routerConfig)
  .controller('CategoryController', CategoryController)
