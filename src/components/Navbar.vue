<template>
  <button
    @click.prevent.stop="toggleMenu"
    :class="{ 'is-active': isActive }"
    class="hamburger hamburger--3dy"
    type="button"
  >
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </button>
  <nav class="navbar">
    <router-link to="/"
      ><h1 class="navbar__title">{{ t("website.title") }}</h1>
    </router-link>
    <ul v-show="sizeChange >= 576 || isActive" class="navbar__menu">
      <li v-for="item in menu" :key="item.id" class="navbar__menu__item">
        <router-link :to="item.path" class="navbar-link">
          {{ item.title }}</router-link
        >
      </li>
    </ul>
  </nav>
  <select class="lang" v-model="locale" @change="selectChange($event)">
    <option class="lang--option" value="en">en</option>
    <option class="lang--option" value="jp">jp</option>
  </select>
</template>
<script>
import { watch, computed, ref } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n";
export default {
  setup() {
    let { t, locale } = useI18n();
    const store = useStore();
    const isActive = ref(false);
    const menu = computed(() => [
      {
        id: 1,
        title: t("menu.users"),
        path: "/users",
      },
      {
        id: 2,
        title: t("menu.schedule"),
        path: "/schedule",
      },
      {
        id: 2,
        title: t("menu.chat"),
        path: "/chat",
      },
    ]);
    const sizeChange = computed(() => store.state.windowWidth);
    window.addEventListener("resize", detectWindowWidth);
    function detectWindowWidth() {
      store.commit("setWindowWidth", window.innerWidth);
    }
    watch(locale, (newlocale) => {
      localStorage.setItem("locale", newlocale);
    });

    function toggleMenu() {
      isActive.value = !isActive.value;
    }

    function selectChange(event) {
      locale = event.target.value;
    }
    return { t, locale, isActive, menu, sizeChange, toggleMenu, selectChange };
  },
};
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  @apply text-red-300 underline font-semibold;
  text-decoration-thickness: 0.2rem;
  text-underline-offset: 2px;
}

.navbar {
  @apply relative flex flex-col items-center justify-evenly p-3 w-full;
  @screen md {
    @apply flex justify-between;
  }
  &__menu {
    @apply flex flex-col items-center mt-5 gap-5;
    &__item {
      @apply hover:text-red-300;
    }
    @screen md {
      flex: unset;
      position: unset;
      @apply flex flex-row justify-between;
    }
  }
  &__title {
    @apply mx-5 text-red-400 font-semibold text-3xl;
  }
}
.hamburger {
  @apply absolute top-8 z-50 inline-block cursor-pointer bg-transparent overflow-visible;
  // use tailwind, animation will be not smoothly
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  @screen md {
    display: none;
  }
}
.hamburger:hover,
.hamburger.is-active:hover {
  @apply opacity-75;
}

.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
  @apply bg-black;
}

.hamburger-box {
  @apply relative inline-block w-10 h-6;
}

.hamburger-inner {
  @apply block top-2/4;
}
.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  @apply absolute w-10 h-1 bg-black rounded;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}
.hamburger-inner::before,
.hamburger-inner::after {
  @apply block;
  content: "";
}
.hamburger-inner::before {
  // use tailwind, animation will be not smoothly
  top: -10px;
}
.hamburger-inner::after {
  bottom: -10px;
}

// animation
.hamburger--3dy .hamburger-box {
  perspective: 80px;
}

.hamburger--3dy .hamburger-inner {
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dy .hamburger-inner::before,
.hamburger--3dy .hamburger-inner::after {
  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.hamburger--3dy.is-active .hamburger-inner {
  @apply bg-transparent;
  transform: rotateX(-180deg);
}
.hamburger--3dy.is-active .hamburger-inner::before {
  @apply w-11;
  transform: translate3d(0, 10px, 0) rotate(45deg);
}
.hamburger--3dy.is-active .hamburger-inner::after {
  @apply w-11;
  transform: translate3d(0, -10px, 0) rotate(-45deg);
}

.lang {
  @apply absolute top-8 right-5 rounded;
}
</style>
<i18n>
{
  "en": {
    "website":  {
      "title":"Amazing Tour"
    },
    "menu": {
      "users": "Tour Guides",
      "schedule": "Tour Schedule",
      "chat": "Public Chatroom"
    }
  },
  "jp":{
    "website": {
      "title": "アメージングツアー"
    },
    "menu": {
      "users": "ガイドさん",
      "schedule": "スケジュール",
      "chat": "公開チャットローム"
    } 
  }
}
</i18n>
