import styles from './PaginaPadao.module.scss';
import { Outlet } from 'react-router-dom';

export default function PaginaPadrao() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa das Massas
        </div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}