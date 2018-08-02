import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('courses');
  this.route('login');
  this.route('rounds', function() {
    this.route('new');
  });
  this.route('users', function() {
    this.route('new');
  });

  this.route('course', { path: 'courses/:id' }, function() {
    this.route('scorecards');
  });
  this.route('round', { path: 'rounds/:id' }, function() {
    this.route('turns', { path: 'holes/:number' });
  });
  this.route('user', { path: 'users/:id' }, function() {
    this.route('scorecards');
  });
  this.route('profile');
});

export default Router;
