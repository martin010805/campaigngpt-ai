import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.business) {
      return NextResponse.json({ error: "El brief del negocio es requerido" }, { status: 400 });
    }

    const inputUsuario = body.business.toLowerCase();
    let respuestaSimulada = "";

    // 🌟 SIMULACIÓN EXPERTA PARA CLÍNICAS (ODONTOLÓGICAS / ESTÉTICAS)
    if (inputUsuario.includes("odont") || inputUsuario.includes("estet") || inputUsuario.includes("clinic") || inputUsuario.includes("pacient")) {
      respuestaSimulada = `🤖 1. GENERACIÓN DE ANUNCIOS CON IA

- **Público Objetivo Ideal (Buyer Persona):** Hombres y mujeres de 25 a 55 años residentes en la ciudad, con poder adquisitivo medio-alto, que buscan mejorar su estética dental/facial, recuperar su confianza o solucionar dolores crónicos. Sus principales dolores son el miedo al dolor en procedimientos y la falta de tiempo.
- **Copys Publicitarios de Alto Impacto:**
  *   *Variación 1 (Enfoque Emocional):* "¿Te da pena sonreír en las fotos? 📸 Recupera la seguridad y la salud de tu boca con nuestros especialistas en Alta Estética. Agenda hoy tu valoración digital 100% personalizada y descubre el diseño de sonrisa ideal para ti. 💎 ¡Haz clic abajo y sonríe con orgullo!"
  *   *Variación 2 (Enfoque Oferta/Gancho):* "¡Dile adiós a la molestia y luce una sonrisa radiante! 🦷 Este mes, accede a un 20% de descuento en tu tratamiento integral con tecnología sin dolor. Cupos limitados para agendamiento esta semana. 📆 Haz clic en el botón para reservar tu cita por WhatsApp."
- **Sugerencias de Contenido Visual:** Video en formato vertical (Reels/TikTok) de 15 segundos que inicie con un plano cerrado de un paciente sonriendo con timidez, seguido por el especialista explicando el proceso digital moderno, y finalizando con el cambio del paciente feliz en el consultorio. Estética limpia, iluminada y de alta gama.

📊 2. CAMPAÑAS AUTOMATIZADAS

- **Estructura del Embudo:** Embudo de conversión directa (Tráfico Premium -> Formulario Nativo de Clientes Potenciales / Mensajería Directa a WhatsApp Business administrada por CRM).
- **Presupuesto y Pujas:** Presupuesto diario inicial sugerido de $15 USD, utilizando una estrategia de puja de "Menor Costo por Cliente Potencial" para maximizar el retorno de inversión (ROI).
- **Segmentación Inteligente:** Intereses en: Cuidado personal, Estética, Salud dental, Blanqueamiento dental, Clínicas de estética, además de segmentación geográfica local con un radio de 10 km a la redonda de la clínica.
- **Estrategia de Pruebas A/B:** Configuración de dos conjuntos de anuncios idénticos variando únicamente el video principal (Video de testimonio real vs. Video de explicación técnica del especialista) para permitir que el algoritmo optimice automáticamente el presupuesto hacia el formato más rentable.

🔌 3. PUBLICACIÓN Y COMERCIALIZACIÓN DIRECTA (MÓDULO API)

A continuación se detalla el esquema conceptual en formato JSON listo para ser transmitido de manera automatizada a los endpoints de las principales plataformas publicitarias:

\`\`\`json
{
  "campaign_automation": {
    "project_id": "campaign_gpt_dental_01",
    "status": "READY_TO_DEPLOY",
    "platforms": {
      "meta_ads": {
        "objective": "CONVERSIONS_MESSENGER",
        "pixel_id": "px_987654321",
        "adset_config": {
          "geographic_targeting": "Cali, Colombia (10km)",
          "optimization_goal": "LEAD_GENERATION",
          "placement": "INSTAGRAM_STORIES_REELS"
        }
      },
      "tiktok_ads": {
        "objective": "LEAD_GENERATION",
        "pixel_id": "tk_pixel_abc123",
        "adset_config": {
          "age_targeting": "25-54",
          "optimization_goal": "CONVERSION_FORM"
        }
      },
      "google_ads": {
        "objective": "SEARCH_SALES",
        "keywords": [
          "clinica odontologica cali",
          "diseño de sonrisa precio",
          "mejor dentista estetico"
        ],
        "bidding_strategy": "MAXIMIZE_CONVERSIONS"
      }
    }
  }
}
\`\`\``;
    } else {
      // ✨ RESPUESTA GENÉRICA AUTOMATIZADA PARA OTROS NEGOCIOS
      respuestaSimulada = `🤖 1. GENERACIÓN DE ANUNCIOS CON IA
- **Público Objetivo Ideal (Buyer Persona):** Consumidores digitales modernos de 18 a 40 años que buscan soluciones inmediatas a su necesidad y valoran la automatización.
- **Copys Publicitarios de Alto Impacto:** "¡Llegó la revolución que esperabas! 🚀 Transforma tu día a día con nuestra solución impulsada por Inteligencia Artificial. Obtén un demo gratuito ingresando al enlace."
- **Sugerencias de Contenido Visual:** Gráfico minimalista en alta definición con el logo de la marca y una interfaz de usuario limpia fluyendo en una pantalla de smartphone.

📊 2. CAMPAÑAS AUTOMATIZADAS
- **Estructura del Embudo:** Anuncio en redes -> Landing Page de captura -> Correo automatizado de seguimiento.
- **Presupuesto y Pujas:** $10 USD diarios con estrategia de maximización de clics (CPC optimizado).
- **Segmentación Inteligente:** Intereses en tecnología, compras online y automatización.

🔌 3. PUBLICACIÓN Y COMERCIALIZACIÓN DIRECTA (MÓDULO API)
\`\`\`json
{
  "api_payload": {
    "campaign_name": "CampaignGPT_Automated_Deploy",
    "meta_objective": "LINK_CLICKS",
    "tiktok_objective": "TRAFFIC",
    "google_objective": "MAXIMIZE_CLICKS"
  }
}
\`\`\``;
    }

    // Simulamos un leve retraso de 1.5 segundos para que se aprecie la espectacular animación de carga del frontend
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return NextResponse.json({ result: respuestaSimulada });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error en el módulo de simulación automatizada" },
      { status: 500 }
    );
  }
}