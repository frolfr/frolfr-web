import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bottom-nav-item', 'Integration | Component | bottom nav item', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bottom-nav-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bottom-nav-item}}
      template block text
    {{/bottom-nav-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
