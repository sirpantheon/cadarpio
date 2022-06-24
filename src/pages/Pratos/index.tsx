import styles from './pratos.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import cardapio from 'data/cardapio.json';


export default function Pratos() {

  const { id } = useParams();
  const prato = cardapio.find(item => item.id === Number(id));
  const navigate = useNavigate();
  if (!prato) {
    return '';
  }
  return (
    <>
      <button className={styles.voltar} onClick={()=>navigate(-1)}>
        {'< voltar'}
      </button>
      <section className={styles.container}>
        <h1 className={styles.tutulo}>
          {prato.title}
        </h1>
        <div>
          <img src={prato.photo} alt={prato.title} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__decricao}>
            {prato.description}
          </p>
          <div className={styles.tags}>
            <div className={classNames({
              [styles.tags__tipo]: true,
              [styles[`tags__tipo__${prato.category.label.toLowerCase()}`]]: true
            })}>
              {prato.category.label}
            </div>
            <div className={styles.tags__porcao}>
              {prato.size}g
            </div>
            <div className={styles.tags__qtdpessoas}>
              Serve: {prato.serving} pessoa{prato.serving === 1 ? '' : 'S'}
            </div>
            <div className={styles.tags__valor}>
              R$ {prato.price.toFixed(2)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}