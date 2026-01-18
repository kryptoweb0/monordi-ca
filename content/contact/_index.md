<div id="contact-container" style="padding: 2rem 1rem; border: 2px dashed #888; border-radius: 12px; text-align: center; margin-top: 2rem;">
  <p style="margin-bottom: 1.5rem;">Pour protéger ma confidentialité contre les robots, veuillez cliquer ci-dessous pour afficher mes coordonnées.</p>
  
  <button id="reveal-btn" onclick="revealContact()" style="padding: 12px 24px; cursor: pointer; background-color: var(--primary-color, #2563eb); color: white; border: none; border-radius: 8px; font-weight: bold; font-size: 1.1rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    Afficher le téléphone et le courriel
  </button>

  <div id="contact-details" style="display: none; margin-top: 1.5rem;">
    <p style="font-size: 1.3rem; margin-bottom: 1rem;">
        <strong>📞 Téléphone :</strong> <br>
        <a id="phone-link" href="#" style="text-decoration: underline; font-weight: bold; color: inherit;"></a>
    </p>
    <p style="font-size: 1.3rem;">
        <strong>✉️ Courriel :</strong> <br>
        <a id="email-link" href="#" style="text-decoration: underline; font-weight: bold; color: inherit;"></a>
    </p>
    
<hr style="margin: 2rem auto; width: 50%; border: 0; border-top: 1px solid #ccc;">
    
<p style="font-style: italic; font-size: 0.95rem; line-height: 1.4;">
<strong>Note importante :</strong> Les services sont offerts exclusivement à distance, à votre domicile ou en entreprise. <br>
<strong>Aucun service ni accueil de clientèle n'est possible à mon bureau administratif (résidence privée).</strong>
</p>
</div>
</div>

<script>
function revealContact() {
  var p1 = "581"; var p2 = "681"; var p3 = "1862";
  var user = "nicolas"; var domain = "monordi.ca";
  
  var fullPhone = p1 + "-" + p2 + "-" + p3;
  var fullEmail = user + "@" + domain;

  var phoneL = document.getElementById("phone-link");
  var emailL = document.getElementById("email-link");

  phoneL.innerText = fullPhone;
  phoneL.href = "tel:+" + p1 + p2 + p3;
  
  emailL.innerText = fullEmail;
  emailL.href = "mailto:" + fullEmail;

  document.getElementById("contact-details").style.display = "block";
  document.getElementById("reveal-btn").style.display = "none";
}
</script>