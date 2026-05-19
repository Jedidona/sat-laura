import Hero from './components/Hero';
import SatComparison from './components/SatComparison';
import AmericanDream from './components/AmericanDream';
import Diferencial from './components/Diferencial';
import ConhecaLaura from './components/ConhecaLaura';
import Proposta from './components/Proposta';

function App() {
  return (
    <div className="font-sans antialiased">
      <Hero />
      <SatComparison />
      <AmericanDream />
      <Diferencial />
      <ConhecaLaura />
      <Proposta />
    </div>
  );
}

export default App;