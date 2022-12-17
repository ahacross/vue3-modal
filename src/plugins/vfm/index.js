import { getParams, getParamsModal } from '@/plugins/vfm/hoc/vfmParams'
// import { $vfm } from 'vue-final-modal'
import './transition.css'

export default {
  install(app) {
    const $vfm = app.config.globalProperties.$vfm
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
  }
}
