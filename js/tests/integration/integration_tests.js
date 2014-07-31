var App;

module('integration tests', {
    setup: function() {
        App = startApp();
    },
    teardown: function() {
        Ember.run(App, 'destroy');
    }
});

test('required field password provides a legit user experience', function() {
    visit('/');
    equal(find('#password').parent().attr('class'), 'form-group');
    click('#add_person');
    andThen(function(){
        equal('form-group has-error', find('#password').parent().attr('class'));
    });
    fillIn('#password', '12345678');
    click('#add_person');
    andThen(function(){
        equal('form-group', find('#password').parent().attr('class'));
    });
    fillIn('#password', '');
    triggerEvent('#password', 'keyup');
    andThen(function(){
        equal('form-group has-error', find('#password').parent().attr('class'));
    });
    fillIn('#password', '12345678');
    triggerEvent('#password', 'keyup');
    andThen(function(){
        equal('form-group', find('#password').parent().attr('class'));
    });
});
