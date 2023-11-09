import React, { useState } from 'react'
import { Breadcrumb, Layout, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

import MainLayout from '../../commons/layout/mainLayout';
import styles from '../../commons/styles/content.module.scss'

export default function Furnace() {
  return (
    <MainLayout breadcrumbs={['Minecraft', 'Machine', 'Furnace']} theme='dark'>
      <h2 className={styles.heading}>Furnace</h2>
      <p className={styles.paragraph}>
        LOL who need furnace tutorial
      </p>
    </MainLayout>
  )
}