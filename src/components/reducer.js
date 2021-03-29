export const reducer = ({ timer, color }) => {
  if (timer < 1 && color === "Green") {
    return {
      timer: 5,
      color: "Yellow",
    };
  } else if (timer < 1 && color === "Yellow") {
    return {
      timer: 10,
      color: "Red",
    };
  } else if (timer < 1 && color === "Red") {
    return {
      timer: 10,
      color: "Green",
    };
  } else {
    return {
      timer: timer - 1,
      color: color,
    };
  }
};
