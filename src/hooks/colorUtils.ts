const colors = ['bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400'];

export const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};