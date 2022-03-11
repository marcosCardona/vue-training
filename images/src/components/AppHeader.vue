<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item">Image storage</router-link>

    <div class="right menu">
      <div v-if="auth.isLoggedIn" class="horizontal">
        <router-link to="/" class="item">Galleries</router-link>
        <router-link to="/upload" class="item" href="">Upload</router-link>
        <a class="item" href="" @click="auth.logout">Logout</a>
      </div>

      <a v-else href="#" class="ui item" @click="auth.login">Login</a>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "../stores/auth";

export default {
  setup() {
    const auth = useAuthStore();

    return { auth };
  },
};
</script>

<style scoped>
  .horizontal {
    display: flex;
    flex-direction: row;
  }
</style>