export const divide = (x, y) => {
  
  if (typeof x === "string" || typeof y === "string") {
    return null;
  }
  
  return x / y;
};
