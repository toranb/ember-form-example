import Resolver from 'ember/resolver';

var App = Ember.Application.extend({
  modulePrefix: 'js',
  rootElement: '#ember-application',
  Resolver: Resolver['default']
});

export default App;
