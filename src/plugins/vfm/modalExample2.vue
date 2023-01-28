<template>
  <label><input type="checkbox" v-model="form.agree" /></label>
  <button @click="onClose">닫기</button>
</template>

<script>
import modalMixin from '@/plugins/vfm/modalMixin'
// 팝업페이지를 만들 땐 위에 mixin 파일을 설정!!
// 팝업페이지는 받아야 하는 것은 props에 정의하고
// 리턴해야 하는 data는 setReturnValue 넣어주면 됩니다.
export default {
  name: 'modalExample',
  mixins: [modalMixin],
  props: {
    kakao: {
      type: String
    },
    naver: {
      type: String
    }
  },
  data() {
    return {
      form: {
        agree: false
      }
    }
  },
  // 이런 식으로 팝업을 닫고 싶을 때 this.$modalClose(value) 호출
  methods: {
    onClose() {
      this.$modalClose(this.form)
    }
  }
}
</script>
