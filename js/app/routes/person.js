import Person from 'js/models/person';

var PersonRoute = Ember.Route.extend({
    model: function() {
        return new Person();
    }
});

export default PersonRoute;
