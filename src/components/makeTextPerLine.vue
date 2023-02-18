<template>
  <canvas ref="tempCanvas" style="display: none" />
</template>

<script>
export default {
  name: 'makeTextPerLine',
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
      rangeArr: []
    }
  },
  mounted() {
    this.target = document.querySelector(`.${this.targetClass}`)
    this.ctx = this.$refs.tempCanvas.getContext('2d')

    this.setRange()
    this.applyStyle()
    setTimeout(this.makeLine, 100)
  },
  methods: {
    setRange() {
      const textNode = this.target.childNodes[0]
      const range = document.createRange()
      range.setStart(textNode, 0)
      range.setEnd(textNode, this.target.textContent.length)
      getSelection().addRange(range)
      this.rangeArr = range.getClientRects()
      getSelection().removeAllRanges()
    },
    applyStyle() {
      const { font, fontWeight } = getComputedStyle(this.target)
      this.ctx.font = `${fontWeight} ${font}`
    },
    getWidth(text) {
      return this.ctx.measureText(text).width
    },
    makeLine() {
      const charArr = this.text.split('')
      const lastIdx = charArr.length - 1
      let tempStr = ''
      let tempWidth
      const lines = []

      charArr.forEach((char, idx) => {
        tempWidth = this.getWidth(tempStr + char)
        try {
          if (tempWidth > this.rangeArr[lines.length].width + 5) {
            lines.push(tempStr)
            tempStr = char
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
