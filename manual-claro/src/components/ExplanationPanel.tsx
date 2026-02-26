'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ExplanationPanelProps {
  isOpen: boolean;
  title: string;
  explanation: string;
  onClose: () => void;
}

export default function ExplanationPanel({ isOpen, title, explanation, onClose }: ExplanationPanelProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 p-6 overflow-y-auto scrollbar-custom"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
              <p className="text-gray-700 leading-relaxed">{explanation}</p>
            </div>

            <div className="mt-8 p-4 bg-red-50 border-l-4 border-red-500 rounded">
              <p className="text-sm text-red-800">
                <strong>Tip:</strong> Haz clic en las áreas resaltadas para continuar con el flujo.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}