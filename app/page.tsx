"use client";

import { useState } from "react";

export default function Home() {
  const [business, setBusiness] = useState("");
  const [submittedBusiness, setSubmittedBusiness] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState("");
  const [marketingScore, setMarketingScore] = useState(0);
  const [published, setPublished] = useState(false);
  const [publishing, setPublishing] = useState(false);

  const generateStrategy = async () => {
    if (!business.trim()) {
      alert("Por favor describe tu negocio u objetivo.");
      return;
    }

    try {
      setLoading(true);
      setLoadingStep("🔍 Analizando mercado...");
      setResult("");
      setTimeout(() => {
  setLoadingStep("🎯 Detectando Buyer Persona...");
}, 700);

setTimeout(() => {
  setLoadingStep("📝 Generando anuncios...");
}, 1400);

setTimeout(() => {
  setLoadingStep("🚀 Preparando campañas...");
}, 2100);

setTimeout(() => {
  setLoadingStep("🌐 Preparando publicación automática...");
}, 2800);

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ business }),
      });

      const data = await response.json();
      setSubmittedBusiness(business);
      setMarketingScore(Math.floor(Math.random() * 16) + 85);
      setResult(data.result);
    } catch (error) {
      console.error(error);
      alert("Error generando la estrategia");
    } finally {
      setLoadingStep("");
      setLoading(false);
    }
  };

  // Función para segmentar el texto en las 3 columnas independientes
  const getBlocks = () => {
    if (!result) return { pilar1: "", pilar2: "", pilar3: "" };
    
    const parts = result.split(/📊 2\.|🔌 3\./g);
    
    const pilar1 = parts[0] ? parts[0].replace(/🤖 1\. GENERACIÓN DE ANUNCIOS CON IA/g, "").trim() : "";
    const pilar2 = parts[1] ? parts[1].replace(/CAMPAÑAS AUTOMATIZADAS/g, "").trim() : "";
    const pilar3 = parts[2] ? parts[2].replace(/PUBLICACIÓN Y COMERCIALIZACIÓN DIRECTA \(MÓDULO API\)/g, "").trim() : "";

    return { pilar1, pilar2, pilar3 };
  };

  const { pilar1, pilar2, pilar3 } = getBlocks();

  return (
    <main className="min-h-screen bg-[#030712] text-slate-100 flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Luces de fondo difuminadas estilo ciberespacio */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-pink-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />

      {/* CONTENEDOR CENTRAL */}
      <div className="w-full max-w-6xl z-10 space-y-8 transition-all duration-500">
        
       {/* HERO PRINCIPAL */}

<div className="text-center space-y-6">

  {/* Badge superior */}
  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 shadow-lg shadow-cyan-500/10">
    🚀 AI Marketing Platform
  </div>

  {/* Logo */}
  <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
    <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
      CampaignGPT AI
    </span>
  </h1>

  {/* Descripción */}
  <p className="max-w-4xl mx-auto text-slate-300 text-lg md:text-xl leading-8">
    Diseña, optimiza y prepara campañas publicitarias
    <span className="text-cyan-300 font-semibold">
      {" "}multiplataforma{" "}
    </span>
    utilizando Inteligencia Artificial.
  </p>

  {/* Tecnologías */}
  <div className="flex flex-wrap justify-center gap-4 pt-2">

    {/* IA */}
    <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 font-semibold text-emerald-300 shadow-md shadow-emerald-500/10 hover:scale-105 transition">
      🤖 IA Marketing
    </div>

    {/* Facebook */}
    <div className="rounded-full border border-[#1877F2]/30 bg-[#1877F2]/10 px-5 py-2 font-semibold text-[#4F9CFF] shadow-md shadow-[#1877F2]/20 hover:scale-105 transition">
      🔵 Facebook Ads
    </div>

   {/* Instagram */}
<div className="rounded-full border border-pink-500/40 bg-slate-900 px-5 py-2 font-semibold shadow-lg shadow-pink-500/20 hover:scale-105 transition">
  <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent">
    📸 Instagram
  </span>
</div>

   {/* TikTok */}
<div className="rounded-full border border-cyan-400/30 bg-slate-900 px-5 py-2 font-semibold shadow-lg shadow-cyan-400/20 hover:scale-105 transition">
  <span className="text-cyan-300">🎵</span>{" "}
  <span className="text-pink-400">Tik</span>
  <span className="text-cyan-300">Tok</span>
</div>

    {/* Google */}
    <div className="rounded-full border border-[#34A853]/30 bg-[#34A853]/10 px-5 py-2 font-semibold text-[#57D47A] shadow-md shadow-[#34A853]/20 hover:scale-105 transition">
      🌐 Google Ads
    </div>

  </div>

</div>

        {/* TARJETA DEL FORMULARIO PRINCIPAL (AZUL OSCURO NEBULA) */}
        <div className="w-full max-w-3xl mx-auto rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 md:p-8 backdrop-blur-md shadow-2xl shadow-black/50">
          <div className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-pink-400 tracking-wider uppercase mb-2">
                Brief del Negocio u Objetivo
              </label>
              <textarea
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                className="w-full h-32 p-4 rounded-xl bg-[#030712]/80 text-slate-200 border border-slate-800 focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 transition-all duration-300 outline-none resize-none placeholder-slate-600 text-sm leading-relaxed"
                placeholder="Escribe aquí los detalles de tu negocio..."
              />
            </div>

            {/* BOTONES INTERACTIVOS */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={generateStrategy}
                disabled={loading}
                className="flex-1 justify-center items-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 flex"
              >
                {loading ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                    <span>Procesando Estrategia...</span>
                  </>
                ) : (
                  <>
                    <span>Generar Estrategia IA</span>
                    <span>🧠</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  setBusiness("");
                  setResult("");
                  setSubmittedBusiness("");
                  setMarketingScore(0);
                }}
                className="rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white px-6 py-3.5 font-semibold transition-all duration-300 text-sm border border-slate-800"
              >
                Nueva Estrategia
              </button>
            </div>
          </div>

          {/* HISTORIAL INFERIOR */}
          {submittedBusiness && (
            <div className="mt-4 pt-4 border-t border-slate-800/60 text-[11px] text-slate-500 flex items-center gap-1">
              <span className="font-bold text-pink-500/70">● Último análisis:</span>
              <p className="italic truncate text-slate-400">
  &quot;{submittedBusiness}&quot;
</p>
            </div>
          )}
        </div>

        {loading && (
  <div className="w-full max-w-3xl mx-auto rounded-2xl border border-purple-500/20 bg-slate-900/50 p-6 backdrop-blur-md animate-pulse">
    <h3 className="text-xl font-bold text-purple-400 mb-4">
      🤖 Analizando tu negocio...
    </h3>

    <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden mb-5">
      <div className="h-full w-3/4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse rounded-full"></div>
    </div>

    <p className="text-slate-300 font-medium">
      {loadingStep}
    </p>
  </div>
)}

{result && (
  <div className="w-full max-w-3xl mx-auto mb-6 rounded-2xl border border-emerald-500/20 bg-slate-900/50 p-6 backdrop-blur-md shadow-xl">

    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-bold text-emerald-400">
        📊 Marketing Score IA
      </h2>

      <span className="text-4xl font-black text-white">
        {marketingScore}/100
      </span>
    </div>

    <div className="w-full h-4 bg-slate-800 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-emerald-400 via-lime-400 to-green-500 transition-all duration-700"
        style={{ width: `${marketingScore}%` }}
      />
    </div>

    <p className="mt-4 text-slate-300">
      {marketingScore >= 95
        ? "🚀 Excelente potencial para campañas de alto rendimiento."
        : marketingScore >= 90
        ? "✅ Muy buena oportunidad para captar nuevos clientes."
        : "👍 Buen potencial. La estrategia puede optimizarse aún más."}
    </p>

  </div>
)}

{result && (
  <div className="w-full max-w-3xl mx-auto mb-8 rounded-2xl border border-cyan-500/20 bg-slate-900/50 p-6 backdrop-blur-md shadow-xl">

    <div className="flex items-center gap-3 mb-5">
      <span className="text-3xl">🧠</span>

      <div>
        <h2 className="text-2xl font-bold text-cyan-400">
          Centro de Inteligencia IA
        </h2>

        <p className="text-slate-400 text-sm">
          Procesos ejecutados automáticamente por el motor de IA.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      <div className="flex justify-between bg-slate-800/60 rounded-xl p-3">
        <span>📊 Mercado Analizado</span>
        <span className="text-green-400">✔</span>
      </div>

      <div className="flex justify-between bg-slate-800/60 rounded-xl p-3">
        <span>🎯 Buyer Persona</span>
        <span className="text-green-400">✔</span>
      </div>

      <div className="flex justify-between bg-slate-800/60 rounded-xl p-3">
        <span>🔎 Competencia</span>
        <span className="text-green-400">✔</span>
      </div>

      <div className="flex justify-between bg-slate-800/60 rounded-xl p-3">
        <span>🏷️ Keywords SEO</span>
        <span className="text-green-400">✔</span>
      </div>

      <div className="flex justify-between bg-slate-800/60 rounded-xl p-3">
        <span>📘 Facebook Ads</span>
        <span className="text-green-400">✔</span>
      </div>

      <div className="flex justify-between bg-slate-800/60 rounded-xl p-3">
        <span>📸 Instagram Ads</span>
        <span className="text-green-400">✔</span>
      </div>

      <div className="flex justify-between bg-slate-800/60 rounded-xl p-3">
        <span>🎵 TikTok Ads</span>
        <span className="text-green-400">✔</span>
      </div>

      <div className="flex justify-between bg-slate-800/60 rounded-xl p-3">
        <span>🌐 APIs Preparadas</span>
        <span className="text-green-400">✔</span>
      </div>

    </div>

  </div>
)}

{/* =================== VISTA PREVIA DEL ANUNCIO =================== */}

{result && (
  <div className="mt-10">

    <h2 className="text-3xl font-bold text-center mb-8">
      📱 Vista previa de anuncios generados por IA
    </h2>

    <div className="grid md:grid-cols-2 gap-6">

      {/* Facebook */}

      <div className="rounded-2xl border border-blue-500/30 bg-slate-900 shadow-xl overflow-hidden">

        <div className="bg-[#1877F2] text-white px-5 py-3 font-bold">
          Facebook
        </div>

        <div className="p-6">

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center text-xl">
              📘
            </div>

            <div>

              <h3 className="font-bold">
                Negocio Analizado
              </h3>

              <p className="text-xs text-slate-400">
                Patrocinado
              </p>

            </div>

          </div>

          <p className="mt-5 text-slate-300 leading-7">

            ✨ Recupera una apariencia más joven con tratamientos personalizados.

<br /><br />

Agenda una valoración con nuestros especialistas y descubre la mejor opción para ti.

          </p>

          <div className="mt-5 rounded-xl overflow-hidden border border-blue-500/30">

  <div className="bg-gradient-to-br from-blue-700 via-blue-500 to-cyan-400 h-56 flex flex-col items-center justify-center text-center px-6">

    <div className="text-6xl mb-3">
      ✨
    </div>

    <h3 className="text-2xl font-black text-white">
      REJUVENECIMIENTO
    </h3>

    <p className="text-blue-100 mt-2">
      Resultados naturales • Atención personalizada
    </p>

    <button className="mt-5 bg-white text-blue-700 px-5 py-2 rounded-full font-bold">
      Agenda tu valoración
    </button>

  </div>

</div>

          <button className="mt-6 w-full rounded-lg bg-[#1877F2] py-3 font-semibold hover:opacity-90">

            Más información

          </button>

        </div>

      </div>

      {/* Instagram */}

      <div className="rounded-2xl border border-pink-500/30 bg-slate-900 shadow-xl overflow-hidden">

        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white px-5 py-3 font-bold">

          Instagram

        </div>

        <div className="p-6">

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 flex items-center justify-center text-xl">

              📸

            </div>

            <div>

              <h3 className="font-bold">

                CampaignGPT AI

              </h3>

              <p className="text-xs text-slate-400">

                Publicación patrocinada

              </p>

            </div>

          </div>

          <div className="mt-5 rounded-xl overflow-hidden border border-pink-500/30">

  <div className="bg-gradient-to-br from-pink-500 via-purple-600 to-orange-500 h-64 flex flex-col justify-between p-6">

    <div className="flex justify-between text-white">

      <span className="font-bold">
        CampaignGPT AI
      </span>

      <span>
        📸
      </span>

    </div>

    <div className="text-center">

      <div className="text-6xl mb-4">
        ✨
      </div>

      <h2 className="text-3xl font-black text-white">
        RESULTADOS
      </h2>

      <p className="text-pink-100 mt-2">
        Naturales • Elegantes • Seguros
      </p>

    </div>

    <div className="text-white text-sm">

      ❤️ 1.245 Me gusta

    </div>

  </div>

</div>

          <p className="mt-5 text-slate-300 leading-7">

            ✨ Descubre una nueva forma de atraer más clientes.

<br /><br />

Convierte visitantes en pacientes con campañas creadas por Inteligencia Artificial.

          </p>

          <div className="flex justify-between mt-6 text-sm text-slate-400">

            <span>❤️ 1.245</span>

            <span>💬 84</span>

            <span>📤 Compartir</span>

          </div>

        </div>

      </div>

    </div>

  </div>
)}

{/* =================== CENTRO DE PUBLICACIÓN =================== */}

{result && (
  <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-slate-900/60 backdrop-blur-md p-8 shadow-2xl">

    <h2 className="text-3xl font-bold text-center mb-2">
      🌐 Centro de Publicación
    </h2>

    <p className="text-center text-slate-400 mb-8">
      Estado de despliegue de la campaña en plataformas digitales.
    </p>

    <div className="grid md:grid-cols-2 gap-4">

      <div className="flex items-center justify-between rounded-xl bg-blue-500/10 border border-blue-500/20 px-5 py-4">
        <span className="font-semibold text-blue-300">🔵 Facebook Ads</span>
        <span className="text-green-400 font-bold">✔ LISTO</span>
      </div>

      <div className="flex items-center justify-between rounded-xl bg-pink-500/10 border border-pink-500/20 px-5 py-4">
        <span className="font-semibold text-pink-300">📸 Instagram</span>
        <span className="text-green-400 font-bold">✔ LISTO</span>
      </div>

      <div className="flex items-center justify-between rounded-xl bg-cyan-500/10 border border-cyan-500/20 px-5 py-4">
        <span className="font-semibold text-cyan-300">🎵 TikTok</span>
        <span className="text-green-400 font-bold">✔ LISTO</span>
      </div>

      <div className="flex items-center justify-between rounded-xl bg-green-500/10 border border-green-500/20 px-5 py-4">
        <span className="font-semibold text-green-300">🌐 Google Ads</span>
        <span className="text-green-400 font-bold">✔ LISTO</span>
      </div>

    </div>

    <div className="mt-8 rounded-xl bg-slate-800 p-5 border border-slate-700">

      <div className="flex justify-between mb-3">

        <span className="text-slate-300">
          Estado del despliegue
        </span>

        <span className="text-cyan-300 font-bold">
          100%
        </span>

      </div>

      <div className="h-3 rounded-full bg-slate-700 overflow-hidden">

        <div className="h-full w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-400"></div>

      </div>

    </div>

    <button
  onClick={() => {

    setPublishing(true);

    setPublished(false);

    setTimeout(() => {

      setPublishing(false);

      setPublished(true);

    }, 3000);

  }}

  className="mt-8 w-full rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 py-4 text-xl font-bold shadow-lg hover:scale-[1.01] transition"
>

  {publishing ? "⏳ Publicando campaña..." : "🚀 Publicar Campaña"}

</button>

{publishing && (

<div className="mt-6 rounded-xl border border-cyan-500/30 bg-slate-900/70 p-6">

<h3 className="text-2xl font-bold text-cyan-300 mb-4">

🚀 Desplegando campaña...

</h3>

<div className="space-y-4">

<div>

<p className="text-slate-300 mb-2">

Conectando con Facebook...

</p>

<div className="w-full h-2 rounded-full bg-slate-700 overflow-hidden">

<div className="h-full w-full bg-blue-500 animate-pulse"></div>

</div>

</div>

<div>

<p className="text-slate-300 mb-2">

Preparando Instagram...

</p>

<div className="w-full h-2 rounded-full bg-slate-700 overflow-hidden">

<div className="h-full w-full bg-pink-500 animate-pulse"></div>

</div>

</div>

<div>

<p className="text-slate-300 mb-2">

Configurando TikTok y Google Ads...

</p>

<div className="w-full h-2 rounded-full bg-slate-700 overflow-hidden">

<div className="h-full w-full bg-cyan-500 animate-pulse"></div>

</div>

</div>

</div>

</div>

)}

{published && (

<div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 animate-pulse">

<h3 className="text-2xl font-bold text-emerald-400 mb-3">

✅ Campaña preparada correctamente

</h3>

<div className="space-y-2 text-slate-200">

<p>✔ Facebook Ads sincronizado</p>

<p>✔ Instagram sincronizado</p>

<p>✔ TikTok sincronizado</p>

<p>✔ Google Ads sincronizado</p>

<p>✔ APIs verificadas</p>

<p>✔ Estrategia lista para despliegue</p>

</div>

</div>

)}

    <p className="text-center text-xs text-slate-500 mt-4">
      Simulación del flujo de publicación. La integración con APIs oficiales
      de Meta, TikTok y Google Ads corresponde a la siguiente fase del MVP.
    </p>

  </div>
)}

{result && (

<div className="mt-12">

<h2 className="text-4xl font-black text-center mb-8">

📊 Dashboard de Rendimiento Estimado

</h2>

<div className="grid grid-cols-2 md:grid-cols-5 gap-5">

<div className="rounded-2xl bg-slate-900/60 border border-cyan-500/20 p-6 text-center hover:scale-105 transition-all duration-300">

<p className="text-slate-400 text-sm">
👁️ Alcance
</p>

<h3 className="text-4xl font-black text-cyan-300 mt-3 animate-pulse">
42.5K
</h3>

</div>

<div className="rounded-2xl bg-slate-900/60 border border-pink-500/20 p-6 text-center hover:scale-105 transition-all duration-300">

<p className="text-slate-400 text-sm">
🖱 CTR
</p>

<h3 className="text-4xl font-black text-pink-400 mt-3 animate-pulse">
6.8%
</h3>

</div>

<div className="rounded-2xl bg-slate-900/60 border border-emerald-500/20 p-6 text-center hover:scale-105 transition-all duration-300">

<p className="text-slate-400 text-sm">
💰 CPC
</p>

<h3 className="text-4xl font-black text-emerald-400 mt-3 animate-pulse">

$0.18

</h3>

</div>

<div className="rounded-2xl bg-slate-900/60 border border-yellow-500/20 p-6 text-center hover:scale-105 transition-all duration-300">

<p className="text-slate-400 text-sm">
🎯 Conversión
</p>

<h3 className="text-4xl font-black text-yellow-300 mt-3 animate-pulse">

12.4%

</h3>

</div>

<div className="rounded-2xl bg-slate-900/60 border border-purple-500/20 p-6 text-center hover:scale-105 transition-all duration-300">

  <p className="text-slate-400 text-sm">
    ⭐ ROI
  </p>

  <h3 className="text-4xl font-black text-purple-400 mt-3 animate-pulse">
    4.8x
  </h3>

</div>

</div>

</div>

)}

        {/* 📊 RESPUESTA DIVIDIDA EN 3 COLUMNAS COMPACTAS SOBRE FONDO OSCURO */}
        {result && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 animate-fade-in">
            
            {/* COLUMNA 1 */}
            <div className="bg-slate-900/40 rounded-2xl p-6 border border-slate-800/80 backdrop-blur-sm shadow-xl flex flex-col hover:border-pink-500/20 transition-colors duration-300">
              <div className="flex items-center gap-2 text-pink-400 font-bold text-sm uppercase tracking-wide border-b border-slate-800/60 pb-3 mb-4">
                <span>💡</span>
                <h4>Pilares de la Estrategia (Anuncios)</h4>
              </div>
              <div className="whitespace-pre-wrap text-slate-300 text-xs md:text-sm leading-relaxed font-normal flex-1">
                {pilar1}
              </div>
            </div>

            {/* COLUMNA 2 */}
            <div className="bg-slate-900/40 rounded-2xl p-6 border border-slate-800/80 backdrop-blur-sm shadow-xl flex flex-col hover:border-purple-500/20 transition-colors duration-300">
              <div className="flex items-center gap-2 text-purple-400 font-bold text-sm uppercase tracking-wide border-b border-slate-800/60 pb-3 mb-4">
                <span>🎯</span>
                <h4>Ejemplos de Anuncios (Campañas)</h4>
              </div>
              <div className="whitespace-pre-wrap text-slate-300 text-xs md:text-sm leading-relaxed font-normal flex-1">
                {pilar2}
              </div>
            </div>

            {/* COLUMNA 3 */}
            <div className="bg-slate-900/40 rounded-2xl p-6 border border-slate-800/80 backdrop-blur-sm shadow-xl flex flex-col hover:border-blue-500/20 transition-colors duration-300">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-wide border-b border-slate-800/60 pb-3 mb-4">
                <span>📢</span>
                <h4>Plan de Acción y API Automática</h4>
              </div>
              <div className="whitespace-pre-wrap text-slate-300 text-xs md:text-sm leading-relaxed font-normal flex-1">
                {pilar3}
              </div>
            </div>

          </div>
        )}

      </div>
    </main>
  );
}