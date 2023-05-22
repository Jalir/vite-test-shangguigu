import SvgIcon from '@/components/SvgIcon/index.vue'

const globalComponents = {
  SvgIcon
}

export default {
  install(app: any, options: any) {
    Object.keys(globalComponents).forEach((key: string) => {
      app.component(key, globalComponents[key])
    })
  }
}
