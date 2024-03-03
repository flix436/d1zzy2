# Data Validation Library

## Overview

The Data Validation Library is a lightweight JavaScript package for validating data input in Node.js applications. It provides a simple and flexible way to validate various data types, including strings, numbers, dates, and custom data structures.

## Installation

You can install the Data Validation Library via npm:

```bash
npm install data-validation-library
```

## Usage

### Basic Usage

```javascript
const { validate } = require('data-validation-library');

// Define validation rules
const rules = {
    username: 'required|string',
    email: 'required|email',
    age: 'required|numeric|min:18',
};

// Data to validate
const data = {
    username: 'john_doe',
    email: 'john@example.com',
    age: 25,
};

// Validate data
const validationResult = validate(data, rules);

if (validationResult.passes()) {
    // Data is valid
} else {
    // Data is invalid
    const errors = validationResult.errors.all();
    console.log(errors);
}
```

### Available Validation Rules

- `required`: Field is required.
- `string`: Field must be a string.
- `numeric`: Field must be a numeric value.
- `email`: Field must be a valid email address.
- `min:value`: Field must have a minimum value (works with strings, numbers, and arrays).
- `max:value`: Field must have a maximum value (works with strings, numbers, and arrays).
- `date`: Field must be a valid date string.
- Custom validation rules can be defined using a callback function.

For detailed usage and examples, please refer to the [Documentation](#).

## Contribution

Contributions are welcome! If you find any bugs or have suggestions for improvement, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.