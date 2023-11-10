import React, { useState } from 'react'
import Link from 'next/link'
import { Breadcrumb, Layout, MenuTheme, Anchor } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

import Nav from '../components/Nav';
import styles from './mainLayout.module.scss'
import Head from 'next/head';

interface IMainLayoutProps {
  children: any,
  breadcrumbs: Array<string>,
  theme: MenuTheme,
  title?: string
}

export default function MainLayout(props: IMainLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const { children, breadcrumbs, theme, title } = props;

  return (
    <div>
      <Head>
      <title>{title}</title>
      </Head>
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
          <Footer style={{ textAlign: 'center' }}>
            Created by @realkhoa 2023. © Copyright 2023. All rights reserved.
          </Footer>
        </Layout>
      </Layout>
    </div>
  )
}
