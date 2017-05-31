import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('courses');
  this.route('users');

  this.route('course', { path: 'courses/:id' });
  this.route('user', { path: 'users/:id' }, function() {
    this.route('scorecards');
  });
});

export default Router;
