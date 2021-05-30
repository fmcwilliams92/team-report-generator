const Engineer = require('../lib/Engineer');

// test the intermin object
test('creates an engineer object', () => {
    const engineer = new Engineer('Fred', '404', 'fredmcwilliams92@gmail.com', 'fmcwilliams92');
    expect(engineer.name).toBe('Fred');
    expect(engineer.id).toBe('404');
    expect(engineer.email).toBe('fredmcwilliams92@gmail.com');
    expect(engineer.github).toBe('fmcwilliams92');
});

// get github
test('get users GitHub info', () => {
    const engineer = new Engineer('Fred', '404', 'fredmcwilliams92@gmail.com', 'fmcwilliams92');
    expect(engineer.getGitHub()).toBe('fmcwilliams92');
});

// get role
test('retreive the users role', () => {
    const engineer = new Engineer('Fred', '404', 'fredmcwilliams92@gmail.com', 'fmcwilliams92');
    expect(engineer.getRole()).toBe('Engineer');
});