import styles from './item.module.scss';
import { Prato } from 'types/pratos';
import TagsPrato from 'components/TagsPrato';

export default function Item(props: Prato) {

  const { title, description, photo } = props;

  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <TagsPrato {...props} />

      </div>
    </div>
  );
}