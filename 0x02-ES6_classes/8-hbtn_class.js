export default class HolbertonClass {
  constructor(size, location) {
    // Validate the type of the attributes
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }

    // Store the attributes in underscore-prefixed variables
    this._size = size;
    this._location = location;
  }

  // When cast to a Number, return the size
  valueOf() {
    return this._size;
  }

  // When cast to a String, return the location
  toString() {
    return this._location;
  }
}
