const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  
  const gender = getSelectedValue('gender');
  const age = getInputNumberValue('age');
  const weight = getInputNumberValue('weight');
  const height = getInputNumberValue('height');
  const activityLevel = getSelectedValue('activity-level');
  const result = document.querySelector('.result-content');

  //tmb = taxa metabólica basal 
  const tmb = Math.round(
    gender === 'male'
      ? (66 + (13.7 * weight) + (5 * height) - (6.8 * age))
      : (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))
  );

  // manutenção do peso
  // utilizando math.round para arredondar o valor float para inteiro
  const maintenance = Math.round(tmb * Number(activityLevel));

  // para perder peso
  const loseWeight = maintenance - 450;

  // para ganhar peso
  const gainWeight = maintenance + 450;

  const layout = `
    <ul>
      <li>Seu <span>metabolismo basal</span> é de <strong>${tmb}</strong> calorias.</li>
      <li>Para <span>manter</span> o seu peso você precisa consumir em média <strong>${maintenance}</strong> calorias.</li>
      <li>Para <span>perder</span> peso você precisa consumir em média <strong>${loseWeight}</strong> calorias.</li>
      <li>Para <span>ganhar</span> peso você precisa consumir em média <strong>${gainWeight}</strong> calorias.</li>
    </ul>
  `;

  result.innerHTML = layout;

};

function getInputNumberValue(id) {
  return Number(document.getElementById(id).value);
};

function getSelectedValue(id) {
  const select = document.getElementById(id);
  return select.options[select.selectedIndex].value;
}