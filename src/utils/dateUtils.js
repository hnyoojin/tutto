const calculateTotal = (startDate, endDate) => {
  const diffTime = Math.abs(new Date(endDate) - new Date(startDate));
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

const calculateCompleted = (startDate, endDate) => {
  const today = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (today < start) return 0;
  if (today > end) return calculateTotal(startDate, endDate);

  const diffTime = Math.abs(today - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};

const calculateProgress = (completed, total) => {
  return Math.round((completed / total) * 30);
};

export { calculateTotal, calculateCompleted, calculateProgress };
