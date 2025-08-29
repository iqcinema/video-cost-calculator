import { useState } from 'react';
import CalculatorForm from './components/CalculatorForm';
import PriceBreakdown from './components/PriceBreakdown';

export default function App() {
  const [total, setTotal] = useState(0);
  const [details, setDetails] = useState([]);

  const updateCalculation = (newTotal, newDetails) => {
    setTotal(newTotal);
    setDetails(newDetails);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>🎥 Калькулятор стоимости видеоролика</h1>
      <p>Оцените стоимость создания видео за несколько шагов</p>

      <CalculatorForm onUpdate={updateCalculation} />
      
      {total > 0 && <PriceBreakdown total={total} details={details} />}
    </div>
  );
}
