export const state = () => ({
  blogPosts: [],
  singlePost: {}
})

export const mutations = {
  setBlogPosts (state, list) {
    state.blogPosts = list
  },
  setSinglePost (state, post) {
    state.singlePost = post
  }
}

export const actions = {
  async nuxtServerInit ({ commit }) {
    const files = await require.context('~/assets/content/blog/', false, /\.json$/)
    const blogPosts = files.keys().map((key) => {
      const res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setBlogPosts', blogPosts)
  },
  async getSinglePost ({ commit }, params) {
    const singlePost = await require('~/assets/content/blog/' + params + '.json')
    // eslint-disable-next-line
    // console.log( singlePost )
    await commit('setSinglePost', singlePost)
  }
}
