'use strict';

(function() {

  class AdminController {

    constructor(API, Auth) {
      angular.extend( this, {
        API,
        loading: {},
        errors: {},
        user: Auth.getCurrentUser(),
        post: {}
      });

      this.loading.posts = true;
      this.errors.posts = undefined;
      this.API.get('posts')
        .then(posts => this.posts = posts)
        .catch(error => this.errors.posts = error)
        .finally(() => this.loading.posts = false);
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

    edit(post) {
      // TODO
    }

    delete(post) {
      // TODO
    }
  }

  angular.module('myblogApp.admin')
    .controller('AdminController', AdminController);
})();
