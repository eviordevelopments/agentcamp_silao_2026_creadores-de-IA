# GUÍA DE PRESENTACIÓN Y SCRIPTS DEL FACILITADOR
## Para: Emiliano Castillo & Diego Pérez

**Propósito:** Scripts detallados + timing + notas visuales para cada fase del taller  
**Formato:** Hablado (para facilitar), no para leer literalmente  
**Duración:** 90 minutos

---

# FASE 0: ACTIVACIÓN (5 MIN) - SCRIPT COMPLETO

## Slide 0.1: Entrada (Mostrar antes de que lleguen)

```
VISUAL EN PANTALLA GIGANTE:
═══════════════════════════════════════
2025: 172,000 DESPIDOS EN TECH
    ↓
2025: $4.3 TRILLONES EN NVIDIA
    ↓
2026: OPORTUNIDAD MASIVA

¿Generaste un MVP con IA en 2025
que FUNCIONÓ en producción?
═══════════════════════════════════════
```

### Por qué esto importa (SAY THIS):

**[2 min - Energía alta, tono urgente pero esperanzador]**

"Bienvenidos. Les dejo una pregunta incómoda en la pantalla porque en 2025 pasó algo que cambió TODO.

La IA dejó de ser un juego de laboratorio para expertos. Hoy cualquiera puede tomar Cursor, describir una app, y obtener código real en HORAS.

Startups como Lovable—una compañía sueca, 8 meses de edad—alcanzó $200 MILLONES de ingresos anuales. ¿Cómo? Vibecoding: descripción en lenguaje natural → aplicación completa en deploy.

Suena perfecto, ¿verdad?

Aquí está el giro: 70% de esos MVPs generados con IA fracasaron en producción.

¿Por qué? Porque **generar código y construir SISTEMAS son cosas completamente diferentes.**

Este taller NO es sobre aprender herramientas. Hay miles de tutoriales para eso.

Este taller ES sobre aprender los PRINCIPIOS que hacen que esas herramientas funcionen.

Porque en 2026—y miren, estamos EN 2026 ahora—la diferencia en el mercado laboral no es:
- Entre quién SABE usar IA y quién no
- Es entre quién DOMINA los principios sistémicos + las herramientas
- Y quién solo presiona botones esperando que funcione

Vamos a cambiar eso hoy."

---

## Slide 0.2: Contexto de Urgencia (30 seg)

**[Mostrar gráfico simple]**

```
LÍNEA DE TIEMPO:

2023-2024: Chatbots + Automatización de Reglas
    ↓
2025: Agentic AI MASIVO + Infraestructura Gigawatt
    ↓
2026: Quantum + IA Convergence; Robots en fábricas
    ↓
2027: (?)
```

**SCRIPT:**

"Si esperas a 2027 para dominar esto, estarás 2 años atrás en una carrera que se mueve 10x más rápido.

OK? Vamos."

---

# FASE 1: RETOS DE PENSAMIENTO (15 MIN)

## Preparación

- **Dividir grupo en 4 equipos** (~5-8 personas cada uno)
- **Dar uno de estos 4 retos por equipo**
- **5 minutos para debatir internamente**
- **30 seg presentación por equipo**

---

## Reto 1: El Dilema del Vibecoding

**Mostrar slide:**

```
DESARROLLADOR USA CURSOR → GENERA APP EN 2 DÍAS

RESULTADO:
✓ Se ve perfecta
✓ UI moderna
✓ Features completas

PROBLEMA:
✗ Colapsa bajo carga (100 usuarios simultáneos)
✗ Nadie entiende el código
✗ No hay tests
✗ Deuda técnica explosiva

PREGUNTA PARA USTEDES:
¿Qué faltó en el SISTEMA que permitió esto?
```

**FACILITADOR (mientras debaten):**

Camina entre equipos. Escucha. No corrijas. Solo nota patrones.

**Después de 5 min (equipo presenta):**

SCRIPT:

"OK, Equipo 1, ¿qué descubrieron?"

*[Espera que expliquen]*

"Exacto. Eso. Generaron código, pero no un SISTEMA. Sin arquitectura, sin testing, sin escalabilidad.

Y eso es el pattern. Claude Code, Cursor, Copilot—son increíbles para velocidad. Pero velocidad sin estructura = velocidad hacia un acantilado.

Siguiente."

---

## Reto 2: La Paradoja de la Automatización

**Mostrar slide:**

```
STAT 1: 172,000 DESPIDOS EN TECH 2025
        (Principalmente: Customer service, content creation, routine)

STAT 2: Salarios AI Specialists 2025
        $200-300k/año (vs $120k hace 3 años)

PARADOJA:
¿IA eliminó trabajos o los CAMBIÓ?

PREGUNTA:
¿Qué habilidades necesitas para NO quedar en el lado perdedor?
```

**FACILITADOR (mientras debaten):**

Escucha respuestas. Busca palabras clave: "pensamiento sistémico", "liderazgo", "adaptabilidad", "principios", "arquitectura".

**SCRIPT post-presentación:**

"Lo que escucho es correcto. No es que IA elimine TODO. Elimina trabajo ROUTINE—Copy-paste, buscar-reemplazar, tareas que no requieren decisión.

Pero aquellos que DOMINAN decisión y diseño? Se vuelven 10x más valiosos, no menos.

Porque ahora la IA hace el trabajo routine, y ustedes hacen lo que realmente importa: DECIDIR y DISEÑAR.

Ese es el diferenciador. Vamos al siguiente."

---

## Reto 3: Primeros Principios (Elon Musk)

**Mostrar slide:**

```
ELON: "Razona desde primeros principios, no por analogía."

CONTRASTE:
Enfoque Tradicional:
  - Startup construye MVP
  - Sin pensar en estructura
  - Solo: "Rápido al mercado"

Enfoque First Principles:
  - ¿Qué problema REAL resuelvo?
  - ¿Qué sistema subyace?
  - ¿Dónde está el 80/20?
  - RECIÉN entonces: ¿Qué agente necesito?

PREGUNTA:
¿Cómo aplicas primeros principios en desarrollo de agentes?
```

**FACILITADOR post-debate:**

"Exactamente. Antes de tocar código, pregunten:
1. ¿Cuál es el problema VERDADERO?
2. ¿Qué sistema está afectado?
3. ¿Dónde está la palanca? (80/20)

Aplicado a agentes: Primero definen la arquitectura. Después eligen herramientas. Después codean.

Si invierten el orden = caos. Vamos."

---

## Reto 4: Herramientas vs Principios

**Mostrar slide:**

```
REALIDAD 2026:
- 7 frameworks agenticos populares (LangChain, CrewAI, etc.)
- Todos prometen: "Construye agentes en 5 líneas de código"
- 90% de agentes construidos así NUNCA escalan

PREGUNTA:
¿Por qué?

OPCIONES:
A) La herramienta no es lo suficientemente buena
B) Falta monitoreo, observabilidad, DevOps
C) Arquitectura débil desde el inicio
D) Todo lo anterior
```

**FACILITADOR post-debate:**

"Respuesta: D. Todo lo anterior. Pero principalmente B y C.

Las herramientas son EXCELENTES. El problema es que muchos desarrolladores:
- No agregan monitoreo
- No piensan en escalabilidad
- No aplican DevOps
- Código sin principios = caos en producción

Eso es lo que cambia HOY. Herramientas SÍ, pero con ESTRUCTURA."

---

## Síntesis Fase 1 (2 min)

**SCRIPT:**

"Lo que escucho de todos ustedes es que YA entienden la diferencia entre generar código y construir SISTEMAS.

Esa intuición—eso que sienten—es la BASE de todo lo que veremos hoy.

IA es agilidad. Pero sin estructura, la agilidad = caos.

Recuerden eso mientras avanzamos."

---

# FASE 2: TEORÍA ACELERADA (20 MIN)

## Slide 2.1: Tokenización y Embeddings (2 min)

**VISUAL:**

```
"Hola" → [token1][token2][token3] → [8234, 502, 1023]
           ↓
        Espacio matemático
        (embedding)
```

**SCRIPT:**

"La palabra 'Hola' no es STRING para un LLM. Es 3 números en un espacio de 4096 dimensiones.

Cada número es un parámetro aprendido durante entrenamiento.

¿Por qué importa? Porque:

1. **Límite de contexto = límite de tokens**: Claude Pro puede procesar 100k tokens. Eso es aproximadamente 75,000 palabras. Si necesitas analizar 100,000 palabras, ya superaste el límite.

2. **Costo = tokens**: $2 por millón de tokens INPUT, $8 por millón de OUTPUT. Si tu prompt es ineficiente, multiplicas costo por 10x.

3. **Optimización crucial**: Con técnicas como LoRA y cuantización, reduces tokens necesarios 40% sin perder calidad.

Aplicación LEAN: Diseña prompts que minimicen tokens sin perder calidad. ROI: 40% menos costo, misma velocidad, mejor precisión.

Siguiente."

---

## Slide 2.2: LLMs como Generadores de Representaciones (3 min)

**IMPORTANTE - Esto cambia MENTALIDAD:**

**SCRIPT:**

"Aquí va la verdad que pocos dicen: Un LLM NO 'entiende' en sentido humano.

Entiende RELACIONES ESTADÍSTICAS entre palabras.

¿Qué significa? Significa que GPT-5, Claude Opus, Gemini—todos—aprenden:

'Si alguien escribe X, la probabilidad de que siga Y es 73%.'

Y luego repite eso 10,000 veces por segundo hasta generar una respuesta.

¿Eso suena menos impresionante? Técnicamente SÍ. Pero ¿sabes qué? Funciona INCREÍBLEMENTE bien.

Porque resulta que la lengua humana TIENE patrones estadísticos profundos.

La arquitectura que permite esto se llama Transformer—y es puro álgebra lineal. Multiplicación de matrices muy rápida.

¿Por qué te digo esto? Porque cuando entiendas que es estadística pura, cambias tu estrategia de prompt.

No preguntes: 'Claude, ¿qué piensas?' (como si tuviera conciencia)

En su lugar: 'Aquí están los patrones históricos de este problema. Basándote en esos patrones, ¿cuál es la respuesta más probable?'

El segundo prompt funciona 10x mejor porque está ALINEADO con cómo el modelo realmente funciona.

Siguiente."

---

## Slide 2.3: Sesgos Algorítmicos & Ética (2 min)

**SCRIPT - Tone: Serio**

"Tengo que hablar de algo importante. Cuando construyesan agentes, especialmente agentes que toman decisiones:

Los datos que usas para entrenar el modelo IMPORTAN.

Ejemplo real: En 2020, un banco usó un modelo IA para evaluar créditos. Rechazaba aplicantes por género. No porque fue programado explícitamente—fue porque los datos históricos que usó REFLEJABAN discriminación histórica.

¿Implicación en su negocio? Demanda legal de $15 millones.

En medicina es peor: Un agente IA que diagnostica incorrectamente por sesgos = vidas afectadas.

¿Qué hacen ustedes?

Punto 1: Auditen sus datos. ¿Hay sesgos históricos?
Punto 2: Agreguen explicabilidad. ¿Por QUÉ el agente decidió eso?
Punto 3: Monitoreo. Si el modelo empieza a comportarse sesgadamente, ALERTA.

Esto NO es 'nice to have'. Es critical. Especialmente en Latam donde problemas de equidad son históricos.

Siguiente."

---

## Slide 2.4: Anatomía de un Agente (3 min)

**VISUAL:**

```
┌─────────────────┐
│  INPUT          │
│  (prompt)       │
└────────┬────────┘
         ↓
┌─────────────────┐
│  REASONING      │
│  (LLM piensa)   │
└────────┬────────┘
         ↓
┌──────────────────────────────┐
│  TOOL CALLING                │
│  ¿Qué herramienta necesito?  │
└────────┬─────────────────────┘
         ↓
┌──────────────────────────┐
│  ACTION                  │
│  (ejecuta en mundo real) │
└────────┬─────────────────┘
         ↓
┌──────────────────────────┐
│  FEEDBACK                │
│  (observa resultado)     │
└────────┬─────────────────┘
         ↓
    LOOP BACK?
    (Itera si es necesario)
```

**SCRIPT:**

"Esto es un agente simple. Pero miren la estructura:

INPUT → REASONING → TOOL CALLING → ACTION → FEEDBACK → LOOP

Cada paso es una oportunidad para agregar valor o meterla.

¿Dónde fracasan la mayoría de agentes?

1. INPUT pobre: Prompt mal diseñado
2. TOOL CALLING incorrecto: Elige herramienta equivocada
3. No hay FEEDBACK: Agente ciega, no aprende
4. Sin límites: Loop infinito, costo explosivo

¿Cómo se arregla?

Cada paso del loop necesita OBSERVABILIDAD. Logs, traces, métricas.

¿Eso suena tedioso? Es tedioso al inicio. Pero en producción, ese observabilidad es lo que diferencia un agente que escala de un agente que falla silenciosamente.

Siguiente."

---

## Slide 2.5: Multi-Agent Orchestration (3 min)

**VISUAL:**

```
                 ┌────────────┐
                 │  Manager   │
                 │ (Agent ID)  │
                 └────┬───────┘
          ┌──────────┼──────────┐
          ↓          ↓          ↓
      ┌────────┐ ┌────────┐ ┌────────┐
      │Agent 1 │ │Agent 2 │ │Agent 3 │
      │Research│ │Analyze │ │Write   │
      └────┬───┘ └───┬────┘ └────┬───┘
           │         │           │
           └────────┬┴───────────┘
                    ↓
            ┌──────────────────┐
            │ Final Output     │
            │ (orquestado)     │
            └──────────────────┘
```

**SCRIPT:**

"Esto es donde la magia real ocurre.

Un agente solo es útil para tareas simples. Pero para investigación, análisis, creación compleja—necesitas MÚLTIPLES agentes trabajando juntos.

Caso real que vieron: Investigación de mercado.

Agent 1 (Researcher): 'Busca noticias, papers, datos sobre IA en Latam'
Agent 2 (Analyst): 'Sintetiza esos datos, identifica tendencias'
Agent 3 (Writer): 'Convierte trends en reporte ejecutivo'

¿Si lo hacen secuencialmente? 2 horas.
¿Si lo hacen en paralelo? 20 minutos.

¿Por qué? Porque Researcher y Analyst pueden correr simultáneamente.

Y el Manager Agente orquesta todo, asegurandose que cada paso es correcto antes de pasar al siguiente.

Eso es multi-agent orchestration. Y es EXACTAMENTE lo que CrewAI y AutoGen permiten.

Siguiente."

---

## Slide 2.6: MCP - Model Context Protocol (2 min)

**VISUAL - EL DIAGRAMA CLAVE:**

```
ANTES DE MCP (2024):
  10 Modelos × 100 Herramientas = 1,000 INTEGRACIONES
  
DESPUÉS DE MCP (2025+):
  10 Modelos + 100 Herramientas = 1 PROTOCOLO
```

**SCRIPT - Entusiasta:**

"Esto cambió TODO. Créeme.

MCP es como HTTP para agentes. Un estándar.

¿Qué significa en la práctica?

ANTES: Si quería que Claude USE una herramienta (Slack, Postgres, GitHub), necesitaba escribir código custom para cada integración.

DESPUÉS: Claude conecta a CUALQUIER servidor MCP automáticamente. No requiere código custom.

¿Impacto?

Integración: semanas → horas
Costo: miles → decenas
Fricción: altísima → mínima

Y aquí está lo CRÍTICO: Es open source. Cualquiera puede crear un MCP server.

Resultado: Mercado de herramientas explota. Tools + integrations = exponencial.

Ese es el futuro de agentes: MCP en el core, herramientas plug-and-play.

Siguiente."

---

## Slide 2.7: Lean Startup + DevOps (2 min)

**SCRIPT - Juntamos dos cosas que PARECEN opuestas:**

"Lean Startup dice: rápido, MVPs, iterar.
DevOps dice: estructura, testing, monitoreo.

¿Contradictorios? NO. Complementarios.

Lean Startup para DECISIÓN: Build-Measure-Learn
DevOps para EJECUCIÓN: CI/CD, testing, monitoreo

Aplicado a agentes:

**BUILD (1 semana):**
  - Define 1 problema específico
  - Agente mínimo (1-2 herramientas)
  - Deploy con Azure free tier
  - Métrica: ¿resuelve el problema?

**MEASURE (3-5 días):**
  - Usuarios reales interactúan
  - Recolecta: fallos, latencia, satisfacción
  - Métrica: ¿rate de éxito?

**LEARN (1 día):**
  - Si >70% éxito: itera (más herramientas)
  - Si <50% éxito: pivot (otro approach)
  - Métrica: decision binaria

Y durante TODO esto: CI/CD automático, tests ejecutándose, logs agregándose.

Eso es cómo escalas de MVP a producción sin perder tracción.

OK. Finalizamos teoría. Vamos a herramientas."

---

# FASE 3: HERRAMIENTAS VIVAS (20 MIN)

## Slide 3.1: Claude Code DEMO (5 min)

**SETUP PREVIO:**
- Terminal real abierta en pantalla
- Se ve profesional
- Conexión lenta = fracaso de presentación (test antes)

**DEMO SCRIPT:**

```
[Mostrar en pantalla]

$ claude code "Crea un agente RAG que:
1. Lee archivos .txt
2. Embebe documentos
3. Responde preguntas
4. Mantiene conversación
5. Incluye tests unitarios"

[Espera 5-10 segundos mientras Claude procesa]

[Claude genera]

✓ estructura de carpetas
✓ requirements.txt
✓ main.py (código modular)
✓ tests/
✓ git commits

Tiempo total: 1 minuto 45 segundos
```

**NARRACIÓN MIENTRAS CORRE:**

"Miren lo que está pasando. Claude NO solo generó código. Generó un SISTEMA:

- Estructura clara: carpetas organizadas
- Tests integrados: pytest
- Documentación: docstrings
- Versionamiento: Git commits automáticos

Esto es diferente de un script generado aleatoriamente. Esto es ARQUITECTURA.

Y lo importante: hizo TODO en menos de 2 minutos. Sin UI, sin configuración manual, sin framework bloat.

Eso es por qué Claude Code es diferente."

---

## Slide 3.2: Cursor - Predicción (4 min)

**DEMO SCRIPT:**

"Ahora Cursor. Cursor brilla en PREDICCIÓN.

Miren."

[Dev abre archivo Python. Comienza a escribir]

```javascript
const authenticateUser = async (email, password) => {
```

[Cursor inmediatamente predice:]

```javascript
const authenticateUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user || !await user.matchPassword(password)) {
    throw new Error('Invalid credentials');
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  return { user, token };
};
```

**NARRACIÓN:**

"¿Ven? Cursor PREDIJO el código completo. 25% de las veces es perfecto como esto. 25% de las veces es 80% correcto (necesita ajustes). 50% de las veces propone cosas malas.

Pero cuando es bueno? Es TELEPÁTICO. Flujo mental sin interrupciones.

Eso es multiplicador de productividad. No es '2x más rápido'—es 'tu FLUJO mental no se interrumpe'."

---

## Slide 3.3: Tabla Comparativa (2 min)

**MOSTRAR TABLA:**

| Aspecto | Claude Code | Cursor | Copilot |
|---------|-----------|--------|---------|
| Terminal-first | ✓✓✓ | - | - |
| Multi-file | ✓✓✓ | ✓✓✓ | ✓ |
| Inline pred | ✓✓ | ✓✓✓ | ✓✓ |
| MCP | ✓✓✓ | ✓ | - |
| Git auto | ✓✓✓ | ✓ | ✓✓ |
| Empresa | ✓✓ | ✓ | ✓✓✓ |
| Precio | $20 | $20-200 | $10-39 |

**SCRIPT:**

"No hay un 'mejor' absoluto. Depende de TI.

¿Eres full-stack? Cursor acelera desarrollo.
¿Necesitas arquitectura antes? Claude razona mejor.
¿Trabajas en equipo grande? Copilot tiene integración GitHub.

La tarea del FACILITADOR es: 'Elige basándote en tu workflow, no en hype.'"

---

# FASE 4: RUTAS ESPECIALIZADAS (20 MIN)

[Aquí simplificaremos. Cada ruta = 5 min]

## Ruta 1: System Agent (Azure Foundry) (5 min)

**VISUAL - Diagram:**

```
Customer → System Agent → Tools (CRM, KB, Escalation)
           ↓
      Response (24/7)
```

**SCRIPT:**

"Caso real: Startup que ahorró $15k/mes reemplazando 5 customer service agents con 1 System Agent.

¿Cómo funciona?

Cliente llama con pregunta. Agent:
1. Analiza tono (urgencia)
2. Busca en FAQ (70% resuelto aquí)
3. Si no: llama herramienta CRM
4. Si seguía fallando: escalada a humano

Resultado: 70% autodeterminado, 20% herramientas, 10% escalación.

Costo: $500/mes + mantenimiento.
Beneficio: Disponible 24/7, nunca falla por 'cansancio', mejora constantemente con logs."

---

## Ruta 2: Multi-Agent (CrewAI) (5 min)

**VISUAL:**

```
Research → Analyst → Writer
(paralelo)   (paralelo)  (secuencial)
```

**SCRIPT:**

"Caso: Análisis de mercado que toma 2 horas en 20 minutos.

3 agentes. En paralelo. Manager orquesta.

Researcher: Busca datos
Analyst: Sintetiza
Writer: Reportea

Cada uno especializado. Cada uno optimizado.

Beneficio: 6x más rápido."

---

## Ruta 3: RAG (LlamaIndex) (5 min)

**SCRIPT:**

"RAG = Retrieval-Augmented Generation.

Problema: Empresa tiene 1000 documentos. Empleados no saben dónde buscar.

Solución: Indexar todos en vector DB. Usuario pregunta. Agent busca documentos relevantes. Sintetiza respuesta.

Beneficio: Información siempre actualizada. No requiere fine-tuning de modelo."

---

## Ruta 4: Custom MVP (Claude + MCP) (5 min)

**SCRIPT:**

"Caso: Idea de startup. Necesitas MVP en 2 semanas. Budget: $500. Equipo: 1 person.

Approach:
- Day 1-2: Especificación clara (Lean)
- Day 3-5: Prototipo con Claude Code
- Day 6-7: Deploy en AWS Lambda
- Day 8-14: Iterar basado en feedback

Cost: $50 (AWS) + $200 (Claude) + tu tiempo.

Resultado: MVP funcional, pronto a validar con usuarios.

¿Funciona el idea? Escala. ¿Fracasa? Pivota con mínima pérdida."

---

# FASE 5: PROTOTIPADO GUIADO (10 MIN)

## Setup

**[Todos reciben link a GitHub Codespace]**

```
github.com/AgentCamp-Gto/agentcamp-starter

Pre-cargado:
- 4 templates (una por ruta)
- Azure credits canjeados
- Claude API key (demo)
```

## Flujo Exacto

**Minuto 1-2: Elección**
"Levanten manos: ¿quién quiere Ruta 1? ¿Ruta 2? Etc."

**Minuto 3-4: Problema Local**
"Equipo Ruta 2, ustedes analizan oportunidades IA en manufactura en Guanajuato. Vamos."

**Minuto 5-8: Build Live**
"Clona el template. Modifica config.yaml. Ejecuta."

**Minuto 9-10: Results**
"Miren lo que salió en 3 minutos. Eso que ven es prototipo funcional."

---

# FASE 6: CIERRE (5-10 MIN)

## Pregunta Abierta

"¿Cuál fue lo más sorprendente para ustedes?"

[Deja hablar. Escucha.]

## Los 5 Principios (Mostrar slide)

```
1. FIRST PRINCIPLES ALWAYS
   Problema real → Sistema → 80/20 → RECIÉN herramientas

2. ESTRUCTURA ANTES
   Arquitectura → Código (no lo inverso)

3. LEAN + DEVOPS SIEMPRE
   Build-Measure-Learn + CI/CD + Monitoreo

4. TÚ DIRIGES IA
   No IA → TÚ

5. SISTEMAS > HERRAMIENTAS
   Sistema es lo que construyes. Herramienta es solo martillo.
```

## Recursos

"Aquí reciben documento con:
- Links a Microsoft Learn (gratis)
- Repositorio starter (GitHub)
- Retos para practicar después
- Links oficiales (Claude, Cursor, Foundry)
- Community Slack"

## Cierre Motivacional

"2026 es VUESTRO año. Apliquen estos principios. Resuelvan problemas reales. Guanajuato tiene talento. Tiene economía local. Tiene OPORTUNIDAD.

No esperen. Construyan ahora."

---

**FIN DE SCRIPTS**

Este documento es referencia de facilitadores. Úsalo como guía, NO como lectura literaria. La energía, timing, y conexión con audiencia es TODO.

