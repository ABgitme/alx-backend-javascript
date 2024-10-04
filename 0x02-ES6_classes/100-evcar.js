import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call the parent constructor with brand, motor, and color
    this._range = range; // Store the range attribute
  }

  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  static get [Symbol.species]() {
    return Car;
  }
}
