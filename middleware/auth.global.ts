// middleware/auth.global.ts

import { useUser } from '~/composables/useUser'; // Import the useUser composable
import { navigateTo } from '#app'; // Import navigateTo from Nuxt 3

// Define the middleware
export default defineNuxtRouteMiddleware((to, from) => {
  const user = useUser(); // Using the composable to get the user state

  if (!user.value) {
    return navigateTo('/login'); // Redirect to the login page if not authenticated
  }

  // Ensure requiredRoles is an array of strings
  const requiredRoles: string[] = (to.meta.roles as string[]) || [];

  // Example: Check if user has the required role for a specific page
  if (
    requiredRoles.length > 0 &&
    !requiredRoles.some((role: string) => user.value?.roles.includes(role))
  ) {
    return navigateTo('/forbidden'); // Redirect to a forbidden page or handle as needed
  }
});
