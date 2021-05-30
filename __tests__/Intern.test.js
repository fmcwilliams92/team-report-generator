const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

// test the intermin object
test('creates an intern object', () => {
    const intern = new Intern('Fred', '404', 'fredmcwilliams92@gmail.com', 'Winterfell University');
    expect(intern.name).toBe('Fred');
    expect(intern.id).toBe('404');
    expect(intern.email).toBe('fredmcwilliams92@gmail.com');
    expect(intern.school).toBe('Winterfell University');
});

// get school
test('get users school info', () => {
    const intern = new Intern('Fred', '404', 'fredmcwilliams92@gmail.com', 'Winterfell University');
    expect(intern.getSchool()).toBe('Winterfell University');
});

// get role
test('retreive the users role', () => {
    const intern = new Intern('Fred', '404', 'fredmcwilliams92@gmail.com', 'Winterfell University');
    expect(intern.getRole()).toBe('Intern');
});