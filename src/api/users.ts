export const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    //Check if the request was successful
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    
    // Return parsed JSON data
    return response.json();
  };
  