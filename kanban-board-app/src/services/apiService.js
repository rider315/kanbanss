import axios from 'axios';

export const fetchTickets = async () => {
  try {
    const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
    return response.data;  // Return the entire data (tickets and users)
  } catch (error) {
    console.error('Error fetching tickets:', error);
    throw new Error('Unable to fetch tickets at this time. Please try again later.');
  }
};
