import { FlowData } from '@/types/flow.types';

export const paymentFlowData: FlowData = {
  steps: [
    {
      id: 1,
      title: "Pantalla de Inicio",
      screenshot: "/screenshots/step-1.jpeg",
      explanation: "Abre la aplicación Mi Claro. En la pantalla principal, busca la opción de 'Pagar Factura' en el menú inferior.",
      hotspots: [
        {
          id: "inicio-pagar",
          x: 35,
          y: 85,
          width: 30,
          height: 8,
          nextStep: 2,
          label: "Botón Pagar"
        }
      ]
    },
    {
      id: 2,
      title: "Selección de Servicio",
      screenshot: "/screenshots/step-2.jpeg",
      explanation: "Selecciona el servicio del cual deseas pagar la factura. Puedes tener múltiples servicios asociados a tu cuenta.",
      hotspots: [
        {
          id: "servicio-1",
          x: 10,
          y: 30,
          width: 80,
          height: 15,
          nextStep: 3,
          label: "Servicio Móvil"
        }
      ],
      previousStep: 1
    },
    {
      id: 3,
      title: "Detalle de Factura",
      screenshot: "/screenshots/step-3.jpeg",
      explanation: "Revisa el detalle de tu factura: monto a pagar, fecha de vencimiento y consumos del periodo.",
      hotspots: [
        {
          id: "continuar-pago",
          x: 20,
          y: 75,
          width: 60,
          height: 8,
          nextStep: 4,
          label: "Continuar al Pago"
        }
      ],
      previousStep: 2
    },
    {
      id: 4,
      title: "Método de Pago",
      screenshot: "/screenshots/step-4.jpeg",
      explanation: "Selecciona tu método de pago preferido: tarjeta de crédito, débito o cuenta bancaria.",
      hotspots: [
        {
          id: "tarjeta-credito",
          x: 15,
          y: 35,
          width: 70,
          height: 12,
          nextStep: 5,
          label: "Tarjeta de Crédito"
        },
        {
          id: "tarjeta-debito",
          x: 15,
          y: 50,
          width: 70,
          height: 12,
          nextStep: 5,
          label: "Tarjeta de Débito"
        }
      ],
      previousStep: 3
    },
    {
      id: 5,
      title: "Datos de Tarjeta",
      screenshot: "/screenshots/step-5.jpeg",
      explanation: "Ingresa los datos de tu tarjeta de forma segura. Todos los datos están protegidos con encriptación.",
      hotspots: [
        {
          id: "confirmar-datos",
          x: 25,
          y: 80,
          width: 50,
          height: 8,
          nextStep: 6,
          label: "Confirmar"
        }
      ],
      previousStep: 4
    },
    {
      id: 6,
      title: "Resumen de Pago",
      screenshot: "/screenshots/step-6.jpeg",
      explanation: "Verifica que todos los datos sean correctos antes de confirmar el pago.",
      hotspots: [
        {
          id: "confirmar-pago",
          x: 30,
          y: 75,
          width: 40,
          height: 8,
          nextStep: 7,
          label: "Pagar Ahora"
        }
      ],
      previousStep: 5
    },
    {
      id: 7,
      title: "Procesando Pago",
      screenshot: "/screenshots/step-7.jpeg",
      explanation: "Tu pago se está procesando. Este proceso puede tomar unos segundos.",
      hotspots: [
        {
          id: "auto-next",
          x: 0,
          y: 0,
          width: 100,
          height: 100,
          nextStep: 8,
          label: "Procesando..."
        }
      ],
      previousStep: 6
    },
    {
      id: 8,
      title: "Pago Exitoso",
      screenshot: "/screenshots/step-8.jpeg",
      explanation: "¡Pago realizado con éxito! Puedes descargar tu comprobante o enviarlo por correo electrónico.",
      hotspots: [
        {
          id: "finalizar",
          x: 25,
          y: 85,
          width: 50,
          height: 8,
          nextStep: 1,
          label: "Volver al Inicio"
        }
      ],
      previousStep: 7
    }
  ]
};