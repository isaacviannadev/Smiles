import React from 'react'
import styles from '../styles/components/MenuUser.module.css'

export default function MenuUser() {
  return (

    <div className={styles.container}>
      <img src="avatar.png" alt="" />

      <div className={styles.wrapper}>
        <div className={styles.user}>

         <h2>Olá,</h2>
          <h1>Jéssica Alves</h1>
       </div>
        <div className={styles.btn}>
       <button>Editar Perfil</button>
       <button>Suporte</button>
       </div>

        <div className={styles.dados1}>
        <span>Menbro desde <strong>2019</strong></span>
        <span>Número Smiles <strong>395251942</strong></span>
        </div>
       <div className={styles.dados2}>
        <h2>Total de Milhas </h2>
        <h1> 16.734 </h1>
       </div>
      </div>

      <div className={styles.options}>
      <button>Histórico Milhas</button>
      <button> Trocar Milhas</button>
      <button>Minhas Viagens</button>
      <button>Preferências</button>
</div>
    </div>
  )
}
