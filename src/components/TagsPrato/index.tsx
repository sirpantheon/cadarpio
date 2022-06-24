import styles from './tagsPrato.module.scss';
import classNames from 'classnames';
import { Prato } from 'types/pratos';


export default function TagsPrato({category,serving,price,size}:Prato) {
  return (
    <div className={styles.tags}>
      <div className={classNames({
        [styles.tags__tipo]: true,
        [styles[`tags__tipo__${category.label.toLowerCase()}`]]: true
      })}
      >
        {category.label}
      </div>
      <div className={styles.tags__porcao}>
        {size}g
      </div>
      <div className={styles.tags__qtdpessoas}>
        Serve {serving} Pessoas{serving === 1 ? '' : 'S'}
      </div>
      <div className={styles.tags__valor}>
        R$:{price.toFixed(2)}
      </div>
    </div>
  );
}