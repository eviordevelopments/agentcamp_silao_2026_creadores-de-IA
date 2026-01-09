# MATERIAL TÉCNICO PROFUNDO: TALLER CREADORES IA
## Guía de Implementación + Código + Retos Avanzados

**Documento:** Material de Apoyo para Emiliano & Diego  
**Audiencia:** Facilitadores + Participantes Avanzados  
**Formato:** Código práctico + explicaciones profundas  

---

# PARTE 1: TUTORIALES TÉCNICOS

## 1.1 MCP (Model Context Protocol) - Implementación Paso a Paso

### 1.1.1 ¿Qué es MCP y por qué importa?

**Problema que resuelve:**
```
Antes 2025: 
  - 10 modelos IA × 100 herramientas = 1,000 integraciones
  - Cada integración = código custom, bugs, mantenimiento

Después 2025 (con MCP):
  - 1 PROTOCOLO ESTÁNDAR = cualquier modelo ↔ cualquier herramienta
```

**MCP = HTTP para Agentes**

---

### 1.1.2 Crear tu Primer MCP Server (Python)

**Paso 1: Setup**

```bash
# Crear proyecto
mkdir mcp-weather-server
cd mcp-weather-server

# Instalar dependencias
pip install mcp anthropic python-dotenv

# Crear estructura
touch server.py client.py .env
```

**Paso 2: MCP Server (server.py)**

```python
#!/usr/bin/env python3
"""
MCP Server Ejemplo: Weather Service
Expone herramientas via MCP protocol
"""

from mcp.server.models import InitializationOptions
from mcp.types import Tool, TextContent, ToolResult
from mcp.server import Server
import json
import httpx

# Simulamos API de clima (en realidad usarías API real)
WEATHER_DATA = {
    "guanajuato": {"temp": 22, "condition": "soleado", "humidity": 65},
    "leon": {"temp": 20, "condition": "parcialmente nublado", "humidity": 70},
    "irapuato": {"temp": 25, "condition": "soleado", "humidity": 55},
}

# Crear servidor MCP
server = Server("weather-server")

# Definir herramientas disponibles
@server.list_tools()
async def list_tools():
    """Enumera herramientas disponibles"""
    return [
        Tool(
            name="get_weather",
            description="Obtiene el clima actual para una ciudad",
            inputSchema={
                "type": "object",
                "properties": {
                    "city": {
                        "type": "string",
                        "description": "Nombre de la ciudad"
                    }
                },
                "required": ["city"]
            }
        ),
        Tool(
            name="get_forecast",
            description="Obtiene pronóstico para los próximos 3 días",
            inputSchema={
                "type": "object",
                "properties": {
                    "city": {"type": "string"}
                },
                "required": ["city"]
            }
        )
    ]

# Implementar herramientas
@server.call_tool()
async def call_tool(name: str, arguments: dict):
    """Ejecuta herramientas cuando son llamadas"""
    
    if name == "get_weather":
        city = arguments.get("city", "").lower()
        
        if city in WEATHER_DATA:
            data = WEATHER_DATA[city]
            return ToolResult(
                content=[TextContent(
                    type="text",
                    text=json.dumps(data, indent=2)
                )]
            )
        else:
            return ToolResult(
                content=[TextContent(
                    type="text",
                    text=f"Ciudad '{city}' no encontrada. Ciudades disponibles: {list(WEATHER_DATA.keys())}"
                )]
            )
    
    elif name == "get_forecast":
        city = arguments.get("city", "").lower()
        
        if city in WEATHER_DATA:
            # Simulamos pronóstico
            forecast = {
                "city": city,
                "forecast": [
                    {"day": 1, "temp": 22, "condition": "soleado"},
                    {"day": 2, "temp": 20, "condition": "nublado"},
                    {"day": 3, "temp": 18, "condition": "lluvia"}
                ]
            }
            return ToolResult(
                content=[TextContent(
                    type="text",
                    text=json.dumps(forecast, indent=2)
                )]
            )
        else:
            return ToolResult(
                content=[TextContent(
                    type="text",
                    text=f"Pronóstico no disponible para '{city}'"
                )]
            )
    
    else:
        return ToolResult(
            content=[TextContent(
                type="text",
                text=f"Herramienta '{name}' no existe"
            )]
        )

# Ejecutar servidor
if __name__ == "__main__":
    import asyncio
    
    # Ejecutar en stdio (estándar para MCP)
    async def main():
        async with server:
            print("Servidor MCP iniciado. Esperando conexiones...")
            await asyncio.sleep(float('inf'))
    
    asyncio.run(main())
```

**Paso 3: MCP Client (client.py)**

```python
#!/usr/bin/env python3
"""
MCP Client usando Claude + MCP Weather Server
Demuestra cómo un LLM usa herramientas via MCP
"""

import asyncio
import subprocess
from contextlib import AsyncExitStack
from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client
from anthropic import Anthropic
import json
import os
from dotenv import load_dotenv

load_dotenv()

class MCPWeatherClient:
    def __init__(self):
        self.session = None
        self.exit_stack = AsyncExitStack()
        self.anthropic = Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))
        self.available_tools = []
    
    async def connect_to_server(self):
        """Conecta al servidor MCP via stdio"""
        
        # Parámetros para conectar al servidor
        server_params = StdioServerParameters(
            command="python",
            args=["server.py"]
        )
        
        # Crear conexión stdio
        stdio_transport = await self.exit_stack.enter_async_context(
            stdio_client(server_params)
        )
        
        # Crear sesión MCP
        self.session = await self.exit_stack.enter_async_context(
            ClientSession(stdio_transport)
        )
        
        # Inicializar servidor
        await self.session.initialize()
        
        # Obtener lista de herramientas disponibles
        tools_list = await self.session.list_tools()
        self.available_tools = [
            {
                "name": tool.name,
                "description": tool.description,
                "input_schema": tool.inputSchema
            }
            for tool in tools_list.tools
        ]
        
        print(f"✓ Conectado. Herramientas disponibles: {len(self.available_tools)}")
        for tool in self.available_tools:
            print(f"  - {tool['name']}: {tool['description']}")
    
    async def query(self, user_message: str):
        """Envía un mensaje a Claude con acceso a herramientas MCP"""
        
        messages = [{"role": "user", "content": user_message}]
        
        print(f"\n👤 Usuario: {user_message}")
        
        # Llamada inicial a Claude con herramientas disponibles
        response = self.anthropic.messages.create(
            model="claude-opus-4-1-20250805",
            max_tokens=1024,
            tools=[
                {
                    "name": tool["name"],
                    "description": tool["description"],
                    "input_schema": tool["input_schema"]
                }
                for tool in self.available_tools
            ],
            messages=messages
        )
        
        # Procesar respuesta de Claude
        while response.stop_reason == "tool_use":
            # Encontrar llamada a herramienta
            tool_use = None
            assistant_message_content = []
            
            for content in response.content:
                if content.type == "tool_use":
                    tool_use = content
                assistant_message_content.append(content)
            
            if not tool_use:
                break
            
            # Ejecutar herramienta via MCP
            print(f"\n🔧 Claude llamó: {tool_use.name}({tool.input})")
            
            tool_result = await self.session.call_tool(
                tool_use.name,
                tool_use.input
            )
            
            print(f"📊 Resultado: {tool_result.content[0].text}")
            
            # Agregar a conversación para siguiente iteración
            messages.append({"role": "assistant", "content": assistant_message_content})
            messages.append({
                "role": "user",
                "content": [
                    {
                        "type": "tool_result",
                        "tool_use_id": tool_use.id,
                        "content": tool_result.content[0].text
                    }
                ]
            })
            
            # Siguiente iteración
            response = self.anthropic.messages.create(
                model="claude-opus-4-1-20250805",
                max_tokens=1024,
                tools=[
                    {
                        "name": tool["name"],
                        "description": tool["description"],
                        "input_schema": tool["input_schema"]
                    }
                    for tool in self.available_tools
                ],
                messages=messages
            )
        
        # Extraer respuesta final
        final_response = ""
        for content in response.content:
            if hasattr(content, "text"):
                final_response = content.text
        
        print(f"\n🤖 Claude: {final_response}")
        return final_response
    
    async def close(self):
        """Cierra la conexión"""
        await self.exit_stack.aclose()

async def main():
    """Demostración del cliente MCP con Claude"""
    
    client = MCPWeatherClient()
    
    try:
        # Conectar al servidor
        await client.connect_to_server()
        
        # Ejemplos de consultas
        queries = [
            "¿Cuál es el clima en León, Guanajuato?",
            "Quiero una comparación del clima en Guanajuato vs Irapuato",
            "¿Cuál es el pronóstico para Silao?"
        ]
        
        for query in queries:
            await client.query(query)
            print("-" * 60)
    
    finally:
        await client.close()

if __name__ == "__main__":
    asyncio.run(main())
```

**Paso 4: Ejecutar**

```bash
# Terminal 1: Iniciar servidor
python server.py

# Terminal 2: Ejecutar cliente
ANTHROPIC_API_KEY="sk-..." python client.py
```

**Salida Esperada:**
```
✓ Conectado. Herramientas disponibles: 2
  - get_weather: Obtiene el clima actual para una ciudad
  - get_forecast: Obtiene pronóstico para los próximos 3 días

👤 Usuario: ¿Cuál es el clima en León?
🔧 Claude llamó: get_weather({"city": "leon"})
📊 Resultado: {"temp": 20, "condition": "parcialmente nublado", "humidity": 70}
🤖 Claude: El clima en León actualmente es de 20°C, parcialmente nublado con 70% de humedad.
```

---

### 1.1.3 Concepto Clave: Por qué MCP es Revolucionario

**Antes de MCP:**

```python
# Integrar Slack CON cada modelo requería código custom
if model == "claude":
    result = claude_api.call(prompt, tools=[slack_integration_claude])
elif model == "gpt":
    result = openai_api.call(prompt, tools=[slack_integration_gpt])
elif model == "gemini":
    result = google_api.call(prompt, tools=[slack_integration_gemini])
```

**Con MCP:**

```python
# MCP maneja la traducción automáticamente
agent = Agent(
    model=any_model_you_want,
    mcp_servers=[slack_server, postgres_server, github_server]
)
# Funciona igual, sin importar el modelo
```

---

## 1.2 Sistema Agentico Completo: Sistema de Soporte Automatizado

### 1.2.1 Arquitectura

```
Customer Question → System Agent → Decision Tree
                        ↓
        ┌───────────┬────────┬──────────┐
        ↓           ↓        ↓          ↓
    FAQ Bot?   Technical? Escalate?  Feedback
    (KB)       (Tools)    (Human)    (Store)
```

### 1.2.2 Código Completo (Foundry + MCP)

```python
"""
Sistema de Soporte Automatizado con Azure AI Foundry
Orquesta múltiples agentes para resolver tickets
"""

from azure.ai.projects import AIProjectClient
from azure.identity import DefaultAzureCredential
import os
import json

# Conectar a Azure
client = AIProjectClient.from_connection_string(
    credential=DefaultAzureCredential(),
    conn_str=os.getenv("AZURE_AI_PROJECT_CONNECTION_STRING")
)

# Definir agentes especializados
AGENTS = {
    "faq_agent": {
        "instructions": """Eres un experto en FAQs. Tu trabajo es:
1. Analizar la pregunta del cliente
2. Buscar en la base de conocimiento
3. Si encuentras respuesta, retorna la solución
4. Si NO encuentras, indica que necesita escalada""",
        "tools": ["knowledge_base_search"]
    },
    
    "technical_agent": {
        "instructions": """Eres ingeniero de soporte técnico. Tu trabajo es:
1. Diagnosticar problemas técnicos
2. Ejecutar troubleshooting steps
3. Recolectar logs y información del sistema
4. Proponer solución o escalada""",
        "tools": ["system_logs", "database_query", "api_call"]
    },
    
    "billing_agent": {
        "instructions": """Eres especialista en facturación. Tu trabajo es:
1. Verificar estado de cuenta del cliente
2. Procesar reembolsos si aplica
3. Actualizar planes
4. Documentar transacciones""",
        "tools": ["billing_system", "payment_processor"]
    },
    
    "sentiment_agent": {
        "instructions": """Analiza el sentimiento del cliente. Tu trabajo es:
1. Evaluar nivel de frustración (1-10)
2. Detectar urgencia
3. Recomendar prioridad
4. Si urgencia > 8, ESCALATE a humano""",
        "tools": ["sentiment_analysis"]
    }
}

# Flujo orquestación
class SupportOrchestrator:
    
    async def process_ticket(self, ticket: dict):
        """
        Procesa un ticket de soporte usando multi-agent orchestration
        
        ticket = {
            "id": "TICKET-123",
            "customer": "John Doe",
            "message": "Mi app está lenta",
            "category": "technical"  # o "billing", "general"
        }
        """
        
        print(f"\n📩 Ticket {ticket['id']}: {ticket['message']}")
        
        # Paso 1: Análisis de sentimiento (primer filtro)
        sentiment_result = await self._call_agent(
            "sentiment_agent",
            f"Analiza sentimiento: {ticket['message']}"
        )
        
        urgency = self._extract_urgency(sentiment_result)
        print(f"🔴 Urgencia: {urgency}/10")
        
        # Paso 2: Si muy urgente, escalada directa
        if urgency > 8:
            return {
                "status": "escalated_to_human",
                "reason": "High urgency",
                "priority": "critical"
            }
        
        # Paso 3: Intenta FAQ primero (más rápido)
        faq_result = await self._call_agent(
            "faq_agent",
            ticket['message']
        )
        
        if "found solution" in faq_result.lower():
            print(f"✅ FAQ resolvió: {faq_result}")
            return {"status": "resolved", "method": "faq", "solution": faq_result}
        
        # Paso 4: Intenta technical troubleshooting
        if ticket.get("category") == "technical":
            tech_result = await self._call_agent(
                "technical_agent",
                ticket['message']
            )
            
            if "fixed" in tech_result.lower():
                print(f"✅ Technical resolvió: {tech_result}")
                return {"status": "resolved", "method": "technical", "solution": tech_result}
        
        # Paso 5: Si es billing, delega a billing agent
        if ticket.get("category") == "billing":
            billing_result = await self._call_agent(
                "billing_agent",
                ticket['message']
            )
            print(f"💳 Billing procesó: {billing_result}")
            return {"status": "processed", "method": "billing", "result": billing_result}
        
        # Paso 6: Si nada funcionó, escalada a humano
        print(f"⚠️ No resolto automáticamente. Escalando...")
        return {
            "status": "escalated_to_human",
            "reason": "No automatic resolution found",
            "priority": "high" if urgency > 5 else "normal"
        }
    
    async def _call_agent(self, agent_name: str, instruction: str):
        """Llama a un agente específico"""
        agent_config = AGENTS[agent_name]
        
        # Crear agente con Foundry (simplificado)
        # En realidad usarías la API de Foundry completa
        
        response = f"Agent {agent_name} procesó: {instruction[:50]}..."
        return response
    
    def _extract_urgency(self, sentiment_result: str) -> int:
        """Extrae nivel de urgencia (1-10) del resultado"""
        # En producción, usarías parsing más sofisticado
        return 5  # Placeholder


# Ejemplo de uso
async def main():
    orchestrator = SupportOrchestrator()
    
    tickets = [
        {
            "id": "TICKET-001",
            "customer": "Alice",
            "message": "¿Cómo cambio mi contraseña?",
            "category": "general"
        },
        {
            "id": "TICKET-002",
            "customer": "Bob",
            "message": "LA APP NO FUNCIONA DESDE ESTA MAÑANA!!!",
            "category": "technical"
        },
        {
            "id": "TICKET-003",
            "customer": "Carol",
            "message": "Quiero un reembolso de mi última compra",
            "category": "billing"
        }
    ]
    
    for ticket in tickets:
        result = await orchestrator.process_ticket(ticket)
        print(f"Resultado: {json.dumps(result, indent=2)}\n")
```

---

# PARTE 2: RETOS PRÁCTICOS DEL TALLER

## Reto 1: Diseña un Agente Multi-Rol (Dificultad: Media)

### Descripción

"Tu tarea: Diseña un agente para gestionar proyecto software.

Debe:
1. Recibir tareas de programadores
2. Decidir quién las realiza (dev senior vs junior)
3. Monitorear progreso
4. Reportar blockers a product manager
5. Recomendarescalas si es necesario"

### Restricciones Lean

- **Herramientas máximo:** 5
- **Complejidad máxima:** 2 niveles de decisión
- **Tiempo MVP:** 2 semanas

### Entregables

1. Arquitectura (diagrama)
2. Flujo de decisión (pseudocódigo)
3. Definición de herramientas (MCP tools)
4. Métricas de éxito

### Solución Guiada

```yaml
Agent: ProjectManager (Central Orchestrator)
├── Sub-agents:
│   ├── TaskAnalyzer
│   │   └── Herramientas: [jira_api, github_parser]
│   │   └── Decisión: ¿Tarea clara y estimable?
│   │
│   ├── ResourceAllocator
│   │   └── Herramientas: [team_db, skill_matrix]
│   │   └── Decisión: ¿Quién es mejor para esto?
│   │
│   └── BlockerDetector
│       └── Herramientas: [progress_tracker, slack]
│       └── Decisión: ¿Hay algún blocker?

Métricas:
- Tarea resuelta en <24h: 80% success rate
- Escaladas correctas: 95%
- False positives: <5%
```

---

## Reto 2: Prompt Engineering Avanzado (Dificultad: Alta)

### Descripción

"El problema: Un agente que genera reportes está pasando información incorrecta.

Tarea: Mejora el prompt para:
1. Reducir hallucinations
2. Aumentar precisión
3. Mantener velocidad
4. Agregar cadenas de pensamiento (chain-of-thought)"

### Prompt Original (Malo)

```
Generate a market report for Guanajuato manufacturing sector.
Include key metrics and trends.
```

### Prompt Mejorado (Bueno - Chain-of-Thought)

```
You are an expert analyst specializing in manufacturing economics.

Task: Generate a market report for Guanajuato manufacturing sector for 2026.

Instructions:
1. FIRST, think through these questions BEFORE generating the report:
   - What data sources are reliable? (Government statistics, industry reports)
   - What are known biases in this data?
   - What time period should I analyze?
   - What metrics are most relevant?

2. THEN, structure your analysis:
   - Executive Summary (2 paragraphs max)
   - Current State: [metrics with sources]
   - Trends: [3-5 trends with evidence]
   - Opportunities: [backed by data]
   - Risks: [honest assessment]

3. CONSTRAINTS:
   - Only cite sources you can identify
   - If uncertain, say "I don't have reliable data on..."
   - Use ranges (e.g., "8-12%") rather than false precision
   - Flag any assumptions

4. Output format:
   {
     "report": "...",
     "confidence_level": 0.0-1.0,
     "sources_used": [...],
     "assumptions": [...],
     "caveats": [...]
   }

Generate the report following this structure.
```

### Técnicas Aplicadas

1. **Chain-of-Thought:** Fuerza al modelo a pensar antes de responder
2. **Structured Output:** Define formato JSON exacto
3. **Constrainst:** Limita alucación
4. **Transparency:** Solicita confianza y supuestos
5. **Context:** Posiciona el rol del modelo

### Impacto Esperado

- Hallucinations: 80% → 20%
- Precisión factual: 65% → 88%
- Velocidad: igual (+0%)

---

## Reto 3: Implementa Observabilidad en Agente (Dificultad: Alta)

### Descripción

"Tu agente funciona. Pero nadie sabe CÓMO funciona o POR QUÉ falla.

Tarea: Agrega observabilidad completa (logs, traces, métricas, alertas)"

### Código Base (Sin Observabilidad)

```python
class CustomerSupportAgent:
    def handle_ticket(self, ticket_id, message):
        # Análisis
        sentiment = analyze_sentiment(message)
        
        # Decidir acción
        if sentiment < -0.5:
            action = "escalate"
        else:
            action = "resolve"
        
        # Ejecutar
        if action == "resolve":
            response = generate_response(message)
            return response
        else:
            return escalate_to_human(ticket_id)
```

### Código Mejorado (Con Observabilidad)

```python
import logging
import time
from dataclasses import dataclass
from datetime import datetime
import json

# Configurar logging estructurado
logger = logging.getLogger(__name__)

@dataclass
class TraceEvent:
    timestamp: datetime
    step: str
    input_data: dict
    output_data: dict
    duration_ms: float
    error: str = None
    metadata: dict = None

class ObservableCustomerSupportAgent:
    def __init__(self):
        self.trace_log = []
        self.metrics = {
            "tickets_processed": 0,
            "resolution_rate": 0,
            "escalation_rate": 0,
            "avg_response_time": 0
        }
    
    def handle_ticket(self, ticket_id: str, message: str):
        """Procesa ticket con observabilidad completa"""
        
        trace_events = []
        start_time = time.time()
        
        try:
            # ===== PASO 1: Análisis =====
            step_start = time.time()
            
            logger.info(f"ticket={ticket_id} step=analyze_sentiment")
            
            sentiment = analyze_sentiment(message)
            
            step_duration = (time.time() - step_start) * 1000
            trace_events.append(TraceEvent(
                timestamp=datetime.now(),
                step="analyze_sentiment",
                input_data={"message": message[:100]},  # Truncar para privacidad
                output_data={"sentiment_score": sentiment},
                duration_ms=step_duration
            ))
            
            logger.debug(f"ticket={ticket_id} sentiment_score={sentiment}")
            
            # ===== PASO 2: Decisión =====
            step_start = time.time()
            
            logger.info(f"ticket={ticket_id} step=decide_action")
            
            # Lógica de decisión con trazabilidad
            if sentiment < -0.7:
                action = "escalate_high_priority"
                reason = "Extreme negative sentiment"
            elif sentiment < -0.3:
                action = "escalate_normal"
                reason = "Negative sentiment detected"
            else:
                action = "resolve_auto"
                reason = "Neutral or positive sentiment"
            
            step_duration = (time.time() - step_start) * 1000
            trace_events.append(TraceEvent(
                timestamp=datetime.now(),
                step="decide_action",
                input_data={"sentiment": sentiment},
                output_data={"action": action, "reason": reason},
                duration_ms=step_duration,
                metadata={"decision_logic": "sentiment_threshold"}
            ))
            
            logger.info(f"ticket={ticket_id} action={action} reason={reason}")
            
            # ===== PASO 3: Ejecutar =====
            step_start = time.time()
            
            if action.startswith("escalate"):
                logger.warning(f"ticket={ticket_id} escalating_to_human")
                response = escalate_to_human(ticket_id, action == "escalate_high_priority")
                result_type = "escalated"
            else:
                logger.info(f"ticket={ticket_id} generating_response")
                response = generate_response(message)
                result_type = "auto_resolved"
            
            step_duration = (time.time() - step_start) * 1000
            trace_events.append(TraceEvent(
                timestamp=datetime.now(),
                step="execute_action",
                input_data={"action": action},
                output_data={"result_type": result_type},
                duration_ms=step_duration
            ))
            
            # ===== REGISTRAR SUCESO COMPLETO =====
            total_duration = (time.time() - start_time) * 1000
            
            event_log = {
                "ticket_id": ticket_id,
                "timestamp": datetime.now().isoformat(),
                "duration_ms": total_duration,
                "result": result_type,
                "trace_events": [
                    {
                        "step": e.step,
                        "input": e.input_data,
                        "output": e.output_data,
                        "duration_ms": e.duration_ms,
                        "metadata": e.metadata
                    }
                    for e in trace_events
                ],
                "metrics": {
                    "sentiment_score": sentiment,
                    "decision_confidence": 0.95
                }
            }
            
            # Log estructurado para agregación
            logger.info(f"ticket_processed", extra={
                "ticket_id": ticket_id,
                "event_log": json.dumps(event_log)
            })
            
            # Guardar en sistema de traces (p.ej., Jaeger, Datadog, LangSmith)
            self.trace_log.append(event_log)
            
            # Actualizar métricas
            self._update_metrics(result_type)
            
            return response
        
        except Exception as e:
            # Registrar error con contexto completo
            error_log = {
                "ticket_id": ticket_id,
                "error": str(e),
                "error_type": type(e).__name__,
                "duration_ms": (time.time() - start_time) * 1000,
                "trace_events": [
                    {
                        "step": e.step,
                        "input": e.input_data,
                        "duration_ms": e.duration_ms
                    }
                    for e in trace_events
                ]
            }
            
            logger.error(f"ticket_failed", extra={"error_log": json.dumps(error_log)})
            
            # Re-raise con contexto
            raise
    
    def _update_metrics(self, result_type: str):
        """Actualiza métricas de observabilidad"""
        self.metrics["tickets_processed"] += 1
        
        if result_type == "auto_resolved":
            self.metrics["resolution_rate"] = self.metrics.get("resolution_rate", 0) + 1
        elif result_type == "escalated":
            self.metrics["escalation_rate"] = self.metrics.get("escalation_rate", 0) + 1
    
    def get_observability_dashboard(self):
        """Retorna datos para dashboard"""
        return {
            "metrics": self.metrics,
            "recent_events": self.trace_log[-10:],  # Últimos 10 eventos
            "error_rate": self._calculate_error_rate(),
            "avg_latency_ms": self._calculate_avg_latency()
        }
    
    def _calculate_error_rate(self) -> float:
        """Calcula tasa de error"""
        # Implementación
        return 0.02
    
    def _calculate_avg_latency(self) -> float:
        """Calcula latencia promedio"""
        if not self.trace_log:
            return 0
        return sum(e["duration_ms"] for e in self.trace_log) / len(self.trace_log)
```

### Cómo Usar en Producción

```python
# 1. Exportar logs a sistema centralizado
import structlog

structlog.configure(
    processors=[
        structlog.processors.JSONRenderer()
    ],
    context_class=dict,
    logger_factory=structlog.PrintLoggerFactory(),
)

# 2. Conectar a Datadog/New Relic
from datadog import initialize, statsd

options = {'api_key': '...', 'app_key': '...'}
initialize(**options)

# 3. Monitorear en tiempo real
agent = ObservableCustomerSupportAgent()
for ticket in incoming_tickets:
    agent.handle_ticket(ticket['id'], ticket['message'])

# 4. Alertas automáticas
if agent.metrics["error_rate"] > 0.05:
    send_alert("High error rate detected!")
```

### Beneficios

- **Debugging:** Traza completa de cada decisión
- **Performance:** Identifica cuellos de botella
- **Confianza:** Empresas pueden ver CÓMO el agente decide
- **Regulación:** Compliance + auditoría automática

---

# PARTE 3: CASOS DE ESTUDIO REALES

## Caso 1: Startup que Escaló de MVP a $1M ARR en 3 Meses

### Contexto

Empresa: TaskFlow AI (invented name)  
Problema: Equipos pierden tiempo en tareas administrativas  
Solución: Agente IA que gestiona calendario, notas, tareas  
MVP: 2 semanas con Claude Code + Cursor + MCP  

### Cronograma

**Semana 1-2 (MVP)**
- Diseño: Especificación simple
- Herramientas: Google Calendar API, Notion API, Slack
- Build: 80 horas (1 dev + Claude Code)
- Deploy: Vercel + Azure Functions

**Semana 3-4 (Beta)**
- 50 usuarios beta
- Validación: 40% lo usan daily
- Iterate: Basado en feedback

**Semana 5-8 (Productización)**
- Agregar más tools
- Performance + security
- Pricing model

**Mes 2-3 (Crecimiento)**
- Product-market fit validado
- 500 usuarios pagando $50/mes
- $25k MRR

### Principios Aplicados

1. **First Principles:**
   - ¿Qué problema real? Pérdida de tiempo en admin
   - ¿Qué sistema? Integración de 3 apps dispersas
   - ¿80/20? 80% del valor en conectar calendario + notas

2. **Lean Startup:**
   - MVP con feature mínimo (solo calendar)
   - Measure: Uso diario, churn, NPS
   - Learn: Agregar features basado en datos

3. **DevOps:**
   - CI/CD automático (GitHub Actions)
   - Monitoreo desde día 1 (Sentry + DataDog)
   - Rollbacks en <5 min

### Resultados

- MVP en 2 semanas vs 3 meses (tradicional)
- $1M ARR en 3 meses
- 95% uptime
- Costo de desarrollo: $15k vs $500k (outsourcing)

---

# CONCLUSIÓN MATERIAL TÉCNICO

Este documento proporciona:

1. **Tutoriales prácticos** con código ejecutable
2. **Retos de dificultad progresiva**
3. **Casos de estudio reales**
4. **Patrones implementables**

Objetivo: Que participantes del taller tengan RECURSOS concretos para:
- Construir agentes reales
- Entender MCP profundamente
- Aplicar observabilidad
- Escalar de MVP a producción

**Próximo paso:** Usar este material como referencia durante demos del taller.

