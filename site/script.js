/* Muted looping videos with a "Play with sound" control, and the copy button. No scroll or wheel listeners, no observers. */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var boxes = [];

  function playQuiet(v, st) {
    try {
      var p = v.play();
      if (p && p.catch) { p.catch(function () { st.m.classList.add('ctl-on'); sync(st); }); }
    } catch (e) { st.m.classList.add('ctl-on'); }
  }
  function sync(st) {
    if (st.sound) { return; }
    st.t.textContent = st.v.paused ? 'Play' : 'Pause';
  }
  function resumeOthers(except) {
    boxes.forEach(function (o) {
      if (o !== except && !o.userPaused && !reduce) { playQuiet(o.v, o); }
    });
  }
  function toLoop(st, resume) {
    var v = st.v;
    st.sound = false;
    st.m.classList.remove('is-sound');
    v.controls = false;
    if (st.btn) { st.btn(); }
    v.muted = true;
    v.loop = true;
    v.src = st.loopSrc;
    if (resume && !st.userPaused && !reduce) { playQuiet(v, st); } else { try { v.pause(); } catch (e) {} }
    sync(st);
  }

  Array.prototype.forEach.call(document.querySelectorAll('.media'), function (m) {
    var v = m.querySelector('video');
    var bar = m.querySelector('.vctl');
    if (!v || !bar) { return; }
    var st = { m: m, v: v, t: bar.querySelector('.v-pause-t'), userPaused: false, sound: false,
      loopSrc: v.querySelector('source').getAttribute('src'),
      fullSrc: v.querySelector('source').getAttribute('src').replace('-loop', '') };
    boxes.push(st);
    bar.hidden = false;
    var label = 'Play with sound: ' + bar.querySelector('.v-sound .sr').textContent.replace(/^:\s*/, '');
    var oldLabel = v.getAttribute('aria-label');
    function btn() {
      v.setAttribute('role', 'button');
      v.setAttribute('tabindex', '0');
      v.setAttribute('aria-label', label);
    }
    function unbtn() {
      v.removeAttribute('role');
      v.removeAttribute('tabindex');
      if (oldLabel) { v.setAttribute('aria-label', oldLabel); }
    }
    st.btn = btn;
    btn();

    if (reduce) {
      v.removeAttribute('autoplay');
      try { v.pause(); v.load(); } catch (e) {}
      st.userPaused = true;
      m.classList.add('ctl-on');
    }
    sync(st);
    v.addEventListener('play', function () { sync(st); });
    v.addEventListener('pause', function () {
      if (st.sound) {
        if (!v.ended) { resumeOthers(st); }
      } else { sync(st); }
    });
    v.addEventListener('ended', function () {
      if (st.sound) { toLoop(st, true); resumeOthers(st); }
    });

    bar.querySelector('.v-pause').addEventListener('click', function () {
      if (v.paused) { st.userPaused = false; playQuiet(v, st); } else { st.userPaused = true; v.pause(); }
    });
    function startSound() {
      boxes.forEach(function (o) {
        if (o === st) { return; }
        if (o.sound) { toLoop(o, false); } else { o.v.pause(); }
      });
      st.userPaused = false;
      st.sound = true;
      m.classList.add('is-sound');
      unbtn();
      v.muted = false;
      v.loop = false;
      v.controls = true;
      v.src = st.fullSrc;
      try { v.currentTime = 0; } catch (e) {}
      try {
        var p = v.play();
        if (p && p.catch) { p.catch(function () {}); }
      } catch (e) {}
      v.focus();
    }
    bar.querySelector('.v-sound').addEventListener('click', startSound);
    v.addEventListener('click', function (e) {
      if (st.sound) { return; }
      e.preventDefault();
      startSound();
    });
    v.addEventListener('keydown', function (e) {
      if (st.sound || e.target !== v) { return; }
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') { e.preventDefault(); startSound(); }
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
