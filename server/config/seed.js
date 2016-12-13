/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';

Thing.find({}).remove()
  .then(() => {
    // Thing.create({
    //   name: 'Deployment Ready',
    //   info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
    //          'and openshift subgenerators'
    // });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      role: 'admin',
      name: 'Mark',
      email: 'mark@markedblog.com',
      password: 'markpogi'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
