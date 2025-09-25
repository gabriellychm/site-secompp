export default function Footer() {
    return(
        <div className="bg-[#0E1526] p-5 grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-4">
            <div className="lg:col-span-3 grid sm:grid-cols-2 text-white items-center gap-4 m-3">
                <div className="flex flex-col items-center">
                    <p className="font-bold text-lg">Patrocínio</p>
                    <div className="flex flex-col items-center gap-3">
                        <div className="flex items-center gap-3">
                            <a className={"hover:text-[#FFB300] hover:underline underline-offset-5 transition"} href="https://vericode.com.br/">Vericode</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <p className="font-bold text-lg">Realização</p>
                    <div className="flex flex-col items-center gap-3">
                        <div className="flex items-center gap-3">
                            <a className={"hover:text-[#FFB300] hover:underline underline-offset-5 transition"} href="https://www.alimentoswilson.com.br/marca/refresco-wilson.html">Refresco Wilson</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D9D9D922] rounded-4xl grid grid-rows-2 justify-center lg:flex lg:flex-col">
                <p className="font-bold text-lg text-center m-4 text-[#FFB300]">REDES SOCIAIS</p>
                <div className="flex flex-col md:items-start gap-3 mx-9">
                    <div className="flex items-center gap-3 text-white">
                        <div className="p-3 bg-gray-500 rounded-full">
                        </div>
                        <a className={"hover:text-[#FFB300] hover:underline underline-offset-5 transition"} href="https://www.instagram.com/computacao.fct/">@computacao.fct</a>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                        <div className="p-3 bg-gray-500 rounded-full">
                        </div>
                        <a className={"hover:text-[#FFB300] hover:underline underline-offset-5 transition"} href="https://www.instagram.com/ejcompunesp/">@ejcomp</a>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                        <div className="p-3 bg-gray-500 rounded-full">
                        </div>
                        <a className={"hover:text-[#FFB300] hover:underline underline-offset-5 transition"} href="https://www.instagram.com/cacic.fct/">@cacic.fct</a>
                    </div>
                </div>
                <div>
                    <p className="text-white font-bold text-xs my-8 mx-5">FCT – FACULDADE DE CIÊNCIAS E TECNOLOGIA</p>
                    <p className="text-white text-xs mb-8 mx-5">Universidade Estadual Paulista "Júlio de Mesquita Filho" <br/> Rua Roberto Simonsen, 305 Presidente Prudente - SP <br/> 19060-900</p>
                </div>
            </div>
        </div>
    )
}