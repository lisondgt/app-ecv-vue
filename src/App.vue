<template>
  <div id="app">
    <div class="header">
      <img src="./assets/logo.png" alt="logo" class="header-logo">
      <div class="header-nav">
        <ul>
          <li v-for="menu in menus" :key="menu.id">{{menu.title}}</li>
        </ul>
      </div>
    </div>

    <div class="content">
      <h1 v-text="titleContent" class="content-title"></h1>
      <p>La valeur de la variable result est : {{result}}</p>
      <p v-if="result === 0">Le paragraphe s'affiche car cette variable est égale à 0</p>
      <div class="content-actions">
        <button @click="increment">Incrément</button>
        <button @click="reset">Reset</button>
      </div>
    </div>

    <div class="footer">
      <ul>
        <li v-for="link in links" :key="link.id">{{link.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      menus: [
        {id: 1, title: 'Menu 1'},
        {id: 2, title: 'Menu 2'},
        {id: 3, title: 'Menu 3'}
      ],
      titleContent: 'Hello le monde',
      result: 0,
      links: [
        {id: 1, title: 'Footer 1'},
        {id: 2, title: 'Footer 2'},
        {id: 3, title: 'Footer 3'}
      ]
    }
  },
  methods: {
    reset() {
      this.result = 0
    },
    increment() {
      this.result++
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
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
  .content {
    min-height: calc(100vh - 148px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    p {
      margin-top: 0;
    }
    .content-actions {
      button {
        margin: 0 10px;
      }
    }
  }
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
}
</style>
