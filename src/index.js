// dataValidation.js

const validators = {
    string: (value, options) => {
      if (typeof value !== 'string') {
        return false;
      }
      if (options && options.minLength && value.length < options.minLength) {
        return false;
      }
      if (options && options.maxLength && value.length > options.maxLength) {
        return false;
      }
      if (options && options.pattern && !options.pattern.test(value)) {
        return false;
      }
      return true;
    },
    number: (value, options) => {
      if (typeof value !== 'number' || isNaN(value)) {
        return false;
      }
      if (options && options.min && value < options.min) {
        return false;
      }
      if (options && options.max && value > options.max) {
        return false;
      }
      return true;
    },
    boolean: (value) => {
      return typeof value === 'boolean';
    },
    array: (value, options) => {
      if (!Array.isArray(value)) {
        return false;
      }
      if (options && options.minLength && value.length < options.minLength) {
        return false;
      }
      if (options && options.maxLength && value.length > options.maxLength) {
        return false;
      }
      return true;
    },
  };
  
  function validate(data, schema) {
    const errors = {};
  
    for (const key in schema) {
      const { type, required, options } = schema[key];
  
      if (required && !(key in data)) {
        errors[key] = 'Required field.';
        continue;
      }
  
      if (data[key] === undefined || data[key] === null) {
        continue;
      }
  
      const validator = validators[type];
  
      if (!validator) {
        throw new Error(`Invalid validator type: ${type}`);
      }
  
      if (!validator(data[key], options)) {
        errors[key] = `Invalid value for ${key}.`;
      }
    }
  
    return Object.keys(errors).length === 0 ? null : errors;
  }
  
  module.exports = validate;
  const validate = require('dataValidation');

const data = {
  username: 'john_doe',
  age: 25,
  email: 'john@example.com',
  hobbies: ['reading', 'traveling'],
};

const schema = {
  username: { type: 'string', required: true, options: { minLength: 3, maxLength: 20 } },
  age: { type: 'number', required: true, options: { min: 18 } },
  email: { type: 'string', required: true, options: { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ } },
  hobbies: { type: 'array', required: false, options: { minLength: 1 } },
};

const errors = validate(data, schema);

if (errors) {
  console.log('Validation errors:', errors);
} else {
  console.log('Data is valid.');
}