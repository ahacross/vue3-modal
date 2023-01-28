<template>
  <div v-for="(item, idx) in list" :key="idx">
    {{ `무어라 해야 할까? ${item}` }}
  </div>
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
      list: new Array(10).fill().map((n, i) => i)
    }
  },
  methods: {
    onClose() {
      this.$modalClose(this.form)
    }
  }
}
</script>
