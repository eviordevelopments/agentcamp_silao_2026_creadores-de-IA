import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Hero } from './pages/Hero';
import { Phase0 } from './pages/Phases/Phase0';
import { Phase1 } from './pages/Phases/Phase1';
import { Phase2 } from './pages/Phases/Phase2';
import { Phase3 } from './pages/Phases/Phase3';
import { Phase4 } from './pages/Phases/Phase4';
import { Phase5 } from './pages/Phases/Phase5';
import { Phase6 } from './pages/Phases/Phase6';
import { TechnicalDeepDive } from './pages/TechnicalDeepDive';
import { AIFundamentals } from './pages/Articles/AIFundamentals';
import { MachineLearningArticle } from './pages/Articles/MachineLearning';
import { AgenticIAArticle } from './pages/Articles/AgenticIA';
import { PromptsAntigravity } from './pages/Resources/PromptsAntigravity';
import { PromptsMaestros } from './pages/Resources/PromptsMaestros';
import { RutaAgentCamp } from './pages/Resources/RutaAgentCamp';
import { Reto30Dias } from './pages/Resources/Reto30Dias';
import { GuiaImplementacion } from './pages/Resources/GuiaImplementacion';
import { IndiceMaestro } from './pages/Resources/IndiceMaestro';
import './index.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/fase-0" element={<Phase0 />} />
          <Route path="/fase-1" element={<Phase1 />} />
          <Route path="/fase-2" element={<Phase2 />} />
          <Route path="/fase-3" element={<Phase3 />} />
          <Route path="/fase-4" element={<Phase4 />} />
          <Route path="/fase-5" element={<Phase5 />} />
          <Route path="/fase-6" element={<Phase6 />} />
          <Route path="/technical" element={<TechnicalDeepDive />} />
          <Route path="/articles/fundamentos-ia" element={<AIFundamentals />} />
          <Route path="/articles/machine-learning" element={<MachineLearningArticle />} />
          <Route path="/articles/ia-agentica" element={<AgenticIAArticle />} />

          <Route path="/resources/indice-maestro" element={<IndiceMaestro />} />
          <Route path="/resources/prompts-antigravity" element={<PromptsAntigravity />} />
          <Route path="/resources/prompts-maestros" element={<PromptsMaestros />} />
          <Route path="/resources/ruta-agentcamp" element={<RutaAgentCamp />} />
          <Route path="/resources/reto-30-dias" element={<Reto30Dias />} />
          <Route path="/resources/guia-implementacion" element={<GuiaImplementacion />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
