'use strict';

angular.module('myblogApp', [
    'myblogApp.auth',
    'myblogApp.admin',
    'myblogApp.constants',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'btford.socket-io',
    'ui.router',
    'ui.bootstrap',
    'validation.match',
    'infinite-scroll',
    'ngMeta',
    '720kb.socialshare'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  })
  .run(function(ngMeta) {
    ngMeta.init();
  })
  .config(function(ngMetaProvider) {
    ngMetaProvider.setDefaultTitle('Mark Santiago Blog');
  });
