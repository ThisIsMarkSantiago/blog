'use strict';

angular.module('myblogApp')
  .config(function($stateProvider) {
    $stateProvider.state('main', {
      url: '/',
      template: '<main></main>',
      data: {
        meta: {
          'title': 'Mark Santiago',
          'description': 'Tong tong tong teng'
        }
      }
    });
  });
