export const getRandomColor = () => {
  const alphabet = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += alphabet[Math.floor(Math.random() * 12)];
  }
  return color;
};
