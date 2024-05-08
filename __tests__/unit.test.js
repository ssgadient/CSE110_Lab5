// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// Test phone number
test('dashes', () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});

test('parentheses', () => {
  expect(isPhoneNumber("(123)456-7890")).toBe(true);
});

test('improper format', () => {
  expect(isPhoneNumber("(123-456)7890")).toBe(false);
});

test('improper characters', () => {
  expect(isPhoneNumber("12345a7890")).toBe(false);
});

// Test emails
test('normal email', () => {
  expect(isEmail("sgadient@ucsd.edu")).toBe(true);
});

test('special characters email', () => {
  expect(isEmail("abc_123@example.com")).toBe(true);
});

test('invalid email', () => {
  expect(isEmail(".email@example.com")).toBe(false);
});

test('link', () => {
  expect(isEmail("www.google.com")).toBe(false);
});

// Test strong password
test('min length', () => {
  expect(isStrongPassword("a_1C")).toBe(true);
});

test('max length', () => {
  expect(isStrongPassword("a1B2C3d4e5F6g7_")).toBe(true);
});

test('does not begin with letter', () => {
  expect(isStrongPassword("12345678")).toBe(false);
});

test('invalid characters', () => {
  expect(isStrongPassword("abcde\"fg\"")).toBe(false);
});

// Test date
test('two character month', () => {
  expect(isDate("01/01/2000")).toBe(true);
});

test('one character month', () => {
  expect(isDate("1/01/2000")).toBe(true);
});

test('invalid characters', () => {
  expect(isDate("1//01/2000")).toBe(false);
});

test('two digit year', () => {
  expect(isDate("01/01/00")).toBe(false);
});

// Test hex color
test('three character hex color', () => {
  expect(isHexColor("#123")).toBe(true);
});

test('six character hex color', () => {
  expect(isHexColor("#AbCdEf")).toBe(true);
});

test('invalid characters', () => {
  expect(isHexColor("12345G")).toBe(false);
});

test('four character hex color', () => {
  expect(isHexColor("ABCD")).toBe(false);
});