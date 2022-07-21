export const formatTime = (time) => {
  if (time) {
    try {
      const [hours, minutes] = time.split(":");
      const hoursInt = parseInt(hours);
      return hoursInt - 12 > 0
        ? `${hours - 12}:${minutes}pm`
        : `${hoursInt}:${minutes}am`;
    } catch (e) {}
  }
  return "";
};