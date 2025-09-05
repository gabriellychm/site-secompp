'use client'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from "./Presentation.module.css"

const ScrollLink = dynamic(
  () => import('react-scroll').then(mod => mod.Link),
  { ssr: false }
)

export default function Presentation() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.logoSection}>
                    <div className={styles.logoCircle}></div>
                    <div className={styles.siteName}>SECOMPP25</div>
                </div>

                <nav className={styles.navMenu}>
                    <button className={styles.btnMenu}>
                        <ScrollLink
                            to="sobre"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={300}
                            className={styles.btnMenu}
                        >
                            Sobre
                        </ScrollLink>
                    </button>
                    <button className={styles.btnMenu}>
                        <ScrollLink
                            to="programacao"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-70}
                            className={styles.btnMenu}
                        >
                            Programação
                        </ScrollLink>
                        <Image
                            src="/arrow.svg"
                            alt="seta para baixo"
                            width={10}
                            height={10}
                        />
                    </button>
                    <button className={styles.btnMenu}>
                        <ScrollLink
                            to="duvidas"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-70}
                            className={styles.btnMenu}
                        >
                            Dúvidas
                        </ScrollLink>
                    </button>
                </nav>
            </header>

            <div className={styles.mainCenter}>
                <div className={styles.mainName}>
                    <p className={styles.mainNameLetters}>SECOMPP</p>
                    <p className={styles.mainNameNumbers}>25</p>
                </div>

                <div className={styles.subCenter}>
                    <p>22ª Semana do Curso de Ciência da</p>
                    <p>Computação da FCT Unesp</p>
                </div>

                <div className={styles.dateContainer}>
                    <p>de 29/9 a 03/10</p>
                </div>

                <button className={styles.btnInscreva}>Inscreva-se</button>

            </div>

            <div id="sobre" className={styles.bottomSection}>
                <div className={styles.bottomLeft}>
                    <div className={styles.bottomText}>
                        <div>
                            <p style={{ fontSize: "30px" }}>O que é a</p>
                            <div className={styles.bottomTitulo}>
                                <p style={{ fontSize: "50px" }}>SECOMPP</p>
                                <p style={{ color: "#FFB300", fontSize: "50px" }}>?</p>
                            </div>
                        </div>
                        <p>
                            A SECOMPP (Semana da Computação de Presidente Prudente) é um evento anual promovido pelo curso de Ciência da Computação da FCT Unesp.
                            O evento tem como objetivo proporcionar aos estudantes, profissionais e entusiastas da área de computação uma oportunidade de aprendizado, networking e atualização sobre as últimas tendências e avanços tecnológicos.
                            Durante a SECOMPP, são realizadas palestras, mesa-redonda e minicursos.
                        </p>
                        <div className={styles.line}></div>
                    </div>

                    <a href="https://www.google.com.br/maps/place/Unesp+-+Faculdade+de+Ci%C3%AAncias+e+Tecnologia+(FCT)/@-22.1207498,-51.4082032,20.61z/data=!4m6!3m5!1s0x9493f43f0ff7f359:0x3ff5d10b95e4acbf!8m2!3d-22.1208904!4d-51.4081367!16s%2Fg%2F1tt8dc4z?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                        <button className={styles.btnLocalDoEvento}>Local do Evento</button>
                    </a>
                </div>

                <div className={styles.bottomRight}>
                    <Image 
                        src="/spheres.svg"
                        alt="esferas com números binários"
                        width={1800}
                        height={1800}
                        className={styles.spheres}
                    />
                </div>
            </div>
        </div>
    )
}