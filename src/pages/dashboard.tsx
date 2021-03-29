
import Head from 'next/head'
import React from 'react'
import HeaderMenu from '../components/HeaderMenu'
import MenuUser from '../components/MenuUser'
import styles from '../styles/pages/dashboard.module.css'

const Home: React.FC = () => {

  return (
    <>
    <Head>
        <title>Create Next App</title>
      </Head>
    <HeaderMenu />
      <div className={styles.container}>
      <MenuUser />
      </div>
    </>
  )
}

export default Home
