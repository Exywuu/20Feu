/* ============================================================
   LE 20e FEU — logique du prototype (concept indépendant fictif)
   Vanilla JS, aucune dépendance, aucune donnée envoyée.
   ============================================================ */
"use strict";

(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ---------------------------------------------------------
     1. BRAISES — canvas de particules du héro
     --------------------------------------------------------- */
  const canvas = document.getElementById("embersBg");
  let particles = [];
  let ctx = null;
  let rafId = null;

  function initEmbers() {
    if (!canvas) return;
    if (reduceMotion.matches) return; // alternative accessible : fond statique CSS
    ctx = canvas.getContext("2d");
    resize();
    window.addEventListener("resize", resize);
    const COUNT = window.innerWidth < 760 ? 26 : 55;
    particles = Array.from({ length: COUNT }, () => spawn(true));
    if (rafId) cancelAnimationFrame(rafId);
    loop();
  }

  function spawn(anywhere) {
    return {
      x: Math.random() * canvas.width,
      y: anywhere ? Math.random() * canvas.height : canvas.height + 10,
      r: 0.8 + Math.random() * 2.4,
      vy: 0.25 + Math.random() * 0.9,
      vx: (Math.random() - 0.5) * 0.35,
      a: 0.25 + Math.random() * 0.55,
      hue: 18 + Math.random() * 22,
    };
  }

  function resize() {
    const hero = canvas.parentElement;
    canvas.width = hero.clientWidth;
    canvas.height = hero.clientHeight;
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.y -= p.vy;
      p.x += p.vx + Math.sin((p.y + i * 40) / 90) * 0.18;
      if (p.y < -12 || p.x < -12 || p.x > canvas.width + 12) {
        particles[i] = spawn(false);
        continue;
      }
      ctx.beginPath();
      ctx.fillStyle = `hsla(${p.hue}, 100%, 58%, ${p.a})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    rafId = requestAnimationFrame(loop);
  }

  // Si l'utilisateur active « réduire les animations » en cours de route :
  reduceMotion.addEventListener("change", () => {
    if (reduceMotion.matches && rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
      ctx && ctx.clearRect(0, 0, canvas.width, canvas.height);
    } else if (!reduceMotion.matches && !rafId) {
      initEmbers();
    }
  });

  /* ---------------------------------------------------------
     2. RÉVÉLATIONS au défilement
     --------------------------------------------------------- */
  const revealed = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion.matches) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealed.forEach((el) => io.observe(el));
  } else {
    revealed.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------------------------------------------------------
     3. LES SIX FEUX — programmation inventée par scène
     --------------------------------------------------------- */
  const FICTION_LINEUP = {
    ms1: {
      name: "Main Stage 1",
      intro: "Le plus grand feu du Val s'embrase d'un seul coup. Les tanas lâchent les drones : la nuit d'éveil commence face à la mer de visages.",
      sets: [
        ["20h15", "Orage Sec", "post-metal orageux — groupe inventé"],
        ["22h40", "Chœur des Cendres", "massif choral de douze voix — groupe inventé"],
      ],
    },
    ms2: {
      name: "Main Stage 2",
      intro: "Sa flamme jumelle répond à l'autre rive du Val, et les deux rives se renvoient les échos.",
      sets: [
        ["21h00", "Les Gnous d'Acier", "heavy absurde et dansant — groupe inventé"],
        ["23h15", "Volcan Immobile", "riffs tectoniques, tempo de glacier — groupe inventé"],
      ],
    },
    altar: {
      name: "Altar",
      intro: "L'autel du black et du death s'allume en dernier, comme si la nuit attendait que le froid soit bien installé.",
      sets: [
        ["20h30", "Messe du Brouillard", "black ritualiste — groupe inventé"],
        ["22h00", "Vêpres Noires", "death mélodique — groupe inventé"],
      ],
    },
    temple: {
      name: "Temple",
      intro: "Sous la toile du Temple, le feu est plus doux : on y veille les textes et les longues respirations.",
      sets: [
        ["21h10", "Baron Vendredi", "prog occulte — groupe inventé"],
        ["00h00", "Litanie Douce", "post-rock cendreux — groupe inventé"],
      ],
    },
    warzone: {
      name: "Warzone",
      intro: "Le feu de la Warzone crépite fort et vite : punk, hardcore, et la sueur qui commence tôt.",
      sets: [
        ["20h45", "Klaxon Öctopus", "hardcore chaotique — groupe inventé"],
        ["22h30", "La Horde du Marais", "crust festif — groupe inventé"],
      ],
    },
    valley: {
      name: "The Valley",
      intro: "Tout au fond, The Valley fume lentement. Le doom n'a pas de heure : il a seulement des éternités plus courtes.",
      sets: [
        ["21h00", "Fumée Douce", "stoner hypnotique — groupe inventé"],
        ["23h00", "Tractopelle Céleste", "doom psychédélique burlesque — groupe inventé"],
      ],
    },
  };

  const fireDetail = document.getElementById("fireDetail");
  document.querySelectorAll(".fire-card").forEach((card) => {
    card.addEventListener("click", () => {
      const key = card.dataset.fire;
      const data = FICTION_LINEUP[key];
      if (!data || !fireDetail) return;
      const wasLit = card.classList.contains("is-lit");
      card.classList.toggle("is-lit", !wasLit);
      card.setAttribute("aria-expanded", String(!wasLit));
      const hint = card.querySelector(".fire-hint");
      if (hint) hint.textContent = wasLit ? "Allumer" : "Feu allumé";
      if (wasLit) return; // re-clic : on garde le détail courant

      const rows = data.sets
        .map(([t, g, d]) => `<p class="set"><time>${t}</time><span><strong>${g}</strong> — ${d}</span></p>`)
        .join("");
      fireDetail.innerHTML =
        `<h4>${data.name} — la veillée imaginée <span class="badge badge-fiction">Fictif</span></h4>` +
        `<p>${data.intro}</p>${rows}`;
      playSpark();
    });
  });

  /* ---------------------------------------------------------
     4. LES DIX-NEUF MILLÉSIMES (2006 → 2026)
     --------------------------------------------------------- */
  const MILLESIMES = [
    { year: 2006, tag: "réel", title: "Le premier feu", text: "Le festival naît à Clisson. « Home of Hellbangers Since 2006 » : la date est celle du site officiel." },
    { year: 2007, tag: "fictif", title: "Les racines", text: "Inventé : on dit que les peupliers du Val se penchèrent pour écouter." },
    { year: 2008, tag: "fictif", title: "La vague", text: "Inventé : la première vague de crânes parcourt la vallée de rive en rive." },
    { year: 2009, tag: "fictif", title: "Les veilleurs", text: "Inventé : certains restèrent après la fin, à garder les braises tièdes." },
    { year: 2010, tag: "fictif", title: "L'écho", text: "Inventé : l'écho du dernier riff revint trois jours plus tard." },
    { year: 2011, tag: "fictif", title: "La pluie", text: "Inventé : il plut de la boue et de la joie en proportions égales." },
    { year: 2012, tag: "fictif", title: "Le pont", text: "Inventé : on raconte qu'un pont de vestes se forma au-dessus de la foule." },
    { year: 2013, tag: "fictif", title: "Le chœur", text: "Inventé : dix mille voix fredonnèrent le même refrain sans le connaître." },
    { year: 2014, tag: "fictif", title: "La meute", text: "Inventé : les camps ne dormirent pas, ils chantèrent." },
    { year: 2015, tag: "fictif", title: "Le geyser", text: "Inventé : un orage s'arrêta net, courtois, pendant le solo." },
    { year: 2016, tag: "fictif", title: "L'agrandissement", text: "Inventé : le Val parut deux fois plus vaste, et pourtant plein." },
    { year: 2017, tag: "fictif", title: "Les lanternes", text: "Inventé : mille lanternes de camping s'allumèrent à l'unisson à minuit." },
    { year: 2018, tag: "fictif", title: "Le silence", text: "Inventé : un silence d'une minute entière, choisi par la foule, avant l'explosion." },
    { year: 2019, tag: "fictif", title: "Le grand feu", text: "Inventé : les feux des trois scènes se répondirent comme un seul instrument." },
    { year: 2020, tag: "réel", title: "Le feu veille", text: "Réel : les éditions 2020 et 2021 n'ont pas eu lieu (pandémie). Ici, on dit que le feu a veillé." },
    { year: 2021, tag: "réel", title: "Le feu veille encore", text: "Réel : deuxième été sans édition. La braise, elle, ne s'est jamais éteinte." },
    { year: 2022, tag: "fictif", title: "Le retour", text: "Inventé : le retour fut si bruyant que les oiseaux décalèrent leur migration." },
    { year: 2023, tag: "fictif", title: "Les enfants du feu", text: "Inventé : une génération née après 2006 découvrit le Val à son tour." },
    { year: 2026, tag: "réel", title: "La dix-neuvième édition", text: "Réel : l'aftermovie du site officiel évoque une « 19ème édition » pour 2026." },
  ];

  const emberList = document.getElementById("emberList");
  const emberDetail = document.getElementById("emberDetail");

  if (emberList) {
    MILLESIMES.forEach((m, i) => {
      const li = document.createElement("li");
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = m.year;
      b.setAttribute("aria-pressed", "false");
      b.setAttribute("aria-label", `Braise ${m.year} — récit ${m.tag === "réel" ? "réel" : "fictif"}`);
      b.addEventListener("click", () => {
        emberList.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", "false"));
        b.setAttribute("aria-pressed", "true");
        emberDetail.innerHTML =
          `<h4>${m.year} — ${m.title} <span class="badge ${m.tag === "réel" ? "badge-real" : "badge-fiction"}">${m.tag}</span></h4>` +
          `<p>${m.text}</p>`;
        playSpark();
      });
      li.appendChild(b);
      emberList.appendChild(li);
    });
  }

  /* ---------------------------------------------------------
     5. LE CŒUR DE BRAISE — maintenir pour nourrir la flamme
     --------------------------------------------------------- */
  const feedBtn = document.getElementById("feedFlame");
  const flameCore = document.getElementById("flameCore");
  const emberCountEl = document.getElementById("emberCount");
  const STORE_KEY = "vingtieme-feu-braises";

  let count = 0;
  try {
    const base = 1120 + Math.floor(Math.random() * 260); // base simulée, locale
    count = parseInt(localStorage.getItem(STORE_KEY) || "", 10);
    if (Number.isNaN(count)) count = base;
  } catch (e) {
    count = 1200;
  }
  const renderCount = () => { if (emberCountEl) emberCountEl.textContent = count.toLocaleString("fr-FR"); };
  renderCount();

  function feed() {
    count += 1;
    renderCount();
    try { localStorage.setItem(STORE_KEY, String(count)); } catch (e) { /* stockage indisponible : tant mieux, rien n'est conservé */ }
    if (!flameCore) return;
    flameCore.classList.toggle("is-big", count % 40 < 20);
    flameCore.classList.toggle("is-huge", count % 120 > 90);
  }

  if (feedBtn) {
    let timer = null;
    const start = (e) => {
      if (timer) return;
      feed();
      timer = setInterval(feed, 130);
      playRumble(true);
      e.preventDefault();
    };
    const stop = () => {
      if (timer) { clearInterval(timer); timer = null; playRumble(false); }
    };
    feedBtn.addEventListener("pointerdown", start);
    feedBtn.addEventListener("pointerup", stop);
    feedBtn.addEventListener("pointerleave", stop);
    feedBtn.addEventListener("pointercancel", stop);
    feedBtn.addEventListener("keydown", (e) => {
      if ((e.key === " " || e.key === "Enter") && !e.repeat) start(e);
    });
    feedBtn.addEventListener("keyup", (e) => {
      if (e.key === " " || e.key === "Enter") stop();
    });
    feedBtn.addEventListener("blur", stop);
    window.addEventListener("pagehide", stop);
  }

  /* ---------------------------------------------------------
     6. LA FORGE — sceau procédural + route inventée
     --------------------------------------------------------- */
  const forgeForm = document.getElementById("forgeForm");
  const forgeResult = document.getElementById("forgeResult");
  const sigilCanvas = document.getElementById("sigilCanvas");
  const sigilCode = document.getElementById("sigilCode");
  const sigilDesc = document.getElementById("sigilDesc");
  const routeList = document.getElementById("routeList");
  const reforgeBtn = document.getElementById("reforge");

  const FEU_LABEL = { mainstage: "Main Stages", altar: "Altar", temple: "Temple", valley: "The Valley" };
  const SON_LABEL = { extreme: "l'extrême", heavy: "le heavy et le groove", hardcore: "le punk et le hardcore", doom: "le doom et le stoner" };
  const MOMENT_LABEL = { crepuscule: "le crépuscule", pleinenuit: "la pleine nuit", aube: "le bout de la nuit" };

  function drawSigil(seed) {
    if (!sigilCanvas) return;
    const c = sigilCanvas.getContext("2d");
    const S = sigilCanvas.width;
    let s = seed % 2147483647;
    const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647;

    c.clearRect(0, 0, S, S);
    // fond radial
    const grad = c.createRadialGradient(S / 2, S / 2, 10, S / 2, S / 2, S / 2);
    grad.addColorStop(0, "#2a1209");
    grad.addColorStop(1, "#120b08");
    c.fillStyle = grad;
    c.fillRect(0, 0, S, S);

    const cx = S / 2, cy = S / 2;
    c.save();
    c.translate(cx, cy);

    // rayons de braise
    const spikes = 7 + Math.floor(rnd() * 7);
    c.rotate(rnd() * Math.PI);
    for (let i = 0; i < spikes; i++) {
      const ang = (i / spikes) * Math.PI * 2;
      const len = S * (0.24 + rnd() * 0.2);
      const w = S * (0.012 + rnd() * 0.02);
      c.save();
      c.rotate(ang);
      const g = c.createLinearGradient(0, 0, len, 0);
      g.addColorStop(0, "#ff6a2b");
      g.addColorStop(1, "rgba(255,106,43,0)");
      c.fillStyle = g;
      c.beginPath();
      c.moveTo(0, -w);
      c.lineTo(len, 0);
      c.lineTo(0, w);
      c.closePath();
      c.fill();
      c.restore();
    }

    // anneau
    c.strokeStyle = "#ffb14e";
    c.lineWidth = 2.5;
    c.beginPath();
    c.arc(0, 0, S * 0.3, 0, Math.PI * 2);
    c.stroke();

    // glyphe central : polygone en braise
    const sides = 3 + Math.floor(rnd() * 5);
    c.beginPath();
    for (let i = 0; i <= sides; i++) {
      const ang = (i / sides) * Math.PI * 2 - Math.PI / 2;
      const r = S * (0.1 + rnd() * 0.09);
      const x = Math.cos(ang) * r, y = Math.sin(ang) * r;
      i === 0 ? c.moveTo(x, y) : c.lineTo(x, y);
    }
    c.closePath();
    c.fillStyle = "#ff6a2b";
    c.shadowColor = "#ff6a2b";
    c.shadowBlur = 24;
    c.fill();
    c.shadowBlur = 0;

    // étincelles
    for (let i = 0; i < 26; i++) {
      const ang = rnd() * Math.PI * 2;
      const r = S * (0.1 + rnd() * 0.38);
      c.fillStyle = `rgba(255, ${150 + Math.floor(rnd() * 90)}, 80, ${0.25 + rnd() * 0.6})`;
      c.beginPath();
      c.arc(Math.cos(ang) * r, Math.sin(ang) * r, 1 + rnd() * 2.2, 0, Math.PI * 2);
      c.fill();
    }
    c.restore();
  }

  function forge() {
    const feu = forgeForm.querySelector('input[name="feu"]:checked')?.value || "mainstage";
    const son = forgeForm.querySelector('input[name="son"]:checked')?.value || "extreme";
    const moment = forgeForm.querySelector('input[name="moment"]:checked')?.value || "crepuscule";
    const seed = [...`${feu}${son}${moment}`].reduce((a, ch) => a * 31 + ch.charCodeAt(0), 7) + Math.floor(Math.random() * 997);

    drawSigil(seed);

    const code = `BRA-${feu.slice(0, 3).toUpperCase()}-${son.slice(0, 3).toUpperCase()}-${String(seed % 97).padStart(2, "0")}F`;
    if (sigilCode) sigilCode.textContent = `Sceau ${code}`;
    if (sigilDesc)
      sigilDesc.textContent = `Gravé devant ${FEU_LABEL[feu]}, pour qui vibre avec ${SON_LABEL[son]}, à ${MOMENT_LABEL[moment]}.`;

    // route inventée, ajustée aux choix
    const route = [`19h00 — Remise de ta braise froide à l'entrée du Val (inventé)`];
    if (moment === "crepuscule") route.push(`19h45 — Montée sur la crête pour voir les six feux s'allumer depuis ${FEU_LABEL[feu]}`);
    if (moment === "pleinenuit") route.push(`21h30 — Procession sonore vers le Cœur de Braise, au cœur de la foule`);
    if (moment === "aube") route.push(`00h45 — Les derniers veilleurs du Temple, là où la nuit respire le plus bas`);
    route.push(`20h00 — Veillée à ${FEU_LABEL[feu]} : deux groupes inventés, beaucoup de décibels`);
    route.push(`23h00 — Pause braise : écouter les récits des dix-neuf millésimes le long du chemin`);
    route.push(`00h30 — Nourrir ensemble le 20e feu avec ton sceau ${code}`);
    if (routeList) {
      routeList.innerHTML = route.map((r) => `<li>${r}</li>`).join("");
    }

    if (forgeResult) {
      forgeResult.hidden = false;
      forgeResult.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "start" });
    }
    playForge();
  }

  if (forgeForm) {
    forgeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      forge();
    });
  }
  if (reforgeBtn) reforgeBtn.addEventListener("click", forge);

  /* ---------------------------------------------------------
     7. BILLETTERIE SIMULÉE — modal, sans transaction réelle
     --------------------------------------------------------- */
  const modal = document.getElementById("ticketModal");
  const modalText = document.getElementById("modalText");
  const modalClose = document.getElementById("modalClose");
  let lastFocus = null;

  function openModal(passName) {
    if (!modal) return;
    lastFocus = document.activeElement;
    if (modalText)
      modalText.innerHTML =
        `Votre place <strong>${passName}</strong> pour « Le 20e Feu » est « réservée » dans cette démonstration.` +
        ` Aucun paiement, aucune donnée, aucun envoi : tout reste dans votre navigateur.`;
    modal.hidden = false;
    modalClose && modalClose.focus();
  }
  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    lastFocus && lastFocus.focus();
  }

  document.querySelectorAll(".ticket-buy").forEach((b) =>
    b.addEventListener("click", () => openModal(b.dataset.pass || "pass fictif"))
  );
  modalClose && modalClose.addEventListener("click", closeModal);
  modal &&
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && !modal.hidden) closeModal();
  });

  /* ---------------------------------------------------------
     8. SON — ambiance générée localement (WebAudio), OFF par défaut
     --------------------------------------------------------- */
  let audioCtx = null;
  let rumbleGain = null;
  let soundOn = false;

  function ensureAudio() {
    if (audioCtx) return true;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    audioCtx = new AC();
    // nappe grave continue
    const osc = audioCtx.createOscillator();
    const osc2 = audioCtx.createOscillator();
    osc.type = "sine"; osc.frequency.value = 42;
    osc2.type = "triangle"; osc2.frequency.value = 61;
    rumbleGain = audioCtx.createGain();
    rumbleGain.gain.value = 0;
    osc.connect(rumbleGain); osc2.connect(rumbleGain);
    rumbleGain.connect(audioCtx.destination);
    osc.start(); osc2.start();
    return true;
  }

  function playRumble(on) {
    if (!soundOn || !ensureAudio() || !rumbleGain) return;
    const t = audioCtx.currentTime;
    rumbleGain.gain.cancelScheduledValues(t);
    rumbleGain.gain.linearRampToValueAtTime(on ? 0.05 : 0.015, t + 0.15);
  }

  function blip(freq, dur, vol) {
    if (!soundOn || !ensureAudio()) return;
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type = "sine"; o.frequency.value = freq;
    g.gain.setValueAtTime(vol, audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + dur);
    o.connect(g); g.connect(audioCtx.destination);
    o.start(); o.stop(audioCtx.currentTime + dur);
  }
  const playSpark = () => blip(620 + Math.random() * 240, 0.14, 0.045);
  const playForge = () => { blip(180, 0.3, 0.06); setTimeout(() => blip(260, 0.25, 0.05), 120); };

  const soundToggle = document.getElementById("soundToggle");
  if (soundToggle) {
    soundToggle.addEventListener("click", () => {
      soundOn = !soundOn;
      soundToggle.setAttribute("aria-pressed", String(soundOn));
      const label = soundToggle.querySelector(".sound-label");
      if (label) label.textContent = soundOn ? "Son activé" : "Son";
      if (soundOn) {
        ensureAudio() && audioCtx.resume && audioCtx.resume();
        playRumble(false); // nappe discrète d'ambiance
      } else if (rumbleGain) {
        rumbleGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.2);
      }
    });
  }

  /* ---------------------------------------------------------
     Démarrage
     --------------------------------------------------------- */
  initEmbers();
})();
