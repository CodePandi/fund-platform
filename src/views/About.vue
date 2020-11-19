<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ id }}</p>
  </div>
</template>

<script>
export default {
  name: "About",
  props: ["id"],
  beforeRouteEnter(to, from, next) {
    console.log(to.meta);
    next();
  },
};
</script>

<style>
</style>