<template>
  <div id="app">
    <v-app>
      <layout-header></layout-header>
      <layout-content></layout-content>
      <layout-footer></layout-footer>
    </v-app>

  </div>
</template>

<script>
import LayoutHeader from "./components/LayoutHeader";
import LayoutContent from "./components/LayoutContent";
import LayoutFooter from "./components/LayoutFooter";
export default {
  name: 'App',
  components: {
    LayoutHeader,
    LayoutContent,
    LayoutFooter
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>
