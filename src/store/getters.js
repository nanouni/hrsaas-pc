const getters = {
  sidebar: (state) => {
    return state.app.sidebar
  },
  device: state => state.app.device
  // token: state => state.user.token
}
export default getters

// 需求：访问app模块 ，state中sidebar
// this.$store.state.app.sidebar
// this.$store.getters.sidebar
