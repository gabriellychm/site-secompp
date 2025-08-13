import Image from 'next/image'
import SaibaMaisBtnBlack from "@/app/components/SaibaMaisBtnBlack";
export default function SectionSobre(){
    return(
        <div className="p-10 grid md:grid-cols-2 sm:grid-rows-2 md:grid-rows-1">
            <div className="flex md:items-start items-center justify-center md:justify-start">
                <Image src='/SA03.jpg' alt="Logo UNESP" width={200} height={100}/>
            </div>
            <div className="md:text-right text-center">
                <p className="font-bold text-[#FFB300] text-xl">Sobre a</p>
                <p className="text-3xl md:text-5xl font-bold">UNIVERSIDADE</p>
                <hr className="text-[#FFB300] border-[#FFB300] border-2 rounded-sm my-3" />
                <p>Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch zu erstellen. Es hat nicht nur 5 Jahrhunderte überlebt, sondern auch in Spruch in die elektronische Schriftbearbeitung geschafft (bemerke, nahezu unverändert). Bekannt wurde es 1960, mit dem erscheinen von "Letraset", welches Passagen von Lorem Ipsum enhielt, so wie Desktop Software wie "Aldus PageMaker" - ebenfalls mit Lorem Ipsum</p>
                <SaibaMaisBtnBlack/>
            </div>
        </div>
    )
}