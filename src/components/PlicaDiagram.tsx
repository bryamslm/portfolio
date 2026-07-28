"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FaTimes, FaSearchPlus, FaSearchMinus, FaCompress } from "react-icons/fa";
import {
  plicaDiagramNodes,
  plicaDiagramRings,
  type DiagramNode,
} from "@/content/portfolio";

// ---------------------------------------------------------------------------
// Geometría del layout concéntrico
// ---------------------------------------------------------------------------

const VB_W = 800;
const VB_H = 720;
const CENTER_X = VB_W / 2;
const CENTER_Y = VB_H / 2;
const R_SURFACE = 200;
const R_CAPABILITY = 340;

// Posición x,y a partir del ángulo (0° arriba, horario).
function polar(angle: number, radius: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: CENTER_X + Math.cos(rad) * radius,
    y: CENTER_Y + Math.sin(rad) * radius,
  };
}

// ---------------------------------------------------------------------------
// Tipos de UI
// ---------------------------------------------------------------------------

type Viewport = { x: number; y: number; scale: number };

const MIN_SCALE = 0.6;
const MAX_SCALE = 2.2;

// ---------------------------------------------------------------------------
// Componente principal
// ---------------------------------------------------------------------------

export default function PlicaDiagram() {
  const reduce = useReducedMotion();
  const titleId = useId();
  const descId = useId();

  const [viewport, setViewport] = useState<Viewport>({
    x: 0,
    y: 0,
    scale: 1,
  });
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragOriginRef = useRef<{ x: number; y: number; vx: number; vy: number } | null>(
    null,
  );

  const selectedNode = useMemo(
    () => plicaDiagramNodes.find((n) => n.id === selectedId) ?? null,
    [selectedId],
  );

  // -------------------------------------------------------------------------
  // Drag del lienzo
  //
  // Estrategia robusta para todos los navegadores (especialmente in-app
  // browsers como el de LinkedIn, donde los pointer IDs se cancelan y
  // los gestos verticales son interceptados). No usamos setPointerCapture:
  // los in-app browsers lanzan InvalidPointerId sin avisar y eso rompe
  // el árbol de React. En su lugar, registramos pointermove/pointerup en
  // window mientras dure el drag.
  // -------------------------------------------------------------------------
  const handlePointerDown = useCallback(
    (e: React.PointerEvent<SVGSVGElement>) => {
      // Solo arrastrar cuando el evento NO proviene de un nodo interactivo.
      const target = e.target as Element;
      if (target.closest("[data-node]")) return;
      e.preventDefault();
      dragOriginRef.current = {
        x: e.clientX,
        y: e.clientY,
        vx: viewport.x,
        vy: viewport.y,
      };
      setIsDragging(true);
    },
    [viewport],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<SVGSVGElement> | PointerEvent) => {
      const origin = dragOriginRef.current;
      if (!origin) return;
      const dx = e.clientX - origin.x;
      const dy = e.clientY - origin.y;
      setViewport((v) => ({
        ...v,
        x: origin.vx + dx,
        y: origin.vy + dy,
      }));
    },
    [],
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
    dragOriginRef.current = null;
  }, []);

  // Listeners globales mientras hay drag, para no depender del SVG.
  useEffect(() => {
    if (!isDragging) return;
    const onMove = (e: PointerEvent) => handlePointerMove(e);
    const onUp = () => handlePointerUp();
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    window.addEventListener("pointercancel", onUp, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [isDragging, handlePointerMove, handlePointerUp]);

  // -------------------------------------------------------------------------
  // Zoom con Ctrl+scroll o trackpad pinch
  // -------------------------------------------------------------------------
  const handleWheel = useCallback(
    (e: React.WheelEvent<SVGSVGElement>) => {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      const direction = e.deltaY > 0 ? -1 : 1;
      setViewport((v) => {
        const next = Math.min(MAX_SCALE, Math.max(MIN_SCALE, v.scale + direction * 0.15));
        return { ...v, scale: next };
      });
    },
    [],
  );

  const zoomBy = useCallback((delta: number) => {
    setViewport((v) => ({
      ...v,
      scale: Math.min(MAX_SCALE, Math.max(MIN_SCALE, v.scale + delta)),
    }));
  }, []);

  const resetViewport = useCallback(() => {
    setViewport({ x: 0, y: 0, scale: 1 });
  }, []);

  // -------------------------------------------------------------------------
  // Teclado: cerrar drawer con Escape
  // -------------------------------------------------------------------------
  useEffect(() => {
    if (!selectedId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedId]);

  // Bloquear scroll del body cuando el drawer está abierto.
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
    return undefined;
  }, [selectedId]);

  const transitionDuration = reduce ? 0 : 0.18;

  return (
    <div className="relative">
      <p id={descId} className="sr-only">
        Visual interactivo del motor Plica. Tres anillos concéntricos:
        el motor al centro, las tres superficies operables (ERP/web,
        Plica Chat y MCP) en el primer anillo, y cinco capacidades
        invocables por cualquier superficie en el anillo exterior. Click
        o Enter sobre un nodo abre un panel con su descripción.
      </p>

      <div className="relative h-[460px] sm:h-[560px] w-full overflow-hidden rounded-xl border border-light-border dark:border-dark-border bg-light-background/40 dark:bg-dark-background/40">
        <svg
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          role="img"
          aria-labelledby={`${titleId} ${descId}`}
          className={`h-full w-full select-none touch-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          onPointerDown={handlePointerDown}
          onWheel={handleWheel}
        >
          <title id={titleId}>
            Diagrama interactivo de Plica: motor + tres superficies + cinco capacidades.
          </title>

          <g
            transform={`translate(${viewport.x} ${viewport.y}) scale(${viewport.scale})`}
            style={{
              transition: isDragging
                ? "none"
                : `transform ${transitionDuration}s cubic-bezier(0.22, 1, 0.36, 1)`,
            }}
          >
            {/* Anillos punteados como guía visual */}
            <g
              className="text-light-muted dark:text-dark-muted"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.25"
              strokeDasharray="2 6"
            >
              <circle cx={CENTER_X} cy={CENTER_Y} r={R_SURFACE} />
              <circle cx={CENTER_X} cy={CENTER_Y} r={R_CAPABILITY} />
            </g>

            {/* Etiquetas de anillo */}
            <g
              className="text-light-muted dark:text-dark-muted"
              fill="currentColor"
              style={{ fontFamily: "var(--font-geist-mono), ui-monospace, monospace" }}
              fontSize="10"
              letterSpacing="2"
            >
              <text
                x={CENTER_X + R_SURFACE}
                y={CENTER_Y - R_SURFACE + 14}
                textAnchor="end"
              >
                SUPERFICIES
              </text>
              <text
                x={CENTER_X + R_CAPABILITY}
                y={CENTER_Y - R_CAPABILITY + 14}
                textAnchor="end"
              >
                CAPACIDADES
              </text>
            </g>

            {/* MOTOR (anillo 0) */}
            {plicaDiagramNodes
              .filter((n) => n.ring === "core")
              .map((node) => (
                <CoreNode
                  key={node.id}
                  node={node}
                  isSelected={selectedId === node.id}
                  onSelect={() => setSelectedId(node.id)}
                />
              ))}

            {/* SUPERFICIES (anillo 1) */}
            {plicaDiagramNodes
              .filter((n) => n.ring === "surface")
              .map((node) => {
                const pos = polar(node.angle, R_SURFACE);
                return (
                  <RingNode
                    key={node.id}
                    node={node}
                    cx={pos.x}
                    cy={pos.y}
                    isSelected={selectedId === node.id}
                    onSelect={() => setSelectedId(node.id)}
                    variant="surface"
                  />
                );
              })}

            {/* CAPACIDADES (anillo 2) */}
            {plicaDiagramNodes
              .filter((n) => n.ring === "capability")
              .map((node) => {
                const pos = polar(node.angle, R_CAPABILITY);
                return (
                  <RingNode
                    key={node.id}
                    node={node}
                    cx={pos.x}
                    cy={pos.y}
                    isSelected={selectedId === node.id}
                    onSelect={() => setSelectedId(node.id)}
                    variant="capability"
                  />
                );
              })}

            {/* Líneas de conexión: motor → superficies */}
            {plicaDiagramNodes
              .filter((n) => n.ring === "surface")
              .map((node) => {
                const pos = polar(node.angle, R_SURFACE);
                return (
                  <line
                    key={`core-${node.id}`}
                    x1={CENTER_X}
                    y1={CENTER_Y}
                    x2={pos.x}
                    y2={pos.y}
                    className="text-light-muted dark:text-dark-muted"
                    stroke="currentColor"
                    strokeOpacity="0.35"
                    strokeWidth="1"
                  />
                );
              })}

            {/* Líneas de conexión: superficies → capacidades (las que comparten ángulo cercano) */}
            {plicaDiagramNodes
              .filter((n) => n.ring === "capability")
              .map((node) => {
                const pos = polar(node.angle, R_CAPABILITY);
                return (
                  <line
                    key={`surf-${node.id}`}
                    x1={CENTER_X}
                    y1={CENTER_Y}
                    x2={pos.x}
                    y2={pos.y}
                    className="text-light-secondary/35 dark:text-dark-secondary/35"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="2 4"
                  />
                );
              })}
          </g>
        </svg>

        {/* Controles de zoom y reset */}
        <div className="absolute bottom-3 left-3 flex flex-col items-stretch gap-1.5">
          <button
            type="button"
            onClick={() => zoomBy(0.2)}
            aria-label="Acercar"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-light-border dark:border-dark-border bg-light-background/90 dark:bg-dark-background/90 text-light-soft dark:text-dark-soft backdrop-blur transition-colors hover:border-light-secondary dark:hover:border-dark-secondary hover:text-light-secondary dark:hover:text-dark-secondary"
          >
            <FaSearchPlus size={13} />
          </button>
          <button
            type="button"
            onClick={() => zoomBy(-0.2)}
            aria-label="Alejar"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-light-border dark:border-dark-border bg-light-background/90 dark:bg-dark-background/90 text-light-soft dark:text-dark-soft backdrop-blur transition-colors hover:border-light-secondary dark:hover:border-dark-secondary hover:text-light-secondary dark:hover:text-dark-secondary"
          >
            <FaSearchMinus size={13} />
          </button>
          <button
            type="button"
            onClick={resetViewport}
            aria-label="Restablecer vista"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-light-border dark:border-dark-border bg-light-background/90 dark:bg-dark-background/90 text-light-soft dark:text-dark-soft backdrop-blur transition-colors hover:border-light-secondary dark:hover:border-dark-secondary hover:text-light-secondary dark:hover:text-dark-secondary"
          >
            <FaCompress size={12} />
          </button>
          <span
            aria-hidden
            className="mt-1 text-center font-mono text-[10px] text-light-muted dark:text-dark-muted"
          >
            {(viewport.scale * 100).toFixed(0)}%
          </span>
        </div>

        {/* Leyenda */}
        <div className="absolute right-3 top-3 rounded-lg border border-light-border dark:border-dark-border bg-light-background/90 dark:bg-dark-background/90 px-3 py-2.5 backdrop-blur">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-light-muted dark:text-dark-muted">
            Anillos
          </p>
          <ul className="mt-2 space-y-1.5 text-xs">
            {(Object.keys(plicaDiagramRings) as Array<keyof typeof plicaDiagramRings>).map(
              (ring) => (
                <li key={ring} className="flex items-center gap-2">
                  <span
                    aria-hidden
                    className={`h-2 w-2 rounded-full ${ringClass(ring)}`}
                  />
                  <span className="text-light-soft dark:text-dark-soft">
                    {plicaDiagramRings[ring]}
                  </span>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Hint inferior */}
        <p className="pointer-events-none absolute bottom-3 right-3 font-mono text-[10px] text-light-muted dark:text-dark-muted">
          Click · Enter · Drag · Ctrl + scroll
        </p>
      </div>

      {/* Drawer lateral */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            key="drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.18 }}
            className="fixed inset-0 z-50 bg-black/45 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
            aria-hidden
          >
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-labelledby={`${titleId}-drawer-title`}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: reduce ? 0 : 0.24,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-light-border dark:border-dark-border bg-light-section dark:bg-dark-section shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-3 border-b border-light-border dark:border-dark-border p-5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-light-secondary dark:text-dark-secondary">
                    {plicaDiagramRings[selectedNode.ring]}
                  </p>
                  <h3
                    id={`${titleId}-drawer-title`}
                    className="mt-1 font-semibold text-2xl text-light-text dark:text-dark-text"
                  >
                    {selectedNode.label}
                  </h3>
                  <p className="mt-1 text-sm text-light-soft dark:text-dark-soft">
                    {selectedNode.short}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedId(null)}
                  aria-label="Cerrar panel"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-light-soft dark:text-dark-soft transition-colors hover:bg-light-background dark:hover:bg-dark-background hover:text-light-text dark:hover:text-dark-text"
                >
                  <FaTimes size={14} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-5">
                <p className="text-sm leading-relaxed text-light-soft dark:text-dark-soft text-pretty">
                  {selectedNode.description}
                </p>

                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-light-muted dark:text-dark-muted">
                  Quién lo usa
                </p>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {selectedNode.invokedBy.map((invoker) => (
                    <li
                      key={invoker}
                      className="rounded-md border border-light-secondary/25 dark:border-dark-secondary/25 bg-light-secondary/10 dark:bg-dark-secondary/10 px-2.5 py-1 text-xs text-light-secondary dark:text-dark-secondary"
                    >
                      {invoker}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 rounded-lg border border-light-border dark:border-dark-border bg-light-background/60 dark:bg-dark-background/40 p-3 text-xs leading-relaxed text-light-muted dark:text-dark-muted text-pretty">
                  Plica es un producto listo accesible desde la web, el chat y
                  la integración para herramientas. Este diagrama resume cómo
                  funciona; los detalles operativos son internos del equipo.
                </p>
              </div>

              <div className="border-t border-light-border dark:border-dark-border p-5">
                <button
                  type="button"
                  onClick={() => setSelectedId(null)}
                  className="w-full rounded-xl border border-light-border dark:border-dark-border px-4 py-2.5 text-sm font-medium text-light-text dark:text-dark-text transition-colors hover:border-light-secondary dark:hover:border-dark-secondary hover:text-light-secondary dark:hover:text-dark-secondary"
                >
                  Cerrar
                </button>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sub-componentes del SVG
// ---------------------------------------------------------------------------

function ringClass(ring: "core" | "surface" | "capability") {
  if (ring === "core") return "bg-light-text dark:bg-dark-text";
  if (ring === "surface") return "bg-light-secondary dark:bg-dark-secondary";
  return "bg-light-muted dark:bg-dark-muted";
}

function CoreNode({
  node,
  isSelected,
  onSelect,
}: {
  node: DiagramNode;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <g
      data-node
      role="button"
      tabIndex={0}
      aria-label={`${node.label}: ${node.short}. Enter para abrir detalle.`}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      className="cursor-pointer focus:outline-none"
    >
      <circle
        cx={CENTER_X}
        cy={CENTER_Y}
        r={64}
        className={`transition-all duration-200 ${
          isSelected
            ? "fill-light-secondary/20 dark:fill-dark-secondary/20 stroke-[3] stroke-light-secondary dark:stroke-dark-secondary"
            : "fill-light-section dark:fill-dark-section stroke-2 stroke-light-text dark:stroke-dark-text"
        }`}
      />
      <circle
        cx={CENTER_X}
        cy={CENTER_Y}
        r={64}
        fill="none"
        stroke={isSelected ? "currentColor" : "transparent"}
        className="text-light-secondary dark:text-dark-secondary pointer-events-none transition-all duration-200"
        strokeWidth="6"
        strokeOpacity="0.18"
      />
      <text
        x={CENTER_X}
        y={CENTER_Y - 8}
        textAnchor="middle"
        className="fill-light-text dark:fill-dark-text"
        style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif", fontWeight: 600 }}
        fontSize="18"
      >
        Motor
      </text>
      <text
        x={CENTER_X}
        y={CENTER_Y + 14}
        textAnchor="middle"
        className="fill-light-soft dark:fill-dark-soft"
        style={{ fontFamily: "var(--font-geist-mono), ui-monospace, monospace" }}
        fontSize="9"
        letterSpacing="2"
      >
        {node.short.toUpperCase()}
      </text>
    </g>
  );
}

function RingNode({
  node,
  cx,
  cy,
  isSelected,
  onSelect,
  variant,
}: {
  node: DiagramNode;
  cx: number;
  cy: number;
  isSelected: boolean;
  onSelect: () => void;
  variant: "surface" | "capability";
}) {
  const size = variant === "surface" ? 62 : 50;
  const labelY = cy + (variant === "surface" ? 3 : 0);
  const subY = cy + (variant === "surface" ? 18 : 14);
  const stroke =
    variant === "surface"
      ? "stroke-light-secondary dark:stroke-dark-secondary"
      : "stroke-light-muted dark:stroke-dark-muted";

  return (
    <g
      data-node
      role="button"
      tabIndex={0}
      aria-label={`${node.label}: ${node.short}. Enter para abrir detalle.`}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      className="cursor-pointer focus:outline-none"
    >
      <circle
        cx={cx}
        cy={cy}
        r={size}
        className={`${stroke} transition-all duration-200 ${
          isSelected
            ? "fill-light-secondary/15 dark:fill-dark-secondary/15 stroke-[3]"
            : "fill-light-section dark:fill-dark-section stroke-[1.6]"
        }`}
      />
      <text
        x={cx}
        y={labelY}
        textAnchor="middle"
        className="fill-light-text dark:fill-dark-text"
        style={{
          fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
          fontWeight: variant === "surface" ? 600 : 500,
        }}
        fontSize={variant === "surface" ? "13" : "11.5"}
      >
        {node.label}
      </text>
      <text
        x={cx}
        y={subY}
        textAnchor="middle"
        className="fill-light-muted dark:text-dark-muted"
        style={{ fontFamily: "var(--font-geist-mono), ui-monospace, monospace" }}
        fontSize="8"
        letterSpacing="1.5"
      >
        {node.short.toUpperCase()}
      </text>
    </g>
  );
}