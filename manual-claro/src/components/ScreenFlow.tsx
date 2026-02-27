'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, Info, ArrowLeft } from 'lucide-react';
import Hotspot from './Hotspot';
import ProgressBar from './ProgressBar';
import ExplanationPanel from './ExplanationPanel';
import { FlowData, FlowStep } from '@/types/flow.types';

interface ScreenFlowProps {
  flowData: FlowData;
}

export default function ScreenFlow({ flowData }: ScreenFlowProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [direction, setDirection] = useState(1);

  const currentStep: FlowStep = flowData.steps[currentStepIndex];
  const canGoBack = currentStep.previousStep !== undefined;
  const totalSteps = flowData.steps.length;

  const goToStep = (stepId: number, dir: number = 1) => {
    setDirection(dir);
    const newIndex = flowData.steps.findIndex((step: FlowStep) => step.id === stepId);
    if (newIndex !== -1) {
      setCurrentStepIndex(newIndex);
      setIsPanelOpen(false);
    }
  };

  const handleHotspotClick = (nextStep: number | number[]) => {
    if (typeof nextStep === 'number') {
      goToStep(nextStep, 1);
    } else {
      goToStep(nextStep[0], 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep.previousStep) {
      goToStep(currentStep.previousStep, -1);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <div className="min-h-screen animated-gradient mesh-gradient">
      {/* Header */}
      <header className="glass-dark sticky top-0 z-30" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <Link
                href="/"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm mr-3"
                id="back-to-home"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Inicio</span>
              </Link>
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #e8002d, #b5001f)' }}
              >
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">Pago de Facturas</h1>
                <p className="text-xs text-gray-500">Manual de Usuario · Mi Claro</p>
              </div>
            </div>

            <button
              onClick={() => setIsPanelOpen(true)}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl text-white font-semibold text-sm transition-all duration-300 glow-red-sm hover:glow-red"
              style={{ background: 'linear-gradient(135deg, #e8002d, #b5001f)' }}
            >
              <Info className="w-4 h-4" />
              <span className="hidden sm:inline">Ver Instrucciones</span>
            </button>
          </div>

          <ProgressBar currentStep={currentStepIndex + 1} totalSteps={totalSteps} />

          <div className="mt-2 flex items-center justify-between text-sm">
            <span className="text-gray-500">
              Paso {currentStepIndex + 1} de {totalSteps}
            </span>
            <span className="text-white font-medium">{currentStep.title}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
          {/* Screenshot Container */}
          <div className="relative w-full max-w-sm mx-auto">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentStep.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 },
                }}
                className="relative"
              >
                {/* Phone Frame */}
                <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl mx-auto" style={{ width: '360px' }}>
                  <div className="bg-white rounded-[2rem] overflow-hidden">
                    {/* Screenshot */}
                    <div className="relative" style={{ width: '336px', height: '747px' }}>
                      <Image
                        src={currentStep.screenshot}
                        alt={currentStep.title}
                        width={336}
                        height={747}
                        className="object-cover"
                        priority
                        style={{ width: '100%', height: '100%' }}
                      />

                      {/* Hotspots */}
                      {currentStep.hotspots.map((hotspot) => (
                        <Hotspot
                          key={hotspot.id}
                          x={hotspot.x}
                          y={hotspot.y}
                          width={hotspot.width}
                          height={hotspot.height}
                          label={hotspot.label}
                          onClick={() => handleHotspotClick(hotspot.nextStep)}
                          isActive={true}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={handlePrevious}
              disabled={!canGoBack}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all ${canGoBack
                  ? 'glass text-white hover:bg-white/10 card-hover'
                  : 'opacity-30 cursor-not-allowed glass text-gray-600'
                }`}
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Anterior</span>
            </button>

            <button
              onClick={() => setIsPanelOpen(true)}
              className="px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 glow-red-sm hover:glow-red"
              style={{ background: 'linear-gradient(135deg, #e8002d, #b5001f)' }}
            >
              Ver Detalles
            </button>
          </div>

          {/* Hint */}
          <motion.p
            className="mt-6 text-center text-gray-500 text-sm max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            💡 Haz clic en las áreas resaltadas de la pantalla para avanzar al siguiente paso
          </motion.p>
        </div>
      </main>

      {/* Explanation Panel */}
      <ExplanationPanel
        isOpen={isPanelOpen}
        title={currentStep.title}
        explanation={currentStep.explanation}
        onClose={() => setIsPanelOpen(false)}
      />
    </div>
  );
}