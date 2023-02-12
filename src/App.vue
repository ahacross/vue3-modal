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
  <router-view />

  <modals-container />
</template>

<script>
import { ModalsContainer } from 'vue-final-modal'
import modalExample from '@/plugins/vfm/modalExample.vue'
import modalExample2 from '@/plugins/vfm/modalExample2.vue'
export default {
  name: 'App',
  components: { ModalsContainer },
  data() {
    return {
      pageParams: {
        destroy: () => console.log('껐당'),
        init: () => console.log('켰당')
      },
      intersectionParams: {
        destroy: () => console.log('안보인당'),
        init: () => console.log('보인당')
      }
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
    }
  }
}
</script>

<style scoped>
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
