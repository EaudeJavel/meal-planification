export const getDateString = (selectedDate) => {
    let dateString;
    try {
      dateString = new Date(selectedDate).toLocaleDateString("en-EN", {
        weekday: "long",
        day: "numeric",
        month: "long",
      });
    } catch (error) {
      console.error(`Invalid date: ${selectedDate}`);
      dateString = "Invalid date";
    }
    return dateString;
  };
