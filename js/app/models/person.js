Ember.Validations.validators.local.Match = Ember.Validations.validators.Base.extend({
    call: function() {
        var password = this.get('password');
        var confirm_password = this.get('confirm_password');
        if (password !== confirm_password) {
            this.errors.pushObject('The two passwords must match');
        }
    }
});

var Person = Ember.Object.extend(Ember.Validations.Mixin, {
    name: '',
    password: '',
    confirm_password: ''
}).reopen({
    validations: {
        password: {
            presence: true,
            length: { minimum: 8 }
        },
        name: {
            presence: true,
            length: { minimum: 5 }
        },
        confirm_password: {
            presence: true,
            match: true
        }
    }
});

export default Person;
