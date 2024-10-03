// Import the ClassRoom class
import ClassRoom from './0-classroom';

// Function to initialize rooms
export default function initializeRooms() {
  return [
    new ClassRoom(19), // First ClassRoom object with size 19
    new ClassRoom(20), // Second ClassRoom object with size 20
    new ClassRoom(34), // Third ClassRoom object with size 34
  ];
}
