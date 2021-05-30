const { expect } = require('@jest/globals');
const { test } = require('jest-circus');
const intern = require('../index');

test('checking to see is this is an intern', () => {
    expect(sum(1,2)).toBe(3);
});