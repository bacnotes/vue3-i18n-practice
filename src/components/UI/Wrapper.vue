<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.wrapper{
  @apply flex flex-col gap-5 items-center mx-5 px-5 py-3 rounded w-44 shadow-lg cursor-pointer hover:bg-indigo-200 hover:opacity-100 hover:scale-150 opacity-80
}
</style>