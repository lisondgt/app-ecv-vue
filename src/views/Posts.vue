<template>
  <div class="content-page">
    <v-container>
      <div class="posts">
        <h1>Page posts</h1>
        <v-card
            class="my-3"
            max-width="100%"
            v-for="post in posts" v-bind:key="post.id"
        >
          <v-card-text>
            <p class="text-h4 text--primary">
              {{ post.title }}
            </p>
            <div class="text--primary">
              {{ post.body }}
            </div>
          </v-card-text>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Posts',
  data() {
    return {
      posts: [],
    }
  },
  methods: {
    async getData() {
      try {
        const response = await this.$http.get(
            "http://jsonplaceholder.typicode.com/posts"
        );
        // JSON responses are automatically parsed.
        this.posts = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getData();
  },
}
</script>
