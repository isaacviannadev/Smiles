import { Form } from '@unform/web'
import Head from 'next/head'
import React from 'react'
import styles from '../styles/pages/home.module.css'


const Home: React.FC = () => {
  function handleSubmit(data) {
    console.log(data)

  }

  // function goDash() {
  //   if (data )
  // }
  return (
    <>
    <Head>
        <title>Create Next App</title>
      </Head>

      <div className={styles.container}>
        <img className={styles.logoBg} src="logosymbol.svg" alt="" />

          <main className={styles.formContainer}>
          <img className={styles.logoForm} src="logosymbol.svg" alt="" />
          <h1>Acessar</h1>
          <Form  className={styles.form} onSubmit={handleSubmit} >
            <input type="text" placeholder="CPF" id="cpf" />
           <button type="submit" onClick="/dashboard">Entrar</button>
          <a href="">Esqueci minha senha</a>
          </Form>
          </main>
        </div>
    </>
  )
}

export default Home
