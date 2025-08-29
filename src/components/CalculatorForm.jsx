import { useState } from 'react';
import StepSelector from './StepSelector';

export default function CalculatorForm({ onUpdate }) {
  const [formData, setFormData] = useState({
    type: '',
    duration: 1,
    script: false,
    storyboard: false,
    actors: 0,
    drone: false,
    animation2d: 0,
    animation3d: 0,
    urgency: 1,
  });

  const types = {
    motion: { name: 'Моушн-дизайн', base: 150000 },
    animation2d: { name: '2D Анимация', base: 100000 },
    animation3d: { name: '3D Анимация', base: 300000 },
    promo: { name: 'Промо-видео', base: 120000 },
  };

  const calculate = () => {
    let total = 0;
    const breakdown = [];

    // Тип видео
    if (formData.type) {
      const type = types[formData.type];
      total += type.base;
      breakdown.push(`${type.name}: ${type.base.toLocaleString()} ₽`);
    }

    // Длительность
    total *= formData.duration;
    breakdown.push(`× Длительность (${formData.duration === 1 ? 'до 30 сек' : formData.duration === 1.2 ? '30–60 сек' : '1–2 мин'})`);

    // Допы
    if (formData.script) {
      total += 10000;
      breakdown.push('Сценарий: +10 000 ₽');
    }
    if (formData.storyboard) {
      total += 20000;
      breakdown.push('Раскадровка: +20 000 ₽');
    }
    if (formData.drone) {
      total += 25000;
      breakdown.push('Квадрокоптер: +25 000 ₽');
    }
    if (formData.animation2d > 0) {
      const cost = formData.animation2d * 2000;
      total += cost;
      breakdown.push(`2D анимация (${formData.animation2d} сек): +${cost.toLocaleString()} ₽`);
    }
    if (formData.animation3d > 0) {
      const cost = formData.animation3d * 5000;
      total += cost;
      breakdown.push(`3D анимация (${formData.animation3d} сек): +${cost.toLocaleString()} ₽`);
    }
    if (formData.actors > 0) {
      const cost = formData.actors * 10000;
      total += cost;
      breakdown.push(`Актёры (${formData.actors} чел): +${cost.toLocaleString()} ₽`);
    }

    // Срочность
    total *= formData.urgency;
    if (formData.urgency > 1) {
      breakdown.push(`× Срочность (${formData.urgency === 1.25 ? '7 дней' : '3 дня'})`);
    }

    onUpdate(Math.round(total), breakdown);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : (type === 'number' ? Number(value) : value)
    }));
    setTimeout(calculate, 100); // Задержка для обновления состояния
  };

  return (
    <div>
      <StepSelector
        label="Тип видео"
        name="type"
        options={[
          { value: 'motion', label: 'Моушн-дизайн' },
          { value: 'animation2d', label: '2D Анимация' },
          { value: 'animation3d', label: '3D Анимация' },
          { value: 'promo', label: 'Промо-видео' },
        ]}
        value={formData.type}
        onChange={handleChange}
      />

      <StepSelector
        label="Длительность"
        name="duration"
        type="radio"
        options={[
          { value: 1, label: 'До 30 секунд' },
          { value: 1.2, label: '30–60 секунд' },
          { value: 1.5, label: '1–2 минуты' },
        ]}
        value={formData.duration}
        onChange={handleChange}
      />

      <div>
        <h3>Дополнительно</h3>
        <label><input type="checkbox" name="script" checked={formData.script} onChange={handleChange} /> Сценарий (+10 000 ₽)</label><br/>
        <label><input type="checkbox" name="storyboard" checked={formData.storyboard} onChange={handleChange} /> Раскадровка (+20 000 ₽)</label><br/>
        <label><input type="checkbox" name="drone" checked={formData.drone} onChange={handleChange} /> Квадрокоптер (+25 000 ₽)</label><br/>
        <label>2D анимация (сек): <input type="number" name="animation2d" value={formData.animation2d} onChange={handleChange} min="0" max="60" /></label><br/>
        <label>3D анимация (сек): <input type="number" name="animation3d" value={formData.animation3d} onChange={handleChange} min="0" max="30" /></label><br/>
        <label>Актёры (чел): <input type="number" name="actors" value={formData.actors} onChange={handleChange} min="0" max="20" /></label>
      </div>

      <StepSelector
        label="Срочность"
        name="urgency"
        type="radio"
        options={[
          { value: 1, label: 'Стандартно (10–20 дней)' },
          { value: 1.25, label: 'Ускоренно (до 7 дней) +25%' },
          { value: 1.5, label: 'Срочно (до 3 дней) +50%' },
        ]}
        value={formData.urgency}
        onChange={handleChange}
      />
    </div>
  );
}
