// Copy the email address. Falls back to selecting the text if the clipboard is unavailable.
document.querySelectorAll('[data-copy]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var target = document.getElementById(btn.getAttribute('data-copy'));
    if (!target) return;
    var text = target.textContent.trim();
    var done = function () {
      var old = btn.textContent;
      btn.textContent = 'Copied';
      setTimeout(function () { btn.textContent = old; }, 1800);
    };
    var select = function () {
      var range = document.createRange();
      range.selectNodeContents(target);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, select);
    } else {
      select();
    }
  });
});

// Print the resume page.
document.querySelectorAll('[data-print]').forEach(function (btn) {
  btn.addEventListener('click', function () { window.print(); });
});
