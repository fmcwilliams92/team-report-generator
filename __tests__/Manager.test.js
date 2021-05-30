const Manager = require('../lib/Manager');

// test the intermin object
test('creates a manager object', () => {
    const manager = new Manager('Fred', '404', 'fredmcwilliams92@gmail.com', '1005');
    expect(manager.name).toBe('Fred');
    expect(manager.id).toBe('404');
    expect(manager.email).toBe('fredmcwilliams92@gmail.com');
    expect(manager.officeNumber).toBe('1005');
});

// get office number
test('get users office number info', () => {
    const manager = new Manager('Fred', '404', 'fredmcwilliams92@gmail.com', '1005');
    expect(manager.getOfficeNumber()).toBe('1005');
});

// get role
test('retreive the users role', () => {
    const manager = new Manager('Fred', '404', 'fredmcwilliams92@gmail.com', '1005');
    expect(manager.getRole()).toBe('Manager');
});