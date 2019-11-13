import React,{Component,Suspense} from 'react';
import { Layout } from 'antd';
import { Switch, Redirect,Route,withRouter } from 'react-router-dom';
import routeConfig  from '../../router';
import Loading from '../../utils/loading'
const { Content } = Layout;
let routeMap = []
routeConfig.forEach(item =>{
  if(!item.children){
    routeMap.push(
      <Route exact path={item.path} key={item.key} component={item.component}/>
    )
  }else{
    routeMap.push(
      <Redirect exact key={item.key} from={item.path} to={item.children[0].path}></Redirect>
    )
    item.children.forEach((list)=>{
      routeMap.push(
        <Route exact path={list.path} key={list.key} component={list.component}/>
      )
    })
  }
})
class Container extends Component {
  state = {
    collapsed: false,
  };
  componentDidMount(){
  }
  render() {
    return (
      <Content  style={{
        margin: 24,
        padding: 24,
        background: '#fff',
        minHeight:'calc(100vh - 116px)',
        marginLeft:this.props.collapsed ? '104px' : '224px',
        marginTop:'92px',
        transition:'all .2s'
      }}>
        <Suspense>
          <Switch>
            {routeMap}
            <Redirect from="/*" to="/err"></Redirect>
          </Switch>
        </Suspense>
      </Content >
    );
}
}
export default withRouter(Container)