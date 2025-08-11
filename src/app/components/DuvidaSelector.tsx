import styles from './DuvidaSelector.module.css'
export default function duvidaSelector() {
    return (
        <div className="flex flex-col text-xl font-bold gap-2">
            <input type="radio" name="Duvidas" id="certificado" className={styles.radio}/>
            <label htmlFor="certificado">CERTIFICADOS</label>

            <input type="radio" name="Duvidas" id="participar" className={styles.radio}/>
            <label htmlFor="participar">QUEM PODE PARTICIPAR</label>

            <input type="radio" name="Duvidas" id="levar" className={styles.radio}/>
            <label htmlFor="levar">O QUE LEVAR</label>

            <input type="radio" name="Duvidas" id="inscricao" className={styles.radio}/>
            <label htmlFor="inscricao">INSCRIÇÃO</label>

            <input type="radio" name="Duvidas" id="pagamento" className={styles.radio}/>
            <label htmlFor="pagamento">PAGAMENTO</label>

            <input type="radio" name="Duvidas" id="cafe" className={styles.radio}/>
            <label htmlFor="cafe">CAFÉ/ALMOÇO</label>
        </div>
    )
}