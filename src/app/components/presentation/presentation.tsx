import Image from 'next/image'
import Link from 'next/link'
import styles from "./Presentation.module.css"

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
                        <a>Sobre</a>
                        <Image 
                            src="/arrow.svg" 
                            alt="seta para baixo"
                            width={10}
                            height={10}
                        />
                    </button>
                    <button className={styles.btnMenu}>
                        <a>Programação</a>
                        <Image 
                            src="/arrow.svg" 
                            alt="seta para baixo"
                            width={10}
                            height={10}
                        />
                    </button>
                    <button className={styles.btnMenu}>
                        <a>Dúvidas</a>
                        <Image 
                            src="/arrow.svg" 
                            alt="seta para baixo"
                            width={10}
                            height={10}
                        />
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

            <div className={styles.bottomSection}>
                <div className={styles.bottomLeft}>
                    <div className={styles.bottomText}>

                        <div>
                        <p style={{fontSize: "30px"}}>O que é a</p>
                        <div className={styles.bottomTitulo}>
                            <p style={{fontSize: "50px"}}>SECOMP</p>
                            <p style={{ color: "#FFB300",  fontSize:"50px"}}>?</p>
                        </div>
                        </div>
                        <p style={{fontSize: "18px"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus quam, 
                            ullamcorper ut mi auctor, viverra varius lectus. In eros eros, ultricies at 
                            pellentesque sed, pulvinar ut metus. Donec nec est libero. Mauris laoreet 
                            tincidunt urna, id gravida augue fermentum eu. Fusce nunc arcu, lacinia quis 
                            interdum a, mattis nec nisl. Aliquam vitae augue ullamcorper, 
                            volutpat risus quis, lobortis arcu. 
                        </p>
                        <div className={styles.line}></div>
                    </div>

                    <button className={styles.btnLocalDoEvento}><a href="https://www.google.com.br/maps/place/Unesp+-+Faculdade+de+Ci%C3%AAncias+e+Tecnologia+(FCT)/@-22.1207498,-51.4082032,20.61z/data=!4m6!3m5!1s0x9493f43f0ff7f359:0x3ff5d10b95e4acbf!8m2!3d-22.1208904!4d-51.4081367!16s%2Fg%2F1tt8dc4z?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D" target="_blank">Local do Evento</a></button>
                    
                </div>
                <div className={styles.bottomRight}>
                    <Image 
                        src="/spheres.svg" 
                        alt="esferas com números binários"
                        //layout="responsive"   // ajusta automaticamente
                        width={1800}            // largura da imagem original
                        height={1800}           // altura da imagem original
                    />
                </div>        
            </div>
        </div>
    )
}
