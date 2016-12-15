'use strict';

(function(){

class PostComponent {
  constructor($state, API) {
    angular.extend( this, {
      $state, API,
      loading: {},
      errors: {}
    });
  }

  $onInit() {
    if (this.$state.params.id) {
      this.getPost();
    } else {
      this.$state.go('tags', { tag: '' });
    }
  }

  getPost() {
    this.loading.post = true;
    this.errors.post = undefined;
    this.API.get(`posts/${this.$state.params.id}`)
      .then(response => {
        this.post = response;
      })
      .catch(error => this.errors.post = error)
      .finally(() => this.loading.post = false);
  }

  preview() {
    return [
      '<style type="text/css">',
      this.post.style,
      '</style>',
      this.post.markup,
      '<script type="text/javascript">',
      this.post.script,
      '</script>'
    ].join('');
  }
}

angular.module('myblogApp')
  .component('post', {
    templateUrl: 'app/post/post.html',
    controller: PostComponent
  });

})();
