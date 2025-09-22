// ==============================
// HERO BUTTON INTERACTION
// ==============================
const ctaButton = document.getElementById('cta-button');

ctaButton.addEventListener('click', () => {
    // Rola a página até a seção de contato
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
});

// ==============================
// CONTACT FORM INTERACTION
// ==============================
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que o formulário realmente envie

    // Pega valores (opcional para futura conexão com back-end)
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;

    // Simula envio
    alert(Thank you, ${name}! Your message has been received.);

    // Limpa o formulário
    contactForm.reset();
});
