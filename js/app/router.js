var Router = Ember.Router.extend();

Router.map(function() {
    this.resource('person', { path: '/' });
});

export default Router;
