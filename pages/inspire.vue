<template>
  <v-layout>
    <v-container>
      <v-row>
        <v-col
          v-for="(post,n) in blogPosts"
          :key="n"
          cols="12"
          sm="4"
        >
          <v-card
            :dark="true"
            :to="'/'+post.slug"
            class="pa-2"
            outlined
            tile
          >
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
              Number 10
            </v-card-subtitle>

            <v-card-text class="text--primary">
              <div v-html="$md.render(post.body)" />
            </v-card-text>

            <v-card-actions>
              <v-btn
                text
              >
                Share
              </v-btn>

              <v-btn
                color="red"
                text
              >
                Explore
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  computed: {
    blogPosts () {
      return this.$store.state.blogPosts
    }
  }
}
</script>
