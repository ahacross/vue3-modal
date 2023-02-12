// 절전모드 등으로 페이지가 숨겨졌을 때, 페이지가 다시 보여질 때
// 원하는 기능을 destroy, init에 넣으면 숨겨졌을 땐 destroy, 보여질 땐 init이 실행됨
// 사용법: v-page-visibility="{ destroy: () => {}, init: () => {} }"
// 이벤트를 거는 대상이 el이 아닌 document라서 한 번만 사용해야 함

function handleVisibilityChange() {
  if (document.hidden) {
    this.destroy()
  } else {
    this.init()
  }
}
export default {
  // called right before the element is inserted into the DOM.
  mounted(el, binding) {
    console.log(binding)
    document.addEventListener(
      'visibilitychange',
      handleVisibilityChange.bind(binding.value),
      false
    )
  },
  beforeUnmount(el, binding) {
    document.removeEventListener(
      'visibilitychange',
      handleVisibilityChange.bind(binding.value),
      false
    )
  }
}
