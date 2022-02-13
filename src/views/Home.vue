<template>
  <div class="wrapper">
    <Card v-for="item in 30" :key="item.index" />
  </div>
</template>

<script>
import Card from "@/components/Card";
export default {
  name: "Home",
  components: {
    Card,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.wrapper {
  @apply relative flex flex-wrap gap-5 justify-center px-5 py-5 m-5 bg-fixed;
  background-image: url("https://source.unsplash.com/1600x900/?landscape");
}
</style>
