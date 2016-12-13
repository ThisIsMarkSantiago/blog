'use strict';

(function() {

  class AdminController {
    constructor(Auth) {
      this.user = Auth.getCurrentUser();
    }
  }

  angular.module('myblogApp.admin')
    .controller('AdminController', AdminController);
})();
