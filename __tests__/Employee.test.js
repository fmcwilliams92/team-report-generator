const { test, expect } = require('@jest/globals');
const { getMaxListeners } = require('process');
const Employee = require('../lib/Employee');

// test class
test('creates an employee object', () => {
    const employee = new Employee('Fred', '404', 'fredmcwilliams92@gmail.com');
    expect(employee.name).toBe('Fred');
    expect(employee.id).toBe('404');
    expect(employee.email).toBe('fredmcwilliams92@gmail.com');
});

// test name
test()