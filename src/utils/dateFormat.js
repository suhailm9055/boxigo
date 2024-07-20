export const formatDate = (dateString) => {
    const date = new Date(dateString);
  
    const options = { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric', 
      hour: 'numeric', 
      minute: 'numeric', 
      hour12: true 
    };
  
    return date.toLocaleString('en-US', options).replace(',', ' at');
  };