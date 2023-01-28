export default {
  methods: {
    $modalClose(value) {
      this.$vfm.getTopModal()?.modalClose(value)
    }
  }
}
