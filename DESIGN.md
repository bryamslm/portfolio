# Sistema visual: portafolio de Bryam Steven López Miranda

## Dirección

**Expediente técnico oscuro.**

La escena de uso es un recruiter o líder técnico revisando candidatos en un monitor
durante una shortlist. Necesita encontrar criterio, profundidad y evidencia con
rapidez. La interfaz debe sentirse como una presentación técnica editorial:
silenciosa, ordenada y precisa.

La referencia visual suministrada define el lenguaje: gran espacio negativo,
tipografía sans limpia, carbón y grises fríos, líneas finas y un azul eléctrico
usado con moderación. Se adopta el sistema, no la identidad ni el logotipo de AI
Solutions.

## Principios

1. **Sobriedad antes que espectáculo.**
2. **Evidencia antes que adjetivos.**
3. **Una jerarquía fuerte antes que muchas tarjetas.**
4. **Azul para orientar, no para decorar.**
5. **Oscuro técnico, no cyberpunk.**
6. **La interfaz respira; el contenido no se amontona.**

## Marca personal

La firma principal es el nombre:

**Bryam Steven López Miranda**

La forma corta permitida para navegación o favicon es:

**BSLM**

No reutilizar el símbolo “Ai”, el nombre “AI Solutions” ni su claim como marca
personal. Si se diseña un monograma, debe partir de BSLM y validarse por separado.

## Paleta

La paleta base se toma de la referencia y se adapta para accesibilidad y modo
oscuro.

### Modo oscuro — predeterminado

| Token | Valor | Uso |
|---|---:|---|
| `background` | `#0D0F14` | Fondo principal |
| `surface` | `#151922` | Secciones y contenedores |
| `elevated` | `#2B2F3A` | Controles o superficies elevadas |
| `text` | `#F3F5F8` | Texto principal |
| `text-soft` | `#C7CBD3` | Texto secundario |
| `text-muted` | `#8F96A3` | Metadatos y ayudas |
| `border` | `#2B2F3A` | Divisores y bordes |
| `accent` | `#5A7BFF` | CTA, foco, enlaces activos |
| `accent-soft` | `#8EA3FF` | Estados hover sobre fondo oscuro |

### Modo claro — secundario

| Token | Valor | Uso |
|---|---:|---|
| `background` | `#F7F8FA` | Fondo principal |
| `surface` | `#FFFFFF` | Superficies |
| `elevated` | `#E6E8EC` | Estados y fondos suaves |
| `text` | `#0D0F14` | Texto principal |
| `text-soft` | `#434955` | Texto secundario |
| `text-muted` | `#6F7683` | Metadatos |
| `border` | `#DDE1E8` | Divisores |
| `accent` | `#3F62E8` | CTA y enlaces con contraste |
| `accent-soft` | `#5A7BFF` | Hover y foco |

### Reglas de color

- El azul ocupa aproximadamente 5–10 % de la interfaz.
- No usar el azul como fondo de secciones completas.
- No usar gradientes en texto, botones, bordes o fondos.
- No usar resplandores neón.
- No usar negro puro `#000000` ni blanco puro `#FFFFFF` como texto principal en
  modo oscuro.
- Los estados no deben depender únicamente del color.

## Tipografía

### Familia

- **Principal:** Satoshi.
- **Fallback:** Geist Sans, `system-ui`, sans-serif.
- **Código o datos técnicos breves:** Geist Mono.

Satoshi debe servirse localmente en WOFF2 si se incorpora. No depender de una
descarga bloqueante en runtime.

### Uso

- Toda la interfaz usa sans serif.
- No usar serif para titulares; la referencia es limpia y tecnológica, no clásica.
- Peso recomendado:
  - 600 para títulos y métricas;
  - 500 para navegación y acciones;
  - 400 para cuerpo.
- Micro-etiquetas en mayúsculas con tracking amplio, solo como señales de sección.
- Monoespaciada únicamente para comandos, nombres de herramientas o fragmentos
  técnicos, nunca para párrafos completos.

### Escala

- `display`: `clamp(3rem, 7vw, 6.5rem)`, línea 0.95–1.02.
- `h2`: `clamp(2rem, 4vw, 4rem)`, línea 1.05.
- `h3`: `clamp(1.25rem, 2vw, 1.75rem)`.
- Cuerpo principal: 18–20 px, máximo 68 caracteres por línea.
- Cuerpo secundario: 15–17 px.
- Micro-etiquetas: 11–12 px.

## Composición

### Grid

- Contenedor máximo: 1200 px.
- Texto editorial: 680–760 px.
- Márgenes laterales: 24 px móvil, 40–64 px escritorio.
- Grid principal de 12 columnas en escritorio.
- Espaciado vertical entre secciones: 120–160 px escritorio, 80–104 px móvil.

### Ritmo

- Alternar bloques editoriales, una visual grande y comparaciones puntuales.
- Evitar que todas las secciones sean una cuadrícula de tarjetas.
- Usar divisores finos para separar capítulos.
- Mantener espacio negativo real; no llenar el lado derecho del hero solo por
  simetría.
- Cada sección debe tener un foco visual dominante.

## Hero

El hero debe comunicar sin scroll:

1. nombre;
2. rol;
3. propuesta de valor;
4. disponibilidad;
5. CTA principal y dos secundarios;
6. enlace discreto a LinkedIn/GitHub.

### Dirección visual

- Alineación izquierda.
- Fondo `#0D0F14`.
- Nombre o propuesta de valor como único texto display.
- Una línea o punto azul puede funcionar como firma; no usar partículas, mallas,
  blobs ni ilustraciones genéricas de IA.
- El CTA primario usa azul; los secundarios son outline o texto.
- Los chips tecnológicos del hero se reducen o desaparecen. La evidencia técnica
  debe aparecer asociada a casos, no como nube de buzzwords.

## Navegación

- Barra compacta y estable.
- Marca corta `BSLM` o nombre completo, no ambos.
- En escritorio, máximo cinco destinos visibles:
  - Trabajo
  - Plica
  - Experiencia
  - Sobre mí
  - Contacto
- CV como acción independiente.
- Las subsecciones Asistentes, Voice AI y Retell Flowkit se agrupan dentro de
  “Trabajo”.
- En móvil, usar menú explícito; no comprimir nueve enlaces.

## Plica

Plica es la pieza visual central.

- Abrir con una declaración breve y cuatro cifras.
- El diagrama “motor + tres superficies + capacidades” debe ser la visual
  protagonista, grande y legible.
- La arquitectura de tres superficies se explica una sola vez.
- Los detalles de pipelines, RAG, especialistas y herramientas se muestran mediante
  tabs, acordeón o una página de caso.
- El hub público y la consola operativa cierran la sección como acciones.

No repetir Plica nuevamente como una tarjeta en “Proyectos secundarios”.

## Otros sistemas

Asistentes, Voice AI y Retell Flowkit forman un capítulo titulado
**Sistemas seleccionados**.

En escritorio pueden usar tres entradas asimétricas:

- una principal de ancho doble;
- dos secundarias apiladas;
- o una lista editorial con cifras y enlaces.

No utilizar tres tarjetas idénticas con la misma densidad. Cada caso debe responder:

1. problema;
2. sistema construido;
3. evidencia;
4. estado o caveat;
5. enlace disponible.

## Experiencia y formación

- Línea temporal compacta, no tarjetas grandes.
- Fechas visibles y coherentes.
- AI Solutions CR: marzo de 2025 a julio de 2026.
- Vivo Gaming: julio de 2024 a noviembre de 2024.
- No mostrar “Profesional independiente”.
- La educación debe ocupar menos espacio que la evidencia profesional.
- Certificaciones secundarias pueden vivir en un acordeón o enlace.

## Componentes

### Botones

- Altura mínima: 44 px.
- Radio: 8–10 px; evitar píldoras salvo etiquetas.
- Primario: fondo azul, texto claro.
- Secundario: borde frío, fondo transparente.
- Terciario: texto y flecha.
- Hover sobrio: cambio de tono o desplazamiento de 1–2 px; sin glow.

### Tarjetas

- Radio: 12–16 px.
- Borde de 1 px.
- Fondo apenas distinto al principal.
- Sin glassmorphism.
- Sin sombras fuertes en oscuro.
- No anidar tarjetas dentro de tarjetas.

### Etiquetas y métricas

- Etiquetas breves, no párrafos dentro de chips.
- Métricas únicamente cuando tienen contexto y valor probatorio.
- No llenar el hero con números.

### Enlaces

- Azul reservado para interacción.
- Subrayado o indicador visible en cuerpo de texto.
- Estados hover, focus y visited distinguibles.

## Movimiento

- Duración estándar: 160–240 ms.
- Solo `opacity` y `transform` cuando aporten orientación.
- No retrasar la disponibilidad del contenido esencial por animaciones de entrada.
- Los saltos de navegación deben revelar la sección inmediatamente.
- Con `prefers-reduced-motion`, todo el contenido aparece sin transición.
- El HTML renderizado no puede quedar invisible si falla Intersection Observer o
  JavaScript.

## Accesibilidad

- WCAG AA como mínimo para texto y controles.
- Foco visible azul de 2 px con offset.
- Áreas táctiles mínimas de 44 × 44 px.
- No ocultar el outline sin reemplazo.
- Estructura de headings secuencial.
- Diagramas con resumen textual equivalente.
- Contraste validado en ambos temas.
- Navegación completa por teclado.

## Responsive

- Diseñar desde 390 px.
- El hero no debe exceder aproximadamente una pantalla y media en móvil.
- Métricas: dos columnas móvil, cuatro escritorio.
- Visual de Plica con zoom o versión simplificada móvil.
- Las tablas se convierten en listas; no fuerzan scroll horizontal.
- El CTA de CV y contacto permanece visible sin amontonarse.

## Restricciones visuales

No usar:

- gradientes decorativos;
- texto con degradado;
- glow azul;
- fondos con redes neuronales, circuitos o partículas;
- glassmorphism;
- bordes redondeados excesivos;
- carruseles automáticos;
- animaciones de máquina de escribir;
- iconos dentro de cajas para cada punto;
- cuadrículas largas de tarjetas homogéneas;
- estilo terminal como identidad dominante.

## Criterio de terminado

El rediseño está listo cuando:

- se reconoce la paleta carbón–gris–azul de la referencia sin confundirse con AI
  Solutions;
- el sitio se siente más sobrio que una landing SaaS;
- Plica domina la narrativa;
- la home es notablemente más corta y no repite casos;
- el contenido sigue visible al saltar entre anclas y con movimiento reducido;
- móvil, teclado y contraste pasan revisión;
- un recruiter puede decidir qué construyó Bryam y cómo contactarlo en menos de un
  minuto.

