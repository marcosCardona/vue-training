<template>
  <div class="container">
    <img alt="Vue logo" src="./assets/logo.png" />
    <SearchBar @termChange="onTermChange"></SearchBar>
    <div class="row">
    <VideoDetail :video="selectedVideo"></VideoDetail>
    <VideoList @videoSelect="onVideoSelect" :videos="videos"></VideoList>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from "./components/SearchBar.vue";
import VideoList from "./components/VideoList.vue";
import VideoDetail from "./components/VideoDetail.vue";
const API_KEY = "<YOUR_API_KEY>";

export default {
  name: "App",
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  },
  data() {
    return {
      videos: [],
      selectedVideo: null
    };
  },
  methods: {
    async onTermChange(searchTerm) {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            key: API_KEY,
            type: "video",
            part: "snippet",
            q: searchTerm,
          },
        }
      );

      this.videos = response.data.items;
    },
    onVideoSelect(video) {
      this.selectedVideo = video;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
