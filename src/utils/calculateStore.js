export const calculateScore = (y) => {
  const x = Number(y);
  if (x > 10) return (10).toFixed(3);
  if (x === 0 || x === undefined) {
    return 'Brak ocen';
  } else {
    return x.toFixed(3);
  }
};
