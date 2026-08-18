// Wait for DOM before initializing — needed for standalone files
document.addEventListener('DOMContentLoaded', function() {

  // ---------- i18n ----------
  var I18N = {
    en: {
      badge: 'Peptide Reconstitution Tool',
      title: 'Peptide Dose Calculator',
      subtitle: 'Calculate the exact draw volume for your reconstituted peptide.',
      peptide: 'Peptide',
      optional: '(optional)',
      selectPeptide: '— Select peptide —',
      step1: 'Total Vial Amount',
      step2: 'Bacteriostatic Water',
      step2spray: 'NaCl (Saline)',
      step2units: 'Target Units',
      step3: 'Desired Dose',
      modeSyringe: 'Syringe',
      modePen: 'Pen',
      modeSpray: 'Nose Spray',
      penDial: 'Dial to',
      penSub: '≈ {ml} ml per dose',
      penNote: 'Pen units are the same as on a U100 insulin syringe (1 unit = 0.01 ml).',
      step4: 'Syringe Type',
      step4spray: 'Spray Volume',
      step5: 'Syringe Volume',
      solveFor: 'I want to calculate',
      solveUnits: 'Draw units',
      solveWater: 'BAC water',
      solveDescUnits: 'Enter your BAC water amount — get how many units to draw per dose.',
      solveDescWater: 'Enter the units you want to draw — get how much BAC water to mix into the vial.',
      enterTargetUnits: 'Units (e.g. 10)',
      bacResult: 'Mix with',
      reverseSub: 'draw {u} units ({ml} ml) per dose',
      sprayPerPump: 'ml per pump',
      enterMlPerPump: 'ml per pump',
      enterMlCap: 'ml (e.g. 0.3, 0.5, 1.0)',
      sprayResult: '{n} sprays',
      sprayOnDevice: '{n} sprays of {ml} ml each',
      sprayPerDose: '1 spray of {ml} ml = {mg} {u} of your peptide',
      warnSprayOverdose: 'One spray ({s} ml) exceeds the required dose volume ({v} ml). Use a spray device with a smaller volume per pump.',
      units: 'units',
      enterMg: 'Enter mg',
      enterIU: 'Enter IU',
      enterMl: 'Enter ml',
      enterDose: 'Enter dose',
      enterUnits: 'Enter units',
      enterUnitsPerMl: 'Units/ml (e.g. 40, 100)',
      empty: 'Select all values to calculate your dose',
      legendRecommended: 'Recommended for selected peptide',
      drawTo: 'Draw to',
      onSyringe: 'on a {t} · {c} ml ({u}u) syringe',
      concentration: 'Concentration',
      dosesPerVial: 'Doses per vial',
      perDose: '{n} {u} per dose',
      concentrationIU: '{c} IU/ml',
      concentrationIUmg: '≈ {m} mg/ml (1 IU = 0.333 mg)',
      copyResult: 'Copy result',
      reset: 'Reset',
      copied: 'Copied to clipboard',
      errorOverflow: 'Dose exceeds the {c} ml ({n}u) syringe capacity. Use a larger syringe or split into multiple injections.',
      warnTooSmall: 'Draw volume is under 1 unit — measurement accuracy may be poor. Consider increasing your reconstitution volume.',
      warnPenWholeUnits: 'Pens dial in whole units, but this dose lands on {u} units. Set the pen to the nearest whole number ({r} units), or adjust your dose or BAC water so it lands exactly on a whole unit.',
      warnWholeUnits: 'Drawing {u} units is not accurate — syringes are only marked in whole units. Change your BAC water or dose so the draw lands on a whole number ({r} units is closest).',
      warnWholeSprays: 'This needs {u} sprays — you can only take whole sprays. Change your saline amount or dose so it lands on a whole number of sprays ({r} is closest).',
      disclaimerTitle: 'Disclaimer:',
      disclaimer: "This calculator is intended for informational and educational purposes only. It does not constitute medical advice or a prescription. Always follow your healthcare provider's instructions and consult a qualified professional before administering any peptide or medication.",
      defaultsApplied: 'Common defaults applied for {p}. Adjust as needed.',
      copyHeading: '{p} dose calculation:',
      copyVial: 'Vial: {v} mg in {w} ml BAC water',
      copyConc: 'Concentration: {c} mg/ml',
      copyDose: 'Dose: {d} {u} ({m} mg)',
      copyDraw: 'Draw: {u} units ({ml} ml) on {s}u {t} syringe',
      copyDoses: 'Doses per vial: {n}',
      peptideName: 'Peptide',
      other: 'Other',
      a2hsTitle: 'Use as an app',
      a2hsSub: 'Add this calculator to your home screen — it opens fullscreen like a native app.',
      a2hsIosLabel: 'iPhone / iPad',
      a2hsAndroidLabel: 'Android',
      a2hsIos: 'Open this page in Safari, tap the Share icon (square with an arrow), scroll down and choose "Add to Home Screen".',
      a2hsAndroid: 'Open this page in Chrome, tap the ⋮ menu in the top-right corner and choose "Add to Home screen" (or "Install app").',
      shareTitle: 'Share this calculator',
      shareSub: 'On your home screen the app has no address bar — use this link to send the calculator to someone.',
      shareAction: 'Share',
      shareCopy: 'Copy link',
      shareWithSettings: 'Include my current settings in the link',
      shareText: 'Peptide Dose Calculator — work out the exact draw for your reconstituted peptide.',
      linkCopied: 'Link copied to clipboard',
      copyFailed: 'Could not copy — select the link and copy it manually',
      modeBlend: 'Blend',
      blendStep: 'Blend Components',
      blendAdd: 'Add peptide',
      blendTotal: '{n} mg total',
      blendBreakdown: 'In each {d} {u} dose ({v} units):',
      blendCustomName: 'Peptide name',
      blendTableTitle: 'Content per units drawn',
      tableYourDose: 'your dose',
      blendTableUnits: 'Units',
      blendTableTotal: 'Total',
      blendAnchorLabel: 'Dose refers to',
      blendAnchorTotal: 'Total blend',
      blendBreakdownAnchor: 'Per dose with {d} {u} {p} ({v} units):',
      plainDraw: 'Fill the syringe up to {u} — that is one dose of {d}.',
      plainPen: 'Dial the pen to {u} — that is one dose of {d}.',
      plainReverse: 'Then draw {u} each time to get one dose of {d}.',
      plainDoses: 'Drawing {u} every time, this vial lasts {n} doses of {d}.',
      plainDosesSpray: 'At {d} per dose, this bottle lasts {n} doses.',
      plainConc: '1 ml of your mix contains {c}. So 1 unit = {pu}.',
      plainConcSpray: '1 ml of your mix contains {c}.',
      unitsShort: '{n} units',
      freqTitle: 'How long this lasts — {n} doses of {d}, {u} each',
      freqTitleSpray: 'How long this lasts — {n} doses of {d}',
      freqHowOften: 'How often',
      freqLasts: 'Lasts',
      freqDaily: 'Every day',
      freqEod: 'Every 2 days',
      freq3w: '3× per week',
      freq2w: '2× per week',
      freq1w: 'Once a week',
      freq5on2off: '5 on / 2 off',
      durDays: '{n} days',
      durWeeks: '{n} weeks',
      durMonths: '{n} months'
    },
    de: {
      badge: 'Peptid-Rekonstitutions-Tool',
      title: 'Peptid-Dosis-Rechner',
      subtitle: 'Berechne das exakte Aufziehvolumen für dein rekonstituiertes Peptid.',
      peptide: 'Peptid',
      optional: '(optional)',
      selectPeptide: '— Peptid auswählen —',
      step1: 'Gesamte Vialmenge',
      step2: 'Bakteriostatisches Wasser',
      step2spray: 'NaCl (Kochsalzlösung)',
      step2units: 'Ziel-Einheiten',
      step3: 'Gewünschte Dosis',
      modeSyringe: 'Spritze',
      modePen: 'Pen',
      modeSpray: 'Nasenspray',
      penDial: 'Einstellen auf',
      penSub: '≈ {ml} ml pro Dosis',
      penNote: 'Pen-Einheiten entsprechen denen einer U100-Insulinspritze (1 Einheit = 0,01 ml).',
      step4: 'Spritzentyp',
      step4spray: 'Sprühvolumen',
      step5: 'Spritzenvolumen',
      solveFor: 'Ich möchte berechnen',
      solveUnits: 'Einheiten',
      solveWater: 'BAC-Wasser',
      solveDescUnits: 'Gib deine BAC-Wassermenge ein — du erhältst die Einheiten pro Dosis.',
      solveDescWater: 'Gib die gewünschten Einheiten ein — du erhältst das BAC-Wasser fürs Vial.',
      enterTargetUnits: 'Einheiten (z.B. 10)',
      bacResult: 'Anmischen mit',
      reverseSub: 'ziehe {u} Einheiten ({ml} ml) pro Dosis auf',
      sprayPerPump: 'ml pro Sprühstoß',
      enterMlPerPump: 'ml pro Sprühstoß',
      enterMlCap: 'ml (z.B. 0,3, 0,5, 1,0)',
      sprayResult: '{n} Sprühstöße',
      sprayOnDevice: '{n} Sprühstöße à {ml} ml',
      sprayPerDose: '1 Sprühstoß à {ml} ml = {mg} {u} deines Peptids',
      warnSprayOverdose: 'Ein Sprühstoß ({s} ml) übersteigt das benötigte Dosisvolumen ({v} ml). Verwende ein Spray mit kleinerem Volumen pro Sprühstoß.',
      units: 'Einheiten',
      enterMg: 'mg eingeben',
      enterIU: 'IE eingeben',
      enterMl: 'ml eingeben',
      enterDose: 'Dosis eingeben',
      enterUnits: 'Einheiten eingeben',
      enterUnitsPerMl: 'Einheiten/ml (z.B. 40, 100)',
      empty: 'Wähle alle Werte, um deine Dosis zu berechnen',
      legendRecommended: 'Empfohlen für ausgewähltes Peptid',
      drawTo: 'Aufziehen auf',
      onSyringe: 'auf einer {t} · {c} ml ({u}u) Spritze',
      concentration: 'Konzentration',
      dosesPerVial: 'Dosen pro Vial',
      perDose: '{n} {u} pro Dosis',
      concentrationIU: '{c} IE/ml',
      concentrationIUmg: '≈ {m} mg/ml (1 IE = 0,333 mg)',
      copyResult: 'Ergebnis kopieren',
      reset: 'Zurücksetzen',
      copied: 'In Zwischenablage kopiert',
      errorOverflow: 'Dosis überschreitet die {c} ml ({n}u) Spritzenkapazität. Verwende eine größere Spritze oder teile auf mehrere Injektionen auf.',
      warnTooSmall: 'Aufziehvolumen liegt unter 1 Einheit — Messgenauigkeit kann schlecht sein. Erhöhe ggf. das Rekonstitutionsvolumen.',
      warnPenWholeUnits: 'Pens lassen sich nur in ganzen Einheiten einstellen, diese Dosis ergibt aber {u} Einheiten. Stelle den Pen auf die nächste ganze Zahl ({r} Einheiten) ein oder passe Dosis bzw. BAC-Wasser an, damit genau eine ganze Einheit erreicht wird.',
      warnWholeUnits: '{u} Einheiten aufzuziehen ist nicht genau — Spritzen sind nur in ganzen Einheiten markiert. Passe BAC-Wasser oder Dosis an, damit eine ganze Zahl herauskommt ({r} Einheiten wäre am nächsten).',
      warnWholeSprays: 'Das ergibt {u} Sprühstöße — du kannst nur ganze Sprühstöße nehmen. Passe die Kochsalzmenge oder Dosis an, damit eine ganze Zahl herauskommt ({r} wäre am nächsten).',
      disclaimerTitle: 'Haftungsausschluss:',
      disclaimer: 'Dieser Rechner dient ausschließlich zu Informations- und Bildungszwecken. Er stellt keine medizinische Beratung oder Verschreibung dar. Befolge stets die Anweisungen deines medizinischen Fachpersonals und konsultiere eine qualifizierte Fachkraft, bevor du ein Peptid oder Medikament verabreichst.',
      defaultsApplied: 'Übliche Standardwerte für {p} angewendet. Bei Bedarf anpassen.',
      copyHeading: '{p} Dosisberechnung:',
      copyVial: 'Vial: {v} mg in {w} ml BAC-Wasser',
      copyConc: 'Konzentration: {c} mg/ml',
      copyDose: 'Dosis: {d} {u} ({m} mg)',
      copyDraw: 'Aufziehen: {u} Einheiten ({ml} ml) auf {s}u {t} Spritze',
      copyDoses: 'Dosen pro Vial: {n}',
      peptideName: 'Peptid',
      other: 'Andere',
      a2hsTitle: 'Als App nutzen',
      a2hsSub: 'Füge den Rechner deinem Home-Bildschirm hinzu — er öffnet sich im Vollbild wie eine native App.',
      a2hsIosLabel: 'iPhone / iPad',
      a2hsAndroidLabel: 'Android',
      a2hsIos: 'Öffne die Seite in Safari, tippe auf das Teilen-Symbol (Quadrat mit Pfeil), scrolle nach unten und wähle "Zum Home-Bildschirm".',
      a2hsAndroid: 'Öffne die Seite in Chrome, tippe oben rechts auf das ⋮-Menü und wähle "Zum Startbildschirm hinzufügen" (bzw. "App installieren").',
      shareTitle: 'Diesen Rechner teilen',
      shareSub: 'Auf dem Home-Bildschirm hat die App keine Adressleiste — nutze diesen Link, um den Rechner weiterzugeben.',
      shareAction: 'Teilen',
      shareCopy: 'Link kopieren',
      shareWithSettings: 'Meine aktuellen Einstellungen im Link mitgeben',
      shareText: 'Peptid-Dosisrechner — berechne die exakte Aufziehmenge für dein rekonstituiertes Peptid.',
      linkCopied: 'Link in Zwischenablage kopiert',
      copyFailed: 'Kopieren nicht möglich — Link markieren und manuell kopieren',
      modeBlend: 'Blend',
      blendStep: 'Blend-Bestandteile',
      blendAdd: 'Peptid hinzufügen',
      blendTotal: '{n} mg gesamt',
      blendBreakdown: 'In jeder {d}-{u}-Dosis ({v} Einheiten):',
      blendCustomName: 'Peptid-Name',
      blendTableTitle: 'Inhalt pro gezogene Einheiten',
      tableYourDose: 'deine Dosis',
      blendTableUnits: 'Einheiten',
      blendTableTotal: 'Gesamt',
      blendAnchorLabel: 'Dosis bezieht sich auf',
      blendAnchorTotal: 'Gesamt-Blend',
      blendBreakdownAnchor: 'Pro Dosis mit {d} {u} {p} ({v} Einheiten):',
      plainDraw: 'Ziehe die Spritze bis {u} auf — das ist eine Dosis von {d}.',
      plainPen: 'Stelle den Pen auf {u} ein — das ist eine Dosis von {d}.',
      plainReverse: 'Ziehe dann jedes Mal {u} auf, um eine Dosis von {d} zu erhalten.',
      plainDoses: 'Wenn du jedes Mal {u} aufziehst, reicht dieses Vial für {n} Dosen à {d}.',
      plainDosesSpray: 'Bei {d} pro Dosis reicht diese Flasche für {n} Dosen.',
      plainConc: '1 ml deiner Mischung enthält {c}. Also 1 Einheit = {pu}.',
      plainConcSpray: '1 ml deiner Mischung enthält {c}.',
      unitsShort: '{n} Einheiten',
      freqTitle: 'Wie lange das reicht — {n} Dosen à {d}, je {u}',
      freqTitleSpray: 'Wie lange das reicht — {n} Dosen à {d}',
      freqHowOften: 'Wie oft',
      freqLasts: 'Reicht',
      freqDaily: 'Jeden Tag',
      freqEod: 'Alle 2 Tage',
      freq3w: '3× pro Woche',
      freq2w: '2× pro Woche',
      freq1w: '1× pro Woche',
      freq5on2off: '5 on / 2 off',
      durDays: '{n} Tage',
      durWeeks: '{n} Wochen',
      durMonths: '{n} Monate'
    }
  };

  var lang = 'de';
  function t(key, vars) {
    vars = vars || {};
    var s = (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
    Object.keys(vars).forEach(function(k) {
      s = s.replace('{' + k + '}', vars[k]);
    });
    return s;
  }

  function applyTranslations() {
    document.documentElement.lang = lang;
    var i18nEls = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < i18nEls.length; i++) {
      var key = i18nEls[i].getAttribute('data-i18n');
      i18nEls[i].textContent = t(key);
    }
    var phEls = document.querySelectorAll('[data-i18n-placeholder]');
    for (var j = 0; j < phEls.length; j++) {
      var phKey = phEls[j].getAttribute('data-i18n-placeholder');
      phEls[j].placeholder = t(phKey);
    }
  }

  // ---------- Data ----------
  var VIAL_PRESETS = [5, 10, 15, 20, 30, 50];
  var VIAL_PRESETS_IU = [4, 8, 10, 12, 16, 24, 36];
  var WATER_PRESETS = [0.5, 1.0, 1.5, 2.0, 2.5, 3.0];
  var SPRAY_WATER_PRESETS = [2.0, 3.0, 4.0, 5.0];
  var DOSE_PRESETS_MCG = [100, 200, 250, 500, 750, 1000];
  var DOSE_PRESETS_MG = [0.5, 1, 2, 2.5, 5];
  var DOSE_PRESETS_IU = [0.5, 1, 1.5, 2, 2.5, 3, 4];
  var SYRINGE_PRESETS = [40, 100];
  var CAPACITY_PRESETS = [0.3, 0.5, 1.0];
  var SPRAY_PRESETS = [0.1, 0.12, 0.14];
  var TARGET_UNIT_PRESETS = [5, 10, 15, 20, 25, 50];

  // ---------- State ----------
  var STORAGE_KEY = 'peptide-calc-v6';
  var state = {
    peptide: '',
    vial: null,
    water: null,
    dose: null,
    doseUnit: 'mg',
    syringe: null,
    syringeType: 100,
    capacity: null,
    mode: 'syringe',
    solveFor: 'units',
    targetUnits: null,
    sprayVolume: null,
    blend: [{ name: '', amount: null, unit: 'mg' }, { name: '', amount: null, unit: 'mg' }],
    blendAnchor: null,
    lang: 'de',
    autoApplied: false
  };

  // Colors for blend components (vial bands + breakdown dots share these by row index)
  // Set once the share block is wired up; renderAll() keeps the link in sync
  var refreshShareLink = null;

  var BLEND_COLORS = ['#22d3ee', '#a78bfa', '#34d399', '#fbbf24', '#f472b6', '#60a5fa', '#f87171', '#c084fc'];

  function loadState() {
    try {
      var saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved) {
        Object.keys(saved).forEach(function(k) { state[k] = saved[k]; });
      }
    } catch (e) {}
    lang = state.lang || 'de';
    // Older saved states have no blend array — seed two empty rows.
    if (!Array.isArray(state.blend) || state.blend.length === 0) {
      state.blend = [{ name: '', amount: null, unit: 'mg' }, { name: '', amount: null, unit: 'mg' }];
    } else {
      // Migrate rows saved by the first blend version ({name, mg})
      state.blend.forEach(function(r) {
        if (r.amount == null && r.mg != null) r.amount = r.mg;
        if (!r.unit) r.unit = 'mg';
      });
    }
  }
  function saveState() {
    state.lang = lang;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
  }

  // ---------- Shareable settings in the URL ----------
  // Short keys keep the link readable. Everything is optional: a link with no
  // params (or with only some of them) simply falls back to the saved state.
  var URL_KEYS = {
    m: 'mode', s: 'solveFor', p: 'peptide', v: 'vial', w: 'water', d: 'dose',
    du: 'doseUnit', sy: 'syringe', st: 'syringeType', c: 'capacity',
    sv: 'sprayVolume', tu: 'targetUnits', ba: 'blendAnchor', l: 'lang'
  };
  var NUMERIC_KEYS = { vial: 1, water: 1, dose: 1, syringe: 1, syringeType: 1, capacity: 1, sprayVolume: 1, targetUnits: 1 };
  var ENUMS = {
    mode: ['syringe', 'pen', 'spray', 'blend'],
    solveFor: ['units', 'water'],
    doseUnit: ['mg', 'mcg', 'iu'],
    lang: ['en', 'de']
  };

  function stateToQuery() {
    var parts = [];
    Object.keys(URL_KEYS).forEach(function(k) {
      var val = state[URL_KEYS[k]];
      if (val == null || val === '') return;
      parts.push(k + '=' + encodeURIComponent(val));
    });
    // Blend rows: name~amount~unit, rows separated by "!"
    if (state.mode === 'blend') {
      var rows = state.blend.filter(function(r) { return r.name || r.amount != null; });
      if (rows.length) {
        parts.push('b=' + encodeURIComponent(rows.map(function(r) {
          return [r.name || '', r.amount == null ? '' : r.amount, r.unit || 'mg'].join('~');
        }).join('!')));
      }
    }
    return parts.join('&');
  }

  // Read settings out of the current URL. Everything is validated: the link is
  // untrusted input, so an unknown peptide, a bad enum or a non-number is
  // dropped rather than written into state.
  function applyQueryToState() {
    var raw = location.search.replace(/^\?/, '');
    if (!raw && location.hash.indexOf('=') > -1) raw = location.hash.replace(/^#/, '');
    if (!raw) return false;

    var params;
    try { params = new URLSearchParams(raw); } catch (e) { return false; }
    var applied = false;

    Object.keys(URL_KEYS).forEach(function(k) {
      if (!params.has(k)) return;
      var field = URL_KEYS[k];
      var val = params.get(k);

      if (ENUMS[field]) {
        if (ENUMS[field].indexOf(val) === -1) return;
      } else if (NUMERIC_KEYS[field]) {
        var n = parseFloat(val);
        if (!isFinite(n) || n <= 0) return;
        val = n;
      } else if (field === 'peptide') {
        // Only names we actually ship — never echo an arbitrary string back out
        if (!PEPTIDE_DEFAULTS[val]) return;
      } else if (field === 'blendAnchor') {
        val = String(val).slice(0, 40);
      }
      state[field] = val;
      applied = true;
    });

    if (params.has('b')) {
      var rows = params.get('b').split('!').slice(0, 8).map(function(chunk) {
        var bits = chunk.split('~');
        var amt = parseFloat(bits[1]);
        return {
          name: String(bits[0] || '').slice(0, 40),
          amount: isFinite(amt) && amt > 0 ? amt : null,
          unit: ['mcg', 'mg', 'g'].indexOf(bits[2]) > -1 ? bits[2] : 'mg'
        };
      });
      if (rows.length) {
        while (rows.length < 2) rows.push({ name: '', amount: null, unit: 'mg' });
        state.blend = rows;
        applied = true;
      }
    }

    if (applied) {
      lang = state.lang || lang;
      // A shared link should not stay in the address bar once it is applied —
      // the settings now live in localStorage like any other session.
      try { history.replaceState(null, '', location.pathname); } catch (e) {}
    }
    return applied;
  }

  function getRecommended() {
    return state.peptide && PEPTIDE_DEFAULTS[state.peptide] ? PEPTIDE_DEFAULTS[state.peptide] : null;
  }
  function isRecommendedVial(v) { var r = getRecommended(); return r && r.vial === v; }
  function isRecommendedWater(v) { var r = getRecommended(); return r && r.water === v; }
  function isRecommendedDose(v) {
    var r = getRecommended();
    if (!r) return false;
    if (r.doseUnit === state.doseUnit) return r.dose === v;
    if (r.doseUnit === 'iu' || state.doseUnit === 'iu') return false;
    var converted = r.doseUnit === 'mg' && state.doseUnit === 'mcg' ? r.dose * 1000
                  : r.doseUnit === 'mcg' && state.doseUnit === 'mg' ? r.dose / 1000
                  : r.dose;
    return Math.abs(converted - v) < 1e-9;
  }
  function isRecommendedSyringe(v) { var r = getRecommended(); return r && r.syringe === v; }
  function isRecommendedCapacity(v) { var r = getRecommended(); return r && (r.capacity || 1.0) === v; }

  // Nose sprays default to mcg dosing and a saline volume in the 2–5 ml range.
  function enforceSprayDefaults() {
    if (state.mode !== 'spray') return;
    if (state.doseUnit !== 'mcg') {
      if (state.doseUnit === 'mg' && state.dose != null) {
        state.dose = state.dose * 1000;
      } else if (state.doseUnit === 'iu') {
        state.dose = null; // IU can't convert to mcg
      }
      state.doseUnit = 'mcg';
      var dc = document.getElementById('dose-custom');
      var di = document.getElementById('dose-input');
      if (dc) dc.style.display = 'none';
      if (di) di.value = '';
    }
    if (state.water == null || state.water < 2) state.water = 2.0;
  }

  // Blends dial on a U100 syringe in mg/mcg — IU doesn't apply.
  function enforceBlendDefaults() {
    if (state.mode !== 'blend') return;
    if (state.doseUnit === 'iu') {
      state.doseUnit = 'mg';
      state.dose = null;
      var dcB = document.getElementById('dose-custom');
      var diB = document.getElementById('dose-input');
      if (dcB) dcB.style.display = 'none';
      if (diB) diB.value = '';
    }
    if (!Array.isArray(state.blend) || state.blend.length === 0) {
      state.blend = [{ name: '', amount: null, unit: 'mg' }, { name: '', amount: null, unit: 'mg' }];
    }
  }

  // A row's amount converted to mg (rows carry their own unit: mcg / mg / g)
  function blendRowMg(row) {
    if (row.amount == null || row.amount <= 0) return 0;
    return row.unit === 'g' ? row.amount * 1000 : row.unit === 'mcg' ? row.amount / 1000 : row.amount;
  }

  // Valid blend rows (name + amount), keeping each row's color by its original position.
  function getBlendComponents() {
    var comps = [];
    (state.blend || []).forEach(function(row, idx) {
      var name = (row.name || '').trim();
      var mg = blendRowMg(row);
      if (name && mg > 0) {
        comps.push({ name: name, mg: mg, color: BLEND_COLORS[idx % BLEND_COLORS.length] });
      }
    });
    return comps;
  }

  // "0.5 mg Semaglutide" / "500 mcg BPC-157" / "1 mg" — the dose in the user's own terms
  function doseLabelText(result) {
    var u = state.doseUnit === 'iu' ? 'IU' : state.doseUnit;
    var s = formatNum(state.dose) + ' ' + u;
    if (result && result.blend) {
      if (result.anchor) s += ' ' + escapeHtml(result.anchor);
    } else if (state.peptide) {
      s += ' ' + escapeHtml(state.peptide);
    }
    return s;
  }

  // "20 units" / "20 Einheiten"
  function unitsLabelText(n) {
    return t('unitsShort', { n: formatNum(n, 2) });
  }

  // What a single syringe unit holds (1 unit = 1/syringeType ml)
  function perUnitText(concentration, syringeType) {
    var perUnit = concentration / (syringeType || 100);
    if (state.doseUnit === 'iu') return formatNum(perUnit, 3) + ' IU';
    return formatBlendAmount(perUnit);
  }

  // Reference table: what N drawn units contain. Handles single peptides and blends.
  function unitsTableHtml(result, unitsToDraw) {
    var syringeType = result.syringeType || state.syringeType || 100;
    var maxUnits = result.maxUnits || 100;
    var rows = [5, 10, 15, 20, 25, 30, 40, 50]
      .filter(function(u) { return u <= maxUnits + 0.001; })
      .map(function(u) { return { u: u, actual: false }; });
    if (rows.length === 0) return '';

    // Integrate the actually calculated draw as its own row (sorted in place)
    // rather than highlighting a preset that is merely close to it.
    if (isFinite(unitsToDraw) && unitsToDraw > 0 && unitsToDraw <= maxUnits + 0.001) {
      var matched = null;
      for (var mi = 0; mi < rows.length; mi++) {
        if (Math.abs(rows[mi].u - unitsToDraw) < 0.05) { matched = rows[mi]; break; }
      }
      if (matched) {
        matched.actual = true;
      } else {
        rows.push({ u: unitsToDraw, actual: true });
        rows.sort(function(a, b) { return a.u - b.u; });
      }
    }
    var isIU = state.doseUnit === 'iu';
    var amountText = function(x) { return isIU ? formatNum(x, 3) + ' IU' : formatBlendAmount(x); };
    // Single-peptide modes behave like a one-component blend
    var comps = result.blend
      ? result.components
      : [{ name: state.peptide || t('peptideName'), mg: 1, color: '#22d3ee' }];
    var total = result.blend ? result.totalMg : 1;
    var multi = comps.length > 1;

    var html = '<div class="blend-breakdown blend-table-wrap">' +
      '<div class="bb-title">' + t('blendTableTitle') + '</div>' +
      '<div class="blend-table-scroll"><table class="blend-table"><thead><tr>' +
      '<th>' + t('blendTableUnits') + '</th>';
    comps.forEach(function(c) {
      html += '<th>' + (result.blend ? '<span class="bb-dot" style="background:' + c.color + '"></span>' : '') +
        escapeHtml(c.name) + '</th>';
    });
    html += (multi ? '<th>' + t('blendTableTotal') + '</th>' : '') + '</tr></thead><tbody>';
    rows.forEach(function(row) {
      var totalAtU = result.concentration * (row.u / syringeType);
      html += '<tr' + (row.actual ? ' class="near"' : '') + '><td>' + formatNum(row.u, 2) + 'u' +
        (row.actual ? ' <span class="tbl-tag">' + t('tableYourDose') + '</span>' : '') + '</td>';
      comps.forEach(function(c) {
        html += '<td>' + amountText(totalAtU * c.mg / total) + '</td>';
      });
      html += (multi ? '<td>' + amountText(totalAtU) + '</td>' : '') + '</tr>';
    });
    return html + '</tbody></table></div></div>';
  }

  // "35 days" / "5 weeks" / "2.1 months" — whichever reads best
  function durationText(days) {
    if (days >= 60) return t('durMonths', { n: formatNum(days / 30.44, 1) });
    if (days >= 28) return t('durWeeks', { n: formatNum(days / 7, 1) });
    return t('durDays', { n: formatNum(days, 0) });
  }

  // Small table: how long the vial/bottle lasts at common dosing frequencies.
  // The title states which dose the durations refer to.
  function frequencyTableHtml(totalDoses, result, isSpray, unitsToDraw) {
    var doses = Math.floor(totalDoses);
    if (!isFinite(doses) || doses < 1) return '';
    var titleText = isSpray
      ? t('freqTitleSpray', { n: doses, d: doseLabelText(result) })
      : t('freqTitle', { n: doses, d: doseLabelText(result), u: unitsLabelText(unitsToDraw) });
    // Ordered by increasing frequency (least often first)
    var freqs = [
      { key: 'freq1w', perWeek: 1 },
      { key: 'freq2w', perWeek: 2 },
      { key: 'freq3w', perWeek: 3 },
      { key: 'freqEod', perWeek: 3.5 },
      { key: 'freq5on2off', perWeek: 5 },
      { key: 'freqDaily', perWeek: 7 }
    ];
    var html = '<div class="blend-breakdown freq-table-wrap">' +
      '<div class="bb-title">' + titleText + '</div>' +
      '<table class="blend-table freq-table"><thead><tr>' +
      '<th>' + t('freqHowOften') + '</th><th>' + t('freqLasts') + '</th>' +
      '</tr></thead><tbody>';
    freqs.forEach(function(f) {
      html += '<tr><td>' + t(f.key) + '</td><td>' + durationText(doses * (7 / f.perWeek)) + '</td></tr>';
    });
    return html + '</tbody></table></div>';
  }

  // Pick the friendliest unit for an mg amount (g / mg / mcg)
  function formatBlendAmount(mg) {
    if (mg >= 1000) return formatNum(mg / 1000, 2) + ' g';
    if (mg >= 1) return formatNum(mg, 2) + ' mg';
    return formatNum(mg * 1000, 1) + ' mcg';
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function(m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  }

  // ---------- Pill builders ----------
  function buildPills(containerId, presets, formatter, currentVal, onClick, isRecommended, includeOther) {
    if (includeOther === undefined) includeOther = true;
    var c = document.getElementById(containerId);
    if (!c) return;
    c.innerHTML = '';
    presets.forEach(function(v) {
      var b = document.createElement('button');
      var recommended = isRecommended ? isRecommended(v) : false;
      var cls = 'pill';
      if (currentVal === v) cls += ' active';
      if (recommended) cls += ' recommended';
      b.className = cls;
      b.type = 'button';
      b.textContent = formatter(v);
      if (recommended) b.title = lang === 'de' ? 'Empfohlen' : 'Recommended';
      b.addEventListener('click', function() { onClick(v); });
      c.appendChild(b);
    });
    if (includeOther) {
      var isCustom = currentVal !== null && currentVal !== undefined && presets.indexOf(currentVal) === -1;
      var ob = document.createElement('button');
      ob.className = 'pill' + (isCustom ? ' active' : '');
      ob.type = 'button';
      ob.textContent = t('other');
      ob.addEventListener('click', function() { onClick('custom'); });
      c.appendChild(ob);
    }
  }

  function renderVialPills() {
    var isIU = state.doseUnit === 'iu';
    var presets = isIU ? VIAL_PRESETS_IU : VIAL_PRESETS;
    var unit = isIU ? 'IU' : 'mg';
    buildPills('vial-pills', presets, function(v) { return v + unit; }, state.vial, function(v) {
      if (v === 'custom') {
        document.getElementById('vial-custom').style.display = 'flex';
        document.getElementById('vial-input').focus();
      } else {
        state.vial = v;
        document.getElementById('vial-custom').style.display = 'none';
        document.getElementById('vial-input').value = '';
        update();
      }
    }, isRecommendedVial);
    var vialSuffix = document.getElementById('vial-unit-suffix');
    if (vialSuffix) vialSuffix.textContent = unit;
    var vialInput = document.getElementById('vial-input');
    if (vialInput) vialInput.placeholder = isIU ? t('enterIU') : t('enterMg');
    // Update vial unit toggle active state
    var vialUnitBtns = document.querySelectorAll('[data-vial-unit]');
    for (var vi = 0; vi < vialUnitBtns.length; vi++) {
      var btnUnit = vialUnitBtns[vi].getAttribute('data-vial-unit');
      var isActive = isIU ? btnUnit === 'iu' : btnUnit === 'mg';
      if (isActive) {
        vialUnitBtns[vi].classList.add('active');
      } else {
        vialUnitBtns[vi].classList.remove('active');
      }
    }
  }

  function renderWaterPills() {
    // Nose sprays use a larger saline range (2–5 ml) than injections.
    var waterPresets = state.mode === 'spray' ? SPRAY_WATER_PRESETS : WATER_PRESETS;
    buildPills('water-pills', waterPresets, function(v) { return v.toFixed(1) + 'ml'; }, state.water, function(v) {
      if (v === 'custom') {
        document.getElementById('water-custom').style.display = 'flex';
        document.getElementById('water-input').focus();
      } else {
        state.water = v;
        document.getElementById('water-custom').style.display = 'none';
        document.getElementById('water-input').value = '';
        update();
      }
    }, isRecommendedWater);
  }

  function renderTargetUnitsPills() {
    buildPills('targetunits-pills', TARGET_UNIT_PRESETS, function(v) { return v + 'u'; }, state.targetUnits, function(v) {
      if (v === 'custom') {
        document.getElementById('targetunits-custom').style.display = 'flex';
        document.getElementById('targetunits-input').focus();
      } else {
        state.targetUnits = v;
        document.getElementById('targetunits-custom').style.display = 'none';
        document.getElementById('targetunits-input').value = '';
        update();
      }
    }, null, true);
  }

  function renderStep2() {
    var isSpray = state.mode === 'spray';
    var noSolve = isSpray || state.mode === 'blend'; // spray & blend only solve forward
    var solveWater = !noSolve && state.solveFor === 'water';
    document.getElementById('solve-row').style.display = noSolve ? 'none' : 'flex';
    document.getElementById('step2-water').style.display = solveWater ? 'none' : 'block';
    document.getElementById('step2-units').style.display = solveWater ? 'block' : 'none';
    if (solveWater) { renderTargetUnitsPills(); } else { renderWaterPills(); }
    document.getElementById('step2-icon-water').style.display = solveWater ? 'none' : '';
    document.getElementById('step2-icon-units').style.display = solveWater ? '' : 'none';
    var sb = document.querySelectorAll('[data-solve]');
    for (var i = 0; i < sb.length; i++) {
      sb[i].classList.toggle('active', sb[i].getAttribute('data-solve') === state.solveFor);
    }
    var desc = document.getElementById('solve-desc');
    if (desc) {
      var descText = t(state.solveFor === 'water' ? 'solveDescWater' : 'solveDescUnits');
      if (state.mode === 'pen') descText += ' ' + t('penNote');
      desc.textContent = descText;
    }
  }

  function renderDosePills() {
    var presets = state.doseUnit === 'mcg' ? DOSE_PRESETS_MCG : state.doseUnit === 'iu' ? DOSE_PRESETS_IU : DOSE_PRESETS_MG;
    var unit = state.doseUnit === 'iu' ? 'IU' : state.doseUnit;
    buildPills('dose-pills', presets, function(v) { return v + unit; }, state.dose, function(v) {
      if (v === 'custom') {
        document.getElementById('dose-custom').style.display = 'flex';
        document.getElementById('dose-input').focus();
      } else {
        state.dose = v;
        document.getElementById('dose-custom').style.display = 'none';
        document.getElementById('dose-input').value = '';
        update();
      }
    }, isRecommendedDose);
    document.getElementById('dose-unit-suffix').textContent = unit;
    var unitBtns = document.querySelectorAll('[data-unit]');
    for (var i = 0; i < unitBtns.length; i++) {
      if (unitBtns[i].getAttribute('data-unit') === state.doseUnit) {
        unitBtns[i].classList.add('active');
      } else {
        unitBtns[i].classList.remove('active');
      }
    }
  }

  function renderSyringePills() {
    buildPills('syringe-pills', SYRINGE_PRESETS, function(v) { return 'U' + v; }, state.syringe, function(v) {
      if (v === 'custom') {
        document.getElementById('syringe-custom').style.display = 'flex';
        document.getElementById('syringe-input').focus();
      } else {
        state.syringe = v;
        state.syringeType = v;
        document.getElementById('syringe-custom').style.display = 'none';
        document.getElementById('syringe-input').value = '';
        update();
      }
    }, isRecommendedSyringe, true);
  }

  function renderSprayPills() {
    buildPills('spray-pills', SPRAY_PRESETS, function(v) { return v + 'ml'; }, state.sprayVolume, function(v) {
      if (v === 'custom') {
        document.getElementById('spray-custom').style.display = 'flex';
        document.getElementById('spray-input').focus();
      } else {
        state.sprayVolume = v;
        document.getElementById('spray-custom').style.display = 'none';
        document.getElementById('spray-input').value = '';
        update();
      }
    }, null, true);
  }

  function renderCapacityPills() {
    var st = state.syringeType || 100;
    buildPills('capacity-pills', CAPACITY_PRESETS, function(v) {
      return v.toFixed(1) + 'ml · ' + Math.round(v * st) + 'u';
    }, state.capacity, function(v) {
      if (v === 'custom') {
        document.getElementById('capacity-custom').style.display = 'flex';
        document.getElementById('capacity-input').focus();
      } else {
        state.capacity = v;
        document.getElementById('capacity-custom').style.display = 'none';
        document.getElementById('capacity-input').value = '';
        update();
      }
    }, isRecommendedCapacity, true);
  }

  function renderStep4() {
    var isSpray = state.mode === 'spray';
    var isSyringe = state.mode === 'syringe';
    var isBlend = state.mode === 'blend';
    // BAC-water (reverse) and Pen modes don't use syringe type & volume (assume U100)
    var reverse = !isSpray && !isBlend && state.solveFor === 'water';
    var showSyringeSteps = isSyringe && !reverse;
    // Blend mode swaps the peptide select + vial step for the blend builder
    document.getElementById('blend-row').style.display = isBlend ? '' : 'none';
    document.getElementById('peptide-row').style.display = isBlend ? 'none' : '';
    document.getElementById('step-1').style.display = isBlend ? 'none' : '';
    var iuBtn = document.querySelector('[data-unit="iu"]');
    if (iuBtn) iuBtn.style.display = isBlend ? 'none' : '';
    document.getElementById('step-4').style.display = (isSpray || showSyringeSteps) ? '' : 'none';
    document.getElementById('step-5').style.display = showSyringeSteps ? '' : 'none';
    document.getElementById('step4-syringe').style.display = showSyringeSteps ? 'block' : 'none';
    document.getElementById('step4-spray').style.display = isSpray ? 'block' : 'none';
    document.getElementById('step4-icon-syringe').style.display = showSyringeSteps ? '' : 'none';
    document.getElementById('step4-icon-spray').style.display = isSpray ? '' : 'none';
    if (showSyringeSteps) {
      renderSyringePills();
      renderCapacityPills();
    } else if (isSpray) {
      renderSprayPills();
    }
    // Update mode toggle
    var modeBtns = document.querySelectorAll('[data-mode]');
    for (var m = 0; m < modeBtns.length; m++) {
      if (modeBtns[m].getAttribute('data-mode') === state.mode) {
        modeBtns[m].classList.add('active');
      } else {
        modeBtns[m].classList.remove('active');
      }
    }
  }

  // Datalist feeding autocomplete suggestions for the free-text peptide inputs
  function ensureBlendDatalist() {
    var dl = document.getElementById('peptide-datalist');
    if (!dl) {
      dl = document.createElement('datalist');
      dl.id = 'peptide-datalist';
      document.body.appendChild(dl);
    }
    dl.innerHTML = '';
    Object.keys(PEPTIDE_DEFAULTS).sort().forEach(function(p) {
      var o = document.createElement('option');
      o.value = p;
      dl.appendChild(o);
    });
  }

  // Blend builder rows: color dot + free-text peptide name (with suggestions)
  // + amount + unit (mcg/mg/g) + remove, all inline.
  // Rebuilt only on structural changes (add/remove) so typing keeps focus.
  function renderBlendRows() {
    var list = document.getElementById('blend-list');
    if (!list) return;
    ensureBlendDatalist();
    list.innerHTML = '';
    state.blend.forEach(function(row, idx) {
      if (!row.unit) row.unit = 'mg';
      var item = document.createElement('div');
      item.className = 'blend-row-item';

      var dot = document.createElement('span');
      dot.className = 'bb-dot';
      dot.style.background = BLEND_COLORS[idx % BLEND_COLORS.length];
      item.appendChild(dot);

      var nameIn = document.createElement('input');
      nameIn.type = 'text';
      nameIn.className = 'blend-name';
      nameIn.setAttribute('list', 'peptide-datalist');
      nameIn.setAttribute('autocomplete', 'off');
      nameIn.placeholder = t('blendCustomName');
      nameIn.value = row.name || '';
      nameIn.addEventListener('input', function() {
        row.name = nameIn.value;
        update();
      });
      item.appendChild(nameIn);

      var amtIn = document.createElement('input');
      amtIn.type = 'text';
      amtIn.inputMode = 'decimal';
      amtIn.className = 'blend-amount';
      amtIn.placeholder = '0';
      amtIn.value = row.amount != null ? row.amount : '';
      amtIn.addEventListener('input', function(e) {
        var clean = e.target.value.replace(/[^0-9.,]/g, '');
        if (clean !== e.target.value) e.target.value = clean;
        var v = parseLocaleFloat(e.target.value);
        row.amount = isNaN(v) || v <= 0 ? null : v;
        update();
      });
      item.appendChild(amtIn);

      // Segmented mcg/mg/g toggle, same pattern as the dose-unit switcher
      var unitGroup = document.createElement('div');
      unitGroup.className = 'unit-toggle-group blend-unit-toggle';
      ['mcg', 'mg', 'g'].forEach(function(u) {
        var ub = document.createElement('button');
        ub.type = 'button';
        ub.className = 'unit-toggle-btn' + (row.unit === u ? ' active' : '');
        ub.textContent = u;
        ub.addEventListener('click', function() {
          if (row.unit === u) return;
          row.unit = u;
          renderBlendRows();
          update();
        });
        unitGroup.appendChild(ub);
      });
      item.appendChild(unitGroup);

      var rm = document.createElement('button');
      rm.type = 'button';
      rm.className = 'blend-remove';
      rm.setAttribute('aria-label', 'Remove');
      rm.innerHTML = '&times;';
      rm.disabled = state.blend.length <= 1;
      rm.addEventListener('click', function() {
        state.blend.splice(idx, 1);
        renderBlendRows();
        update();
      });
      item.appendChild(rm);

      list.appendChild(item);
    });
  }

  // "Dose refers to" selector: Total blend, or one component as the anchor peptide.
  // With an anchor, the dose means mg/mcg OF THAT peptide; everything else follows.
  function renderBlendAnchorPills() {
    var wrap = document.getElementById('blend-anchor');
    if (!wrap) return;
    var isBlend = state.mode === 'blend';
    wrap.style.display = isBlend ? '' : 'none';
    if (!isBlend) return;
    var c = document.getElementById('blend-anchor-pills');
    c.innerHTML = '';
    var comps = getBlendComponents();
    var names = comps.map(function(x) { return x.name; });
    var anchorValid = state.blendAnchor && names.indexOf(state.blendAnchor) !== -1;

    var totalBtn = document.createElement('button');
    totalBtn.type = 'button';
    totalBtn.className = 'pill' + (!anchorValid ? ' active' : '');
    totalBtn.textContent = t('blendAnchorTotal');
    totalBtn.addEventListener('click', function() {
      state.blendAnchor = null;
      update();
    });
    c.appendChild(totalBtn);

    comps.forEach(function(comp) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'pill blend-anchor-pill' + (anchorValid && state.blendAnchor === comp.name ? ' active' : '');
      b.innerHTML = '<span class="bb-dot" style="background:' + comp.color + '"></span>' + escapeHtml(comp.name);
      b.addEventListener('click', function() {
        state.blendAnchor = comp.name;
        update();
      });
      c.appendChild(b);
    });
  }

  function renderPeptideSelect() {
    var sel = document.getElementById('peptide-select');
    sel.innerHTML = '';
    var emptyOpt = document.createElement('option');
    emptyOpt.value = '';
    emptyOpt.textContent = t('selectPeptide');
    sel.appendChild(emptyOpt);
    var keys = Object.keys(PEPTIDE_DEFAULTS).sort();
    keys.forEach(function(p) {
      var opt = document.createElement('option');
      opt.value = p;
      opt.textContent = p;
      sel.appendChild(opt);
    });
    sel.value = state.peptide;
  }

  function renderPeptideInfo() {
    var info = document.getElementById('peptide-info');
    var txt = document.getElementById('peptide-info-text');
    if (state.peptide && state.autoApplied) {
      info.style.display = 'flex';
      txt.textContent = t('defaultsApplied', { p: state.peptide });
    } else {
      info.style.display = 'none';
    }
  }

  // ---------- Calculation ----------
  function calculate() {
    // Blend mode: total mg comes from the component rows, not the vial step.
    if (state.mode === 'blend') {
      var compsB = getBlendComponents();
      if (compsB.length === 0) return null;
      var totalMgB = 0;
      for (var bi = 0; bi < compsB.length; bi++) totalMgB += compsB[bi].mg;
      if (totalMgB <= 0) return null;
      if (state.water == null || state.water <= 0) return null;
      if (state.dose == null || state.dose <= 0) return null;
      var doseMgB = state.doseUnit === 'mcg' ? state.dose / 1000 : state.dose;
      var concB = totalMgB / state.water;
      // Sort descending so the largest component sits at the bottom of the
      // vial and tops the breakdown list (colors stay tied to builder rows).
      compsB.sort(function(a, b) { return b.mg - a.mg; });
      // Anchor peptide: the dose refers to ONE component; the draw volume is
      // whatever delivers that much of it, and the rest scales along.
      var anchorB = null;
      if (state.blendAnchor) {
        for (var ai = 0; ai < compsB.length; ai++) {
          if (compsB[ai].name === state.blendAnchor) { anchorB = compsB[ai]; break; }
        }
      }
      var volB, dosesB;
      if (anchorB) {
        volB = doseMgB / (anchorB.mg / state.water);
        dosesB = anchorB.mg / doseMgB;
      } else {
        volB = doseMgB / concB;
        dosesB = totalMgB / doseMgB;
      }
      return {
        reverse: false, spray: false, blend: true,
        components: compsB, totalMg: totalMgB, anchor: anchorB ? anchorB.name : null,
        concentration: concB, volumeMl: volB,
        unitsToDraw: volB * 100, maxUnits: 100, syringeType: 100,
        totalDoses: dosesB, doseMg: doseMgB
      };
    }

    if (state.vial == null || state.dose == null) return null;
    if (state.vial <= 0 || state.dose <= 0) return null;

    var doseMg = state.doseUnit === 'mcg' ? state.dose / 1000 : state.dose;
    var totalDoses = state.vial / doseMg;
    var syringeType = state.syringeType || 100;

    // Nose spray mode
    if (state.mode === 'spray') {
      if (state.water == null || state.water <= 0) return null;
      if (state.sprayVolume == null || state.sprayVolume <= 0) return null;
      var concS = state.vial / state.water;
      var volS = doseMg / concS;
      return { reverse: false, spray: true, concentration: concS, volumeMl: volS, totalDoses: totalDoses, doseMg: doseMg, spraysNeeded: volS / state.sprayVolume };
    }

    // Reverse: solve for BAC water from a target number of units.
    // Assumes the standard U100 insulin syringe (100 units/ml); no type/volume needed.
    if (state.solveFor === 'water') {
      if (state.targetUnits == null || state.targetUnits <= 0) return null;
      var stR = 100;
      var volR = state.targetUnits / stR;               // ml that the target units represent
      var waterR = state.vial * volR / doseMg;          // = vial * targetUnits / (100 * doseMg)
      return { reverse: true, spray: false, water: waterR, concentration: state.vial / waterR, volumeMl: volR, unitsToDraw: state.targetUnits, syringeType: stR, totalDoses: totalDoses, doseMg: doseMg };
    }

    // Pen mode (forward) — standard U100 pen, no type/volume steps
    if (state.mode === 'pen') {
      if (state.water == null || state.water <= 0) return null;
      var concP = state.vial / state.water;
      var volP = doseMg / concP;
      return { reverse: false, spray: false, pen: true, concentration: concP, volumeMl: volP, unitsToDraw: volP * 100, totalDoses: totalDoses, doseMg: doseMg, syringeType: 100 };
    }

    // Forward (solve for units) — requires type + volume + water
    if (state.syringe == null) return null;
    if (state.capacity == null || state.capacity <= 0) return null;
    var maxUnits = state.capacity * syringeType; // syringe capacity expressed in units
    if (state.water == null || state.water <= 0) return null;
    var concentration = state.vial / state.water;
    var volumeMl = doseMg / concentration;
    return { reverse: false, spray: false, concentration: concentration, volumeMl: volumeMl, unitsToDraw: volumeMl * syringeType, maxUnits: maxUnits, totalDoses: totalDoses, doseMg: doseMg };
  }

  function updateStepStatus() {
    var solveWater = state.mode !== 'spray' && state.mode !== 'blend' && state.solveFor === 'water';

    // Blend builder step: complete when at least one valid component exists
    var blendRowEl = document.getElementById('blend-row');
    if (blendRowEl) {
      var blendComps = getBlendComponents();
      var blendTotal = 0;
      for (var bt = 0; bt < blendComps.length; bt++) blendTotal += blendComps[bt].mg;
      blendRowEl.classList.toggle('complete', blendTotal > 0);
      document.getElementById('hint-blend').textContent = blendTotal > 0 ? t('blendTotal', { n: formatNum(blendTotal) }) : '';
    }

    document.getElementById('step-1').classList.toggle('complete', state.vial != null && state.vial > 0);
    var step2Complete = solveWater
      ? (state.targetUnits != null && state.targetUnits > 0)
      : (state.water != null && state.water > 0);
    document.getElementById('step-2').classList.toggle('complete', step2Complete);
    document.getElementById('step-3').classList.toggle('complete', state.dose != null && state.dose > 0);

    var step4Complete = state.mode === 'syringe'
      ? state.syringe != null
      : state.sprayVolume != null && state.sprayVolume > 0;
    document.getElementById('step-4').classList.toggle('complete', step4Complete);
    document.getElementById('step-5').classList.toggle('complete', state.capacity != null && state.capacity > 0);

    var vialUnit = state.doseUnit === 'iu' ? 'IU' : 'mg';
    var doseUnitLabel = state.doseUnit === 'iu' ? 'IU' : state.doseUnit;
    document.getElementById('hint-1').textContent = state.vial != null ? state.vial + ' ' + vialUnit : vialUnit;
    document.getElementById('hint-2').textContent = solveWater
      ? (state.targetUnits != null ? state.targetUnits + ' u' : 'u')
      : (state.water != null ? state.water + ' ml' : 'ml');
    document.getElementById('hint-3').textContent = state.dose != null ? formatNum(state.dose) + ' ' + doseUnitLabel : '';
    document.getElementById('hint-4').textContent = state.mode === 'syringe'
      ? (state.syringe != null ? 'U' + state.syringe : '')
      : (state.sprayVolume != null ? state.sprayVolume + ' ml' : '');
    document.getElementById('hint-5').textContent = state.capacity != null ? state.capacity + ' ml' : 'ml';

    // Update step 2 title based on mode / solve direction
    var step2Title = document.querySelector('#step-2 .step-title');
    if (step2Title) step2Title.textContent = t(state.mode === 'spray' ? 'step2spray' : (solveWater ? 'step2units' : 'step2'));

    // Update step 4 title based on mode
    var step4Title = document.querySelector('#step-4 .step-title');
    if (step4Title) step4Title.textContent = t(state.mode === 'syringe' ? 'step4' : 'step4spray');
  }

  function formatNum(n, max) {
    if (max === undefined) max = 4;
    if (n == null || isNaN(n)) return '—';
    if (n === 0) return '0';
    if (Math.abs(n) < 0.001) return n.toExponential(2);
    var fixed = n.toFixed(max);
    return parseFloat(fixed).toString();
  }

  function syringeSvg(fillFraction, capacityUnits, drawUnits) {
    var f = Math.max(0, Math.min(1, fillFraction));
    var overflow = fillFraction > 1;

    // Vertical syringe: needle points UP, plunger/thumb at BOTTOM.
    // Fluid fills from the top (needle end) downward to the plunger.
    var W = 150, H = 490;
    var cx = 75; // horizontal center

    var barrelW = 46;
    var barrelX = cx - barrelW / 2; // = 52
    var barrelY = 68;
    var barrelH = 300;
    var barrelEndY = barrelY + barrelH; // = 368

    var fillH = Math.min(barrelH, barrelH * f);
    var plungerY = barrelY + fillH; // where rubber stopper sits

    var fillColor = overflow ? '#f87171' : '#22d3ee';
    var fillColor2 = overflow ? '#fca5a5' : '#a78bfa';

    // Scale ticks: 0 at top (needle end), max at bottom (plunger end)
    var majorTicks = capacityUnits === 20 ? 4 : capacityUnits === 30 ? 6 : capacityUnits === 40 ? 8 : capacityUnits === 50 ? 5 : 10;
    var minorPerMajor = 5;
    var totalMinor = majorTicks * minorPerMajor;

    var tickMarks = '', tickLabels = '';
    for (var i = 0; i <= totalMinor; i++) {
      var ty = barrelY + (i / totalMinor) * barrelH;
      var isMajor = i % minorPerMajor === 0;
      var tickLen = isMajor ? 9 : 5;
      var opacity = isMajor ? 0.85 : 0.45;
      var tickX = barrelX + barrelW;
      tickMarks += '<line x1="' + tickX + '" y1="' + ty + '" x2="' + (tickX + tickLen) + '" y2="' + ty + '" stroke="rgba(232,236,244,' + opacity + ')" stroke-width="' + (isMajor ? 1.2 : 0.8) + '"/>';
      if (isMajor) {
        var labelVal = Math.round((i / totalMinor) * capacityUnits);
        tickLabels += '<text x="' + (tickX + 13) + '" y="' + (ty + 4) + '" fill="rgba(232,236,244,0.65)" font-size="10" text-anchor="start" font-weight="500" font-family="ui-monospace, SFMono-Regular, Menlo, monospace">' + labelVal + '</text>';
      }
    }

    // Indicator: horizontal dashed line at plunger position, label on left
    var indicator = '';
    if (f > 0) {
      var indX1 = barrelX - 12, indX2 = barrelX + barrelW + 16;
      indicator =
        '<line x1="' + indX1 + '" y1="' + plungerY + '" x2="' + indX2 + '" y2="' + plungerY + '" stroke="' + fillColor + '" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.85"/>' +
        '<rect x="' + (barrelX - 40) + '" y="' + (plungerY - 10) + '" width="32" height="18" rx="4" fill="' + fillColor + '" opacity="0.18"/>' +
        '<text x="' + (barrelX - 25) + '" y="' + (plungerY + 3) + '" fill="' + fillColor + '" font-size="11" text-anchor="middle" font-weight="700" font-family="ui-monospace, SFMono-Regular, Menlo, monospace">' + formatNum(drawUnits, 1) + 'u</text>';
    }

    // Hub (between needle and barrel)
    var hubY = barrelY - 24;
    // Needle
    var needleTipY = 2;

    // Below barrel
    var flangeY = barrelEndY + 2;
    var flangeH = 9;
    var flangeW = barrelW + 34;
    var flangeX = cx - flangeW / 2;
    var rodY = flangeY + flangeH;
    var rodH = 62;
    var thumbCY = rodY + rodH + 16;

    return '<svg class="syringe-viz" viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg">' +
      '<defs>' +
        '<linearGradient id="syFill" x1="0%" y1="0%" x2="100%" y2="0%">' +
          '<stop offset="0%" stop-color="' + fillColor + '" stop-opacity="0.45"/>' +
          '<stop offset="45%" stop-color="' + fillColor2 + '" stop-opacity="0.95"/>' +
          '<stop offset="100%" stop-color="' + fillColor + '" stop-opacity="0.4"/>' +
        '</linearGradient>' +
        '<linearGradient id="syGlass" x1="0%" y1="0%" x2="100%" y2="0%">' +
          '<stop offset="0%" stop-color="rgba(255,255,255,0.03)"/>' +
          '<stop offset="12%" stop-color="rgba(255,255,255,0.18)"/>' +
          '<stop offset="45%" stop-color="rgba(255,255,255,0.04)"/>' +
          '<stop offset="88%" stop-color="rgba(255,255,255,0.10)"/>' +
          '<stop offset="100%" stop-color="rgba(255,255,255,0.02)"/>' +
        '</linearGradient>' +
        '<linearGradient id="sySteel" x1="0%" y1="0%" x2="100%" y2="0%">' +
          '<stop offset="0%" stop-color="#5c6678"/>' +
          '<stop offset="35%" stop-color="#e8edf5"/>' +
          '<stop offset="60%" stop-color="#9aa5b8"/>' +
          '<stop offset="100%" stop-color="#3d4557"/>' +
        '</linearGradient>' +
        '<linearGradient id="syStopper" x1="0%" y1="0%" x2="100%" y2="0%">' +
          '<stop offset="0%" stop-color="#10141f"/>' +
          '<stop offset="45%" stop-color="#3a4257"/>' +
          '<stop offset="100%" stop-color="#10141f"/>' +
        '</linearGradient>' +
        '<radialGradient id="syThumb" cx="50%" cy="35%" r="75%">' +
          '<stop offset="0%" stop-color="rgba(255,255,255,0.16)"/>' +
          '<stop offset="100%" stop-color="rgba(255,255,255,0.03)"/>' +
        '</radialGradient>' +
        '<filter id="syGlow" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="5"/></filter>' +
      '</defs>' +
      // Soft glow halo behind the fluid
      (fillH > 6 ? '<rect x="' + (barrelX + 4) + '" y="' + (barrelY + 4) + '" width="' + (barrelW - 8) + '" height="' + Math.max(0, fillH - 8) + '" fill="' + fillColor + '" opacity="0.22" filter="url(#syGlow)"/>' : '') +
      // Needle: tapered steel shaft with glint and bevel
      '<path d="M' + (cx - 1.6) + ' ' + hubY + ' L' + (cx - 1.6) + ' ' + (needleTipY + 8) + ' L' + cx + ' ' + needleTipY + ' L' + (cx + 1.6) + ' ' + (needleTipY + 8) + ' L' + (cx + 1.6) + ' ' + hubY + ' Z" fill="url(#sySteel)"/>' +
      '<line x1="' + (cx - 0.5) + '" y1="' + (needleTipY + 8) + '" x2="' + (cx - 0.5) + '" y2="' + hubY + '" stroke="rgba(255,255,255,0.75)" stroke-width="0.5"/>' +
      '<line x1="' + cx + '" y1="' + needleTipY + '" x2="' + (cx + 1.6) + '" y2="' + (needleTipY + 6) + '" stroke="rgba(255,255,255,0.9)" stroke-width="0.6" stroke-linecap="round"/>' +
      // Luer hub: tapered cone + collar at barrel
      '<path d="M' + (cx - 5) + ' ' + hubY + ' L' + (cx + 5) + ' ' + hubY + ' L' + (cx + 11) + ' ' + (barrelY - 6) + ' L' + (cx - 11) + ' ' + (barrelY - 6) + ' Z" fill="rgba(255,255,255,0.13)" stroke="rgba(255,255,255,0.3)" stroke-width="0.8"/>' +
      '<rect x="' + (cx - 13) + '" y="' + (barrelY - 7) + '" width="26" height="8" rx="2.5" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.32)" stroke-width="0.7"/>' +
      // Barrel glass shell
      '<rect x="' + barrelX + '" y="' + barrelY + '" width="' + barrelW + '" height="' + barrelH + '" fill="url(#syGlass)" stroke="rgba(255,255,255,0.25)" stroke-width="1" rx="3"/>' +
      // Cylinder rim hints (3D)
      '<ellipse cx="' + cx + '" cy="' + (barrelY + 2) + '" rx="' + (barrelW / 2 - 1.5) + '" ry="3.5" fill="none" stroke="rgba(255,255,255,0.16)" stroke-width="0.8"/>' +
      '<ellipse cx="' + cx + '" cy="' + (barrelEndY - 2) + '" rx="' + (barrelW / 2 - 1.5) + '" ry="3.5" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="0.8"/>' +
      // Inner wall shadows (left dark, right soft)
      '<rect x="' + (barrelX + 1) + '" y="' + (barrelY + 1) + '" width="2.5" height="' + (barrelH - 2) + '" fill="rgba(0,0,0,0.3)" rx="1"/>' +
      '<rect x="' + (barrelX + barrelW - 3) + '" y="' + (barrelY + 1) + '" width="2" height="' + (barrelH - 2) + '" fill="rgba(0,0,0,0.15)" rx="1"/>' +
      // Fluid (fills from needle/top down to plunger)
      (fillH > 2 ? '<rect class="fill-rect" x="' + (barrelX + 2) + '" y="' + (barrelY + 1) + '" width="' + (barrelW - 4) + '" height="' + Math.max(0, fillH - 2) + '" fill="url(#syFill)" rx="2"/>' : '') +
      // Fluid shine stripes (strong left, faint right)
      (f > 0 ? '<rect x="' + (barrelX + 5) + '" y="' + (barrelY + 3) + '" width="2.5" height="' + Math.max(0, fillH - 7) + '" fill="rgba(255,255,255,0.4)" rx="1.2"/>' +
               '<rect x="' + (barrelX + barrelW - 9) + '" y="' + (barrelY + 3) + '" width="1.2" height="' + Math.max(0, fillH - 7) + '" fill="rgba(255,255,255,0.18)" rx="0.6"/>' : '') +
      // Rubber stopper: domed head toward fluid + two sealing ribs
      '<path d="M' + (barrelX + 2) + ' ' + (plungerY - 3) + ' Q' + cx + ' ' + (plungerY - 9) + ' ' + (barrelX + barrelW - 2) + ' ' + (plungerY - 3) + ' L' + (barrelX + barrelW - 2) + ' ' + (plungerY + 7) + ' L' + (barrelX + 2) + ' ' + (plungerY + 7) + ' Z" fill="url(#syStopper)" stroke="rgba(255,255,255,0.28)" stroke-width="0.7"/>' +
      '<rect x="' + (barrelX + 2) + '" y="' + (plungerY - 1) + '" width="' + (barrelW - 4) + '" height="2" fill="rgba(0,0,0,0.4)"/>' +
      '<rect x="' + (barrelX + 2) + '" y="' + (plungerY + 3) + '" width="' + (barrelW - 4) + '" height="2" fill="rgba(0,0,0,0.4)"/>' +
      '<line x1="' + (barrelX + 4) + '" y1="' + (plungerY + 1.5) + '" x2="' + (barrelX + barrelW - 4) + '" y2="' + (plungerY + 1.5) + '" stroke="rgba(255,255,255,0.12)" stroke-width="0.6"/>' +
      tickMarks + tickLabels + indicator +
      // Finger flange with underside shadow
      '<rect x="' + flangeX + '" y="' + flangeY + '" width="' + flangeW + '" height="' + flangeH + '" rx="4" fill="rgba(255,255,255,0.11)" stroke="rgba(255,255,255,0.22)" stroke-width="0.9"/>' +
      '<line x1="' + (flangeX + 4) + '" y1="' + (flangeY + flangeH - 1.5) + '" x2="' + (flangeX + flangeW - 4) + '" y2="' + (flangeY + flangeH - 1.5) + '" stroke="rgba(0,0,0,0.3)" stroke-width="1"/>' +
      // Plunger rod: cross profile + ridges
      '<rect x="' + (cx - 3.5) + '" y="' + rodY + '" width="7" height="' + rodH + '" fill="rgba(255,255,255,0.13)" stroke="rgba(255,255,255,0.16)" stroke-width="0.5"/>' +
      '<rect x="' + (cx - 11) + '" y="' + rodY + '" width="2.5" height="' + rodH + '" fill="rgba(255,255,255,0.06)"/>' +
      '<rect x="' + (cx + 8.5) + '" y="' + rodY + '" width="2.5" height="' + rodH + '" fill="rgba(255,255,255,0.06)"/>' +
      '<line x1="' + (cx - 11) + '" y1="' + (rodY + rodH * 0.33) + '" x2="' + (cx + 11) + '" y2="' + (rodY + rodH * 0.33) + '" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>' +
      '<line x1="' + (cx - 11) + '" y1="' + (rodY + rodH * 0.66) + '" x2="' + (cx + 11) + '" y2="' + (rodY + rodH * 0.66) + '" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>' +
      // Thumb pad: shadow, domed disc, top highlight
      '<ellipse cx="' + cx + '" cy="' + (thumbCY + 3) + '" rx="23" ry="13" fill="rgba(0,0,0,0.28)"/>' +
      '<ellipse cx="' + cx + '" cy="' + thumbCY + '" rx="23" ry="14" fill="url(#syThumb)" stroke="rgba(255,255,255,0.24)" stroke-width="1"/>' +
      '<path d="M' + (cx - 13) + ' ' + (thumbCY - 6) + ' Q' + cx + ' ' + (thumbCY - 12) + ' ' + (cx + 13) + ' ' + (thumbCY - 6) + '" stroke="rgba(255,255,255,0.3)" stroke-width="1.2" fill="none" stroke-linecap="round"/>' +
      // Capacity label (shown when syringe is empty)
      '<text x="' + cx + '" y="' + (H - 6) + '" fill="rgba(139,149,173,0.5)" font-size="10" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" opacity="' + (f > 0 ? 0 : 0.9) + '">' + capacityUnits + 'u</text>' +
    '</svg>';
  }

  // Vial showing the amount of BAC water to add (reverse mode)
  function vialFillSvg(waterMl) {
    var W = 150, H = 490, cx = 75;
    var maxMl = 3.0;
    var bodyTop = 150, bodyBottom = 440;
    var pxPerMl = (bodyBottom - bodyTop) / maxMl;
    var clampMl = Math.max(0, Math.min(maxMl, waterMl));
    var liquidY = bodyBottom - clampMl * pxPerMl;
    var bodyX = 38, bodyW = 74;
    var rx = bodyX + bodyW; // right edge

    // Scale ticks (0–3 ml) on the right
    var ticks = '', labels = '';
    for (var i = 0; i <= maxMl * 2; i++) {
      var ml = i / 2;
      var ty = bodyBottom - ml * pxPerMl;
      var major = i % 2 === 0;
      ticks += '<line x1="' + rx + '" y1="' + ty + '" x2="' + (rx + (major ? 9 : 5)) + '" y2="' + ty + '" stroke="rgba(232,236,244,' + (major ? 0.7 : 0.4) + ')" stroke-width="' + (major ? 1.2 : 0.8) + '"/>';
      if (major) labels += '<text x="' + (rx + 13) + '" y="' + (ty + 4) + '" fill="rgba(232,236,244,0.6)" font-size="11" text-anchor="start" font-family="ui-monospace, SFMono-Regular, Menlo, monospace">' + ml + '</text>';
    }

    // Indicator line + label at the liquid surface
    var indicator = '';
    if (waterMl > 0) {
      indicator =
        '<line x1="' + (bodyX - 14) + '" y1="' + liquidY + '" x2="' + (rx + 4) + '" y2="' + liquidY + '" stroke="#22d3ee" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.85"/>' +
        '<rect x="' + (bodyX - 46) + '" y="' + (liquidY - 11) + '" width="36" height="20" rx="4" fill="#22d3ee" opacity="0.18"/>' +
        '<text x="' + (bodyX - 28) + '" y="' + (liquidY + 3) + '" fill="#22d3ee" font-size="11" text-anchor="middle" font-weight="700" font-family="ui-monospace, SFMono-Regular, Menlo, monospace">' + formatNum(waterMl, 2) + '</text>';
    }

    return '<svg class="syringe-viz" viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg">' +
      '<defs>' +
        '<linearGradient id="rvGlass" x1="0%" y1="0%" x2="100%" y2="0%">' +
          '<stop offset="0%" stop-color="rgba(255,255,255,0.02)"/>' +
          '<stop offset="18%" stop-color="rgba(255,255,255,0.12)"/>' +
          '<stop offset="50%" stop-color="rgba(255,255,255,0.04)"/>' +
          '<stop offset="82%" stop-color="rgba(255,255,255,0.12)"/>' +
          '<stop offset="100%" stop-color="rgba(255,255,255,0.02)"/>' +
        '</linearGradient>' +
        '<linearGradient id="rvLiquid" x1="0%" y1="0%" x2="100%" y2="0%">' +
          '<stop offset="0%" stop-color="#22d3ee" stop-opacity="0.45"/>' +
          '<stop offset="50%" stop-color="#a78bfa" stop-opacity="0.75"/>' +
          '<stop offset="100%" stop-color="#22d3ee" stop-opacity="0.45"/>' +
        '</linearGradient>' +
        '<linearGradient id="rvCap" x1="0%" y1="0%" x2="0%" y2="100%">' +
          '<stop offset="0%" stop-color="#a78bfa"/>' +
          '<stop offset="100%" stop-color="#7c5cf0"/>' +
        '</linearGradient>' +
      '</defs>' +
      // Cap
      '<rect x="' + (cx - 22) + '" y="74" width="44" height="20" rx="4" fill="url(#rvCap)"/>' +
      '<rect x="' + (cx - 25) + '" y="92" width="50" height="7" rx="2" fill="rgba(167,139,250,0.6)"/>' +
      // Neck
      '<rect x="' + (cx - 14) + '" y="99" width="28" height="16" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.25)" stroke-width="0.8"/>' +
      // Shoulder
      '<path d="M' + (cx - 14) + ' 115 L' + bodyX + ' 150 L' + rx + ' 150 L' + (cx + 14) + ' 115 Z" fill="url(#rvGlass)" stroke="rgba(255,255,255,0.22)" stroke-width="1"/>' +
      // Body glass
      '<path d="M' + bodyX + ' 150 L' + bodyX + ' ' + (bodyBottom - 14) + ' Q' + bodyX + ' ' + bodyBottom + ' ' + (bodyX + 14) + ' ' + bodyBottom + ' L' + (rx - 14) + ' ' + bodyBottom + ' Q' + rx + ' ' + bodyBottom + ' ' + rx + ' ' + (bodyBottom - 14) + ' L' + rx + ' 150 Z" fill="url(#rvGlass)" stroke="rgba(255,255,255,0.24)" stroke-width="1"/>' +
      // Liquid
      (clampMl > 0 ? '<path d="M' + (bodyX + 2) + ' ' + liquidY + ' L' + (bodyX + 2) + ' ' + (bodyBottom - 14) + ' Q' + (bodyX + 2) + ' ' + (bodyBottom - 2) + ' ' + (bodyX + 14) + ' ' + (bodyBottom - 2) + ' L' + (rx - 14) + ' ' + (bodyBottom - 2) + ' Q' + (rx - 2) + ' ' + (bodyBottom - 2) + ' ' + (rx - 2) + ' ' + (bodyBottom - 14) + ' L' + (rx - 2) + ' ' + liquidY + ' Z" fill="url(#rvLiquid)"/>' +
        '<line x1="' + (bodyX + 3) + '" y1="' + liquidY + '" x2="' + (rx - 3) + '" y2="' + liquidY + '" stroke="rgba(255,255,255,0.45)" stroke-width="1"/>' : '') +
      // Left glass highlight
      '<rect x="' + (bodyX + 3) + '" y="158" width="3" height="' + (bodyBottom - 172) + '" rx="1.5" fill="rgba(255,255,255,0.12)"/>' +
      ticks + labels + indicator +
      '<text x="' + (rx + 14) + '" y="' + (bodyTop - 8) + '" fill="rgba(139,149,173,0.6)" font-size="10" text-anchor="start" font-family="ui-monospace, SFMono-Regular, Menlo, monospace">ml</text>' +
    '</svg>';
  }

  // Blend vial: liquid divided into horizontal bands proportional to each component's mg share
  function blendVialSvg(components, totalMg, waterMl) {
    var W = 150, H = 490, cx = 75;
    var maxMl = Math.max(3, waterMl || 0);
    var bodyTop = 150, bodyBottom = 440;
    var pxPerMl = (bodyBottom - bodyTop) / maxMl;
    var clampMl = Math.max(0, Math.min(maxMl, waterMl || 0));
    var liquidY = bodyBottom - clampMl * pxPerMl;
    var bodyX = 38, bodyW = 74;
    var rx = bodyX + bodyW;

    // Scale ticks on the right (0..maxMl, halves)
    var ticks = '', labels = '';
    for (var i = 0; i <= maxMl * 2; i++) {
      var ml = i / 2;
      var ty = bodyBottom - ml * pxPerMl;
      var major = i % 2 === 0;
      ticks += '<line x1="' + rx + '" y1="' + ty + '" x2="' + (rx + (major ? 9 : 5)) + '" y2="' + ty + '" stroke="rgba(232,236,244,' + (major ? 0.7 : 0.4) + ')" stroke-width="' + (major ? 1.2 : 0.8) + '"/>';
      if (major) labels += '<text x="' + (rx + 13) + '" y="' + (ty + 4) + '" fill="rgba(232,236,244,0.6)" font-size="11" text-anchor="start" font-family="ui-monospace, SFMono-Regular, Menlo, monospace">' + ml + '</text>';
    }

    // Liquid region path (rounded bottom) — used as clip for the color bands
    var liquidPath = 'M' + (bodyX + 2) + ' ' + liquidY +
      ' L' + (bodyX + 2) + ' ' + (bodyBottom - 14) +
      ' Q' + (bodyX + 2) + ' ' + (bodyBottom - 2) + ' ' + (bodyX + 14) + ' ' + (bodyBottom - 2) +
      ' L' + (rx - 14) + ' ' + (bodyBottom - 2) +
      ' Q' + (rx - 2) + ' ' + (bodyBottom - 2) + ' ' + (rx - 2) + ' ' + (bodyBottom - 14) +
      ' L' + (rx - 2) + ' ' + liquidY + ' Z';

    // Stacked bands, first component at the bottom
    var bands = '';
    var liquidH = (bodyBottom - 2) - liquidY;
    var yCursor = bodyBottom - 2;
    for (var b = 0; b < components.length; b++) {
      var bandH = liquidH * (components[b].mg / totalMg);
      var yTop = yCursor - bandH;
      bands += '<rect x="' + (bodyX + 2) + '" y="' + yTop + '" width="' + (bodyW - 4) + '" height="' + (bandH + 0.5) + '" fill="' + components[b].color + '" opacity="0.5"/>';
      if (b < components.length - 1) {
        bands += '<line x1="' + (bodyX + 4) + '" y1="' + yTop + '" x2="' + (rx - 4) + '" y2="' + yTop + '" stroke="rgba(255,255,255,0.3)" stroke-width="0.8"/>';
      }
      yCursor = yTop;
    }

    return '<svg class="syringe-viz" viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg">' +
      '<defs>' +
        '<linearGradient id="blGlass" x1="0%" y1="0%" x2="100%" y2="0%">' +
          '<stop offset="0%" stop-color="rgba(255,255,255,0.02)"/>' +
          '<stop offset="18%" stop-color="rgba(255,255,255,0.12)"/>' +
          '<stop offset="50%" stop-color="rgba(255,255,255,0.04)"/>' +
          '<stop offset="82%" stop-color="rgba(255,255,255,0.12)"/>' +
          '<stop offset="100%" stop-color="rgba(255,255,255,0.02)"/>' +
        '</linearGradient>' +
        '<linearGradient id="blCap" x1="0%" y1="0%" x2="0%" y2="100%">' +
          '<stop offset="0%" stop-color="#a78bfa"/>' +
          '<stop offset="100%" stop-color="#7c5cf0"/>' +
        '</linearGradient>' +
        '<clipPath id="blClip"><path d="' + liquidPath + '"/></clipPath>' +
      '</defs>' +
      // Cap + neck + shoulder (same family as the BAC-water vial)
      '<rect x="' + (cx - 22) + '" y="74" width="44" height="20" rx="4" fill="url(#blCap)"/>' +
      '<rect x="' + (cx - 25) + '" y="92" width="50" height="7" rx="2" fill="rgba(167,139,250,0.6)"/>' +
      '<rect x="' + (cx - 14) + '" y="99" width="28" height="16" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.25)" stroke-width="0.8"/>' +
      '<path d="M' + (cx - 14) + ' 115 L' + bodyX + ' 150 L' + rx + ' 150 L' + (cx + 14) + ' 115 Z" fill="url(#blGlass)" stroke="rgba(255,255,255,0.22)" stroke-width="1"/>' +
      // Body glass
      '<path d="M' + bodyX + ' 150 L' + bodyX + ' ' + (bodyBottom - 14) + ' Q' + bodyX + ' ' + bodyBottom + ' ' + (bodyX + 14) + ' ' + bodyBottom + ' L' + (rx - 14) + ' ' + bodyBottom + ' Q' + rx + ' ' + bodyBottom + ' ' + rx + ' ' + (bodyBottom - 14) + ' L' + rx + ' 150 Z" fill="url(#blGlass)" stroke="rgba(255,255,255,0.24)" stroke-width="1"/>' +
      // Component bands clipped to the liquid region + meniscus
      (clampMl > 0 && components.length > 0 ?
        '<g clip-path="url(#blClip)">' + bands + '</g>' +
        '<line x1="' + (bodyX + 3) + '" y1="' + liquidY + '" x2="' + (rx - 3) + '" y2="' + liquidY + '" stroke="rgba(255,255,255,0.45)" stroke-width="1"/>'
      : '') +
      // Glass highlight
      '<rect x="' + (bodyX + 3) + '" y="158" width="3" height="' + (bodyBottom - 172) + '" rx="1.5" fill="rgba(255,255,255,0.12)"/>' +
      ticks + labels +
      '<text x="' + (rx + 14) + '" y="' + (bodyTop - 8) + '" fill="rgba(139,149,173,0.6)" font-size="10" text-anchor="start" font-family="ui-monospace, SFMono-Regular, Menlo, monospace">ml</text>' +
      // Total under the vial
      '<text x="' + cx + '" y="' + (H - 18) + '" fill="rgba(232,236,244,0.6)" font-size="11" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace">' + formatNum(totalMg) + ' mg / ' + formatNum(clampMl) + ' ml</text>' +
    '</svg>';
  }

  function sprayBottleSvg(spraysNeeded) {
    var W = 150, H = 490;
    var cx = 75;
    var sprays = spraysNeeded != null ? Math.ceil(spraysNeeded) : 0;
    var sprayLabel = sprays > 0 ? sprays : '';

    // Nasal spray: upward-pointing nozzle, finger rests, wide bottle
    // bw = bottle half-width
    var bw = 30;
    return '<svg class="syringe-viz" viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg">' +
      '<defs>' +
        '<linearGradient id="spBottle" x1="0%" y1="0%" x2="100%" y2="0%">' +
          '<stop offset="0%" stop-color="rgba(34,211,238,0.06)"/>' +
          '<stop offset="18%" stop-color="rgba(255,255,255,0.14)"/>' +
          '<stop offset="45%" stop-color="rgba(167,139,250,0.16)"/>' +
          '<stop offset="82%" stop-color="rgba(167,139,250,0.10)"/>' +
          '<stop offset="100%" stop-color="rgba(34,211,238,0.05)"/>' +
        '</linearGradient>' +
        '<linearGradient id="spLiquid" x1="0%" y1="0%" x2="100%" y2="0%">' +
          '<stop offset="0%" stop-color="#22d3ee" stop-opacity="0.32"/>' +
          '<stop offset="45%" stop-color="#a78bfa" stop-opacity="0.65"/>' +
          '<stop offset="100%" stop-color="#22d3ee" stop-opacity="0.3"/>' +
        '</linearGradient>' +
        '<linearGradient id="spCap" x1="0%" y1="0%" x2="0%" y2="100%">' +
          '<stop offset="0%" stop-color="rgba(255,255,255,0.24)"/>' +
          '<stop offset="100%" stop-color="rgba(255,255,255,0.06)"/>' +
        '</linearGradient>' +
        '<radialGradient id="spMistGrad" cx="50%" cy="65%" r="55%">' +
          '<stop offset="0%" stop-color="#22d3ee" stop-opacity="0.45"/>' +
          '<stop offset="55%" stop-color="#a78bfa" stop-opacity="0.14"/>' +
          '<stop offset="100%" stop-color="#22d3ee" stop-opacity="0"/>' +
        '</radialGradient>' +
        '<filter id="spBlur" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="2.2"/></filter>' +
      '</defs>' +
      // ── Upward mist: fan rays + blurred droplet cloud ──
      (sprays > 0 ?
        '<ellipse cx="' + cx + '" cy="26" rx="30" ry="30" fill="url(#spMistGrad)" opacity="0.7"/>' +
        '<line x1="' + cx + '" y1="48" x2="' + (cx - 17) + '" y2="16" stroke="#22d3ee" stroke-width="1.6" stroke-linecap="round" opacity="0.22"/>' +
        '<line x1="' + cx + '" y1="48" x2="' + cx + '" y2="10" stroke="#22d3ee" stroke-width="1.6" stroke-linecap="round" opacity="0.3"/>' +
        '<line x1="' + cx + '" y1="48" x2="' + (cx + 17) + '" y2="16" stroke="#22d3ee" stroke-width="1.6" stroke-linecap="round" opacity="0.22"/>' +
        '<g filter="url(#spBlur)">' +
          '<circle cx="' + (cx - 11) + '" cy="20" r="2.4" fill="#22d3ee" opacity="0.5"/>' +
          '<circle cx="' + (cx + 12) + '" cy="16" r="2.2" fill="#a78bfa" opacity="0.45"/>' +
          '<circle cx="' + (cx + 3) + '" cy="8" r="2.6" fill="#22d3ee" opacity="0.4"/>' +
          '<circle cx="' + (cx - 15) + '" cy="33" r="1.7" fill="#a78bfa" opacity="0.35"/>' +
          '<circle cx="' + (cx + 17) + '" cy="28" r="1.9" fill="#22d3ee" opacity="0.35"/>' +
        '</g>' +
        '<circle cx="' + (cx - 6) + '" cy="12" r="1.2" fill="#e8ecf4" opacity="0.4"/>' +
        '<circle cx="' + (cx + 9) + '" cy="6" r="1" fill="#e8ecf4" opacity="0.35"/>' +
        '<circle cx="' + (cx - 2) + '" cy="24" r="1.1" fill="#e8ecf4" opacity="0.3"/>'
      : '') +
      // ── Nozzle: tapered cone with orifice ──
      '<path d="M' + (cx - 3.5) + ' 50 Q' + (cx - 5) + ' 56 ' + (cx - 7) + ' 73 L' + (cx + 7) + ' 73 Q' + (cx + 5) + ' 56 ' + (cx + 3.5) + ' 50 Z" fill="rgba(255,255,255,0.13)" stroke="rgba(255,255,255,0.3)" stroke-width="0.8"/>' +
      '<ellipse cx="' + cx + '" cy="50" rx="3.5" ry="2" fill="rgba(255,255,255,0.16)" stroke="rgba(255,255,255,0.35)" stroke-width="0.7"/>' +
      '<ellipse cx="' + cx + '" cy="50" rx="1.4" ry="0.9" fill="rgba(34,211,238,0.55)"/>' +
      '<line x1="' + (cx - 4.5) + '" y1="56" x2="' + (cx - 5.8) + '" y2="70" stroke="rgba(255,255,255,0.3)" stroke-width="0.8"/>' +
      // ── Actuator (flared skirt, press-down part) ──
      '<path d="M' + (cx - 13) + ' 73 L' + (cx + 13) + ' 73 Q' + (cx + 20) + ' 73 ' + (cx + 20) + ' 82 L' + (cx + 20) + ' 95 L' + (cx - 20) + ' 95 L' + (cx - 20) + ' 82 Q' + (cx - 20) + ' 73 ' + (cx - 13) + ' 73 Z" fill="url(#spCap)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>' +
      '<line x1="' + (cx - 15) + '" y1="81" x2="' + (cx + 15) + '" y2="81" stroke="rgba(255,255,255,0.12)" stroke-width="0.6"/>' +
      '<line x1="' + (cx - 16) + '" y1="86" x2="' + (cx + 16) + '" y2="86" stroke="rgba(255,255,255,0.12)" stroke-width="0.6"/>' +
      '<line x1="' + (cx - 16) + '" y1="91" x2="' + (cx + 16) + '" y2="91" stroke="rgba(0,0,0,0.2)" stroke-width="0.6"/>' +
      // ── Pump stem ──
      '<rect x="' + (cx - 6) + '" y="95" width="12" height="20" rx="2" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.2)" stroke-width="0.8"/>' +
      '<rect x="' + (cx - 3.5) + '" y="97" width="2" height="16" rx="1" fill="rgba(255,255,255,0.18)"/>' +
      // ── Finger rests (wings) with edge light and underside shadow ──
      '<path d="M' + (cx - 36) + ' 117 Q' + (cx - 36) + ' 111 ' + (cx - 22) + ' 111 L' + (cx + 22) + ' 111 Q' + (cx + 36) + ' 111 ' + (cx + 36) + ' 117 L' + (cx + 36) + ' 126 Q' + (cx + 36) + ' 131 ' + (cx + 22) + ' 131 L' + (cx - 22) + ' 131 Q' + (cx - 36) + ' 131 ' + (cx - 36) + ' 126 Z" fill="url(#spCap)" stroke="rgba(255,255,255,0.25)" stroke-width="0.9"/>' +
      '<path d="M' + (cx - 33) + ' 114 Q' + (cx - 33) + ' 112.5 ' + (cx - 22) + ' 112.5 L' + (cx + 22) + ' 112.5" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="0.8"/>' +
      '<ellipse cx="' + (cx - 27) + '" cy="122" rx="6" ry="4.5" fill="rgba(0,0,0,0.18)"/>' +
      '<ellipse cx="' + (cx + 27) + '" cy="122" rx="6" ry="4.5" fill="rgba(0,0,0,0.18)"/>' +
      '<line x1="' + (cx - 30) + '" y1="130" x2="' + (cx + 30) + '" y2="130" stroke="rgba(0,0,0,0.3)" stroke-width="0.8"/>' +
      // ── Collar with thread ridges ──
      '<rect x="' + (cx - 16) + '" y="131" width="32" height="13" rx="2" fill="rgba(255,255,255,0.09)" stroke="rgba(255,255,255,0.2)" stroke-width="0.8"/>' +
      '<line x1="' + (cx - 13) + '" y1="135" x2="' + (cx + 13) + '" y2="134" stroke="rgba(255,255,255,0.14)" stroke-width="0.7"/>' +
      '<line x1="' + (cx - 13) + '" y1="138.5" x2="' + (cx + 13) + '" y2="137.5" stroke="rgba(255,255,255,0.14)" stroke-width="0.7"/>' +
      '<line x1="' + (cx - 13) + '" y1="142" x2="' + (cx + 13) + '" y2="141" stroke="rgba(255,255,255,0.14)" stroke-width="0.7"/>' +
      // ── Bottle body: curved shoulders, rounded base ──
      '<path d="M' + (cx - 16) + ' 144 C' + (cx - 27) + ' 152 ' + (cx - bw) + ' 166 ' + (cx - bw) + ' 188 L' + (cx - bw) + ' 388 Q' + (cx - bw) + ' 410 ' + (cx - 14) + ' 410 L' + (cx + 14) + ' 410 Q' + (cx + bw) + ' 410 ' + (cx + bw) + ' 388 L' + (cx + bw) + ' 188 C' + (cx + bw) + ' 166 ' + (cx + 27) + ' 152 ' + (cx + 16) + ' 144 Z" fill="url(#spBottle)" stroke="rgba(255,255,255,0.24)" stroke-width="1"/>' +
      // ── Liquid with gently curved surface + bubbles ──
      '<path d="M' + (cx - bw + 2) + ' 240 Q' + cx + ' 246 ' + (cx + bw - 2) + ' 240 L' + (cx + bw - 2) + ' 388 Q' + (cx + bw - 2) + ' 408 ' + (cx + 13) + ' 408 L' + (cx - 13) + ' 408 Q' + (cx - bw + 2) + ' 408 ' + (cx - bw + 2) + ' 388 Z" fill="url(#spLiquid)"/>' +
      '<path d="M' + (cx - bw + 4) + ' 240.5 Q' + cx + ' 246 ' + (cx + bw - 4) + ' 240.5" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>' +
      '<circle cx="' + (cx - 14) + '" cy="382" r="1.6" fill="rgba(255,255,255,0.16)"/>' +
      '<circle cx="' + (cx + 9) + '" cy="368" r="1.2" fill="rgba(255,255,255,0.13)"/>' +
      '<circle cx="' + (cx - 4) + '" cy="393" r="1" fill="rgba(255,255,255,0.12)"/>' +
      // Glass highlights over liquid (left strong, right faint) + base shading
      '<path d="M' + (cx - bw + 4) + ' 175 L' + (cx - bw + 4) + ' 384 Q' + (cx - bw + 4) + ' 404 ' + (cx - 12) + ' 405" fill="none" stroke="rgba(255,255,255,0.16)" stroke-width="2"/>' +
      '<line x1="' + (cx + bw - 5) + '" y1="185" x2="' + (cx + bw - 5) + '" y2="340" stroke="rgba(255,255,255,0.07)" stroke-width="1.2"/>' +
      '<ellipse cx="' + cx + '" cy="406" rx="' + (bw - 8) + '" ry="4" fill="rgba(0,0,0,0.2)"/>' +
      // ── Spray count badge ──
      (sprays > 0 ?
        '<rect x="' + (cx - 20) + '" y="305" width="40" height="38" rx="9" fill="rgba(34,211,238,0.12)" stroke="rgba(34,211,238,0.4)" stroke-width="1"/>' +
        '<text x="' + cx + '" y="330" fill="#22d3ee" font-size="24" text-anchor="middle" font-weight="700" font-family="ui-monospace, SFMono-Regular, Menlo, monospace">' + sprayLabel + '</text>' +
        '<text x="' + cx + '" y="360" fill="rgba(232,236,244,0.5)" font-size="9" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, monospace">' + (lang === 'de' ? 'Sprühstöße' : 'sprays') + '</text>'
      : '') +
    '</svg>';
  }

  // Injector pen: needle -> hub -> body (dose window + cartridge window) -> knurled dial -> push button
  function penSvg(units) {
    var W = 150, H = 490, cx = 75;
    var bodyW = 66, bodyX = cx - bodyW / 2, rx = bodyX + bodyW; // 42 .. 108
    var bodyTop = 66, bodyBottom = 396;
    var dialY = bodyBottom, dialH = 44;
    var btnY = dialY + dialH - 9, btnH = 26; // top 9px sit behind the dial -> recessed button look
    var u = formatNum(units, 1);

    // Knurling on the dose dial (fine vertical grooves)
    var knurl = '';
    for (var k = bodyX + 10; k <= rx - 10; k += 5.5) {
      knurl += '<line x1="' + k + '" y1="' + (dialY + 6) + '" x2="' + k + '" y2="' + (dialY + dialH - 6) + '" stroke="rgba(255,255,255,0.10)" stroke-width="1.4"/>';
    }

    return '<svg class="syringe-viz" viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg">' +
      '<defs>' +
        '<linearGradient id="penBody" x1="0%" y1="0%" x2="100%" y2="0%">' +
          '<stop offset="0%" stop-color="#141926"/>' +
          '<stop offset="15%" stop-color="#2a3344"/>' +
          '<stop offset="42%" stop-color="#3d4a66"/>' +
          '<stop offset="60%" stop-color="#2e3850"/>' +
          '<stop offset="88%" stop-color="#222a3c"/>' +
          '<stop offset="100%" stop-color="#121724"/>' +
        '</linearGradient>' +
        '<linearGradient id="penSteel" x1="0%" y1="0%" x2="100%" y2="0%">' +
          '<stop offset="0%" stop-color="#5c6678"/>' +
          '<stop offset="35%" stop-color="#e8edf5"/>' +
          '<stop offset="60%" stop-color="#9aa5b8"/>' +
          '<stop offset="100%" stop-color="#3d4557"/>' +
        '</linearGradient>' +
        '<linearGradient id="penCartFluid" x1="0%" y1="0%" x2="100%" y2="0%">' +
          '<stop offset="0%" stop-color="#22d3ee" stop-opacity="0.4"/>' +
          '<stop offset="50%" stop-color="#a78bfa" stop-opacity="0.75"/>' +
          '<stop offset="100%" stop-color="#22d3ee" stop-opacity="0.4"/>' +
        '</linearGradient>' +
        '<linearGradient id="penBtn" x1="0%" y1="0%" x2="100%" y2="0%">' +
          '<stop offset="0%" stop-color="#22d3ee"/>' +
          '<stop offset="100%" stop-color="#a78bfa"/>' +
        '</linearGradient>' +
        '<linearGradient id="penBtnSheen" x1="0%" y1="0%" x2="0%" y2="100%">' +
          '<stop offset="0%" stop-color="rgba(255,255,255,0.5)"/>' +
          '<stop offset="100%" stop-color="rgba(255,255,255,0)"/>' +
        '</linearGradient>' +
      '</defs>' +
      // Needle: tapered steel with glint
      '<path d="M' + (cx - 1.6) + ' 30 L' + (cx - 1.6) + ' 10 L' + cx + ' 3 L' + (cx + 1.6) + ' 10 L' + (cx + 1.6) + ' 30 Z" fill="url(#penSteel)"/>' +
      '<line x1="' + (cx - 0.5) + '" y1="10" x2="' + (cx - 0.5) + '" y2="30" stroke="rgba(255,255,255,0.75)" stroke-width="0.5"/>' +
      // Hub cone + collar
      '<path d="M' + (cx - 8) + ' 30 L' + (cx + 8) + ' 30 L' + (cx + 6) + ' 44 L' + (cx - 6) + ' 44 Z" fill="rgba(255,255,255,0.16)" stroke="rgba(255,255,255,0.28)" stroke-width="0.6"/>' +
      // Conical tip: straight taper from the needle hub out to the body width (like a real pen)
      '<path d="M' + (cx - 6) + ' 44 L' + (cx + 6) + ' 44 L' + rx + ' ' + bodyTop + ' L' + bodyX + ' ' + bodyTop + ' Z" fill="url(#penBody)" stroke="rgba(255,255,255,0.16)" stroke-width="0.8"/>' +
      // Body
      '<rect x="' + bodyX + '" y="' + bodyTop + '" width="' + bodyW + '" height="' + (bodyBottom - bodyTop) + '" rx="6" fill="url(#penBody)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>' +
      // Seam where the tip cone meets the body
      '<line x1="' + (bodyX + 1) + '" y1="' + (bodyTop + 1) + '" x2="' + (rx - 1) + '" y2="' + (bodyTop + 1) + '" stroke="rgba(0,0,0,0.4)" stroke-width="1"/>' +
      // Left highlight
      '<rect x="' + (bodyX + 5) + '" y="' + (bodyTop + 10) + '" width="3" height="' + (bodyBottom - bodyTop - 20) + '" rx="1.5" fill="rgba(255,255,255,0.13)"/>' +
      // Dose window with glossy sweep
      '<rect x="' + (bodyX + 10) + '" y="100" width="' + (bodyW - 20) + '" height="42" rx="6" fill="rgba(5,8,16,0.92)" stroke="rgba(255,255,255,0.25)" stroke-width="0.8"/>' +
      '<line x1="' + (bodyX + 12) + '" y1="103" x2="' + (rx - 12) + '" y2="103" stroke="rgba(0,0,0,0.6)" stroke-width="1.5"/>' +
      '<text x="' + cx + '" y="129" fill="#22d3ee" font-size="20" text-anchor="middle" font-weight="700" font-family="ui-monospace, SFMono-Regular, Menlo, monospace">' + u + '</text>' +
      '<path d="M' + (bodyX + 13) + ' 138 L' + (bodyX + 24) + ' 104 L' + (bodyX + 31) + ' 104 L' + (bodyX + 20) + ' 138 Z" fill="rgba(255,255,255,0.06)"/>' +
      // Inset grip grooves below window (dark cut + light lip pairs)
      '<line x1="' + (bodyX + 8) + '" y1="154" x2="' + (rx - 8) + '" y2="154" stroke="rgba(0,0,0,0.35)" stroke-width="1.3" stroke-linecap="round"/>' +
      '<line x1="' + (bodyX + 8) + '" y1="155.5" x2="' + (rx - 8) + '" y2="155.5" stroke="rgba(255,255,255,0.09)" stroke-width="0.7" stroke-linecap="round"/>' +
      '<line x1="' + (bodyX + 8) + '" y1="162" x2="' + (rx - 8) + '" y2="162" stroke="rgba(0,0,0,0.35)" stroke-width="1.3" stroke-linecap="round"/>' +
      '<line x1="' + (bodyX + 8) + '" y1="163.5" x2="' + (rx - 8) + '" y2="163.5" stroke="rgba(255,255,255,0.09)" stroke-width="0.7" stroke-linecap="round"/>' +
      '<line x1="' + (bodyX + 8) + '" y1="170" x2="' + (rx - 8) + '" y2="170" stroke="rgba(0,0,0,0.35)" stroke-width="1.3" stroke-linecap="round"/>' +
      '<line x1="' + (bodyX + 8) + '" y1="171.5" x2="' + (rx - 8) + '" y2="171.5" stroke="rgba(255,255,255,0.09)" stroke-width="0.7" stroke-linecap="round"/>' +
      // Cartridge window showing remaining liquid
      '<rect x="' + (cx - 10) + '" y="192" width="20" height="70" rx="8" fill="rgba(5,8,16,0.85)" stroke="rgba(255,255,255,0.22)" stroke-width="0.8"/>' +
      '<rect x="' + (cx - 7) + '" y="206" width="14" height="52" rx="6" fill="url(#penCartFluid)"/>' +
      '<line x1="' + (cx - 5.5) + '" y1="206" x2="' + (cx + 5.5) + '" y2="206" stroke="rgba(255,255,255,0.4)" stroke-width="0.9"/>' +
      '<rect x="' + (cx - 5) + '" y="210" width="2" height="44" rx="1" fill="rgba(255,255,255,0.3)"/>' +
      // Cartridge-holder seam
      '<line x1="' + (bodyX + 2) + '" y1="286" x2="' + (rx - 2) + '" y2="286" stroke="rgba(0,0,0,0.45)" stroke-width="1.4"/>' +
      '<line x1="' + (bodyX + 2) + '" y1="288" x2="' + (rx - 2) + '" y2="288" stroke="rgba(255,255,255,0.10)" stroke-width="0.8"/>' +
      // Brand accent ring, seated into the body with edge lines
      '<rect x="' + (bodyX + 1) + '" y="328" width="' + (bodyW - 2) + '" height="7" fill="rgba(34,211,238,0.28)"/>' +
      '<line x1="' + (bodyX + 1) + '" y1="328" x2="' + (rx - 1) + '" y2="328" stroke="rgba(255,255,255,0.18)" stroke-width="0.7"/>' +
      '<line x1="' + (bodyX + 1) + '" y1="335" x2="' + (rx - 1) + '" y2="335" stroke="rgba(0,0,0,0.35)" stroke-width="0.9"/>' +
      // Injection button: drawn first so the dial overlaps its top -> looks recessed into the pen
      '<path d="M' + (cx - 17) + ' ' + btnY + ' L' + (cx + 17) + ' ' + btnY + ' L' + (cx + 17) + ' ' + (btnY + btnH - 10) + ' Q' + (cx + 17) + ' ' + (btnY + btnH) + ' ' + (cx + 7) + ' ' + (btnY + btnH) + ' L' + (cx - 7) + ' ' + (btnY + btnH) + ' Q' + (cx - 17) + ' ' + (btnY + btnH) + ' ' + (cx - 17) + ' ' + (btnY + btnH - 10) + ' Z" fill="url(#penBtn)" stroke="rgba(255,255,255,0.35)" stroke-width="1"/>' +
      '<rect x="' + (cx - 12) + '" y="' + (dialY + dialH + 3) + '" width="24" height="7" rx="3.5" fill="url(#penBtnSheen)"/>' +
      // Knurled dose dial: slightly narrower than the body, attached flush (no gap)
      '<path d="M' + (bodyX + 4) + ' ' + dialY + ' L' + (rx - 4) + ' ' + dialY + ' L' + (rx - 4) + ' ' + (dialY + dialH - 5) + ' Q' + (rx - 4) + ' ' + (dialY + dialH) + ' ' + (rx - 9) + ' ' + (dialY + dialH) + ' L' + (bodyX + 9) + ' ' + (dialY + dialH) + ' Q' + (bodyX + 4) + ' ' + (dialY + dialH) + ' ' + (bodyX + 4) + ' ' + (dialY + dialH - 5) + ' Z" fill="url(#penBody)" stroke="rgba(255,255,255,0.22)" stroke-width="1"/>' +
      knurl +
      // Seam between body and dial (dark cut + light lip)
      '<line x1="' + (bodyX + 4) + '" y1="' + (dialY + 1) + '" x2="' + (rx - 4) + '" y2="' + (dialY + 1) + '" stroke="rgba(0,0,0,0.45)" stroke-width="1.2"/>' +
      '<line x1="' + (bodyX + 6) + '" y1="' + (dialY + 2.5) + '" x2="' + (rx - 6) + '" y2="' + (dialY + 2.5) + '" stroke="rgba(255,255,255,0.14)" stroke-width="0.7"/>' +
      // Shadow where the button emerges from the dial
      '<line x1="' + (cx - 14) + '" y1="' + (dialY + dialH + 1) + '" x2="' + (cx + 14) + '" y2="' + (dialY + dialH + 1) + '" stroke="rgba(0,0,0,0.35)" stroke-width="1.2"/>' +
    '</svg>';
  }

  function renderResult() {
    var result = calculate();
    var card = document.getElementById('result-card');
    var content = document.getElementById('result-content');

    if (!result) {
      card.classList.remove('ready');
      content.innerHTML =
        '<div class="result-empty">' +
          '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">' +
            '<path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>' +
          '</svg>' +
          '<div>' + t('empty') + '</div>' +
        '</div>';
      return;
    }

    card.classList.add('ready');

    var concentration = result.concentration;
    var volumeMl = result.volumeMl;
    var unitsToDraw = result.unitsToDraw;
    var totalDoses = result.totalDoses;
    var isSpray = result.spray;
    var isReverse = result.reverse;
    var isPen = result.pen;
    var isBlendResult = result.blend;

    var warnIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>';
    var errIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>';

    // A draw that lands between unit marks can't be measured accurately in any mode
    function notWhole(n) {
      return isFinite(n) && n > 0 && Math.abs(n - Math.round(n)) > 0.05;
    }
    function warnBox(msg) {
      return '<div class="alert warn">' + warnIcon + '<div>' + msg + '</div></div>';
    }

    var alertHtml = '';
    if (isSpray) {
      // Warn if one spray already exceeds the needed volume
      if (state.sprayVolume > volumeMl) {
        alertHtml = warnBox(t('warnSprayOverdose', { s: formatNum(state.sprayVolume, 3), v: formatNum(volumeMl, 4) }));
      } else if (notWhole(result.spraysNeeded)) {
        alertHtml = warnBox(t('warnWholeSprays', {
          u: formatNum(result.spraysNeeded, 2),
          r: Math.max(1, Math.round(result.spraysNeeded))
        }));
      }
    } else if (isReverse) {
      if (notWhole(unitsToDraw)) {
        alertHtml = warnBox(t('warnWholeUnits', { u: formatNum(unitsToDraw, 2), r: Math.max(1, Math.round(unitsToDraw)) }));
      }
    } else if (isPen) {
      // Pens dial in whole units; warn when the dose lands on a fractional value.
      var penRounded = Math.round(unitsToDraw);
      var penNotWhole = Math.abs(unitsToDraw - penRounded) > 0.05;
      if (penNotWhole) {
        alertHtml = '<div class="alert warn">' + warnIcon +
          '<div>' + t('warnPenWholeUnits', { u: formatNum(unitsToDraw, 2), r: Math.max(1, penRounded) }) + '</div>' +
          '</div>';
      } else if (unitsToDraw < 1) {
        alertHtml = '<div class="alert warn">' + warnIcon +
          '<div>' + t('warnTooSmall') + '</div>' +
          '</div>';
      }
    } else if (isBlendResult) {
      // Blend assumes a U100 · 1 ml syringe
      if (unitsToDraw > 100) {
        alertHtml = '<div class="alert error">' + errIcon +
          '<div>' + t('errorOverflow', { c: '1', n: '100' }) + '</div>' +
          '</div>';
      } else if (unitsToDraw < 1) {
        alertHtml = warnBox(t('warnTooSmall'));
      } else if (notWhole(unitsToDraw)) {
        alertHtml = warnBox(t('warnWholeUnits', { u: formatNum(unitsToDraw, 2), r: Math.round(unitsToDraw) }));
      }
    } else {
      var overflow = unitsToDraw > result.maxUnits;
      var tooSmall = unitsToDraw < 1;
      if (overflow) {
        alertHtml = '<div class="alert error">' + errIcon +
          '<div>' + t('errorOverflow', { c: formatNum(state.capacity, 2), n: formatNum(result.maxUnits, 1) }) + '</div>' +
          '</div>';
      } else if (tooSmall) {
        alertHtml = warnBox(t('warnTooSmall'));
      } else if (notWhole(unitsToDraw)) {
        alertHtml = warnBox(t('warnWholeUnits', { u: formatNum(unitsToDraw, 2), r: Math.round(unitsToDraw) }));
      }
    }

    // Primary result: forward → units, spray → sprays, reverse → BAC water
    var primaryLabel, primaryValue, primaryUnit, primarySub, vizHtml;
    if (isSpray) {
      var sprays = result.spraysNeeded;
      var spraysRounded = Math.ceil(sprays);
      primaryLabel = t('step4spray');
      primaryValue = formatNum(spraysRounded, 0);
      primaryUnit = lang === 'de' ? 'Sprühstöße' : 'sprays';
      // mg (or IU) delivered by a single spray = concentration × spray volume.
      var mgPerSpray = result.concentration * state.sprayVolume;
      var sprayUnit = state.doseUnit === 'iu' ? 'IU' : 'mg';
      primarySub = t('sprayPerDose', { ml: formatNum(state.sprayVolume, 2), mg: formatNum(mgPerSpray, 3), u: sprayUnit }) +
        '<br>' + t('sprayOnDevice', { n: formatNum(sprays, 2), ml: formatNum(state.sprayVolume, 2) });
      vizHtml = sprayBottleSvg(sprays);
    } else if (isReverse) {
      primaryLabel = t('bacResult');
      primaryValue = formatNum(result.water, 2);
      primaryUnit = 'ml';
      primarySub = t('plainReverse', { u: unitsLabelText(unitsToDraw), d: doseLabelText(result) }) +
        '<br><span class="sub-tech">' + t('reverseSub', { u: formatNum(unitsToDraw, 0), ml: formatNum(volumeMl, 4) }) + '</span>';
      vizHtml = vialFillSvg(result.water);
    } else if (isPen) {
      primaryLabel = t('penDial');
      primaryValue = formatNum(unitsToDraw, 2);
      primaryUnit = t('units');
      primarySub = t('plainPen', { u: unitsLabelText(unitsToDraw), d: doseLabelText(result) }) +
        '<br><span class="sub-tech">' + t('penSub', { ml: formatNum(volumeMl, 4) }) + '</span>';
      vizHtml = penSvg(unitsToDraw);
    } else if (isBlendResult) {
      primaryLabel = t('drawTo');
      primaryValue = formatNum(unitsToDraw, 2);
      primaryUnit = t('units');
      primarySub = t('plainDraw', { u: unitsLabelText(unitsToDraw), d: doseLabelText(result) }) +
        '<br><span class="sub-tech">≈ ' + formatNum(volumeMl, 4) + ' ml ' + t('onSyringe', { t: 'U100', c: '1', u: '100' }) + '</span>';
      vizHtml = blendVialSvg(result.components, result.totalMg, state.water);
    } else {
      primaryLabel = t('drawTo');
      primaryValue = formatNum(unitsToDraw, 2);
      primaryUnit = t('units');
      primarySub = t('plainDraw', { u: unitsLabelText(unitsToDraw), d: doseLabelText(result) }) +
        '<br><span class="sub-tech">≈ ' + formatNum(volumeMl, 4) + ' ml ' + t('onSyringe', { t: 'U' + state.syringeType, c: formatNum(state.capacity, 2), u: formatNum(result.maxUnits, 1) }) + '</span>';
      vizHtml = syringeSvg(unitsToDraw / result.maxUnits, result.maxUnits, unitsToDraw);
    }

    // "Content per units drawn" — shown in every mode that draws units (not spray)
    var blendTableHtml = isSpray ? '' : unitsTableHtml(result, unitsToDraw);

    // Blend: per-peptide composition of the selected dose
    var blendBreakdownHtml = '';
    if (isBlendResult) {
      var bbTitle = result.anchor
        ? t('blendBreakdownAnchor', { d: formatNum(state.dose), u: state.doseUnit, p: escapeHtml(result.anchor), v: formatNum(unitsToDraw, 2) })
        : t('blendBreakdown', { d: formatNum(state.dose), u: state.doseUnit, v: formatNum(unitsToDraw, 2) });
      blendBreakdownHtml = '<div class="blend-breakdown">' +
        '<div class="bb-title">' + bbTitle + '</div>';
      for (var ci = 0; ci < result.components.length; ci++) {
        var comp = result.components[ci];
        var share = comp.mg / result.totalMg;
        // Amount delivered by the drawn volume — correct for both total- and anchor-based dosing
        var mgInDose = (comp.mg / state.water) * volumeMl;
        var isAnchorRow = result.anchor === comp.name;
        blendBreakdownHtml += '<div class="bb-row' + (isAnchorRow ? ' bb-anchor' : '') + '">' +
          '<span class="bb-name"><span class="bb-dot" style="background:' + comp.color + '"></span>' + escapeHtml(comp.name) + (isAnchorRow ? ' <span class="bb-anchor-tag">⚓</span>' : '') + '</span>' +
          '<span class="bb-val">' + formatBlendAmount(mgInDose) + ' <span class="bb-share">· ' + Math.round(share * 100) + '%</span></span>' +
          '</div>';
      }
      blendBreakdownHtml += '</div>';
    }

    content.innerHTML =
      alertHtml +
      '<div class="result-layout">' +
        '<div class="result-info">' +
          '<div class="primary-result">' +
            '<div class="label">' + primaryLabel + '</div>' +
            '<div class="value">' + primaryValue + '<span class="unit-label">' + primaryUnit + '</span></div>' +
            '<div class="sub">' + primarySub + '</div>' +
          '</div>' +
          blendBreakdownHtml +
          '<div class="stats-grid">' +
            '<div class="stat">' +
              '<div class="stat-label">' + t('concentration') + '</div>' +
              (state.doseUnit === 'iu'
                ? '<div class="stat-value">' + formatNum(concentration, 3) + ' <span style="font-size:12px;color:var(--text-dim)">IU/ml</span></div>'
                : '<div class="stat-value">' + formatNum(concentration, 3) + ' <span style="font-size:12px;color:var(--text-dim)">mg/ml</span></div>'
              ) +
              '<div class="stat-sub">' + t(isSpray ? 'plainConcSpray' : 'plainConc', {
                c: state.doseUnit === 'iu' ? formatNum(concentration, 3) + ' IU' : formatBlendAmount(concentration),
                pu: perUnitText(concentration, result.syringeType || state.syringeType)
              }) + '</div>' +
            '</div>' +
            '<div class="stat">' +
              '<div class="stat-label">' + t('dosesPerVial') + '</div>' +
              '<div class="stat-value">' + formatNum(Math.floor(totalDoses), 0) + '</div>' +
              '<div class="stat-sub">' + (isSpray
                ? t('plainDosesSpray', { d: doseLabelText(result), n: formatNum(totalDoses, 1) })
                : t('plainDoses', { u: unitsLabelText(unitsToDraw), n: formatNum(totalDoses, 1), d: doseLabelText(result) })
              ) + '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="result-syringe">' + vizHtml + '</div>' +
      '</div>' +
      blendTableHtml +
      frequencyTableHtml(totalDoses, result, isSpray, unitsToDraw) +
      '<div class="actions">' +
        '<button class="btn danger" id="reset-btn" type="button">' +
          '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 109-9 9.75 9.75 0 00-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>' +
          t('reset') +
        '</button>' +
      '</div>';

    document.getElementById('reset-btn').addEventListener('click', function() {
      state.peptide = '';
      state.vial = null;
      state.water = null;
      state.dose = null;
      state.doseUnit = 'mg';
      state.syringe = null;
      state.syringeType = 100;
      state.capacity = null;
      state.targetUnits = null;
      state.sprayVolume = null;
      state.blend = [{ name: '', amount: null, unit: 'mg' }, { name: '', amount: null, unit: 'mg' }];
      state.blendAnchor = null;
      state.autoApplied = false;
      saveState();
      document.getElementById('peptide-select').value = '';
      document.getElementById('vial-custom').style.display = 'none';
      document.getElementById('water-custom').style.display = 'none';
      document.getElementById('dose-custom').style.display = 'none';
      document.getElementById('syringe-custom').style.display = 'none';
      document.getElementById('capacity-custom').style.display = 'none';
      document.getElementById('targetunits-custom').style.display = 'none';
      document.getElementById('spray-custom').style.display = 'none';
      document.getElementById('vial-input').value = '';
      document.getElementById('water-input').value = '';
      document.getElementById('dose-input').value = '';
      document.getElementById('syringe-input').value = '';
      document.getElementById('capacity-input').value = '';
      document.getElementById('targetunits-input').value = '';
      document.getElementById('spray-input').value = '';
      renderAll();
    });
  }

  function update() {
    saveState();
    updateStepStatus();
    renderResult();
    renderVialPills();
    renderStep2();
    renderDosePills();
    renderBlendAnchorPills();
    renderStep4();
    renderPeptideInfo();
  }

  function renderAll() {
    applyTranslations();
    var langBtns = document.querySelectorAll('.lang-btn');
    for (var i = 0; i < langBtns.length; i++) {
      if (langBtns[i].getAttribute('data-lang') === lang) {
        langBtns[i].classList.add('active');
      } else {
        langBtns[i].classList.remove('active');
      }
    }
    renderPeptideSelect();
    renderBlendRows();
    renderVialPills();
    renderStep2();
    renderDosePills();
    renderBlendAnchorPills();
    renderStep4();
    updateStepStatus();
    renderPeptideInfo();
    renderResult();
    if (refreshShareLink) refreshShareLink();
  }

  // ---------- Event listeners ----------
  document.getElementById('peptide-select').addEventListener('change', function(e) {
    state.peptide = e.target.value;
    if (state.peptide && PEPTIDE_DEFAULTS[state.peptide]) {
      var d = PEPTIDE_DEFAULTS[state.peptide];
      state.vial = d.vial;
      state.water = d.water;
      state.dose = d.dose;
      state.doseUnit = d.doseUnit;
      state.syringe = d.syringe;
      state.syringeType = d.syringe;
      state.capacity = d.capacity || 1.0;
      // Preselect a default spray volume (usually 0.1 ml) so nose-spray mode is ready to calculate.
      state.sprayVolume = d.sprayVolume || 0.1;
      state.autoApplied = true;
      document.getElementById('vial-custom').style.display = 'none';
      document.getElementById('water-custom').style.display = 'none';
      document.getElementById('dose-custom').style.display = 'none';
      document.getElementById('syringe-custom').style.display = 'none';
      document.getElementById('capacity-custom').style.display = 'none';
      document.getElementById('spray-custom').style.display = 'none';
      document.getElementById('spray-input').value = '';
      document.getElementById('vial-input').value = '';
      document.getElementById('water-input').value = '';
      document.getElementById('dose-input').value = '';
      document.getElementById('syringe-input').value = '';
      document.getElementById('capacity-input').value = '';
    } else {
      state.autoApplied = false;
    }
    enforceSprayDefaults();
    update();
  });

  function parseLocaleFloat(str) {
    if (!str) return NaN;
    return parseFloat(str.replace(',', '.'));
  }

  // Filter inputs to only allow digits, dot, and comma
  function filterNumericInput(e) {
    var clean = e.target.value.replace(/[^0-9.,]/g, '');
    if (clean !== e.target.value) e.target.value = clean;
  }
  document.getElementById('vial-input').addEventListener('input', filterNumericInput);
  document.getElementById('water-input').addEventListener('input', filterNumericInput);
  document.getElementById('dose-input').addEventListener('input', filterNumericInput);
  document.getElementById('syringe-input').addEventListener('input', function(e) {
    var clean = e.target.value.replace(/[^0-9]/g, '');
    if (clean !== e.target.value) e.target.value = clean;
  });

  document.getElementById('vial-input').addEventListener('input', function(e) {
    var v = parseLocaleFloat(e.target.value);
    state.vial = isNaN(v) ? null : v;
    state.autoApplied = false;
    update();
  });
  document.getElementById('water-input').addEventListener('input', function(e) {
    var v = parseLocaleFloat(e.target.value);
    state.water = isNaN(v) ? null : v;
    state.autoApplied = false;
    update();
  });
  document.getElementById('dose-input').addEventListener('input', function(e) {
    var v = parseLocaleFloat(e.target.value);
    state.dose = isNaN(v) ? null : v;
    state.autoApplied = false;
    update();
  });
  document.getElementById('syringe-input').addEventListener('input', function(e) {
    var v = parseInt(e.target.value, 10);
    state.syringe = isNaN(v) || v <= 0 ? null : v;
    state.syringeType = state.syringe;
    state.autoApplied = false;
    update();
  });
  document.getElementById('capacity-input').addEventListener('input', filterNumericInput);
  document.getElementById('capacity-input').addEventListener('input', function(e) {
    var v = parseLocaleFloat(e.target.value);
    state.capacity = isNaN(v) || v <= 0 ? null : v;
    state.autoApplied = false;
    update();
  });

  var unitToggleBtns = document.querySelectorAll('.unit-toggle-btn');
  for (var u = 0; u < unitToggleBtns.length; u++) {
    unitToggleBtns[u].addEventListener('click', function() {
      var newUnit = this.getAttribute('data-unit');
      if (!newUnit) return; // skip non-dose toggle buttons
      if (newUnit === state.doseUnit) return;
      var crossingIU = (newUnit === 'iu') !== (state.doseUnit === 'iu');
      if (crossingIU) {
        state.dose = null;
        state.vial = null;
        document.getElementById('vial-custom').style.display = 'none';
        document.getElementById('vial-input').value = '';
      } else if (state.dose !== null) {
        if (newUnit === 'mg' && state.doseUnit === 'mcg') {
          state.dose = state.dose / 1000;
        } else if (newUnit === 'mcg' && state.doseUnit === 'mg') {
          state.dose = state.dose * 1000;
        }
      }
      state.doseUnit = newUnit;
      state.autoApplied = false;
      document.getElementById('dose-custom').style.display = 'none';
      document.getElementById('dose-input').value = '';
      renderDosePills();
      update();
    });
  }

  // Vial unit toggle (syncs with dose unit toggle)
  var vialUnitBtns = document.querySelectorAll('[data-vial-unit]');
  for (var vu = 0; vu < vialUnitBtns.length; vu++) {
    vialUnitBtns[vu].addEventListener('click', function() {
      var newVialUnit = this.getAttribute('data-vial-unit');
      var isCurrentlyIU = state.doseUnit === 'iu';
      var wantIU = newVialUnit === 'iu';
      if (wantIU === isCurrentlyIU) return;
      // Sync dose unit: IU ↔ mg
      state.dose = null;
      state.vial = null;
      state.doseUnit = wantIU ? 'iu' : 'mg';
      state.autoApplied = false;
      document.getElementById('vial-custom').style.display = 'none';
      document.getElementById('vial-input').value = '';
      document.getElementById('dose-custom').style.display = 'none';
      document.getElementById('dose-input').value = '';
      renderDosePills();
      update();
    });
  }

  // Mode toggle (syringe / spray)
  var modeBtns = document.querySelectorAll('[data-mode]');
  for (var mb = 0; mb < modeBtns.length; mb++) {
    modeBtns[mb].addEventListener('click', function() {
      var newMode = this.getAttribute('data-mode');
      if (newMode === state.mode) return;
      state.mode = newMode;
      state.autoApplied = false;
      enforceSprayDefaults();
      enforceBlendDefaults();
      if (newMode === 'blend') renderBlendRows();
      update();
    });
  }

  // Spray input
  document.getElementById('spray-input').addEventListener('input', filterNumericInput);
  document.getElementById('spray-input').addEventListener('input', function(e) {
    var v = parseLocaleFloat(e.target.value);
    state.sprayVolume = isNaN(v) || v <= 0 ? null : v;
    state.autoApplied = false;
    update();
  });

  // Solve-for toggle (draw units <-> BAC water)
  var solveBtns = document.querySelectorAll('[data-solve]');
  for (var sbi = 0; sbi < solveBtns.length; sbi++) {
    solveBtns[sbi].addEventListener('click', function() {
      var newSolve = this.getAttribute('data-solve');
      if (newSolve === state.solveFor) return;
      state.solveFor = newSolve;
      state.autoApplied = false;
      update();
    });
  }

  // Target units input (reverse mode)
  document.getElementById('targetunits-input').addEventListener('input', function(e) {
    var clean = e.target.value.replace(/[^0-9]/g, '');
    if (clean !== e.target.value) e.target.value = clean;
  });
  document.getElementById('targetunits-input').addEventListener('input', function(e) {
    var v = parseInt(e.target.value, 10);
    state.targetUnits = isNaN(v) || v <= 0 ? null : v;
    state.autoApplied = false;
    update();
  });

  var langButtons = document.querySelectorAll('.lang-btn');
  for (var l = 0; l < langButtons.length; l++) {
    langButtons[l].addEventListener('click', function() {
      lang = this.getAttribute('data-lang');
      saveState();
      renderAll();
    });
  }

  // ---------- Init ----------
  loadState();
  // A ?settings link wins over the saved session, then persists like any other
  if (applyQueryToState()) saveState();

  var vialPresets = state.doseUnit === 'iu' ? VIAL_PRESETS_IU : VIAL_PRESETS;
  if (state.vial != null && vialPresets.indexOf(state.vial) === -1) {
    document.getElementById('vial-custom').style.display = 'flex';
    document.getElementById('vial-input').value = state.vial;
  }
  if (state.water != null && WATER_PRESETS.indexOf(state.water) === -1) {
    document.getElementById('water-custom').style.display = 'flex';
    document.getElementById('water-input').value = state.water;
  }
  var dosePresets = state.doseUnit === 'mcg' ? DOSE_PRESETS_MCG : state.doseUnit === 'iu' ? DOSE_PRESETS_IU : DOSE_PRESETS_MG;
  if (state.dose != null && dosePresets.indexOf(state.dose) === -1) {
    document.getElementById('dose-custom').style.display = 'flex';
    document.getElementById('dose-input').value = state.dose;
  }
  if (state.syringe != null && SYRINGE_PRESETS.indexOf(state.syringe) === -1) {
    document.getElementById('syringe-custom').style.display = 'flex';
    document.getElementById('syringe-input').value = state.syringe;
  }
  if (state.capacity != null && CAPACITY_PRESETS.indexOf(state.capacity) === -1) {
    document.getElementById('capacity-custom').style.display = 'flex';
    document.getElementById('capacity-input').value = state.capacity;
  }
  if (state.sprayVolume != null && SPRAY_PRESETS.indexOf(state.sprayVolume) === -1) {
    document.getElementById('spray-custom').style.display = 'flex';
    document.getElementById('spray-input').value = state.sprayVolume;
  }
  if (state.targetUnits != null && TARGET_UNIT_PRESETS.indexOf(state.targetUnits) === -1) {
    document.getElementById('targetunits-custom').style.display = 'flex';
    document.getElementById('targetunits-input').value = state.targetUnits;
  }

  // Blend: add-component button
  var blendAddBtn = document.getElementById('blend-add');
  if (blendAddBtn) {
    blendAddBtn.addEventListener('click', function() {
      state.blend.push({ name: '', mg: null });
      renderBlendRows();
      update();
    });
  }

  // Add-to-home-screen hint: hidden when already running as an installed app,
  // or when the user dismissed it before.
  (function() {
    var hint = document.getElementById('a2hs-hint');
    if (!hint) return;
    var isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
    var dismissed = false;
    try { dismissed = localStorage.getItem('peptide-calc-a2hs-dismissed') === '1'; } catch (e) {}
    if (isStandalone || dismissed) {
      hint.style.display = 'none';
      return;
    }
    document.getElementById('a2hs-close').addEventListener('click', function() {
      hint.style.display = 'none';
      try { localStorage.setItem('peptide-calc-a2hs-dismissed', '1'); } catch (e) {}
    });
  })();

  // Share block: the canonical URL plus a native share sheet / clipboard copy.
  // The installed app runs without an address bar, so this is the only place a
  // user can get at the link once the calculator lives on their home screen.
  (function() {
    var linkEl = document.getElementById('share-url');
    if (!linkEl) return;

    var canonical = document.querySelector('link[rel="canonical"]');
    var base = (canonical && canonical.href) || (location.origin + location.pathname);
    var withSettings = document.getElementById('share-settings');

    function shareUrl() {
      if (!withSettings.checked) return base;
      var q = stateToQuery();
      return q ? base + '?' + q : base;
    }

    // The box always shows the plain domain. With settings switched on the
    // link still carries the parameters — they just don't clutter the display.
    var display = base.replace(/^https?:\/\//, '').replace(/\/$/, '');
    refreshShareLink = function() {
      linkEl.href = shareUrl();
      linkEl.textContent = display;
    };
    refreshShareLink();
    withSettings.addEventListener('change', refreshShareLink);

    var toast = document.getElementById('toast');
    var toastTimer = null;
    function showToast(msg) {
      if (!toast) return;
      toast.textContent = msg;
      toast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(function() { toast.classList.remove('show'); }, 2200);
    }

    // execCommand fallback covers older iOS and any non-secure context, where
    // navigator.clipboard is undefined.
    function legacyCopy(text) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      ta.setSelectionRange(0, text.length);
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      return ok;
    }

    function copyLink() {
      var url = shareUrl();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(function() {
          showToast(t('linkCopied'));
        }, function() {
          showToast(legacyCopy(url) ? t('linkCopied') : t('copyFailed'));
        });
      } else {
        showToast(legacyCopy(url) ? t('linkCopied') : t('copyFailed'));
      }
    }

    document.getElementById('share-copy').addEventListener('click', copyLink);

    // Only offer the native sheet where it actually exists (iOS/Android, some
    // desktops); elsewhere the copy button stays as the single action.
    var shareBtn = document.getElementById('share-btn');
    if (navigator.share) {
      shareBtn.hidden = false;
      shareBtn.addEventListener('click', function() {
        navigator.share({
          title: 'Peptide Dose Calculator',
          text: t('shareText'),
          url: shareUrl()
        }).catch(function() { /* user dismissed the sheet */ });
      });
    }

    // Tapping the link itself copies rather than reloading the page we are on
    linkEl.addEventListener('click', function(e) {
      e.preventDefault();
      copyLink();
    });
  })();

  renderAll();
});
