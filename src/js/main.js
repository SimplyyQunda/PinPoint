import angular from 'angular';

import { CategoryController } from './controllers/catergory';

import 'angular-ui-router';

angular
  .module('app', ['ui.router'])
  .controller('CategoryController', CategoryController)
