<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125" />
  </header>

  <button @click="onAlert">alert</button>
  <button @click="onConfirm">confirm</button>
  <button @click="onModal">modal</button>

  <modals-container />
</template>

<script>
import { ModalsContainer } from 'vue-final-modal'
import modalExample from '@/plugins/vfm/modalExample.vue'
export default {
  name: 'App',
  components: { ModalsContainer },
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
