<template>
  <div id="app">
    <v-app>
      <layout-header></layout-header>
      <router-view></router-view>
      <layout-footer></layout-footer>
    </v-app>

  </div>
</template>

<script>
import LayoutHeader from "./components/LayoutHeader";
import LayoutFooter from "./components/LayoutFooter";
export default {
  name: 'App',
  components: {
    LayoutHeader,
    LayoutFooter
  },
}
</script>

<style scope lang="scss">
body {
  margin: 0;
}
.content-page {
  min-height: calc(100vh - 161px);
  padding: 2rem 0;
}
h1 {
  margin-bottom: 20px;
}
</style>
