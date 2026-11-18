/* Video facades, hover/focus previews and copy button. No scroll or wheel listeners, no observers. */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var medias = document.querySelectorAll('.media');
  Array.prototype.forEach.call(medias, function (m) {
    var b = m.querySelector('.facade');
    if (!b) { return; }
    var v = m.querySelector('.facade video');

    function start() {
      if (!v || reduce || !fine) { return; }
      try {
        var p = v.play();
        if (p && p.then) {
          p.then(function () { m.classList.add('is-previewing'); }, function () {});
        }
      } catch (e) {}
    }
    function stop() {
      if (!v) { return; }
      m.classList.remove('is-previewing');
      try { v.pause(); v.currentTime = 0; } catch (e) {}
    }
    if (v) {
      v.addEventListener('error', function () { m.classList.remove('is-previewing'); });
      m.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') { start(); } });
      m.addEventListener('pointerleave', stop);
      m.addEventListener('focusin', start);
      m.addEventListener('focusout', stop);
    }

    b.addEventListener('click', function () {
      var title = b.getAttribute('data-title') || 'Video';
      var f = document.createElement('video');
      f.controls = true;
      f.autoplay = true;
      f.playsInline = true;
      f.setAttribute('playsinline', '');
      f.preload = 'metadata';
      var shown = b.querySelector('img');
      f.setAttribute('poster', (shown && shown.currentSrc) || b.getAttribute('data-poster') || '');
      f.setAttribute('aria-label', title);
      var src = document.createElement('source');
      src.src = b.getAttribute('data-src');
      src.type = 'video/mp4';
      f.appendChild(src);
      stop();
      v = null;
      b.replaceWith(f);
      f.focus();
    });
  });

  var copy = document.querySelector('.copy');
  var status = document.getElementById('copy-status');
  if (copy && status) {
    copy.hidden = false;
    var timer;
    var say = function (msg) {
      status.textContent = msg;
      clearTimeout(timer);
      timer = setTimeout(function () { status.textContent = ''; }, 3000);
    };
    var fallback = function (text) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'absolute';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(ta);
      copy.focus();
      return ok;
    };
    copy.addEventListener('click', function () {
      var text = copy.getAttribute('data-copy');
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { say('Copied'); }, function () {
          say(fallback(text) ? 'Copied' : 'Copy failed. Select the text instead.');
        });
      } else {
        say(fallback(text) ? 'Copied' : 'Copy failed. Select the text instead.');
      }
    });
  }
})();
