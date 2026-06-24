"use client";

import { useState } from "react";

export default function Home() {
  const [business, setBusiness] = useState("");
  const [submittedBusiness, setSubmittedBusiness] = useState("");
  const [result, setResult] = useState(false);

  const generateStrategy = () => {
    if (!business.trim()) {
      alert("Por favor describe tu negocio.");
      return;
    }

    setSubmittedBusiness(business);
    setResult(true);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-8">
      <div className="w-full max-w-4xl">
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
        />

        <div className="flex gap-4 mt-6">
          <button
            onClick={generateStrategy}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold"
          >
            Generar Estrategia IA
          </button>

          <button
            onClick={() => {
              setBusiness("");
              setSubmittedBusiness("");
              setResult(false);
            }}
            className="bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg font-semibold"
          >
            Nueva Estrategia
          </button>
        </div>

        {result && (
          <div className="mt-8 grid gap-4">

            <div className="bg-slate-800 p-5 rounded-lg">
              <h2 className="text-xl font-bold mb-2">🎯 Buyer Persona</h2>
              <p>
                Personas interesadas en servicios relacionados con:
                {" "}
                {submittedBusiness}
              </p>
            </div>

            <div className="bg-slate-800 p-5 rounded-lg">
              <h2 className="text-xl font-bold mb-2">💰 Presupuesto</h2>
              <p>$20 USD por día.</p>
            </div>

            <div className="bg-slate-800 p-5 rounded-lg">
              <h2 className="text-xl font-bold mb-2">📢 Facebook Ad</h2>
              <p>
                Descubre más sobre: {submittedBusiness}
              </p>
            </div>

            <div className="bg-slate-800 p-5 rounded-lg">
              <h2 className="text-xl font-bold mb-2">📸 Instagram Ad</h2>
              <p>
                Contenido optimizado para Instagram sobre:
                {" "}
                {submittedBusiness}
              </p>
            </div>

            <div className="bg-slate-800 p-5 rounded-lg">
              <h2 className="text-xl font-bold mb-2">🎵 TikTok Ad</h2>
              <p>
                Video promocional sugerido para:
                {" "}
                {submittedBusiness}
              </p>
            </div>

          </div>
        )}
      </div>
    </main>
  );
}