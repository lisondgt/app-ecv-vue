<template>
  <div class="header">
    <router-link to="/"><img src="../assets/logo.png" alt="logo" class="header-logo"></router-link>
    <div class="header-nav">
      <ul>
        <li v-for="menu in menus" :key="menu.id"><router-link :to=menu.url>{{ menu.title }}</router-link></li>
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
        {id: 1, title: 'Utilisateurs', url:"/utilisateurs"},
        {id: 2, title: 'Posts', url:"/posts"},
        {id: 3, title: 'Photos', url:"/photos"},
        {id: 4, title: 'Stepper', url:"/stepper"},
        {id: 5, title: 'Administration', url:"/administration"}
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
