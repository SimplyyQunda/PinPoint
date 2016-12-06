import angular from 'angular';
import api_key from "./token";
import 'angular-cookies';

import { run } from "./run";
import { routerConfig } from './route'

import { HomeController } from './controller/home';
import { CategoryController } from './controller/category';
import { LayoutController } from './controller/layout';
import { CategoryService } from './services/categoryservice';
import { UserService } from './services/user.service';
import { ChannelService } from './services/youtube.service';
import { SubscriberService } from './services/subscriber-service';
import { ProfileController } from './controller/profile';
import { LoginController } from './controller/login';
import { RegisterController } from './controller/register';
import { SERVER } from './server';

import 'angular-ui-router';

angular
  .module('app', ['ui.router','ngCookies'])
  .config(routerConfig)
  .run(run)
  .controller('CategoryController', CategoryController)
  .controller('LayoutController', LayoutController)
  .controller('HomeController', HomeController)
  .controller('ProfileController',ProfileController)
  .controller('LoginController',LoginController)
  .controller('RegisterController',RegisterController)
  .service('CategoryService', CategoryService)
  .service('ChannelService', ChannelService)
  .service('UserService', UserService)
  .service('SubscriberService', SubscriberService)
  .constant('SERVER', SERVER);