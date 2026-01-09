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
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
