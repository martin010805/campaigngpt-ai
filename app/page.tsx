"use client";

import { useState } from "react";

export default function Home() {
  const [business, setBusiness] = useState("");
  const [submittedBusiness, setSubmittedBusiness] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generateStrategy = async () => {
    if (!business.trim()) {
      alert("Por favor describe tu negocio.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          business,
        }),
      });

      const data = await response.json();

      setSubmittedBusiness(business);
      setResult(data.result);
    } catch (error) {
      console.error(error);
      alert("Error conectando con OpenAI");
    } finally {
      setLoading(false);
    }
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
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold disabled:opacity-50"
          >
            {loading ? "Generando..." : "Generar Estrategia IA"}
          </button>

          <button
            onClick={() => {
              setBusiness("");
              setSubmittedBusiness("");
              setResult("");
            }}
            className="bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg font-semibold"
          >
            Nueva Estrategia
          </button>
        </div>

        {submittedBusiness && (
          <div className="mt-4 text-sm text-gray-400">
            Última consulta: {submittedBusiness}
          </div>
        )}

        {result && (
          <div className="mt-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">
                🚀 Estrategia Generada por IA
              </h2>

              <div className="whitespace-pre-wrap text-gray-200">
                {result}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}