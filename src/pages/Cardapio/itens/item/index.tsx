import styles from './item.module.scss';
import className from 'classnames';
import { Prato } from 'types/pratos';



export default function Item(props:Prato){

  const{title, description, size, serving, price, category,photo} = props;

  return(
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.item__tags}>
          <div className={className({
            [styles.item__tipo]:true,
            [styles[`item__tipo__${category.label.toLowerCase( )}`]]:true
          })}
          >
            {category.label}
          </div>
          <div className={styles.item__porcao}>
            {size}g
          </div>
          <div className={styles.item__qtdpessoas}>
                        Serve {serving} Pessoas{serving === 1 ? '': 'S'}
          </div>
          <div className={styles.item__valor}>
                        R$:{price.toFixed(2)}
          </div>
        </div>

      </div>
    </div>
  );
}