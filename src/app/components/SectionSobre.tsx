import Image from 'next/image'
import SaibaMaisBtnBlack from "@/app/components/SaibaMaisBtnBlack";
export default function SectionSobre(){
    return(
        <div id= "sobre" className="p-10 grid md:grid-cols-2 sm:grid-rows-2 md:grid-rows-1">
            <div className="flex md:items-start items-center justify-center md:justify-start">
                <Image className={""} src='/SA03.jpg' alt="UNESP" width={200} height={100}/>
            </div>
            <div className="md:text-right text-center">
                <p className="font-bold text-[#FFB300] text-xl">Sobre a</p>
                <p className="text-npm3xl md:text-5xl font-bold">UNIVERSIDADE</p>
                <hr className="text-[#FFB300] border-[#FFB300] border-2 rounded-sm my-3" />
                <p>A Faculdade de Ciências e Tecnologia da Universidade Estadual Paulista “Júlio de Mesquita Filho” (FCT/Unesp), localizada em Presidente Prudente – SP, destaca-se pela excelência no ensino, pesquisa e extensão universitária. A unidade oferece cursos de graduação em Ciência da Computação, Arquitetura e Urbanismo, Química, Matemática, Física, Estatística, Geografia, Pedagogia, Educação Física, Fisioterapia, Engenharia Cartográfica e de Agrimensura, e Engenharia Ambiental, formando profissionais altamente qualificados e comprometidos com o avanço científico, tecnológico e social.</p>
                <SaibaMaisBtnBlack/>
            </div>
        </div>
    )
}