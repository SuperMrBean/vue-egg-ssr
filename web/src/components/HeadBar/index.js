import React,{Component} from 'react';
import { Layout,Icon,Avatar,Menu, Dropdown,Breadcrumb,Badge} from 'antd';
import {withRouter,Link} from 'react-router-dom'
import routeConfig  from '../../router'
const { Header } = Layout
let breadcrumbNameMap = {}
routeConfig.forEach(item=>{
  breadcrumbNameMap[item.path] = item.name
  if(item.children){
    item.children.forEach(list=>{
      breadcrumbNameMap[list.path] = list.name
    })
  }
})

class HeaderBar extends Component {
  toggle = () => {
    this.props.toggleSideBar()
  }
  // handleLogout=()=>{
  //   logout().then(()=>{
  //     message.success('退出成功！')
  //     this.props.history.push('/login')
  //   })
  // }
  _renderBreadcrumb = ()=>{
    const { location } = this.props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>{breadcrumbNameMap[url]}</Link>
        </Breadcrumb.Item>
      );
    });
    const breadcrumbItems = [
      <Breadcrumb.Item key="home">
        <Link to="/">首页</Link>
      </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems);
    return breadcrumbItems
  }
  _renderMenu = () =>{
    return (
      <Menu>
        <Menu.Item>
          <span>个人信息</span>
        </Menu.Item>
        <Menu.Item>
          <span>退出登录</span>
        </Menu.Item>
      </Menu>
    )
  }
  render() {
    return (
      <Header className='header' style={{display:'flex',justifyContent:'space-between',alignItems:'center',boxSizing:'border-box', background: '#fff', padding: 0,  position: 'fixed', zIndex: 1,width:this.props.collapsed ? 'calc(100% - 80px)' : 'calc(100% - 200px)',height:'68px',marginLeft: this.props.collapsed ?'80px':'200px',transition:'all .2s'}} id="headerbar">
        <Icon
          style={{  fontSize:"18px",padding:"0 24px",cursor:"pointer",transition:"color 0.3s"}}
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
        <Breadcrumb>
          {this._renderBreadcrumb()}
        </Breadcrumb>
        <Dropdown overlay={this._renderMenu} placement={"bottomCenter"}>
          <span style={{ marginRight: 48 }}>
            <Badge count={1}>
              <Avatar shape="square" icon="user" />
            </Badge>
          </span>
        </Dropdown>
      </Header>
    );
  }

}

export default withRouter(HeaderBar);