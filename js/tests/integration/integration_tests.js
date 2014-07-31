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
    equal('form-group', find('#password').parent().attr('class'));
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

test('required field name provides a legit user experience', function() {
    visit('/');
    equal('form-group', find('#name').parent().attr('class'));
    click('#add_person');
    andThen(function(){
        equal('form-group has-error', find('#name').parent().attr('class'));
    });
    fillIn('#name', 'abc');
    click('#add_person');
    andThen(function(){
        equal('form-group', find('#name').parent().attr('class'));
    });
    fillIn('#name', '');
    triggerEvent('#name', 'keyup');
    andThen(function(){
        equal('form-group has-error', find('#name').parent().attr('class'));
    });
    fillIn('#name', 'abc');
    triggerEvent('#name', 'keyup');
    andThen(function(){
        equal('form-group', find('#name').parent().attr('class'));
    });
});

test('required field confirm password provides a legit user experience', function() {
    visit('/');
    equal('form-group', find('#confirm_password').parent().attr('class'));
    click('#add_person');
    andThen(function(){
        equal('form-group', find('#confirm_password').parent().attr('class'));
    });
    fillIn('#confirm_password', '123456789');
    fillIn('#password', '12345678');
    click('#add_person');
    andThen(function(){
        equal('form-group has-error', find('#confirm_password').parent().attr('class'));
    });
    fillIn('#confirm_password', '123456789');
    fillIn('#password', '123456789');
    click('#add_person');
    andThen(function(){
        equal('form-group', find('#confirm_password').parent().attr('class'));
    });
    fillIn('#confirm_password', '12345678');
    fillIn('#password', '123456789');
    triggerEvent('#confirm_password', 'keyup');
    andThen(function(){
        equal('form-group has-error', find('#confirm_password').parent().attr('class'));
    });
    fillIn('#confirm_password', '123456789');
    fillIn('#password', '123456789');
    triggerEvent('#confirm_password', 'keyup');
    andThen(function(){
        equal('form-group', find('#confirm_password').parent().attr('class'));
    });
});
