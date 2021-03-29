import React from "react"
import { FiPower } from 'react-icons/fi'
import styles from '../styles/components/HeaderMenu.module.css'



const HeaderMenu: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src="/logoeasyferias.svg" alt="Logo Easy Férias" />
      <FiPower />
    </div>
  )
}

export default HeaderMenu
