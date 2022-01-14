<template>
  <div class="header">
    <img src="../assets/logo.png" alt="logo" class="header-logo">
    <div class="header-nav">
      <ul>
        <li v-for="menu in menus" :key="menu.id"><router-link to="/">{{ menu.title }}</router-link></li>
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
        {id: 1, title: 'Utilisateurs'},
        {id: 2, title: 'Posts'},
        {id: 3, title: 'Photos'},
        {id: 4, title: 'Stepper'},
        {id: 5, title: 'Administration'}
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
