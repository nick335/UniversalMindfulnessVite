

const formatDate = (dateString: string): string => {
  if (!dateString) return ''; // Return an empty string if dateString is empty
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return 'Invalid Date'; // Handle invalid date string
  }
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};


export default formatDate;