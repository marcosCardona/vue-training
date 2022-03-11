<template>
  <div>Please wait...</div>
</template>

<script>
import { useAuthStore } from "../stores/auth";

export default {
  setup() {
    const auth = useAuthStore();

    return { auth };
  },
  created() {
    this.auth.finalizeLogin(window.location.hash);
  },
};
</script>

<style>
</style>