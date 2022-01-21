<template>
  <div class="content-page">
    <v-container>
      <layout-content></layout-content>
    </v-container>
  </div>
</template>

<script>
import LayoutContent from "@/components/LayoutContent";

export default {
  name: 'Home',
  components: {
    LayoutContent
  }
}
</script>
