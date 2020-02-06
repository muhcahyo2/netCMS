<template>
  <v-layout>
    <v-container>
      <v-row>
        <h2>{{ singlePost.title }}</h2><br>
        <span v-html="$md.render(singlePost.body)" />
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      singlePost: this.$store.state.singlePost
    }
  },
  async fetch ({ store, params }) {
    await store.dispatch('getSinglePost', params.slug)
  }
}
</script>
