export default function TestPage() {
  return (
    <div className="min-h-screen bg-red-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Prueba de Tailwind
        </h1>
        <p className="text-gray-600">
          Si ves este texto con estilos, Tailwind funciona ✅
        </p>
        <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Botón de prueba
        </button>
      </div>
    </div>
  );
}