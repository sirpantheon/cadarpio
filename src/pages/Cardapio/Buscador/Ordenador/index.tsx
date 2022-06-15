import opcoes from './opcoes.json'
import styles from './ordenador.module.scss'

export default function Ordenador(){
    return(
        <button className={styles.ordenador}>
            <span>Ordenar Por...</span>
            <div className={styles.ordenador__options}>
                {opcoes.map(opcao=>(
                    <div className={styles.ordenador__option} key={opcao.value}>
                        {opcao.nome}
                    </div>
               ) )}
            </div>
        </button>

    )
}