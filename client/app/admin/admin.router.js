'use strict';

angular.module('myblogApp.admin')
  .config(function($stateProvider) {
    $stateProvider.state('admin', {
      url: '/admin',
      templateUrl: 'app/admin/admin.html',
      controller: 'AdminController',
      controllerAs: 'admin',
      authenticate: 'admin',
      data: {
        meta: {
          'title': 'Admin posts',
          'description': 'Admin posts page'
        }
      }
    });
  });
