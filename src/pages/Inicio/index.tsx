
import cardapio from 'data/cardapio.json';
import styles from './inicio.module.scss';
import stylesTema from 'styles/tema.module.scss';
import nossaCasa from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Prato } from 'types/pratos';

export default function Inicio() {

  let pratosRecomendados = [...cardapio];

  pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);

  const navigate = useNavigate();

  function redirecionarParaDetalhes(prato: Prato){
    navigate(`/prato/${prato.id}`, {state:{prato} ,replace: true});
  }

  return (
    <section>

      <h3 className={stylesTema.titulo}>
        Recomendações da Cozinha
      </h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map(item => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button 
              className={styles.recomendado__botao}
              onClick={()=>redirecionarParaDetalhes(item)}
            >
              ver mais
            </button>
          </div>
        ))}
      </div>

      <h3 className={stylesTema.titulo}>Nossa Casa</h3>

      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="Casa do Aluroni" />
        <div className={styles.nossaCasa__endereco}>
          Rua Jose Joaquin de Araujo, Nº06 <br /> PQ. Cerejeiras - SP
        </div>
      </div>
    </section>
  );
}