<!-- app.vue -->
<template>
  <div v-if="user">
    <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li v-if="user.roles.includes('admin')"><NuxtLink to="/admin">Admin</NuxtLink></li>
        <li><button @click="logout">Logout</button></li>
      </ul>
    </nav>
    <NuxtPage />
  </div>
  <div v-else>
    <p>Redirecting to login...</p>
  </div>
</template>

<script setup>
import { useUser } from '~/composables/useUser';
import { useRouter } from '#imports';

const user = useUser();
const router = useRouter();

// If user is not authenticated, redirect to login
if (!user.value) {
  router.push('/login');
}

function logout() {
  // Implement logout logic here
  user.value = null;
  router.push('/login');
}
</script>
