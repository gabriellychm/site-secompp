import SectionSobre from "@/app/components/SectionSobre";
import SectionDuvidas from "@/app/components/SectionDuvidas";
import Footer from "@/app/components/Footer";
import SectionSliderPalestra from "@/app/components/SectionSliderPalestra";
import SectionSliderMinicursos from "@/app/components/SectionSliderMinicursos";
import Presentation from "./components/presentation/presentation";
export default function Home() {
  return (
    <div className="">
        <Presentation></Presentation>
        <SectionSobre></SectionSobre>
        <SectionSliderPalestra/>
        <SectionSliderMinicursos/>
        <SectionDuvidas/>
        <Footer/>
    </div>
  );
}
