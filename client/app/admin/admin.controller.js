'use strict';

(function() {

  class AdminController {
    constructor(Auth) {

      angular.extend( this, {
        user: Auth.getCurrentUser(),
        post: {}
      });
    }

    preview() {
      return [
        '<style type="text/css">',
        this.post.style,
        '</style>',
        '<h1>',
        this.post.title,
        '</h1>',
        this.post.markup,
        '<script type="text/javascript">',
        this.post.script,
        '</script>'
      ].join('');
    }

    submit(form) {
      if (form.$valid) {
        // TODO
      }
    }
  }

  angular.module('myblogApp.admin')
    .controller('AdminController', AdminController);
})();
