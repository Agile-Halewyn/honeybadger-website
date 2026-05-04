(function () {
  function bindWaitlistSubmitStamp() {
    var form = document.querySelector('form[name="waitlist"]');
    var el = document.getElementById('submitted_at');
    if (!form || !el) {
      return;
    }
    form.addEventListener('submit', function () {
      el.value = new Date().toISOString();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindWaitlistSubmitStamp);
  } else {
    bindWaitlistSubmitStamp();
  }
})();
