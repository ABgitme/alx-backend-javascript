/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create the row object with type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert the row and get a new RowID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Inserted row ID: ${newRowID}`);

// Update the row with a new age field
const updatedRow: RowElement = {
  ...row,
  age: 23,
};
CRUD.updateRow(newRowID, updatedRow);
console.log(`Updated row ID: ${newRowID}`);

// Delete the row
CRUD.deleteRow(newRowID);
console.log(`Deleted row ID: ${newRowID}`);
