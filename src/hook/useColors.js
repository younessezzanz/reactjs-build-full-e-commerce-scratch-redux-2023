const useColors = () => {
  const colors = [];

  for (let i = 1; i < 50; i++) {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    colors.push(randomColor);
  }

  return [colors];
};

export default useColors;
