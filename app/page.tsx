"use client";

import { useState } from "react";

export default function Home() {
  const [business, setBusiness] = useState("");
  const [result, setResult] = useState("");

  const generateStrategy = () => {
    setResult(`
🎯 Buyer Persona:
Mujeres entre 30 y 55 años interesadas en rejuvenecimiento facial.

📍 Ubicación:
Cali, Colombia.

💰 Presupuesto sugerido:
$20 USD por día.

📢 Facebook Ad:
Recupera una mirada más joven con una valoración personalizada.

📸 Instagram Ad:
Descubre cómo rejuvenecer tu mirada con resultados naturales.

🎵 TikTok Ad:
¿Párpados caídos? Conoce las opciones disponibles para rejuvenecer tu rostro.
    `);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-8">
      <div className="w-full max-w-3xl">
        <h1 className="text-5xl font-bold mb-4">
          CampaignGPT AI
        </h1>

        <p className="text-gray-300 mb-8">
          Describe tu negocio y la IA creará una estrategia de marketing completa.
        </p>

        <textarea
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
          className="w-full h-48 p-4 rounded-lg bg-white text-black border border-gray-300"
          placeholder="Ejemplo: Tengo una clínica estética en Cali y quiero conseguir más pacientes para blefaroplastia..."
        ></textarea>

        <button
          onClick={generateStrategy}
          className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold"
        >
          Generar Estrategia IA
        </button>

        {result && (
          <div className="mt-8 bg-slate-800 p-6 rounded-lg whitespace-pre-line">
            {result}
          </div>
        )}
      </div>
    </main>
  );
}