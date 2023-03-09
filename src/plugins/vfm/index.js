import {
  getParams,
  getParamsLoading,
  getParamsModal
} from '@/plugins/vfm/hoc/vfmParams'
// import { $vfm } from 'vue-final-modal'
import './transition.css'

export default {
  install(app) {
    const $vfm = app.config.globalProperties.$vfm

    $vfm.modalArray = []
    $vfm.getTopModal = () => {
      return $vfm.modalArray.pop()
    }

    app.config.globalProperties.$alert = (params, bind) => {
      return new Promise(resolve => {
        $vfm.show(getParams({ resolve, params, bind }))
      })
    }

    app.config.globalProperties.$confirm = (params, bind) => {
      params.isConfirm = true
      return new Promise(resolve => {
        $vfm.show(getParams({ resolve, params, bind }))
      })
    }

    app.config.globalProperties.$modal = (component, params, bind) => {
      return new Promise(resolve => {
        $vfm.show(getParamsModal({ component, resolve, params, bind }))
      })
    }

    app.config.globalProperties.$fullScreen = (component, params, bind) => {
      return new Promise(resolve => {
        $vfm.show(
          getParamsModal({
            component,
            resolve,
            params,
            bind: { ...bind, fullScreen: true }
          })
        )
      })
    }

    app.config.globalProperties.$bottomSheet = (component, params, bind) => {
      return new Promise(resolve => {
        $vfm.show(
          getParamsModal({
            component,
            resolve,
            params,
            bind: { ...bind, bottomSheet: true }
          })
        )
      })
    }

    app.config.globalProperties.$loading = (params, bind) => {
      return new Promise(resolve => {
        $vfm.show(
          getParamsLoading({
            resolve,
            params,
            bind: {
              ...bind,
              clickToClose: false
            }
          })
        )
      })
    }
  }
}
