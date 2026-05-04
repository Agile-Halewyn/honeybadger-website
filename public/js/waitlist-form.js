(function () {
  const form = document.getElementById('waitlist-form');
  const panel = document.getElementById('waitlist-form-panel');
  const initNotice = document.getElementById('waitlist-init-notice');
  const submittedAtInput = document.getElementById('submitted-at');
  const botField = document.getElementById('bot-field');
  const statusEl = document.getElementById('waitlist-form-status');
  const submitBtn = document.getElementById('waitlist-submit');
  const waitlistApiUrl = form?.dataset?.waitlistApi?.trim();
  const contactEmail = panel?.dataset?.contactEmail?.trim() || '';

  function showInitFailure(message) {
    if (!initNotice) return;
    initNotice.replaceChildren();
    initNotice.appendChild(document.createTextNode(message + ' '));
    if (contactEmail) {
      const link = document.createElement('a');
      link.href = 'mailto:' + contactEmail;
      link.textContent = contactEmail;
      initNotice.appendChild(link);
      initNotice.appendChild(document.createTextNode('.'));
    }
  }

  if (!form || !submittedAtInput || !statusEl || !waitlistApiUrl) {
    showInitFailure(
      'Het inschrijfformulier kan nu niet worden getoond. Controleer je internetverbinding of neem contact op via',
    );
    return;
  }

  if (initNotice) {
    initNotice.hidden = true;
  }
  form.removeAttribute('hidden');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    statusEl.textContent = '';

    if (typeof form.reportValidity === 'function' && !form.reportValidity()) {
      return;
    }

    if (botField && botField.value) {
      statusEl.textContent = 'Er ging iets mis. Probeer het opnieuw.';
      return;
    }

    submittedAtInput.value = new Date().toISOString();

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      experience: String(formData.get('experience') || '').trim(),
      submitted_at: String(formData.get('submitted_at') || '').trim(),
    };

    if (!payload.name || !payload.email) {
      statusEl.textContent = 'Vul je naam en e-mailadres in.';
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
    }

    statusEl.textContent = 'Bezig met verzenden…';

    try {
      const response = await fetch(waitlistApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        window.location.href = '/bedankt/';
        return;
      }

      const responseData = await response.json().catch(() => ({}));
      const serverMsg =
        typeof responseData.message === 'string' ? responseData.message : '';

      if (response.status === 409) {
        statusEl.textContent = serverMsg || 'Dit e-mailadres is al aangemeld.';
      } else if (response.status === 429) {
        statusEl.textContent =
          serverMsg || 'Te veel aanmeldingen. Probeer het later opnieuw.';
      } else {
        statusEl.textContent =
          serverMsg || 'Aanmelden mislukt. Probeer het later opnieuw.';
      }
    } catch (_error) {
      statusEl.textContent =
        'Er is een netwerkfout opgetreden. Probeer het later opnieuw.';
    }

    if (submitBtn) {
      submitBtn.disabled = false;
    }
  });
})();
