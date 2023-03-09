<template>
  <header v-page-visibility="pageParams">
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125" />
  </header>

  <button v-intersection-observer="intersectionParams" @click="onAlert">
    alert
  </button>
  <button @click="onConfirm">confirm</button>
  <button @click="onModal">modal</button>
  <button @click="onModal2">modal2</button>
  <button @click="onModalFull">full</button>
  <button @click="onModalBottomSheet">bottomSheet</button>
  <button @click="onLoading">로딩</button>

  <div class="tempText" v-html="text" />
  <makeTextPerLine target-class="tempText" :text="text" @lines="onLines" />
  <VRuntimeTemplate :template="compText" />
  <IconCommunity />
  <modals-container />
  <router-view />
</template>

<script>
import { ModalsContainer } from 'vue-final-modal'
import modalExample from '@/plugins/vfm/modalExample.vue'
import modalExample2 from '@/plugins/vfm/modalExample2.vue'
import makeTextPerLine from '@/components/makeTextPerLine.vue'
import IconCommunity from '@/components/icons/IconCommunity.vue'
export default {
  name: 'App',
  components: { ModalsContainer, makeTextPerLine, IconCommunity },
  data() {
    return {
      pageParams: {
        destroy: () => console.log('껐당'),
        init: () => console.log('켰당')
      },
      intersectionParams: {
        destroy: () => console.log('안보인당'),
        init: () => console.log('보인당')
      },
      text: '먼저 두 개의 직사각형을 그린 간단한 예제를 보도록하겠습니다.<br> 그 중 하나는 투명도(alpha transparency)를가집니다. <br /> 나중에 이 예제가 어떻게 작동하는지 자세히 살펴 보겠습니다. 먼저 두 개의 직사각형을 그린 간단한 예제를 보도록하겠습니다. 그 중 하나는 투명도(alpha transparency)를가집니다. 나중에 이 예제가 어떻게 작동하는지 자세히 살펴 보겠습니다. 먼저 두 개의 직사각형을 그린 간단한 예제를 보도록하겠습니다.<br></br> 그 중 하나는 투명도(alpha transparency)를가집니다.\n 나중에 이 예제가 어떻게 작동하는지 자세히 살펴 보겠습니다.',
      compText: '<IconCommunity />'
    }
  },
  methods: {
    async onAlert() {
      const result = await this.$alert({
        message: '내용을 쓰세요',
        title: '제목입니다.'
      })
      console.log(result)
    },
    async onConfirm() {
      const result = await this.$confirm({
        message: '내용을 쓰세요',
        title: '제목입니다.'
      })
      console.log(result)
    },
    async onModal() {
      const result = await this.$modal(
        modalExample,
        {
          title: '제목입니다.',
          buttons: [{ text: '적용' }],
          props: {
            kakao: 'kakao213',
            naver: 'naver909'
          }
        },
        { 'content-class': 'fullscreen' }
      )
      console.log(result)
    },
    async onModal2() {
      const result = await this.$modal(modalExample2, {
        title: '제목입니다.',
        buttons: [{ text: '적용2', func: 'setValue' }],
        props: {
          kakao: 'kakao213',
          naver: 'naver909'
        }
      })
      console.log(result)
    },
    async onModalFull() {
      const result = await this.$fullScreen(modalExample2)
      console.log(result)
    },
    async onModalBottomSheet() {
      const result = await this.$bottomSheet(modalExample2)
      console.log(result)
    },
    onLines(lines) {
      console.log('lines', lines)
    },
    onLoading() {
      this.$loading()
    }
  }
}
</script>

<style>
.tempText {
  width: 80vw;
  height: 100px;
  overflow: hidden;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
