export default function StepSelector({ label, options, name, type = 'select', value, onChange }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>{label}</h3>
      {type === 'select' ? (
        <select name={name} value={value} onChange={onChange} style={{ padding: '8px', width: '100%' }}>
          <option value="">Выберите...</option>
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      ) : (
        <div>
          {options.map(opt => (
            <label key={opt.value} style={{ display: 'block', margin: '5px 0' }}>
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={Number(value) === Number(opt.value)}
                onChange={onChange}
              /> {opt.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
