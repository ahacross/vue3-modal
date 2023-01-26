export default {
  methods: {
    modalClose(value) {
      this.$parent.$parent.$parent.modalClose(value)
    }
  }
}
