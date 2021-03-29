export const reducer = ({ state, floor }, newFloor) => {
  if (floor > newFloor) {
    return {
      state: "Going down",
      floor: newFloor,
    };
  } else if (floor < newFloor) {
    return {
      state: "Going up",
      floor: newFloor,
    };
  } else {
    return {
      state: "Idle",
      floor,
    };
  }
}