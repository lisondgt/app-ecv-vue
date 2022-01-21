<template>
  <v-footer
      color="primary lighten-1"
  >
    <v-row
        justify="center"
        no-gutters
    >
      <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
      >
        {{ link.title }}
      </v-btn>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'LayoutFooter',
  data() {
    return {
      links: [
        {id: 1, title: 'Footer 1'},
        {id: 2, title: 'Footer 2'},
        {id: 3, title: 'Footer 3'}
      ]
    }
  },
}
</script>
