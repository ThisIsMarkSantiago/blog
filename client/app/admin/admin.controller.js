'use strict';

(function() {

  class AdminController {

    constructor(API, Auth, Modal) {
      angular.extend( this, {
        API, Modal,
        loading: {},
        errors: {},
        user: Auth.getCurrentUser(),
        post: {},
        compose: false,
        end: false
      });

      this.getPosts();
    }

    getPosts() {
      this.loading.posts = true;
      this.errors.posts = undefined;
      this.API.get('posts')
        .then(posts => {
          this.posts = posts;
          this.end = false;
        })
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
        this.API[this.post._id ? 'put' : 'post'](`posts/${this.post._id || ''}`, this.post)
          .then(() => {
            this.post = {};
            this.compose = false;
            this.getPosts();
            form.$setPristine();
          })
          .catch(error => this.errors.submit = error)
          .finally(() => this.loading.submit = false);
      }
    }

    create() {
      this.compose = true;
      this.post = {};
    }

    edit(post) {
      this.loading.post = true;
      this.errors.post = undefined;
      this.API.get(`posts/${post._id}`)
        .then(response => {
          this.post = response;
          this.compose = true;
          angular.element('input[name="title"]').focus();
        })
        .catch(error => this.errors.post = error)
        .finally(() => this.loading.post = false);
    }

    delete(post) {
      this.Modal.confirm.delete(() => {
        this.loading.delete = true;
        this.errors.delete = undefined;
        this.API.delete(`posts/${post._id}`)
          .then(() => this.getPosts())
          .catch(error => this.errors.delete = error)
          .finally(() => this.loading.delete = false);
      })(post.title);
    }

    addTag(tag) {
      if (tag) {
        tag = tag.toLowerCase().split(' ').join('_');
        if (!this.post.tags) {
          this.post.tags = [];
        }
        if (this.post.tags.indexOf(tag) < 0) {
          this.post.tags.push(tag);
        }
      }
    }

    removeTag(index) {
      this.post.tags.splice(index, 1);
    }

    addThings() {
      if (this.posts && !this.loading.more && !this.end) {
        this.loading.more = true;
        this.errors.more = undefined;
        this.API.get(`posts?start=${this.posts[this.posts.length - 1].createdAt}`)
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

  angular.module('myblogApp.admin')
    .controller('AdminController', AdminController);
})();
