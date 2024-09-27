// composables/useUser.ts

type User = {
    name: string;
    roles: string[];
  } | null;
  
  export function useUser() {
    const user = useState<User>('user', () => null);
  
    async function fetchUser() {
      // Simulate fetching user data
      user.value = { name: 'Test User', roles: ['reader'] };
      // Replace this with actual logic to fetch user information
    }
  
    if (!user.value) {
      fetchUser();
    }
  
    return user;
  }
  