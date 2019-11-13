import React, { Component } from 'react';
import { Layout } from 'antd';
import Siderbar from '../../components/Sidebar'
import Container from '../../components/Container'
import HeadBar from '../../components/HeadBar'
class Index extends Component {
  render() {
      return (
        <div>
          <Layout>
            <Siderbar></Siderbar>
            <Layout>
              <HeadBar/>
              <Container/>
            </Layout>
          </Layout>
        </div>

      );
  }
}
export default Index