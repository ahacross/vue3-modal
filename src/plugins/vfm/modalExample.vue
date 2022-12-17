<template>
  <div v-for="(item, idx) in list" :key="idx">
    {{ `무어라 해야 할까? ${item}` }}
  </div>
</template>

<script>
import modalMixin from '@/plugins/vfm/modalMixin'
// 팝업페이지는 받아야 하는 것은 props에 정의하고
// 리턴해야 하는 data는 data에 returnValue에 값을 넣어야 한다.
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
  mounted() {
    this.setReturnValue('test123123')
  }
}
</script>
