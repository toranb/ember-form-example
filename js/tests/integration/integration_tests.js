var App;

module('integration tests', {
    setup: function() {
        App = startApp();
    },
    teardown: function() {
        Ember.run(App, 'destroy');
    }
});

var findInput = function(label) {
    return find('label:contains(' + label + ')').siblings('input').first();
};

test('required field password provides a legit user experience', function(assert) {
    visit('/');
    assert.contains('form-group', findInput('Password').parent().attr('class'));
    equal(find('#add_person').attr('disabled'), 'disabled');
    findInput('Password').val('12345678');
    click('#add_person');
    andThen(function(){
        assert.contains('form-group', findInput('Password').parent().attr('class'));
    });
    findInput('Password').val('');
    // triggerEvent('#password', 'keyup');
    // andThen(function(){
    //     assert.contains('form-group', findInput('Password').parent().attr('class'));
    //     assert.contains('has-error', findInput('Password').parent().attr('class'));
    // });
    // fillIn('#password', '12345678');
    // triggerEvent('#password', 'keyup');
    // andThen(function(){
    //     assert.contains('form-group', findInput('Password').parent().attr('class'));
    // });
});

test('required field name provides a legit user experience', function(assert) {
    visit('/');
    assert.contains('form-group', findInput('Name').parent().attr('class'));
    equal(find('#add_person').attr('disabled'), 'disabled');
    findInput('Name').val('abcdefg');
    click('#add_person');
    andThen(function(){
        assert.contains('form-group', findInput('Name').parent().attr('class'));
    });
    findInput('Name').val('');
    // triggerEvent('#name', 'keyup');
    // andThen(function(){
    //     equal('form-group has-error', find('#name').parent().attr('class'));
    // });
    // fillIn('#name', 'abc');
    // triggerEvent('#name', 'keyup');
    // andThen(function(){
    //     equal('form-group', find('#name').parent().attr('class'));
    // });
});

test('required field confirm password provides a legit user experience', function(assert) {
    visit('/');
    assert.contains('form-group', findInput('Confirm').parent().attr('class'));
    equal(find('#add_person').attr('disabled'), 'disabled');
    findInput('Confirm').val('123456789');
    findInput('Password').val('12345678');
    click('#add_person');
    andThen(function(){
        assert.contains('form-group', findInput('Confirm').parent().attr('class'));
        //assert.contains('has-error', findInput('Confirm').parent().attr('class'));
    });
    findInput('Confirm').val('123456789');
    findInput('Password').val('123456789');
    click('#add_person');
    andThen(function(){
        assert.contains('form-group', findInput('Confirm').parent().attr('class'));
    });
    // fillIn('#confirm_password', '12345678');
    // fillIn('#password', '123456789');
    // triggerEvent('#confirm_password', 'keyup');
    // andThen(function(){
    //     equal('form-group has-error', find('#confirm_password').parent().attr('class'));
    // });
    // fillIn('#confirm_password', '123456789');
    // fillIn('#password', '123456789');
    // triggerEvent('#confirm_password', 'keyup');
    // andThen(function(){
    //     equal('form-group', find('#confirm_password').parent().attr('class'));
    // });
});
