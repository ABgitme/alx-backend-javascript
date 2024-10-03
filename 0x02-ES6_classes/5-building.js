export default class Building {
  constructor(sqft) {
    // Validate that the sqft is a number
    if (typeof sqft !== 'number') {
      throw new TypeError('Square footage must be a number');
    }

    // Assign the attribute with an underscore version
    this._sqft = sqft;

    // Check if the class extending this one has the evacuationWarningMessage method
    if (
      this.constructor !== Building
      && this.evacuationWarningMessage === undefined
    ) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Abstract method (must be implemented by subclasses)
  static evacuationWarningMessage() {
    throw new Error(
      'Class extending Building must override evacuationWarningMessage',
    );
  }
}
