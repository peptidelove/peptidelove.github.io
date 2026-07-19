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
      a2hsAndroid: 'Open this page in Chrome, tap the ⋮ menu in the top-right corner and choose "Add to Home screen" (or "Install app").'
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
      a2hsAndroid: 'Öffne die Seite in Chrome, tippe oben rechts auf das ⋮-Menü und wähle "Zum Startbildschirm hinzufügen" (bzw. "App installieren").'
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
    lang: 'de',
    autoApplied: false
  };

  function loadState() {
    try {
      var saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved) {
        Object.keys(saved).forEach(function(k) { state[k] = saved[k]; });
      }
    } catch (e) {}
    lang = state.lang || 'de';
  }
  function saveState() {
    state.lang = lang;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
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
    var solveWater = !isSpray && state.solveFor === 'water';
    document.getElementById('solve-row').style.display = isSpray ? 'none' : 'flex';
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
    // BAC-water (reverse) and Pen modes don't use syringe type & volume (assume U100)
    var reverse = !isSpray && state.solveFor === 'water';
    var showSyringeSteps = isSyringe && !reverse;
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
    var solveWater = state.mode !== 'spray' && state.solveFor === 'water';

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

    var warnIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>';
    var errIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>';

    var alertHtml = '';
    if (isSpray) {
      // Warn if one spray already exceeds the needed volume
      if (state.sprayVolume > volumeMl) {
        alertHtml = '<div class="alert warn">' + warnIcon +
          '<div>' + t('warnSprayOverdose', { s: formatNum(state.sprayVolume, 3), v: formatNum(volumeMl, 4) }) + '</div>' +
          '</div>';
      }
    } else if (isReverse) {
      // No syringe-specific warnings here — reverse mode only reports the BAC water to mix
    } else if (isPen) {
      if (unitsToDraw < 1) {
        alertHtml = '<div class="alert warn">' + warnIcon +
          '<div>' + t('warnTooSmall') + '</div>' +
          '</div>';
      }
    } else {
      var fillFraction = unitsToDraw / result.maxUnits;
      var overflow = unitsToDraw > result.maxUnits;
      var tooSmall = unitsToDraw < 1;
      if (overflow) {
        alertHtml = '<div class="alert error">' + errIcon +
          '<div>' + t('errorOverflow', { c: formatNum(state.capacity, 2), n: formatNum(result.maxUnits, 1) }) + '</div>' +
          '</div>';
      } else if (tooSmall) {
        alertHtml = '<div class="alert warn">' + warnIcon +
          '<div>' + t('warnTooSmall') + '</div>' +
          '</div>';
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
      primarySub = t('reverseSub', { u: formatNum(unitsToDraw, 0), ml: formatNum(volumeMl, 4) });
      vizHtml = vialFillSvg(result.water);
    } else if (isPen) {
      primaryLabel = t('penDial');
      primaryValue = formatNum(unitsToDraw, 2);
      primaryUnit = t('units');
      primarySub = t('penSub', { ml: formatNum(volumeMl, 4) });
      vizHtml = penSvg(unitsToDraw);
    } else {
      primaryLabel = t('drawTo');
      primaryValue = formatNum(unitsToDraw, 2);
      primaryUnit = t('units');
      primarySub = '≈ ' + formatNum(volumeMl, 4) + ' ml ' + t('onSyringe', { t: 'U' + state.syringeType, c: formatNum(state.capacity, 2), u: formatNum(result.maxUnits, 1) });
      vizHtml = syringeSvg(unitsToDraw / result.maxUnits, result.maxUnits, unitsToDraw);
    }

    content.innerHTML =
      '<div class="result-layout">' +
        '<div class="result-info">' +
          '<div class="primary-result">' +
            '<div class="label">' + primaryLabel + '</div>' +
            '<div class="value">' + primaryValue + '<span class="unit-label">' + primaryUnit + '</span></div>' +
            '<div class="sub">' + primarySub + '</div>' +
          '</div>' +
          '<div class="stats-grid">' +
            '<div class="stat">' +
              '<div class="stat-label">' + t('concentration') + '</div>' +
              (state.doseUnit === 'iu'
                ? '<div class="stat-value">' + formatNum(concentration, 3) + ' <span style="font-size:12px;color:var(--text-dim)">IU/ml</span></div>' +
                  '<div class="stat-sub">≈ ' + formatNum(concentration / 3, 3) + ' mg/ml</div>'
                : '<div class="stat-value">' + formatNum(concentration, 3) + ' <span style="font-size:12px;color:var(--text-dim)">mg/ml</span></div>' +
                  '<div class="stat-sub">' + formatNum(concentration * 1000, 1) + ' mcg/ml</div>'
              ) +
            '</div>' +
            '<div class="stat">' +
              '<div class="stat-label">' + t('dosesPerVial') + '</div>' +
              '<div class="stat-value">' + formatNum(totalDoses, 1) + '</div>' +
              '<div class="stat-sub">' + t('perDose', { n: formatNum(state.doseUnit === 'iu' ? state.dose : result.doseMg, 4), u: state.doseUnit === 'iu' ? 'IU' : 'mg' }) + '</div>' +
            '</div>' +
          '</div>' +
          alertHtml +
          '<div class="actions">' +
            '<button class="btn" id="reset-btn" type="button">' +
              '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 109-9 9.75 9.75 0 00-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>' +
              t('reset') +
            '</button>' +
          '</div>' +
        '</div>' +
        '<div class="result-syringe">' + vizHtml + '</div>' +
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
    renderVialPills();
    renderStep2();
    renderDosePills();
    renderStep4();
    updateStepStatus();
    renderPeptideInfo();
    renderResult();
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

  renderAll();
});
