var PersonController = Ember.ObjectController.extend({
    errors: [],
    name: '',
    password: '',
    confirm_password: '',
    has_name: true,
    has_password: true,
    name_observer: function(){
        this.set('has_name', this.get('name'));
    }.observes('name'),
    password_observer: function(){
        this.set('has_password', this.password_is_legit());
    }.observes('password'),
    has_confirm_password: function(){
        var password = this.get('password');
        var confirm_password = this.get('confirm_password');
        return confirm_password === password;
    }.property('password', 'confirm_password'),
    password_is_legit: function() {
        var password = this.get('password');
        return password.length > 7;
    },
    actions: {
        submit: function() {
            this.set('has_name', this.get('name'));
            this.set('has_password', this.password_is_legit());
        }
    }
});

export default PersonController;
