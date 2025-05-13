import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../api/users';

const Users = () => {
  // Calling useQuery to fetch data
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['users'],     // Cache key (must be unique)
    queryFn: fetchUsers,     // Function to fetch the data
  });

  // Show loading UI
  if (isLoading) return <p>Loading users...</p>;

  // Show error if any
  if (isError) return <p>Error: {(error as Error).message}</p>;

  // Render list of users
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {data.map((user: any) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
