<template>
  <div>
    <div v-if="auth.isLoggedIn" class="image-container">
      <img
        v-for="image in images.images"
        :src="image.link"
        :key="image.link"
        alt=""
      />
    </div>
    <h2 v-else>Log in to get started!</h2>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/auth";
import { useImagesStore } from "../stores/images";

export default {
  setup() {
    const images = useImagesStore();
    const auth = useAuthStore();

    return { images, auth };
  },
  async created() {
    await this.images.fetchImages(window.location.hash);
  },
};
</script>

<style scoped>
.image-container {
  column-count: 3;
  column-gap: 0;
}

img {
  max-width: 100%;
  padding: 5px;
}
</style>