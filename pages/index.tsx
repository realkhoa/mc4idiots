import React, { useState } from 'react'
import { Breadcrumb, Layout, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

import MainLayout from '../commons/layout/mainLayout';
import styles from '../commons/styles/content.module.scss'

export default function Home() {
  return (
    <MainLayout breadcrumbs={['Welcome']} theme='dark'>
      <h2 className={styles.heading}>Introduction</h2>
      <p className={styles.paragraph}>
        Welcome to the Minecraft Guide for Dummies Edition! Whether you are a beginner seeking basic survival tips or an adventurer ready to dive into the world of modpacks, this guide has you covered. We will simplify the basics for newbies and unravel the exciting realm of modded Minecraft. Let us make your Minecraft experience, whether basic or mod-packed, a breeze!
      </p>
      <p className={styles.paragraph}>
        If you have any questions, try to read the guide again. I dont care if you do not understand anything.
      </p>
    </MainLayout>
  )
}
