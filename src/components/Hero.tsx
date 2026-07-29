"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaArrowDown } from "react-icons/fa6";
import { handleScroll } from "../utils/utils";

const POSTER = "/media/hero-core-poster.webp";
const VIDEO = "/media/hero-core.mp4";

/**
 * Hero cinematográfico.
 *
 * Reglas que sostienen este componente (no tocar sin releerlas):
 *  - El asset ya trae el encuadre: objeto en el 40% inferior, 60% superior
 *    vacío. La legibilidad se resolvió en el encuadre, NO con overlay: no hay
 *    scrim, ni text-shadow, ni backdrop-blur sobre el video.
 *  - La capa de media va anclada abajo con `aspect-video`, no `object-cover`
 *    a pantalla completa: en móvil el cover recortaría los anillos a los lados
 *    y perdería la silueta. Arriba queda el sólido, que es el mismo negro.
 *  - El texto vive en `.on-video`: tokens claros en los dos temas.
 *  - El degradado de salida se queda FUERA de `.on-video` para leer el color
 *    de página del tema (contra una sección sólida se funde al color de página).
 *  - Presupuesto de performance: el póster es un <img fetchPriority="high">
 *    propio (no el atributo `poster`, que pinta ~1,3s tarde); el video entra
 *    con `preload="none"` y src inyectado en idle. Con motion reducido, el src
 *    nunca se inyecta y queda el póster estático.
 */
export default function Hero() {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Inyección diferida del video: nunca compite con el LCP del póster.
  useEffect(() => {
    if (reduce) return;
    const video = videoRef.current;
    if (!video || video.getAttribute("src")) return;

    let cancelled = false;
    const arm = () => {
      if (cancelled) return;
      video.setAttribute("src", VIDEO);
      video.load();
      void video.play().catch(() => {
        /* Sin autoplay disponible: el póster ya está pintado. */
      });
    };

    const schedule = () => {
      if (typeof window.requestIdleCallback === "function") {
        window.requestIdleCallback(arm, { timeout: 2500 });
      } else {
        window.setTimeout(arm, 1200);
      }
    };

    if (document.readyState === "complete") {
      schedule();
    } else {
      window.addEventListener("load", schedule, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", schedule);
    };
  }, [reduce]);

  // Entrada escalonada con blur-rise. En SSR y con motion reducido la
  // identidad es el estado inicial: el hero nunca queda invisible.
  const animate = mounted && !reduce;
  const rise = (delay: number) => ({
    initial: animate
      ? { opacity: 0, y: 14, filter: "blur(8px)" }
      : { opacity: 1, y: 0, filter: "blur(0px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  const fade = (delay: number) => ({
    initial: animate ? { opacity: 0 } : { opacity: 1 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100dvh] flex-col justify-start overflow-hidden bg-[#0D0F14] pb-20 pt-28 sm:pt-32"
    >
      {/*
        Capa de media.
        - Anclada por ENCIMA de la franja de salida (bottom-24/32): el video
          termina antes de que empiece el degradado al color de página, así en
          tema claro el objeto no queda envuelto en niebla blanca.
        - `max-h-[42%]` + `max-w` es lo que sostiene el encuadre: sin el techo
          de altura, `aspect-video w-full` deriva la altura del ANCHO y en una
          ventana ancha y baja el objeto se infla hasta invadir el texto.
        - `object-contain` en vez de `object-cover`: nunca recorta la silueta de
          los anillos, ni en móvil (donde cover comería los costados) ni en
          desktop ancho (donde cover cortaría la parte alta de los anillos).
        - `opacity` baja el peso visual: el objeto acompaña, no compite con el
          titular. No es un scrim de legibilidad — el texto ya no lo pisa.
        - El desvanecido de los bordes del asset va HORNEADO en el mp4 y el
          póster (velo radial hacia el color de página, ffmpeg). No se hace con
          `mask-image`: la máscara CSS se calcula sobre la caja del elemento,
          no sobre el contenido que `object-contain` renderiza dentro, así que
          el desvanecido caía fuera de cuadro. El lienzo es 64:27 (más ancho
          que el render 16:9) justamente para dejarle margen al desvanecido sin
          comerse las puntas de los anillos. Bordes medidos: rgb(12,16,20)
          contra el token rgb(13,15,20).
        - En móvil la caja se ensancha al 125% del viewport para que el objeto
          no quede diminuto; lo que se recorta a los lados ya es color de
          página, así que el recorte no deja borde visible.
      */}
      <div
        aria-hidden
        className="absolute bottom-24 left-1/2 z-0 aspect-[64/27] w-[125%] max-w-none -translate-x-1/2 opacity-[0.72] sm:bottom-32 sm:w-full sm:max-w-[880px]"
      >
        {/* WebP nativo a propósito: next/image no aporta aquí y el póster debe
            pintar con el FCP. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={POSTER}
          alt=""
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-contain object-bottom"
        />
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          tabIndex={-1}
          onPlaying={() => setVideoReady(true)}
          className={`absolute inset-0 h-full w-full object-contain object-bottom transition-opacity duration-700 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/*
        Salida del video hacia la sección siguiente: degradado de opacidad,
        nunca un corte. Vive fuera de `.on-video` para fundirse al color de
        página del tema activo.
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 sm:h-32"
        style={{
          background:
            "linear-gradient(to bottom, #0D0F14 0%, var(--background) 100%)",
        }}
      />

      <div className="on-video relative z-20 mx-auto w-full max-w-layout px-5 sm:px-8">
        <motion.p
          {...fade(0.1)}
          className="font-mono text-xs uppercase tracking-[0.22em] text-token-muted"
        >
          IA aplicada · Sistemas
        </motion.p>

        {/* Titular con contraste de dos familias en una sola unidad */}
        <h1 className="mt-6">
          <motion.span
            {...rise(0.25)}
            className="block font-serif text-hero-lead italic text-token-soft"
          >
            Bryam Steven López Miranda
          </motion.span>
          <motion.span
            {...rise(0.42)}
            className="mt-2 block max-w-[22ch] text-display-tight font-semibold tracking-tight text-balance text-token"
          >
            Ingeniero de IA Aplicada y Sistemas
          </motion.span>
        </h1>

        <motion.p
          {...fade(0.7)}
          className="mt-7 max-w-editorial text-lg leading-snug text-token-soft text-pretty sm:text-xl"
        >
          Construyo sistemas completos de IA aplicada: producto, agentes, datos,
          automatización y voz.
        </motion.p>

        <motion.div
          {...fade(0.85)}
          className="mt-5 flex max-w-editorial items-start gap-2.5 text-base text-token"
        >
          <span
            aria-hidden
            className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-emerald-400"
          />
          <p className="text-pretty">
            Disponible para un equipo estable en Costa Rica o Latinoamérica,
            remoto o híbrido.
          </p>
        </motion.div>

        {/*
          Acciones: píldora completa, relleno sólido, sin borde ni sombra.
          En móvil "Ver Plica" y "Contactar" comparten fila: apiladas en tres
          filas, la última caía encima del objeto.
        */}
        <motion.div
          {...fade(1)}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          {/* Píldora en #3F62E8 (token light-secondary), no en el accent claro:
              blanco sobre #5A7BFF da 3,7:1 y no pasa AA para texto normal;
              este da 5,04:1. */}
          <a
            href="/documents/CV_Bryam_Lopez_ES.pdf"
            download="CV_Bryam_Lopez_ES.pdf"
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-light-secondary px-7 font-medium text-white transition-opacity hover:opacity-90"
          >
            Descargar CV
            <FaArrowDown size={12} />
          </a>

          <div className="flex items-center gap-3 sm:contents">
            <button
              onClick={() => handleScroll("plica")}
              className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full bg-white/10 px-7 font-medium text-token backdrop-blur-sm transition-colors hover:bg-white/[0.16] sm:flex-none"
            >
              Ver Plica
              <FaArrowRight size={12} />
            </button>

            <a
              href="mailto:bryam.steven.lopez@gmail.com"
              className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 px-4 font-medium text-token-soft transition-colors hover:text-token"
            >
              Contactar
              <FaArrowRight size={11} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
