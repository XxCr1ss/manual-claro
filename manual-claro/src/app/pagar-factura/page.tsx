import Navbar from '@/components/home/Navbar';
import ScreenFlow from '@/components/ScreenFlow';
import { paymentFlowData } from '@/data/flowData';

export default function PagarFacturaPage() {
    return (
        <div className="relative">
            <Navbar />
            <div className="pt-20">
                <ScreenFlow flowData={paymentFlowData} />
            </div>
        </div>
    );
}
