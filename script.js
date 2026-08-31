const features = [
  {
    icon: '⚡',
    title: 'Fast execution',
    text: 'We remove friction and ship polished experiences that are clear, quick, and effective.'
  },
  {
    icon: '🎯',
    title: 'Strategy-first',
    text: 'Every design decision is tied to your goals, customer journey, and measurable outcomes.'
  },
  {
    icon: '📈',
    title: 'Growth ready',
    text: 'We build with conversion, retention, and scalability in mind from the very first concept.'
  }
];

const featureList = document.getElementById('feature-list');
if (featureList) {
  featureList.innerHTML = features
    .map(
      (feature) => `
        <article class="feature-card">
          <div class="feature-icon" aria-hidden="true">${feature.icon}</div>
          <h3>${feature.title}</h3>
          <p>${feature.text}</p>
        </article>
      `
    )
    .join('');
}

const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}
