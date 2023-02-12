// scroll 할때 화면이 보일 때/ 안 보일 때 특정 기능을 실행하고 싶을 때 사용 (ex. 동영상 재생 중 스크롤 시 멈추기)
// 사용법: <div v-intersection-observer="{ init: init, destroy: destroy }"></div>
let observer = null
export default {
  // called right before the element is inserted into the DOM.
  mounted(el, binding) {
    const { init, destroy } = binding.value

    if ([init, destroy].some(fn => fn === null)) {
      throw new Error('init, destroy 함수를 모두 넣어주세요.')
    }

    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          init()
        } else {
          destroy()
        }
      })
    })
    observer.observe(el)
  },
  beforeUnmount() {
    observer.disconnect()
  }
}
