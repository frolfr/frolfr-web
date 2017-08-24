export function initialize(application) {
  application.inject('controller', 'ui', 'service:ui');
}

export default {
  name: 'ui-service',
  initialize
};
