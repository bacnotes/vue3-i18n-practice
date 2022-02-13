<template>
  <header class="header">
    <Navbar />
  </header>
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
.header {
  @apply sticky top-0 z-10  shadow-md bg-blue-100 p-5;
  screen md {
    @apply flex justify-between;
  }
}
</style>
