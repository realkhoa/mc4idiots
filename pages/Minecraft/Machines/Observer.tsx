import React, { useState } from 'react'
import { Breadcrumb, Layout, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

import MainLayout from '../../../commons/layout/mainLayout';
import styles from '../../../commons/styles/content.module.scss'

export default function Observer() {
  return (
    <MainLayout breadcrumbs={['Minecraft', 'Machine', 'Observer']} theme='dark'>
      <h2 className={styles.heading}>Observer</h2>
      <p className={styles.paragraph}>
        [WIP]
      </p>
    </MainLayout>
  )
}