import ScreenFlow from '@/components/ScreenFlow';
import { paymentFlowData } from '@/data/flowData';

export default function Home() {
  return <ScreenFlow flowData={paymentFlowData} />;
}