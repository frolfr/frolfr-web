import Ember from 'ember';

const { Component, computed } = Ember;
const defaultAvatar = 'http://res.cloudinary.com/frolfr/image/upload/v1450881126/avatar-placeholder_n7w7z8.png';

export default Component.extend({
  attributeBindings: [ 'alt', 'src', 'title' ],
  classNames: 'avatar',
  defaultAvatar,
  tagName: 'img',
  user: null,

  alt: computed.alias('user.fullName'),
  src: computed.or('user.avatarUrl', 'defaultAvatar'),
  title: computed.alias('user.fullName')
});
