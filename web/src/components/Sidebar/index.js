import React, { Component } from 'react';
import {Layout, Menu, Icon } from 'antd';
import {Link,withRouter} from 'react-router-dom';
import routeConfig  from '../../router';
const { Sider } = Layout;
const { SubMenu }  = Menu;
const recursionMap = function (data:Array<any>):any {
  let result = data.map(item=>{
    if(item.children){
      return (
        <SubMenu
          key={item.key}
          title={
            <span>
              {item.icon ? <Icon type={item.icon} /> : null}
              <span>{item.name}</span>
            </span>
          }>
          {recursionMap(item.children)}
        </SubMenu>
      )
    }else{
      return (
        <Menu.Item key={item.key}>
          {item.icon ? <Icon type={item.icon} /> : null}
          <span>{item.name}</span>
          <Link to={item.path}></Link>
        </Menu.Item>
      )
    }
  })
  return result
}
class Sidebar extends Component {
  state = {
    collapsed: false,
  };
  componentDidMount(){
  }
  render() {
      return (
        <Sider trigger={null} collapsible collapsed={this.props.collapsed} style={{height:"100vh",minHeight:"700px",position:"fixed",overflow: 'auto',left:0}} id="sidebar">
          <div style={{  height:"32px",background:"#333",margin:"16px"}}/>
          <Menu theme="dark" mode="inline" selectedKeys={[this.props.location.pathname === '/' ? 'home' : this.props.location.pathname.split('/')[2]]}>
            {recursionMap(routeConfig )}
          </Menu>
        </Sider >
      );
  }
}
export default withRouter(Sidebar)