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
test('creates a new employee name', () => {
    const employee = new Employee('Fred', '404', 'fredmcwilliams92@gmail.com');
    expect(employee.getName()).toBe('Fred');
});

// test ID
test('test the users ID', () => {
    const employee = new Employee('Fred', '404', 'fredmcwilliams92@gmail.com');
    expect(employee.getId()).toBe('404');
});

// tests for the users email
test('test for the users email', () => {
    const employee = new Employee('Fred', '404', 'fredmcwilliams92@gmail.com');
    expect(employee.getEmail()).toBe('fredmcwilliams92@gmail.com');
});

// test role
test('retreive the users role', () => {
    const employee = new Employee('Fred', '404', 'fredmcwilliams92@gmail.com');
    expect(employee.getRole()).toBe('Employee');
});