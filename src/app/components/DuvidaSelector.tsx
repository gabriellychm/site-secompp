'use client'
import styles from './DuvidaSelector.module.css';

type Props = {
  selected: string;
  setSelected: (value: string) => void;
};

export default function DuvidaSelector({ selected, setSelected }: Props) {
    return (
        <div id= "duvidas" className="flex flex-row flex-wrap md:flex-col text-xl font-bold gap-2 justify-center">
            <input
                type="radio"
                name="Duvidas"
                id="certificado"
                className={styles.radio}
                checked={selected === "certificado"}
                onChange={() => setSelected("certificado")}
            />
            <label className="h-fit" htmlFor="certificado">CERTIFICADOS</label>

            <input
                type="radio"
                name="Duvidas"
                id="participar"
                className={styles.radio}
                checked={selected === "participar"}
                onChange={() => setSelected("participar")}
            />
            <label className="h-fit" htmlFor="participar">QUEM PODE PARTICIPAR</label>

            <input
                type="radio"
                name="Duvidas"
                id="levar"
                className={styles.radio}
                checked={selected === "levar"}
                onChange={() => setSelected("levar")}
            />
            <label className="h-fit" htmlFor="levar">O QUE LEVAR</label>

            <input
                type="radio"
                name="Duvidas"
                id="inscricao"
                className={styles.radio}
                checked={selected === "inscricao"}
                onChange={() => setSelected("inscricao")}
            />
            <label className="h-fit" htmlFor="inscricao">INSCRIÇÃO</label>

            <input
                type="radio"
                name="Duvidas"
                id="pagamento"
                className={styles.radio}
                checked={selected === "pagamento"}
                onChange={() => setSelected("pagamento")}
            />
            <label className="h-fit" htmlFor="pagamento">PAGAMENTO</label>

        </div>
    )
}