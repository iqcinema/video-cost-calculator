export default function PriceBreakdown({ total, details }) {
  return (
    <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2>📋 Итоговая стоимость</h2>
      <p><strong>Сумма: {total.toLocaleString()} ₽</strong></p>
      <h4>Детализация:</h4>
      <ul>
        {details.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <button style={{ marginTop: '10px', padding: '10px 20px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Заказать консультацию
      </button>
    </div>
  );
}
