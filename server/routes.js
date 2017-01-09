/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';
import Post from './api/post/post.model';

export default function(app) {
  // Insert routes below
  app.use('/api/posts', require('./api/post'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth').default);

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      if (req.params && req.params[0] && req.params[0].indexOf('post/') === 0) {
        return Post.findById(req.params[0].split('post/')[1])
          .select('_id title previewText previewImage')
          .exec()
          .then(function (result) {
            if (!result) {
              return res.redirect('/');
            }
            return res.render(path.resolve(app.get('appPath') + '/index.html'), {
              locals: { title: result.title, post: result }
            });
          })
          .catch(function(err) {
            res.redirect('/');
          });
      } else {
        res.render(path.resolve(app.get('appPath') + '/index.html'), { locals: {}});
      }
    });
}
