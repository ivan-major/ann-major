<template>
    <Header
      @toggleMenu="onToggleMenu"
      :pageName="route.name"
    />

    <div :class="`menu-nav ${isActiveMenu ? 'menu-nav_active' : ''}`">
        <Navigation @closeMenu="onCloseMenu" />
    </div>
    <slot />
    <Footer />
</template>

<script setup>
import { ref } from "vue"
import { /* RouterLink, */ useRoute } from "vue-router"
// import HelloWorld from './components/HelloWorld.vue'
import Header from "@/components/Header.vue"
import Navigation from "@/components/Navigation.vue"
import Footer from "@/components/Footer.vue"

const isActiveMenu = ref(false);

const onToggleMenu = () => {
    isActiveMenu.value = true;
}

const onCloseMenu = () => {
    isActiveMenu.value = false;
}

const route = useRoute()

console.log(route.name)
</script>

<style lang="scss">
.menu-nav {
    z-index: 1000;
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transform: translateY(-100%);
    transition: transform 0.5s ease;

    &_active {
        transform: translateY(0);
        // transition: transform .5s ease;
    }
}
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
