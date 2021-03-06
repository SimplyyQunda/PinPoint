import angular from 'angular';
import api_key from "./token";
import 'angular-cookies';

import { run } from "./run";
import { routerConfig } from './route'

import { HomeController } from './controller/home';
import { CategoryController } from './controller/category';
import { ChannelController } from  './controller/channels'
import { LayoutController } from './controller/layout';
import { AddController } from './controller/add';
import { CategoryService } from './services/categoryservice';
import { UserService } from './services/user.service';
import { ChannelService } from './services/youtube.service';
import { SubscriberService } from './services/subscriber-service';
import { CommentRateService } from './services/commentrate-service';
import { ProfileController } from './controller/profile';
import { LoginController } from './controller/login';
import { RegisterController } from './controller/register';
import { SERVER } from './server';

import 'angular-ui-router';
import 'angular-youtube-embed';

angular
  .module('app', ['ui.router','ngCookies', 'youtube-embed'])
  .config(routerConfig)
  .run(run)
  .controller('CategoryController', CategoryController)
  .controller('ChannelController', ChannelController)
  .controller('LayoutController', LayoutController)
  .controller('HomeController', HomeController)
  .controller('AddController', AddController)
  .controller('ProfileController',ProfileController)
  .controller('LoginController',LoginController)
  .controller('RegisterController',RegisterController)
  .service('CategoryService', CategoryService)
  .service('ChannelService', ChannelService)
  .service('UserService', UserService)
  .service('SubscriberService', SubscriberService)
  .service('CommentRateService', CommentRateService)
  .constant('SERVER', SERVER);