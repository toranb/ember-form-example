var PersonController = Ember.ObjectController.extend({
    actions: {
        submit: function() {
            console.log('fire off some ajax stuff here');
        }
    }
});

export default PersonController;
