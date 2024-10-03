export default class Airport {
  constructor(name, code) {
    // Validate that name and code are strings
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }

    // Assign the attributes with underscore versions
    this._name = name;
    this._code = code;
  }

  // Default string description of the class
  toString() {
    return `[object ${this._code}]`;
  }
}
