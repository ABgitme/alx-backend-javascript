import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // Call the parent constructor (Building) with sqft
    super(sqft);

    // Validate that floors is a number
    if (typeof floors !== 'number') {
      throw new TypeError('Floors must be a number');
    }

    // Assign the floors attribute with an underscore version
    this._floors = floors;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
