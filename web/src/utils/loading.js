import React from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

class Loading extends React.Component {
  //类似github页面加载的那个加载条
  componentWillMount(){
    NProgress.start()
  }
  componentWillUnmount(){
    NProgress.done()
  }
  render () {
    return (
      <div/>
    )
  }
}

export default Loading