<template>
  <vue-final-modal
    v-bind="$attrs"
    classes="modal-container"
    content-class="modal-content"
    transition="bottom">
    <template v-slot="{ params, close }">
      {{ setClose(close) }}
      <span v-if="params.title" class="modal__title">
        {{ params.title }}
      </span>
      <div v-if="$slots.default()" class="modal__content">
        <slot :params="params" />
      </div>
    </template>
  </vue-final-modal>
</template>

<script>
export default {
  name: 'CustomModalPopup',
  inheritAttrs: true,
  emits: ['cancel'],
  data() {
    return {
      close: null
    }
  },
  mounted() {
    this.$vfm.modalArray.push(this)
    console.log(this.$slots)
  },
  methods: {
    setClose(close) {
      this.close = close
    },
    modalClose(value = null) {
      this.$emit('cancel', { close: this.close, value })
    }
  }
}
</script>

<style scoped lang="scss">
:deep(.modal-container) {
  display: flex;
  justify-content: center;
  align-items: center;
}
:deep(.modal-content) {
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 90%;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
  text-align: left;
}
.modal__title {
  margin: 0 2rem 0 0;
  font-size: 1.5rem;
  font-weight: 700;
}

:deep(.fullscreen) .modal__content {
  height: 100vh;
}

:deep(.bottom-sheet) .modal__content {
  /* width: 100%; */
}

.modal__content {
  flex-grow: 1;
  overflow-y: auto;
  margin: 1.25em 0;
}
.modal__action {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 1rem 0 0;
}
.modal__action button {
  /* CSS */
  background-color: rgba(51, 51, 51, 0.05);
  border-radius: 8px;
  border-width: 0;
  color: #333333;
  cursor: pointer;
  display: inline-block;
  font-family: 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  margin: 0;
  padding: 10px 12px;
  text-align: center;
  transition: all 200ms;
  vertical-align: baseline;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}
.modal__close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
}
.modal__close img {
  width: 18px;
  height: 18px;
}
.dark-mode div:deep(.modal-content) {
  border-color: #2d3748;
  background-color: #1a202c;
}
:deep(.fullscreen) {
  width: 100vw;
  height: 100vh;
  margin: 0;
  max-height: none;
  background: white;
  padding: 10px;
}

:deep(.bottom-sheet) {
  align-items: end;
}
</style>
