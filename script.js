const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('enquiry-form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  if (!name || !email) return;
  const subject = encodeURIComponent(`Linkwright pilot enquiry — ${name}`);
  const body = encodeURIComponent(
`Hello Linkwright,

I would like to enquire about the Founding Researcher Pilot.

Name: ${name}
Institution: ${data.get('institution') || 'Not provided'}
Email: ${email}
Research area: ${data.get('area') || 'Not provided'}

Research workflow / question:
${data.get('message') || 'I would like to request a demonstration.'}

Please share the current pilot scope and available features.

Regards,
${name}`
  );
  // Replace this placeholder with an email address controlled by the Linkwright owner.
  const recipient = 'singhadd25@gmail.com';
  if (recipient.includes('REPLACE-WITH-YOUR-EMAIL')) {
    document.getElementById('form-status').textContent =
      'Website preview mode: replace the placeholder email in script.js with your real contact email before publishing. No information has been sent or stored.';
    return;
  }
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});
