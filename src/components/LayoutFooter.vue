<template>
  <div class="footer">
    <ul>
      <li v-for="link in links" :key="link.id">{{ link.title }}</li>
    </ul>
  </div>
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

<style scope lang="scss">
.footer {
  background-color: #dadada;
  padding: 20px 40px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0 -10px;
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      padding: 0 10px;
    }
  }
}
</style>
