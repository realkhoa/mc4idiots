import React, { useState } from 'react'
import { Breadcrumb, Layout, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

import MainLayout from '../../../commons/layout/mainLayout';
import styles from '../../../commons/styles/content.module.scss'

export default function KelpFarm() {
  return (
    <MainLayout breadcrumbs={['Minecraft', 'Farms', 'Kelp Farm']} theme='dark'>
      <h2 className={styles.heading}>Kelp Farm</h2>
      <p className={styles.paragraph}>
        [WIP]
      </p>
    </MainLayout>
  )
}