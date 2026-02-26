export interface Hotspot {
  id: string;
  x: number; // Porcentaje (0-100)
  y: number; // Porcentaje (0-100)
  width: number; // Porcentaje
  height: number; // Porcentaje
  nextStep: number | number[]; // Puede ser un paso o múltiples opciones
  label?: string; // Para futuros tooltips
}

export interface FlowStep {
  id: number;
  title: string;
  screenshot: string;
  explanation: string;
  hotspots: Hotspot[];
  previousStep?: number;
}

export interface FlowData {
  steps: FlowStep[];
}