'use strict';

(function(){

class TagsComponent {
  constructor(API, $state) {
    angular.extend(this, {
      API, $state,
      loading: {},
      errors: {},
      end: false
    });
  }

  $onInit() {
    this.getPosts();
    console.log(this.$state.params);
  }

  getPosts() {
    this.loading.posts = true;
    this.errors.posts = undefined;
    this.API.get(`posts?tag=${this.$state.params.tag}`)
      .then(posts => {
        this.posts = posts;
        this.end = false;
      })
      .catch(error => this.errors.posts = error)
      .finally(() => this.loading.posts = false);
  }

  addThings() {
    if (this.posts && !this.loading.more && !this.end) {
      this.loading.more = true;
      this.errors.more = undefined;
      this.API.get(`posts?tag=${this.$state.params.tag}&start=${this.posts[this.posts.length - 1].createdAt}`)
        .then(posts => {
          if (posts.length === 0) {
            this.end = true;
          } else {
            this.posts = this.posts.concat(posts);
          }
        })
        .catch(error => this.errors.more = error)
        .finally(() => this.loading.more = false);
    }
  }
}

angular.module('myblogApp')
  .component('tags', {
    templateUrl: 'app/tags/tags.html',
    controller: TagsComponent
  });

})();
