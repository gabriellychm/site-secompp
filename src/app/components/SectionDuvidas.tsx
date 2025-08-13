import DuvidaSelector from '@/app/components/DuvidaSelector'
import DuvidaView from "@/app/components/DuvidaView";
export default function sectionDuvidas() {
    return (
        <div className="grid md:grid-cols-3 grid-rows-2 md:grid-rows-1 p-10 gap-3">
            <DuvidaSelector/>
            <DuvidaView/>
        </div>
    )
}