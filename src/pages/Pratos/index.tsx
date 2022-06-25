import styles from './pratos.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import TagsPrato from 'components/TagsPrato';
import NotFound from 'pages/NotFound';


export default function Pratos() {

  const { id } = useParams();
  const prato = cardapio.find(item => item.id === Number(id));
  const navigate = useNavigate();
  if (!prato) {
    return <NotFound />;
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
          <TagsPrato {...prato} />
        </div>
      </section>
    </>
  );
}