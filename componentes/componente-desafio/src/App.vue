<template>
  <v-app>
    <app-menu/>
    <v-toolbar app>
      <app-toolbar/>
    </v-toolbar>
    <v-content>
      <app-carousel/>
    </v-content>
    <app-footer/>
  </v-app>
</template>

<script>
import Menu from "./Menu.vue";
import Toolbar from "./Toolbar.vue";
import Carousel from "./Carousel.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    "app-menu": Menu,
    "app-toolbar": Toolbar,
    "app-carousel": Carousel,
    "app-footer": Footer
  }
};
</script>
