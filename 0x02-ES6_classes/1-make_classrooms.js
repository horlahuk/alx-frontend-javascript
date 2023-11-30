import ClassRoom from './ClassRoom.js';

function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}

export default initializeRooms();
