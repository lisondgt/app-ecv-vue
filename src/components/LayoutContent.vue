<template>
    <div class="content">
        <h1 v-text="titleContent" class="content-title"></h1>
        <p>La valeur de la variable result est : {{ result }}</p>
        <p v-if="result === 0">Le paragraphe s'affiche car cette variable est égale à 0</p>
        <div class="content-actions">
            <button @click="increment">Incrément</button>
            <button @click="reset">Reset</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LayoutContent',
        data() {
            return {
                titleContent: 'Hello le monde',
                result: 0,
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

<style scope lang="scss">
  .content {
    min-height: calc(100vh - 148px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    h1 {
      color: blue;
    }

    p {
      margin-top: 0;
    }

    .content-actions {
      button {
        margin: 0 10px;
      }
    }
  }
</style>
