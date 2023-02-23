<template>
  <canvas ref="tempCanvas" style="display: none" />
</template>

<script>
export default {
  name: 'makeTextPerLine',
  emits: ['lines'],
  props: {
    targetClass: {
      type: String,
      description:
        '유일하게 잡을 수 있도록 줘야 함 여기서 필요한 style 찾아서 canvas에 적용할 꺼임'
    },
    text: {
      type: String
    }
  },
  data() {
    return {
      target: null,
      ctx: null,
      tempLine: '',
      rangeArr: [],
      left: 0
    }
  },
  watch: {
    text: {
      immediate: true,
      handler() {
        this.$nextTick(this.init)
      }
    }
  },
  mounted() {
    this.target = document.querySelector(`.${this.targetClass}`)
    this.ctx = this.$refs.tempCanvas.getContext('2d')
  },
  methods: {
    init() {
      this.setRange()
      this.applyStyle()
      setTimeout(this.makeLine, 100)
    },
    setRange() {
      const range = document.createRange()
      range.selectNodeContents(this.target)
      getSelection().addRange(range)

      this.rangeArr = Array.from(range.getClientRects()).filter(
        ({ width }) => width
      )
      getSelection().removeAllRanges()
    },
    applyStyle() {
      requestAnimationFrame(() => {
        const { font, fontWeight, paddingLeft } = getComputedStyle(this.target)
        this.ctx.font = font
        this.ctx.fontWeight = fontWeight
        this.left = parseInt(paddingLeft)
      })
    },
    getWidth(text) {
      return this.ctx.measureText(text).width
    },
    makeLine() {
      const charArr = this.text
        .split(/<\/?\s*br\s*\/?>|\n/)
        .join('')
        .split('')
      const lastIdx = charArr.length - 1
      const left = this.left
      let tempStr = ''
      let tempWidth
      const lines = []
      let tempMaxWidth = this.rangeArr[lines.length].width + left

      charArr.forEach((char, idx) => {
        tempWidth = this.getWidth((tempStr + char).trim())
        try {
          if (tempWidth > tempMaxWidth) {
            lines.push(tempStr)
            tempStr = char
            tempMaxWidth = this.rangeArr[lines.length].width + left
          } else {
            tempStr += char
          }

          lastIdx === idx && lines.push(tempStr)
        } catch (e) {
          console.error(lines, tempWidth, e)
        }
      })
      this.$emit('lines', lines)
    }
  }
}
</script>

<style scoped></style>
