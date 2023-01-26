<template>
  <label><input type="checkbox" v-model="form.agree" /></label>
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
  mounted() {
    // 이런 식으로 returnValue만 넣어주면 끝.
    // this.setReturnValue('test123123')
  },
  methods: {
    setValue() {
      this.setReturnValue(this.form)
    }
  }
}
</script>
