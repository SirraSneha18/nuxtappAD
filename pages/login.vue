<!-- pages/login.vue -->
<template>
  <div>
    <h1>Login Page</h1>
    <p>Please login to access the application.</p>
    <button @click="login">Login</button>
  </div>
</template>

<script setup>
// Simulate a login function (replace with actual authentication logic)
function login() {
  // Replace with actual login logic
  alert('This should redirect to Azure AD login page');
  // After login, set user data in useUser composable
  useUser().value = { name: 'Authenticated User', roles: ['reader'] };
  navigateTo('/');
}
</script>
