// MonOrdi.ca Interactive Redesign Scripts

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Privacy Policy Modal
  const modal = document.getElementById('privacy-modal');
  const openBtn = document.getElementById('open-privacy');
  const closeBtn = document.getElementById('close-privacy');

  if (openBtn && modal) {
    openBtn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.display = 'flex';
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

// Anti-bot Contact Reveal Script
function revealContact() {
  var p1 = "873";
  var p2 = "477";
  var p3 = "0486"; // 0486 en hommage au processeur Intel 486 !
  var user = "nicolas";
  var domain = "monordi.ca";

  var formattedPhone = p1 + " " + p2 + "-" + p3;
  var rawPhone = "+1" + p1 + p2 + p3;
  var fullEmail = user + "@" + domain;

  var phoneEl = document.getElementById("phone-link");
  var emailEl = document.getElementById("email-link");
  var callBtn = document.getElementById("phone-call-btn");

  if (phoneEl) {
    phoneEl.innerText = formattedPhone;
    phoneEl.href = "tel:" + rawPhone;
  }
  if (emailEl) {
    emailEl.innerText = fullEmail;
    emailEl.href = "mailto:" + fullEmail;
  }
  if (callBtn) {
    callBtn.href = "tel:" + rawPhone;
  }

  var details = document.getElementById("contact-details");
  var btn = document.getElementById("reveal-btn");

  if (details) details.style.display = "block";
  if (btn) btn.style.display = "none";
}
