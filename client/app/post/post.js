'use strict';

angular.module('myblogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('post', {
        url: '/post/:id',
        template: '<post></post>'
      });
  });
