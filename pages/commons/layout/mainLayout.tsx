import React, { useState } from 'react'
import Link from 'next/link'
import { Breadcrumb, Layout, MenuTheme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

import Nav from '../components/Nav';
import styles from './mainLayout.module.scss'

interface IMainLayoutProps {
  children: any,
  breadcrumbs: Array<string>,
  theme: MenuTheme
}

export default function MainLayout(props: IMainLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const { children, breadcrumbs, theme } = props;

  return (
  <Layout style={{ minHeight: '100vh'}}>
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <Nav theme={theme}/>
    </Sider>
    <Layout>
      <Content style={{ margin: "0 16px"}}>
        <Breadcrumb style={{ margin: "16px 0"}}>
          <Breadcrumb.Item>
            <Link href="/">Home</Link>
          </Breadcrumb.Item>
          { breadcrumbs.map(breadcrumb => {
            return  <Breadcrumb.Item key={breadcrumb}>
                      {breadcrumb}
                    </Breadcrumb.Item>
            })
          }
        </Breadcrumb>
        <div style={{ padding: 24, minHeight: 360 }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Created by @realkhoa 2023</Footer>
    </Layout>
  </Layout>
  )
}
