export default {
  data() {
    return {
      returnValue: null
    }
  },
  mounted() {
    this.$parent.$parent.$parent.slotVnode = this
  },
  methods: {
    setReturnValue(value) {
      this.returnValue = value
    }
  }
}
