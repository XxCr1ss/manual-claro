import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Manual de Usuario — Mi Claro',
  description:
    'Guía interactiva y completa de la aplicación Mi Claro. Aprende a pagar facturas, instalar la app, recargar saldo y gestionar todos tus servicios paso a paso.',
  keywords: 'Mi Claro, manual, guía, pagar factura, instalar app, Claro Colombia',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}