<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">about</router-link>
      {{ name }}
    </div>
    <router-view />
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return { name: "" };
  },
  async mounted() {
    let res = await axios.get("http://127.0.0.1:3000/user");
    this.name = res.data.name;
  },
};
</script>
<style></style>
