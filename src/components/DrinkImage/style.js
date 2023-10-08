export const drinkImageStyle = (className) => {
  return {
    outer: `relative justify-between ${className}`,
    img: "",
    left: "z-20 absolute top-1/2 -translate-y-1/2 left-0",
    right: "z-20 absolute top-1/2 -translate-y-1/2 right-0",
  };
};
