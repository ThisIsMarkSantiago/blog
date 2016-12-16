'use strict';

angular.module('myblogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tags', {
        url: '/tags/:tag',
        template: '<tags></tags>',
        data: {
          meta: {
            'title': 'Tags',
            'description': 'Posts by tag'
          }
        }
      });
  });
