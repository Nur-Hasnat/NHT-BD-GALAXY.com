// === Starfield Background Effect ===
const starContainer = document.getElementById('stars');
const numStars = 150;

for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;
  star.style.animationDelay = `${Math.random() * 2}s`;
  starContainer.appendChild(star);
}

// === Scientist Card Interactivity ===
function loadScientists(scientists) {
  const container = document.getElementById('scientist-list');
  scientists.forEach(scientist => {
    const card = document.createElement('div');
    card.className = 'card';

    const name = document.createElement('h3');
    name.textContent = scientist.name;

    const details = document.createElement('div');
    details.className = 'card-details';
    details.innerHTML = `
      <strong>Born:</strong> ${scientist.born}<br>
      <strong>Known For:</strong> ${scientist.knownFor}<br>
      <strong>Laws/Discoveries:</strong> ${scientist.laws}<br>
      <p>${scientist.bio}</p>
    `;

    card.appendChild(name);
    card.appendChild(details);
    card.addEventListener('click', () => {
      details.style.display = details.style.display === 'block' ? 'none' : 'block';
    });

    container.appendChild(card);
  });
}
