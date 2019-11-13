
import Data from './pages/home/data'
import B from './pages/home/b'
import C from './pages/home/b'

const routeConfig = [
  {
    name:"首页",
    key:"home",
    component:Data,
    path:"/",
    icon:"home"
  },
  {
    name:"通用组件",
    key:"basic",
    path:"/home",
    icon:"menu-unfold",
    children:[
      {
        name:"按钮",
        key:"b",
        path:"/home/b",
        component:B,
        icon:"appstore"
      },
      {
        name:"按钮",
        key:"c",
        path:"/home/c",
        component:C,
        icon:"appstore"
      }
    ]
  }
]
export default routeConfig  
