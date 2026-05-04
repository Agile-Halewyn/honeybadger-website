(function () {
  function setSubmittedAt() {
    var el = document.getElementById('submitted_at');
    if (el) {
      el.value = new Date().toISOString();
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setSubmittedAt);
  } else {
    setSubmittedAt();
  }
})();
