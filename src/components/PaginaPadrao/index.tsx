import styles from './PaginaPadao.module.scss';
import { Outlet } from 'react-router-dom';
import stylesTema from 'styles/tema.module.scss';
import React from 'react';

export default function PaginaPadrao() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa das Massas
        </div>
      </header>
      <div className={stylesTema.container}>
        <Outlet />
        
      </div>
    </>
  );
}