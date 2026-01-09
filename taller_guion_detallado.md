# TALLER: TÉCNICAS Y HERRAMIENTAS DE PROTOTIPADO PARA EMPRENDEDORES CON IA
## "De Idea a Agente: Principios, Práctica y Ejecución Sistémica"

**Facilitadores:** Emiliano Castillo (Evior Developments) & Diego Pérez (TrueData)  
**Ubicación:** AgentCamp Guanajuato - Silao  
**Duración:** 90 minutos (10:50 - 12:20)  
**Audiencia:** Creadores de IA, ingenieros, estudiantes, emprendedores técnicos  
**Modalidad:** Intensiva, inmersiva, 100% práctica con teoría justificada  

---

## ESTRUCTURA MAESTRA (90 MIN)

| Fase | Duración | Actividad | Objetivo |
|------|----------|-----------|----------|
| **0. Activación** | 5 min | Pregunta provocadora + contexto urgencia | Captar atención, generar curiosidad |
| **1. Retos de Pensamiento** | 15 min | Grupos pequeños resuelven dilemas sistémicos | Activar divergencia, identificar gaps mentales |
| **2. Teoría Acelerada** | 20 min | Fundamentos: IA, agentes, MCP, Lean+DevOps | Base compartida para herramientas |
| **3. Herramientas Vivas** | 20 min | Demos interactivas: Claude, Cursor, MCP | Ver en acción las herramientas líderes |
| **4. Rutas Especializadas** | 20 min | Introducción a 4 arquitecturas reales | Mapeo: qué herramienta para qué problema |
| **5. Prototipado Guiado** | 10 min | Participantes comienzan MVP (asistidos) | Experiencia hands-on |
| **6. Reflexión + Cierre** | Restante | Síntesis, next steps, comunidad | Integración y momentum a futuro |

---

# FASE 0: ACTIVACIÓN (5 MIN)

## 0.1 Entrada Provocadora

**Mostrar en pantalla (durante entrada):**
```
2025: 172,000 despidos en tech + $4.3 trillones en NVIDIA
2026: Oportunidad masiva para quien domine SISTEMA + HERRAMIENTAS

Pregunta: ¿Generaste un MVP con IA en 2025 que FUNCIONÓ en producción?
```

**Narración (2-3 min):**

"Bienvenidos. En 2025 pasó algo que cambió TODO. La IA dejó de ser un juego de laboratorio.

Hoy en día, herramientas como Claude, Cursor y Foundry pueden generar aplicaciones completas en HORAS. Startups como Lovable alcanzaron $200 millones de ingresos en 8 meses con una idea simple: 'describe en lenguaje natural → código real'.

Suena perfecto, ¿verdad?

Aquí está el problema: **70% de esos MVPs fallaron en producción.**

¿Por qué? Porque generar código y generar SISTEMAS son cosas completamente diferentes.

Este taller no es sobre aprender herramientas. Es sobre aprender los PRINCIPIOS que hacen que esas herramientas funcionen.

Porque en 2026, la diferencia no es entre quién SABE usar IA y quién no. Es entre quién DOMINA los principios sistémicos + las herramientas, y quién solo presiona botones.

Vamos a cambiar eso hoy."

---

## 0.2 Contexto: Por Qué Ahora Es Crítico

**Mostrar data visual (30 seg):**

- **2023-2024:** Chatbots y automatización de reglas
- **2025:** Agentic AI masivo + first-class infrastructure
- **2026:** Quantum + IA convergencia; robots en fábricas; educación transformada

**Mensaje:** "Si esperas a 2027 para dominar esto, estarás 2 años atrás."

---

# FASE 1: RETOS DE PENSAMIENTO SISTÉMICO (15 MIN)

*Objetivo: Activar pensamiento divergente antes de enseñar. Descubrir qué saben ya.*

## 1.1 Estructura de Retos

**Dividir grupo en 4 equipos (~5-8 personas cada uno)**

**Cada equipo recibe 1 dilema + 5 minutos para debatir:**

### Reto 1: El Dilema del Vibecoding
**"Un developer usó Cursor para generar una app de gestión de inventario en 2 días.
Se ve perfecta. Pero después de 2 meses:
- Colapsa bajo carga
- Nadie entiende el código
- No hay tests
- La deuda técnica es explosiva"**

**Pregunta:** ¿Qué faltó en el SISTEMA que permitió que esto sucediera?

*Respuestas esperadas:*
- Falta testing
- Falta arquitectura
- Falta plan de escalabilidad
- Herramienta vs Ingeniería sistémica

### Reto 2: La Paradoja de la Automatización
**"172,000 personas perdieron sus trabajos en 2025 por IA.
Pero salarios de AI specialists explosionaron: $200-300k/año.
La IA no eliminó trabajos: los CAMBIÓ."**

**Pregunta:** ¿Qué habilidades necesitas para NO quedar en el lado perdedor?

*Respuestas esperadas:*
- Pensamiento sistémico
- Liderazgo en IA (no ser esclavo de ella)
- Principios de ingeniería
- Capacidad de adaptación

### Reto 3: Elon Musk vs Iteración Lenta
**"Elon dice: 'Razona desde primeros principios, no por analogía.'
Pero un startup típico: construye un MVP sin pensar en estructura."**

**Pregunta:** ¿Cómo aplicas "primeros principios" en desarrollo de agentes?

*Respuestas esperadas:*
- Pregunta ANTES: ¿Qué problema real resuelvo?
- Pregunta SEGUNDA: ¿Qué sistema subyace?
- Pregunta TERCERA: ¿Dónde está el apalancamiento (80/20)?
- Recién ENTONCES: ¿Qué agente necesito?

### Reto 4: Herramientas Mágicas vs Principios
**"Hay 7 AI agent frameworks populares: LangChain, CrewAI, Semantic Kernel, etc.
Todos prometen 'construye agentes con 5 líneas de código'."**

**Pregunta:** ¿Por qué 90% de los agentes construidos así nunca escalan?

*Respuestas esperadas:*
- No hay monitoreo
- No hay observabilidad
- No hay feedback loops
- Falta DevOps + ingeniería de systems

---

## 1.2 Síntesis de Retos (2 min)

**Cada equipo expone 30 seg de conclusión**

**Facilitador sintetiza:**

"Lo que escucho es que **SÍ entienden la diferencia entre generar código y construir sistemas.**

Exactamente. Esa intuición es la BASE de todo lo que vamos a ver hoy.

La IA es agilidad. Pero sin estructura, la agilidad = caos."

---

# FASE 2: TEORÍA ACELERADA (20 MIN)

*Objetivo: Dar base teórica rigurosa en tiempo mínimo. Respaldado por principios.*

## 2.1 Fundamentos de IA: Qué Hay Adentro

**Timeline visual (mostrar en slides):**

```
2023: Chatbots + Reglas (IF/THEN)
     ↓
2024: LLMs de Frontera (GPT-4, Claude 2)
     ↓
2025: Agentic AI + Infraestructura Gigawatt
     ↓
2026: Quantum + IA + Mini-cerebros autónomos
```

### 2.1.1 Tokenización y Embeddings

**Concepto Simple:**
- **Tokenización:** El modelo convierte palabras en números
- "Hola" = [8234, 502, 1023] (tokens)
- Cada token = punto en espacio matemático (embedding)

**¿Por qué importa?**
- Límite de tokens = límite de contexto (ventana máxima)
- Tokens cuesta dinero (Claude: $2 por millón input, $8 por millón output)
- Optimización: LoRA + cuantización = 40% menos tokens

**Aplicación Lean:** Diseña prompts que MINIMICEN tokens sin perder calidad.

### 2.1.2 Large Language Models Como Generadores de Representaciones

**La Verdad Matemática:**
- Un LLM NO "entiende" en sentido humano
- Entiende RELACIONES ESTADÍSTICAS entre palabras
- Predice la siguiente palabra más probable = 10,000+ iteraciones/sec

**Arquitectura Base (Transformer):**
```
Entrada → Embedding → Attention Layers → Prediction
                       ↑
                Pesos que se APRENDIERON
```

**Pesos Estadísticos + Probabilidad Pura:**
- GPT-5 = ~500 mil millones de parámetros
- Cada parámetro = peso matemático
- Entrenamiento = ajuste recursivo de pesos
- Inference = multiplicación de matrices velocísima

**¿Por qué esto importa para AGENTES?**
- Los agentes son LLMs + loops de decisión
- Calidad de input (prompt) = calidad de output
- Pero sin estructura sistémica NO escala

### 2.1.3 Sesgos Algorítmicos + Ética en IA

**Realidad cruda:**
- Modelo entrenado en datos sesgados = salida sesgada
- Ejemplo: Sistema de crédito en 2020 rechazaba aplicantes por género
- Causa: Datos históricos reflejaban discriminación

**En Agentes:**
- Si diseñas un agente que toma decisiones sin auditoría = RIESGO regulatorio
- En medicina: Error en IA afecta vidas reales
- En finanzas: Discriminación = demanda legal

**Principio:** Diseña agentes con "explicabilidad" desde día 1.

---

## 2.2 Sistemas Agenticos: La Orquestación

**Evolución:**
```
Chatbot (reglas)
    ↓
LLM (predicción)
    ↓
Agent (predicción + acción + feedback)
    ↓
Multi-Agent System (orquestación + comunicación)
```

### 2.2.1 Anatomía de un Agente

```
┌─────────────────────────────────┐
│  AGENTE SIMPLE                  │
├─────────────────────────────────┤
│ INPUT (prompt + contexto)       │
│         ↓                       │
│ REASONING (LLM piensa)          │
│         ↓                       │
│ TOOL CALLING (elige herramienta)│
│         ↓                       │
│ ACTION (ejecuta en mundo real)  │
│         ↓                       │
│ FEEDBACK (observa resultado)    │
│         ↓                       │
│ LOOP BACK (itera)               │
└─────────────────────────────────┘
```

**Concepto Crítico: Loops de Retroalimentación**
- Sin feedback = agente ciego
- Con feedback pero sin guardrails = agente peligroso
- Con feedback + límites = agente controlable

### 2.2.2 Multi-Agent Orchestration

**Patrón Real: CrewAI**

```
┌───────────┬───────────┬───────────┐
│ Agent 1   │ Agent 2   │ Agent 3   │
│ Researcher│ Analyst   │ Writer    │
└─────┬─────┴─────┬─────┴─────┬─────┘
      │           │           │
      └─────┬─────┴─────┬─────┘
            │           │
      ┌─────▼───────────▼─────┐
      │ Manager Agent         │
      │ (orquestador)         │
      └───────────────────────┘
```

**Caso Real:** Investigación de mercado
- **Agent 1 (Researcher):** Busca datos públicos → Output: reportes crudos
- **Agent 2 (Analyst):** Analiza & sintetiza → Output: insights
- **Agent 3 (Writer):** Escribe reporte ejecutivo → Output: documento final
- **Manager:** Orquesta flujo, asegura calidad

**Beneficio Lean:** Parallelización = ejecuta en 1/3 del tiempo

---

## 2.3 Model Context Protocol (MCP): Por Qué Importa

**El Problema M×N:**

Año 2024 (antes de MCP):
```
10 Modelos IA × 100 Herramientas = 1,000 integraciones diferentes
Cada integración = código custom, bugs, mantenimiento
```

Año 2026 (con MCP):
```
10 Modelos IA + 100 Herramientas = 1 PROTOCOLO ESTÁNDAR
Cualquier modelo ↔ cualquier herramienta automáticamente
```

**MCP es como HTTP para Agentes.**

### 2.3.1 Arquitectura MCP Simple

```
┌──────────┐  MCP Protocol   ┌──────────┐
│ Claude   │◄─────────────►  │ Database │
│ GPT-5    │  (JSON RPC)     │ GitHub   │
│ Gemini   │                 │ Slack    │
└──────────┘                 └──────────┘
```

**Flujo:**
1. Client (Claude) necesita dato
2. Llama a MCP server con comando estándar
3. Servidor retorna resultado estándar
4. Claude procesa y actúa

**Impacto:** Desarrollo de agentes pasa de **semanas** a **horas**.

---

## 2.4 Lean Startup + DevOps Aplicado a Agentes

### 2.4.1 Build-Measure-Learn para IA

**Clásico Lean Startup:**
```
BUILD: MVP mínimo (con IA: agente básico)
  ↓
MEASURE: ¿Funciona? ¿Usuarios lo usan?
  ↓
LEARN: ¿Pivotar o perseverar?
```

**Aplicado a Agentes:**

**BUILD (1-2 días):**
- Define 1 problema específico
- Diseña agente simple (1-2 herramientas)
- Deploy con Azure/Hugging Face (free tier)
- Métricas: latencia, errores, cobertura

**MEASURE (3-5 días):**
- Users interactúan con agente
- Recolecta: fallos, latencia, satisfacción
- ¿El agente logró el objetivo?

**LEARN (1 día):**
- Si funcionó → itera (más herramientas, mejor razonamiento)
- Si no → pivot (otro approach, otro modelo)

### 2.4.2 DevOps para Multi-Agent Systems

**GitOps + CI/CD:**
```
Code → GitHub → CI/CD Pipeline → Testing → Deploy → Monitor
                   ↓
            ¿Prompts diferentes?
            ¿Nuevo modelo?
            ¿Cambio en herramientas?
                   ↓
            Automático → Production
```

**Monitoreo + Observabilidad:**
- Cada agente tiene logs + traces
- Cada herramienta tiene métricas
- Alertas si algo falla

**Principio:** "You build it, you run it" → El equipo que construye el agente es responsable de mantenerlo.

---

# FASE 3: HERRAMIENTAS VIVAS (20 MIN)

*Objetivo: Demostrar 4 herramientas líderes en acción. Mostrar diferencias, fortalezas, casos de uso.*

## 3.1 Claude Code en Vivo

**Demostración: 5 minutos**

### 3.1.1 Setup

```bash
# Terminal real en pantalla
pip install anthropic
export ANTHROPIC_API_KEY="sk-xxx..."

claude code --open
```

### 3.1.2 Ejemplo: Crear un Agente RAG Simple

**Narración:**
"Queremos un agente que lea documentos y responda preguntas sobre ellos.
Sin escribir código. Usando Claude Code."

**Acción:**

```bash
# Claude recibe instrucción en lenguaje natural
claude code "Crea un agente RAG que:
1. Lee archivos .txt de una carpeta
2. Embebe documentos
3. Responde preguntas del usuario
4. Mantiene conversación persistente
5. Incluye tests unitarios"
```

**Lo que sucede en pantalla:**
1. Claude analiza la request
2. Crea estructura de archivos
3. Genera código modular
4. Ejecuta tests automáticamente
5. Crea Git commits con descripciones

**Tiempo total:** 2 minutos

**Insight Crítico:**
"Claude no solo generó código. Generó un SISTEMA:
- Estructura clara
- Tests integrados
- Documentación
- Versionamiento Git

Esto es lo que separà jugar con IA de BUILD sistemas que escalan."

### 3.1.3 MCP Marketplace en Vivo

**Mostrar:** `claude code --marketplace`

```
Available MCP Servers:
- postgres: Query databases
- github: Read/write repositories
- slack: Send messages
- stripe: Payment processing
- filesystem: Advanced file operations
```

**Acción:**
"Ahora expandamos el agente. Queremos que guarde resultados en una base de datos Postgres."

```bash
claude code "Integra MCP Postgres al agente.
Cada respuesta se guarda en tabla 'responses'
con timestamp, pregunta, respuesta, confidence"
```

**Resultado:** Automáticamente, Claude:
1. Conecta al servidor MCP Postgres
2. Define schema
3. Agrega persistencia
4. Actualiza tests

**Tiempo:** 1 minuto

**Insight:**
"Esto es el futuro. Herramientas se conectan automáticamente. No hay fricción.
Enfoque en lógica, no en plumbing."

---

## 3.2 Cursor: Predicción + Contexto

**Demostración: 4 minutos**

### 3.2.1 Setup

Mostrar editor Cursor abierto con proyecto real.

### 3.2.2 Ejemplo: Multi-File Refactoring

**Escenario:**
"Heredamos un codebase con bugs. Queremos refactorizar service de autenticación."

**Acción 1: Natural Language Editing**

```
Cursor recibe: "Refactor auth.js para usar JWT.
Actualiza tests en auth.test.js.
Cambia controllers que usan auth.
Genera migration si es necesario."
```

**Lo que Cursor hace:**
- Lee contexto completo del proyecto
- Identifica archivos relacionados
- Hace cambios multi-archivo
- Preserva tests
- Propone PR description

**Tiempo:** 2 minutos
**Archivos modificados:** 8
**Tests pasando:** ✓

**Acción 2: Inline Prediction (donde Cursor brilla)**

Developer empieza a escribir:
```javascript
const authenticateUser = async (email, password) => {
```

Cursor predice automáticamente:
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

**Developer solo presiona Tab → completar**

**Insight:**
"Predicción de Cursor es 25% accuracy, pero cuando es correcta = flujo mental sin interrupciones.
Esto es multiplicador de productividad."

### 3.2.3 Limitación Honesta

"¿Dónde Cursor cae corto? En razonamiento arquitectónico profundo.
Si necesitas pensar TODO un sistema antes de codear → Claude es mejor.
Si necesitas velocidad en ejecución → Cursor gana."

---

## 3.3 GitHub Copilot: El Estándar Empresarial

**Demostración: 4 minutos**

### 3.3.1 Fortaleza: GitHub Integration

Mostrar pull request con Copilot assistance:

```
PR: Endpoint para procesar pagos con Stripe

Copilot sugiere:
- Error handling mejorado
- Validaciones faltantes
- Tests para edge cases
- Documentación

Todo en contexto de la PR.
```

**Insight:** "En equipos grandes, tener IA que entiende Git flow es crítico."

### 3.3.2 Limitación: Contexto Limitado

"Copilot es rápido para inline completion.
Pero para cambios multi-archivo? Necesitas decirle contexto manualmente.
Por eso Claude + Cursor lo superan."

---

## 3.4 Resumen Comparativo

**Mostrar tabla (1 min):**

| Aspecto | Claude Code | Cursor | Copilot |
|---------|-----------|--------|---------|
| Terminal-first | ✓✓✓ | - | - |
| Multi-file context | ✓✓✓ | ✓✓✓ | ✓ |
| Inline prediction | ✓✓ | ✓✓✓ | ✓✓ |
| MCP integration | ✓✓✓ | ✓ | - |
| Git automation | ✓✓✓ | ✓ | ✓✓ |
| Enterprise | ✓✓ | ✓ | ✓✓✓ |
| Precio | $20 | $20-200 | $10-39 |

**Conclusión:** "No hay un 'mejor'. Depende de tu workflow."

---

# FASE 4: RUTAS ESPECIALIZADAS (20 MIN)

*Objetivo: Mostrar 4 arquitecturas reales. Participantes identifican cuál es para su caso.*

---

## 4.1 Ruta 1: System Agent (Azure AI Foundry)

**Caso Real: Soporte al Cliente 24/7**

### 4.1.1 Arquitectura

```
┌─────────────────────────────────────┐
│ Customer inquiry                    │
└────────────────┬────────────────────┘
                 ↓
        ┌────────────────┐
        │ System Agent   │
        │ (Foundry)      │
        └────┬──────┬────┘
             │      │
        ┌────▼─┐  ┌─▼────┐
        │ Tool │  │ Tool │
        │ CRM  │  │ KB   │
        └──────┘  └──────┘
                 ↓
         ┌───────────────┐
         │ Response      │
         └───────────────┘
```

### 4.1.2 Componentes Clave

**Agent:**
- Recibe pregunta del cliente
- Decide: ¿es FAQ? ¿es soporte técnico? ¿necesita escalada?
- Elige herramientas apropiadas

**Tools (MCP):**
- CRM: Buscar historial cliente
- Knowledge Base: FAQs
- Escalation: Ticket system

**Governance (Foundry):**
- Todos los calls quedan registrados
- Auditoría automática
- Compliance (GDPR, SOC2)

### 4.1.3 Beneficio Lean

- Antes: 5 agentes customer service @ $3k/mes = $15k/mes
- Después: 1 System Agent @ $500/mes + monitoreo
- ROI: 30x en costos, 40% mejor satisfacción (24/7)

---

## 4.2 Ruta 2: Multi-Agent Orchestration (CrewAI)

**Caso Real: Investigación de Mercado Automatizada**

### 4.2.1 Arquitectura

```
                ┌──────────────┐
                │ Manager      │
                │ (orquestador)│
                └──────┬───────┘
         ┌──────────┬──┴──┬──────────┐
         │          │     │          │
    ┌────▼──┐  ┌───▼──┐ ┌▼──┐  ┌──▼────┐
    │Agent 1│  │Agent2│ │Ag3│  │Agent 4│
    │Research│ │Analy-│ │Writ│ │Desing │
    └────┬──┘  │sis   │ │er  │  │       │
         │     └───┬──┘ └┬──┘  └──┬────┘
         │         │     │        │
    ┌────▼─────────▼─────▼────────▼────┐
    │ Final Report (multi-format)      │
    └─────────────────────────────────┘
```

### 4.2.2 Flujo

**Input:** "Análisis de mercado: Competidores IA en Latam 2026"

**Ejecución:**

| Agente | Tarea | Output |
|--------|-------|--------|
| Researcher | Buscar noticias, papers, datos públicos | 50 referencias |
| Analyst | Sintetizar, identificar tendencias | 5 insights clave |
| Writer | Reportes ejecutivo + detallado | PDF + HTML |
| Designer | Visualizaciones, gráficos | Infografías |

**Tiempo Total:** 15 minutos (en paralelo = 5x más rápido)

### 4.2.3 DevOps Aplicado

```yaml
# CrewAI config
agents:
  - name: Researcher
    model: gpt-5
    tools: [web_search, arxiv, crunchbase]
    memory: persistent
  - name: Analyst
    model: claude-opus
    tools: [data_analysis, visualization]
tasks:
  - assign_to: Researcher
    depends_on: none
  - assign_to: Analyst
    depends_on: Researcher
monitoring:
  - latency per agent
  - error rates
  - tool success rate
```

---

## 4.3 Ruta 3: RAG + Data-Centric (LlamaIndex)

**Caso Real: Agente de Documentación Interna**

### 4.3.1 Problema

"En una empresa mediana:
- 1000+ documentos internos
- Empleados no saben qué buscar
- Información dispersa en Confluence, Google Drive, emails"

### 4.3.2 Solución: RAG Agent

```
┌─────────────────────────────┐
│ Employee Query              │
│ "¿Cuál es la policy        │
│  de vacaciones?"           │
└────────────┬────────────────┘
             ↓
    ┌────────────────┐
    │ Query Embedding│
    │ (vector)       │
    └────────┬───────┘
             ↓
    ┌────────────────────────┐
    │ Vector DB Search       │
    │ (1000 docs indexed)    │
    └────┬──────────────┬────┘
         │              │
    ┌────▼──┐      ┌───▼────┐
    │ Doc 1 │      │ Doc 2  │
    │ (top  │      │(top    │
    │ match)│      │match2) │
    └────┬──┘      └───┬────┘
         │             │
         └──────┬──────┘
                ↓
       ┌────────────────┐
       │ LLM Reasoning  │
       │ (sintetiza)    │
       └────────┬───────┘
                ↓
       ┌────────────────┐
       │ Answer         │
       │ "La policy...  │
       │ según Doc 1"   │
       └────────────────┘
```

### 4.3.3 Técnicas Clave

**Embedding + Semantic Search:**
```python
# Indexed: 1000 docs como vectores
# Query: "vacaciones" → convierte a vector
# Distancia vecinos más cercanos → Top 3 docs
# Contexto extraído → LLM razona → Respuesta
```

**Costo:** Free (LlamaIndex) + cheap embeddings (local o API)

---

## 4.4 Ruta 4: Custom Workflow (Claude Code + MCP)

**Caso Real: MVP Product Eng**

### 4.4.1 Escenario

"Tienes idea de startup: 'Slack bot que traduce documentos técnicos con IA'.
Necesitas MVP en 2 semanas. Equipo: 1 person.
Budget: $500"

### 4.4.2 Approach

**Day 1: Especificación + First Principles**

```
Pregunta: ¿Qué es lo MÍNIMO viable?
Respuesta:
- Slack integracion
- 1 endpoint: /translate
- Soporte: Inglés ↔ Español
- Test basico

NO en MVP:
- UI bonita
- 20 idiomas
- Almacenamiento persistente
- Analytics
```

**Day 2-3: Prototipado con Claude Code**

```bash
claude code "Crea MVP Slack bot:
1. Lambda function (AWS)
2. MCP Slack integration
3. Claude API para traducción
4. Tests pytest
5. Deploy to AWS + logs a CloudWatch"
```

**Resultado:** Código limpio, modular, escalable.

**Day 4-10: Iteración + Learning**

- Deploy MVP
- Recolecta feedback de 10 usuarios
- Mide: sesiones, traducciones, errores
- Decide: pivotar o escalar

### 4.4.3 Stack Técnico

```
Frontend: Slack (gratis)
Backend: AWS Lambda (pay per execution)
AI: Claude API ($0.01 por traducción aprox)
Infra: Terraform + GitHub Actions
Hosting: Cero overhead
```

**Costo mensual:** ~$50 (si tienes 1000 traducciones/mes)

**Validación de Lean Startup:** Mínimo viable + medir + aprender = 2 semanas → decisión

---

## 4.5 Tabla Comparativa de Rutas

| Ruta | Mejor Para | Complejidad | Tiempo | Costo |
|------|-----------|-----------|--------|--------|
| System Agent | Soporte, automación | Media | 2-3 sem | $1k |
| Multi-Agent | Investigación, análisis | Alta | 3-4 sem | $5k |
| RAG | Búsqueda, contexto | Baja | 1-2 sem | $500 |
| Custom | MVP startup | Baja | 1-2 sem | $500 |

---

# FASE 5: PROTOTIPADO GUIADO EN VIVO (10 MIN)

*Objetivo: Que los participantes construyan algo REAL en 10 minutos.*

---

## 5.1 Setup Pre-Taller

### 5.1.1 Repositorio Template

```
Todos los participantes reciben link:
github.com/AgentCamp-Gto/agentcamp-starter

Includes:
- Codespace preconfigured
- 4 starter templates (1 por ruta)
- Azure credits canjeados
- Claude API key (demo)
```

### 5.1.2 Estructura de Carpetas

```
agentcamp-starter/
├── ruta-1-system-agent/
│   ├── main.py
│   ├── requirements.txt
│   ├── .env.example
│   └── tests/
├── ruta-2-multi-agent/
│   ├── crew_config.yaml
│   ├── agents.py
│   ├── tasks.py
│   └── main.py
├── ruta-3-rag/
│   ├── indexing.py
│   ├── query.py
│   └── data/
├── ruta-4-custom/
│   ├── main.py (lambda function)
│   ├── serverless.yaml
│   └── tests/
└── README.md (instrucciones)
```

---

## 5.2 Flujo de Prototipado (10 min)

### 5.2.1 Minuto 1-2: Elección de Ruta

**Facilitador:**
"Tienen 10 minutos. Elijan UNA ruta. Ustedes eligen:
1. System Agent - para soporte/automación
2. Multi-Agent - para análisis/investigación
3. RAG - para búsqueda/contexto
4. Custom - para MVP rápido

Levanten manos por grupo."

### 5.2.2 Minuto 3-4: Definición de Problema Local

**Facilitador proporciona opciones (Guanajuato-específicas):**

```
Ruta 1 (System): "Bot que responde FAQ de empresas locales"
Ruta 2 (Multi): "Análisis de mercado: oportunidades manufactura + IA en Gto"
Ruta 3 (RAG): "Búsqueda en documentos técnicos de proyecto local"
Ruta 4 (Custom): "MVP: Whatsapp bot que recomienda proveedores locales"
```

**Participantes:** "Nosotros queremos Ruta 2 + analizar manufactura en Gto"

### 5.2.3 Minuto 5-8: Codespace + First Build

**Acciones:**

```bash
# Abre GitHub Codespace (precargado)
cd ruta-2-multi-agent

# Edita config.yaml con el problema
cat crew_config.yaml

# Ejecuta:
python main.py --task "Analiza oportunidades manufactura + IA en Guanajuato"
```

**Qué sucede:**
- Agentes comienzan a ejecutarse
- Buscan información en real-time
- Procesan y sintetizan

**Facilitador monitorea en pantalla grande.**

### 5.2.4 Minuto 9-10: Resultados + Reflexión

**Resultado típico (en Foundry console):**

```
Agent 1 (Researcher): ✓ Completado
  - 23 artículos encontrados
  - 15 relevantes identificados
  
Agent 2 (Analyst): ✓ Completado
  - 3 trends principales
  - 5 oportunidades detectadas

Output: 
- Reporte ejecutivo (texto)
- Datos estructurados (JSON)
- Métricas (latencia, tokens used)
```

**Reflexión (todos):**

"¿Qué pasó aquí?
1. Definieron el PROBLEMA de forma específica
2. Eligieron la ARQUITECTURA correcta
3. Usaron HERRAMIENTAS existentes (no reinventaron)
4. Obtuvieron RESULTADO en 3 minutos

Esto es lo que significa CONSTRUIR CON PRINCIPIOS + HERRAMIENTAS."

---

# FASE 6: REFLEXIÓN + CIERRE (5-10 MIN)

---

## 6.1 Síntesis de Aprendizajes

**Pregunta abierta (3-5 min):**

"¿Qué fue lo más sorprendente para ustedes en el taller?"

*Dejar que participantes responda. No interrumpir.*

**Patrones comunes:**
- "Pensé que IA generaba código nada más. No que ORQUESTABA sistemas"
- "No sabía que MCP existía. Simplifica MUCHO"
- "El Lean startup loop de Agentes es like... obvio ahora pero no lo había pensado"
- "La diferencia entre herramientas es real. No es una mejor que otra"

---

## 6.2 Los 5 Principios Clave Para Llevar

**Mostrar slide final (deja esto en sus mentes):**

```
╔═════════════════════════════════════════════════════════╗
║  5 PRINCIPIOS PARA DOMINAR IA EN 2026                 ║
╠═════════════════════════════════════════════════════════╣
║                                                         ║
║ 1. FIRST PRINCIPLES ALWAYS                            ║
║    ¿Qué problema REAL resuelves?                      ║
║    ¿Qué sistema subyace?                              ║
║    ¿Dónde está el 80/20?                              ║
║                                                         ║
║ 2. ESTRUCTURA ANTES DE HERRAMIENTAS                   ║
║    Define arquitectura primero                         ║
║    Después elige herramientas que casen                ║
║    Código sin arquitectura = deuda técnica             ║
║                                                         ║
║ 3. LEAN + DEVOPS SIEMPRE                              ║
║    Build-Measure-Learn loops cortos                   ║
║    Monitoreo automático desde día 1                    ║
║    Despliegues rápidos, rollbacks seguros              ║
║                                                         ║
║ 4. TÚ DIRIGES LA IA, NO AL REVÉS                      ║
║    Prompt engineering = liderazgo técnico              ║
║    Guardrails + observabilidad = confianza             ║
║    Feedback loops = mejora recursiva                   ║
║                                                         ║
║ 5. SISTEMAS > HERRAMIENTAS                            ║
║    La herramienta es solo el martillo                  ║
║    El sistema es lo que construyes                     ║
║    Los sistemas escalan, las herramientas no            ║
║                                                         ║
╚═════════════════════════════════════════════════════════╝
```

---

## 6.3 Recursos para Continuar

**Entregar documento físico (QR + links):**

### Microsoft Learn (GRATIS - Usa tus créditos Azure)
- [Azure AI Foundry Agents](https://learn.microsoft.com/en-us/azure/ai-foundry/agents/)
- [Prompt Engineering Best Practices](https://learn.microsoft.com/en-us/training/modules/prompt-engineering/)
- [Semantic Kernel Tutorial](https://learn.microsoft.com/en-us/semantic-kernel/)

### Repositorios GitHub
- [AgentCamp Starter](https://github.com/AgentCamp-Gto/agentcamp-starter)
- [MCP Implementation Guide](https://github.com/modelcontextprotocol/)
- [LlamaIndex Examples](https://github.com/run-llama/llama_index)
- [CrewAI Showcase](https://github.com/joaomdmoura/crewai)

### Documentación Oficial
- **Claude Code:** https://claude.com/product/claude-code
- **Cursor:** https://www.cursor.com
- **GitHub Copilot:** https://github.com/features/copilot
- **Anthropic MCP:** https://modelcontextprotocol.io/

### Comunidad
- **Slack Creators IA Guanajuato:** [Link]
- **Discord Global AI Community:** [Link]
- **Weekly office hours:** Jueves 7pm CST (online)

---

## 6.4 Desafío Post-Taller

**Para los próximos 2 meses:**

```
Semana 1-2: Elige UN proyecto pequeño (máx 40 horas)
            Aplica los 5 principios
            
Semana 3-4: Deploy a producción
            Mide: latencia, errors, satisfacción
            
Semana 5-8: Itera (Build-Measure-Learn)
            Escala si funciona
            Pivota si no
            
Resultado: Comprueba que SISTEMA > caos
```

**Bonus:** Los mejores proyectos de participantes se presentan en el siguiente evento.

---

## 6.5 Cierre Motivacional

**Narración final (2-3 min):**

"En 2025, la carrera global por IA se aceleró 10x.

172,000 personas perdieron sus trabajos. Pero 500,000 nuevos roles de IA nacieron.

La diferencia: los que entienden PRINCIPIOS domina. Los que solo presionan botones, quedan atrás.

Lo que aprendieron hoy no es sobre Claude o Cursor.

Es sobre SER el tipo de técnico que construye SISTEMAS, no que juega con herramientas.

Eso es lo que diferencia un MVP que funciona de un MVP que escala.

Aquí en Guanajuato, tienen ventaja. Economía local + talento técnico + comunidad IA global = combinación ganadora.

2026 es VUESTRO año para construir algo que importe.

Uso estos principios. Usa estas herramientas. Resuelve problemas reales locales.

El mundo está mirando.

Vamos."

---

# RECURSOS ADICIONALES

## Documentos Generados

1. **Material Técnico Detallado** (50 págs)
   - Tutoriales MCP paso a paso
   - Ejemplos de código (Python + Node)
   - Configuraciones Azure
   - Best practices DevOps

2. **Retos Adicionales** (10 retos)
   - Dificultad progresiva
   - Soluciones comentadas
   - Extensiones avanzadas

3. **Casos de Estudio** (3 casos reales)
   - Startup que escaló con Agentes
   - Empresa que automatizó procesos
   - Proyecto académico que ganó hackathon

4. **Slides Presentación** (80 slides)
   - Visuals + narrativa
   - Speaker notes detalladas
   - Tiempos indicados

---

**FIN DEL DOCUMENTO PRINCIPAL**

---

## Próximas Páginas

Este documento es Página 1 de 5. Las siguientes secciones incluyen:

- **Página 2:** Material Técnico Profundo + Código
- **Página 3:** Retos + Soluciones
- **Página 4:** Casos de Estudio
- **Página 5:** Recursos + Roadmap 2026

**Total estimated:** 150+ págs formato markdown
**Generación:** Enero 2026
**Versión:** 1.0 Alpha (será iterada post-taller)

