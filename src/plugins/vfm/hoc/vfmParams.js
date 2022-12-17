import CustomModal from '@/plugins/vfm/hoc/CustomModal.vue'
import CustomModalPopup from '@/plugins/vfm/hoc/CustomModalPopup.vue'

function getRandomName(prefix) {
  return `${prefix}-${Math.random().toString(36).slice(2, 7)}`
}

// component open 용 params
export const getParamsModal = ({ resolve, component, params, bind }) => {
  let result = null
  const name = getRandomName('modal')
  const buttons = [...params.buttons, { text: '닫기', isClose: true }]
  return {
    component: CustomModalPopup,
    bind: {
      name,
      ...bind
    },
    on: {
      // event by custom-modal
      cancel({ close, value }) {
        result = value
        close()
      },
      closed() {
        resolve(result ? result : false)
      }
    },
    params: { ...params, buttons },
    opened() {}, // $vfm.show 실행하면 opened에 resolve 되는 함수 있음. 그거 초기화 시키는 용도로 쓰임.
    slots: {
      default: {
        component,
        bind: {
          ...params.props
        }
      }
    }
  }
}

// alert / confirm 용 params
export const getParams = ({ resolve, params, bind }) => {
  let result = null
  let name

  params?.cancelTxt || (params.cancelTxt = '닫기')

  if (params?.isConfirm) {
    name = getRandomName('confirm')
    params?.confirmTxt || (params.confirmTxt = '확인')
  } else {
    name = getRandomName('alert')
  }

  return {
    component: CustomModal,
    bind: {
      name,
      ...bind
    },
    on: {
      // event by custom-modal
      cancel(close) {
        result = false
        close()
      },
      confirm(close) {
        result = true
        close()
      },
      closed() {
        resolve(!!result)
      }
    },
    params,
    opened() {} // $vfm.show 실행하면 opened에 resolve 되는 함수 있음. 그거 초기화 시키는 용도로 쓰임.
  }
}
