<template>
  <Wrapper>
    <img
      class="card--img"
      :src="
        user.picture.large ||
        'https://i.pinimg.com/originals/1f/7c/70/1f7c70f9b5b5f0e1972a4888468ed84c.jpg'
      "
      alt="user"
      aria-describedby="user-photo"
    />
    <div class="card__content">
      <span class="card__content--tag">{{
        user.gender === "male" ? "♂" : "♀"
      }}</span>
      <span class="card__content--tag">{{ user.dob.age }}</span>
      <span class="card__content--tag">{{ user.location.city }}</span>
    </div>
  </Wrapper>
</template>

<script>
import Wrapper from "@/components/UI/Wrapper";
export default {
  components: {
    Wrapper,
  },
  props: {
    user: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  &--img {
    @apply object-cover rounded;
  }
  &__content {
    @apply flex flex-wrap items-center;
    &--tag {
      @apply inline-block bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2;
    }
  }
}
</style>
