import React, { useState } from 'react'
import { Breadcrumb, Layout, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

import MainLayout from '../commons/layout/mainLayout';
import styles from '../commons/styles/content.module.scss'

export default function Home() {
  return (
    <MainLayout breadcrumbs={['404 Not Found']} theme='dark'>
      <h2 className={styles.heading}>404</h2>
      <p className={styles.paragraph}>
        The content you requested does not exist.
      </p>
    </MainLayout>
  )
}
