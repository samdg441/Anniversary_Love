import React from "react";

export default function LoginCard() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/src/assets/images/fondo2.webp')" }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Contenedor del login */}
      <div className="relative z-10 bg-[#1a1a2e]/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl w-[350px] text-center border border-red-800">
        <h1 className="text-3xl font-bold text-red-500 mb-6 tracking-wide">
          💋 Amor Eterno 💋
        </h1>

        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Usuario"
            className="bg-black/30 text-gray-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="bg-black/30 text-gray-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          <button
            type="submit"
            className="bg-red-700 hover:bg-red-800 text-white font-semibold py-2 rounded-lg transition-all duration-200"
          >
            Ingresar
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-4">
          Creado con ❤️ para nuestro aniversario
        </p>
      </div>
    </div>
  );
}
