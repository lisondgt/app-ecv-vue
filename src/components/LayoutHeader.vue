<template>
  <div class="header">
    <img src="../assets/logo.png" alt="logo" class="header-logo">
    <div class="header-nav">
      <ul>
        <li v-for="menu in menus" :key="menu.id">{{ menu.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutHeader',
  data() {
    return {
      menus: [
        {id: 1, title: 'Menu 1'},
        {id: 2, title: 'Menu 2'},
        {id: 3, title: 'Menu 3'}
      ],
    }
  },
}
</script>

<style scope lang="scss">
.header {
  background-color: #dadada;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 50px;

  .header-logo {
    width: 50px;
  }

  .header-nav ul {
    list-style: none;
    padding: 0;
    margin: 0 -10px;
    display: flex;
    align-items: center;

    li {
      padding: 0 10px;
    }
  }
}
</style>
