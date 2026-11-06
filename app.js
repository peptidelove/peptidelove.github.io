// Wait for DOM before initializing — needed for standalone files
document.addEventListener('DOMContentLoaded', function() {

  // ---------- i18n ----------
  // Glyphs shown inline in the install instructions, so the text can point at
  // the actual button instead of describing it. Our own markup — these strings
  // are rendered with data-i18n-html rather than textContent.
  var ICO_SHARE = '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12v7a2 2 0 002 2h12a2 2 0 002-2v-7"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>';
  var ICO_MENU = '<svg class="ico" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>';

  var I18N = {
    en: {
      badge: 'Peptide Reconstitution Tool',
      title: 'Peptide Dose Calculator',
      subtitle: 'Calculate the exact draw volume for your reconstituted peptide.',
      peptide: 'Peptide',
      optional: '(optional)',
      selectPeptide: 'Select peptide',
      nasalOnly: 'Nasal-use peptides only',
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
      penReplay: 'Tap to replay the dial.',
      penDialAria: 'Pen dial set to {n} units',
      syringeAria: 'Syringe drawn to {n} units',
      syringeReplay: 'Tap to replay the draw.',
      sprayAria: 'Nasal spray, {n} {w}',
      sprayReplay: 'Tap to replay the sprays.',
      blendAria: 'Blend vial, {mg} mg in {ml} ml',
      blendReplay: 'Tap to swirl it.',
      step4: 'Syringe Type',
      step4spray: 'Spray Volume',
      sprayTake: 'Take',
      spraySingular: 'spray',
      sprayPlural: 'sprays',
      step5: 'Syringe Volume',
      solveFor: 'I want to calculate',
      solveUnits: 'Draw units',
      solveWater: 'BAC water',
      solveDescUnits: 'Enter your BAC water amount and get the units to draw per dose.',
      solveDescWater: 'Enter the units you want to draw and get how much BAC water to mix into the vial.',
      enterTargetUnits: 'Units (e.g. 10)',
      bacResult: 'Mix with',
      reverseSub: 'draw {u} units ({ml} ml) per dose',
      enterMlPerPump: 'ml per pump',
      enterMlCap: 'ml (e.g. 0.3, 0.5, 1.0)',
      sprayOnDevice: '{n} sprays of {ml} ml each',
      sprayPerDose: '1 spray of {ml} ml = <strong>{mg} {u}</strong> of your peptide',
      warnSprayOverdose: 'One spray ({s} ml) exceeds the required dose volume ({v} ml). Use a spray device with a smaller volume per pump.',
      units: 'units',
      enterMg: 'Enter mg',
      enterIU: 'Enter IU',
      enterMl: 'Enter ml',
      enterDose: 'Enter dose',
      enterUnitsPerMl: 'Units/ml (e.g. 40, 100)',
      empty: 'Select all values to calculate your dose',
      legendRecommended: 'Recommended for selected peptide',
      drawTo: 'Draw to',
      onSyringe: 'on a {t} · {c} ml ({u}u) syringe',
      reset: 'Reset',
      errorOverflow: 'Dose exceeds the {c} ml ({n}u) syringe capacity. Use a larger syringe or split into multiple injections.',
      warnTooSmall: 'Draw volume is under 1 unit, so measurement accuracy may be poor. Consider increasing your reconstitution volume.',
      warnPenWholeUnits: 'Pens dial in whole units, but this dose lands on {u} units. Set the pen to the nearest whole number ({r} units), or adjust your dose or BAC water so it lands exactly on a whole unit.',
      warnWholeUnits: 'Drawing {u} units is not accurate: syringes are only marked in whole units. Change your BAC water or dose so the draw lands on a whole number ({r} units is closest).',
      warnWholeSprays: 'This needs {u} sprays, but you can only take whole sprays. Change your saline amount or dose so it lands on a whole number of sprays ({r} is closest).',
      disclaimerTitle: 'Disclaimer:',
      disclaimer: "This calculator is intended for informational and educational purposes only. It does not constitute medical advice or a prescription. Always follow your healthcare provider's instructions and consult a qualified professional before administering any peptide or medication.",
      peptideName: 'Peptide',
      other: 'Other',
      a2hsTitle: 'Use as an app',
      a2hsSub: 'Add this calculator to your home screen. It opens fullscreen like a native app.',
      a2hsIosLabel: 'iPhone / iPad',
      a2hsAndroidLabel: 'Android',
      a2hsIos: 'Open this page in Safari, tap the Share button ' + ICO_SHARE + ', scroll down and choose "Add to Home Screen".',
      a2hsAndroid: 'Open this page in Chrome, tap the menu ' + ICO_MENU + ' in the top-right corner and choose "Add to Home screen" (or "Install app").',
      shareTitle: 'Share this calculator',
      shareAction: 'Share',
      shareCopy: 'Copy link',
      shareWithSettings: 'Include my current settings in the link',
      shareText: 'Peptide Dose Calculator: work out the exact draw for your reconstituted peptide.',
      linkCopied: 'Link copied to clipboard',
      copyFailed: 'Could not copy. Select the link and copy it manually.',
      modeBlend: 'Blend',
      blendStep: 'Blend Components',
      blendAdd: 'Add peptide',
      blendTotal: '{n} mg total',
      blendBreakdown: 'In each {d} {u} dose ({v} units):',
      blendCustomName: 'Peptide name',
      blendAmountLabel: 'Amount',
      blendRemove: 'Remove peptide',
      themeGroup: 'Theme',
      themeLight: 'Light',
      themeSoftDark: 'Dark',
      themeClassic: 'Classic (neon)',
      dismiss: 'Dismiss',
      blendTableTitle: 'Content per units drawn',
      tableYourDose: 'your dose',
      blendTableUnits: 'Units',
      blendTableTotal: 'Total',
      blendAnchorLabel: 'Dose refers to',
      blendAnchorTotal: 'Total blend',
      blendBreakdownAnchor: 'Per dose with {d} {u} {p} ({v} units):',
      plainDraw: 'Fill the syringe up to <strong>{u}</strong>. That is one dose of <strong>{d}</strong>.',
      plainPen: 'Dial the pen to <strong>{u}</strong>. That is one dose of <strong>{d}</strong>.',
      plainReverse: 'Then draw <strong>{u}</strong> each time to get one dose of <strong>{d}</strong>.',
      summary: '<strong>1 unit = {pu}.</strong> At {u} per dose, this vial lasts <strong>{n} doses</strong> of {d}.',
      summarySpray: 'At {d} per dose, this bottle lasts <strong>{n} doses</strong>.',
      summaryBlend: '<strong>1 unit = {pu} of the blend.</strong> At {u} per dose, this vial lasts <strong>{n} doses</strong> of {d}.',
      unitsShort: '{n} units',
      freqTitle: 'How long this lasts: {n} doses of {d}, {u} each',
      freqTitleSpray: 'How long this lasts: {n} doses of {d}',
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
      selectPeptide: 'Peptid auswählen',
      nasalOnly: 'Nur nasal angewendete Peptide',
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
      penReplay: 'Antippen, um das Einstellen zu wiederholen.',
      penDialAria: 'Pen eingestellt auf {n} Einheiten',
      syringeAria: 'Spritze aufgezogen auf {n} Einheiten',
      syringeReplay: 'Antippen, um das Aufziehen zu wiederholen.',
      sprayAria: 'Nasenspray, {n} {w}',
      sprayReplay: 'Antippen, um die Sprühstöße zu wiederholen.',
      blendAria: 'Blend-Vial, {mg} mg in {ml} ml',
      blendReplay: 'Antippen zum Schwenken.',
      step4: 'Spritzentyp',
      step4spray: 'Sprühvolumen',
      sprayTake: 'Nimm',
      spraySingular: 'Sprühstoß',
      sprayPlural: 'Sprühstöße',
      step5: 'Spritzenvolumen',
      solveFor: 'Ich möchte berechnen',
      solveUnits: 'Einheiten',
      solveWater: 'BAC-Wasser',
      solveDescUnits: 'Gib deine BAC-Wassermenge ein und du erhältst die Einheiten pro Dosis.',
      solveDescWater: 'Gib die gewünschten Einheiten ein und du erhältst das BAC-Wasser fürs Vial.',
      enterTargetUnits: 'Einheiten (z.B. 10)',
      bacResult: 'Anmischen mit',
      reverseSub: 'ziehe {u} Einheiten ({ml} ml) pro Dosis auf',
      enterMlPerPump: 'ml pro Sprühstoß',
      enterMlCap: 'ml (z.B. 0,3, 0,5, 1,0)',
      sprayOnDevice: '{n} Sprühstöße à {ml} ml',
      sprayPerDose: '1 Sprühstoß à {ml} ml = <strong>{mg} {u}</strong> deines Peptids',
      warnSprayOverdose: 'Ein Sprühstoß ({s} ml) übersteigt das benötigte Dosisvolumen ({v} ml). Verwende ein Spray mit kleinerem Volumen pro Sprühstoß.',
      units: 'Einheiten',
      enterMg: 'mg eingeben',
      enterIU: 'IE eingeben',
      enterMl: 'ml eingeben',
      enterDose: 'Dosis eingeben',
      enterUnitsPerMl: 'Einheiten/ml (z.B. 40, 100)',
      empty: 'Wähle alle Werte, um deine Dosis zu berechnen',
      legendRecommended: 'Empfohlen für ausgewähltes Peptid',
      drawTo: 'Aufziehen auf',
      onSyringe: 'auf einer {t} · {c} ml ({u}u) Spritze',
      reset: 'Zurücksetzen',
      errorOverflow: 'Dosis überschreitet die {c} ml ({n}u) Spritzenkapazität. Verwende eine größere Spritze oder teile auf mehrere Injektionen auf.',
      warnTooSmall: 'Aufziehvolumen liegt unter 1 Einheit, daher kann die Messgenauigkeit schlecht sein. Erhöhe ggf. das Rekonstitutionsvolumen.',
      warnPenWholeUnits: 'Pens lassen sich nur in ganzen Einheiten einstellen, diese Dosis ergibt aber {u} Einheiten. Stelle den Pen auf die nächste ganze Zahl ({r} Einheiten) ein oder passe Dosis bzw. BAC-Wasser an, damit genau eine ganze Einheit erreicht wird.',
      warnWholeUnits: '{u} Einheiten aufzuziehen ist nicht genau: Spritzen sind nur in ganzen Einheiten markiert. Passe BAC-Wasser oder Dosis an, damit eine ganze Zahl herauskommt ({r} Einheiten wäre am nächsten).',
      warnWholeSprays: 'Das ergibt {u} Sprühstöße, du kannst aber nur ganze Sprühstöße nehmen. Passe die Kochsalzmenge oder Dosis an, damit eine ganze Zahl herauskommt ({r} wäre am nächsten).',
      disclaimerTitle: 'Haftungsausschluss:',
      disclaimer: 'Dieser Rechner dient ausschließlich zu Informations- und Bildungszwecken. Er stellt keine medizinische Beratung oder Verschreibung dar. Befolge stets die Anweisungen deines medizinischen Fachpersonals und konsultiere eine qualifizierte Fachkraft, bevor du ein Peptid oder Medikament verabreichst.',
      peptideName: 'Peptid',
      other: 'Andere',
      a2hsTitle: 'Als App nutzen',
      a2hsSub: 'Füge den Rechner deinem Home-Bildschirm hinzu. Er öffnet sich im Vollbild wie eine native App.',
      a2hsIosLabel: 'iPhone / iPad',
      a2hsAndroidLabel: 'Android',
      a2hsIos: 'Öffne die Seite in Safari, tippe auf den Teilen-Button ' + ICO_SHARE + ', scrolle nach unten und wähle "Zum Home-Bildschirm".',
      a2hsAndroid: 'Öffne die Seite in Chrome, tippe oben rechts auf das Menü ' + ICO_MENU + ' und wähle "Zum Startbildschirm hinzufügen" (bzw. "App installieren").',
      shareTitle: 'Diesen Rechner teilen',
      shareAction: 'Teilen',
      shareCopy: 'Link kopieren',
      shareWithSettings: 'Meine aktuellen Einstellungen im Link mitgeben',
      shareText: 'Peptid-Dosisrechner: berechne die exakte Aufziehmenge für dein rekonstituiertes Peptid.',
      linkCopied: 'Link in Zwischenablage kopiert',
      copyFailed: 'Kopieren nicht möglich. Link markieren und manuell kopieren.',
      modeBlend: 'Blend',
      blendStep: 'Blend-Bestandteile',
      blendAdd: 'Peptid hinzufügen',
      blendTotal: '{n} mg gesamt',
      blendBreakdown: 'In jeder {d}-{u}-Dosis ({v} Einheiten):',
      blendCustomName: 'Peptid-Name',
      blendAmountLabel: 'Menge',
      blendRemove: 'Peptid entfernen',
      themeGroup: 'Design',
      themeLight: 'Hell',
      themeSoftDark: 'Dunkel',
      themeClassic: 'Klassisch (Neon)',
      dismiss: 'Ausblenden',
      blendTableTitle: 'Inhalt pro gezogene Einheiten',
      tableYourDose: 'deine Dosis',
      blendTableUnits: 'Einheiten',
      blendTableTotal: 'Gesamt',
      blendAnchorLabel: 'Dosis bezieht sich auf',
      blendAnchorTotal: 'Gesamt-Blend',
      blendBreakdownAnchor: 'Pro Dosis mit {d} {u} {p} ({v} Einheiten):',
      plainDraw: 'Ziehe die Spritze bis <strong>{u}</strong> auf. Das ist eine Dosis von <strong>{d}</strong>.',
      plainPen: 'Stelle den Pen auf <strong>{u}</strong> ein. Das ist eine Dosis von <strong>{d}</strong>.',
      plainReverse: 'Ziehe dann jedes Mal <strong>{u}</strong> auf, um eine Dosis von <strong>{d}</strong> zu erhalten.',
      summary: '<strong>1 Einheit = {pu}.</strong> Bei {u} pro Dosis reicht dieses Vial für <strong>{n} Dosen</strong> à {d}.',
      summarySpray: 'Bei {d} pro Dosis reicht diese Flasche für <strong>{n} Dosen</strong>.',
      summaryBlend: '<strong>1 Einheit = {pu} der Mischung.</strong> Bei {u} pro Dosis reicht dieses Vial für <strong>{n} Dosen</strong> à {d}.',
      unitsShort: '{n} Einheiten',
      freqTitle: 'Wie lange das reicht: {n} Dosen à {d}, je {u}',
      freqTitleSpray: 'Wie lange das reicht: {n} Dosen à {d}',
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
  var theme = 'light';
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
    // Opt-in HTML: only for our own strings that embed an inline glyph.
    var htmlEls = document.querySelectorAll('[data-i18n-html]');
    for (var h = 0; h < htmlEls.length; h++) {
      htmlEls[h].innerHTML = t(htmlEls[h].getAttribute('data-i18n-html'));
    }
    var phEls = document.querySelectorAll('[data-i18n-placeholder]');
    for (var j = 0; j < phEls.length; j++) {
      var phKey = phEls[j].getAttribute('data-i18n-placeholder');
      phEls[j].placeholder = t(phKey);
    }
    // Icon-only buttons: the accessible name and the hover tooltip
    var ariaEls = document.querySelectorAll('[data-i18n-aria]');
    for (var a = 0; a < ariaEls.length; a++) {
      var label = t(ariaEls[a].getAttribute('data-i18n-aria'));
      ariaEls[a].setAttribute('aria-label', label);
      ariaEls[a].title = label;
    }
  }

  // ---------- Data ----------
  var VIAL_PRESETS = [10, 15, 20, 30, 50];
  var VIAL_PRESETS_IU = [12, 16, 24, 36];
  var WATER_PRESETS = [1.0, 1.5, 2.0, 2.5, 3.0];
  var SPRAY_WATER_PRESETS = [2.0, 3.0, 4.0, 5.0];
  var DOSE_PRESETS_MCG = [100, 200, 250, 500];
  var DOSE_PRESETS_MG = [0.5, 1, 2, 2.5, 5];
  var DOSE_PRESETS_IU = [1, 2, 3, 4];
  var SYRINGE_PRESETS = [40, 100];
  var CAPACITY_PRESETS = [0.3, 0.5, 1.0];
  var SPRAY_PRESETS = [0.1, 0.12, 0.14];
  var TARGET_UNIT_PRESETS = [5, 10, 15, 20, 25, 50];

  // ---------- State ----------
  // a blend row starts at 10 mg, the most common vial size, instead of empty
  var BLEND_DEFAULT_MG = 10;
  // the syringe step starts on the most common insulin syringe: U100, 1 ml (100u)
  var SYRINGE_DEFAULT = 100, CAPACITY_DEFAULT = 1.0;
  var STORAGE_KEY = 'peptide-calc-v6';
  var state = {
    peptide: '',
    vial: null,
    water: null,
    dose: null,
    doseUnit: 'mg',
    syringe: SYRINGE_DEFAULT,
    syringeType: 100,
    capacity: CAPACITY_DEFAULT,
    mode: 'syringe',
    solveFor: 'units',
    targetUnits: null,
    sprayVolume: null,
    blend: [{ name: '', amount: BLEND_DEFAULT_MG, unit: 'mg' }, { name: '', amount: BLEND_DEFAULT_MG, unit: 'mg' }],
    blendAnchor: null,
    lang: 'de',
    theme: 'light',
    autoApplied: false
  };

  // Pristine copy of the defaults above, taken before any saved state is
  // merged in — a settings link resets to this so it reproduces the sender's
  // setup exactly instead of inheriting the recipient's leftovers.
  var STATE_DEFAULTS = JSON.parse(JSON.stringify(state));

  // Set once the share block is wired up; renderAll() keeps the link in sync
  var refreshShareLink = null;

  // Colors for blend components (vial bands + breakdown dots share these by row index)
  var BLEND_COLORS = ['#22d3ee', '#a78bfa', '#34d399', '#fbbf24', '#f472b6', '#60a5fa', '#f87171', '#c084fc'];


  // ---------- Theme ----------
  // Three themes. 'light' and 'soft-dark' share the soft-UI skin; 'dark' is the
  // classic neon design. These are also the values a saved session stores, so
  // anyone who picked dark before keeps the design they chose.
  var THEMES = ['light', 'soft-dark', 'dark'];
  var THEME_COLOR = { 'light': '#e0e5ec', 'soft-dark': '#282c34', 'dark': '#000000' };
  function isSoft() { return theme !== 'dark'; }

  // The SVG artwork is authored for the classic theme: white ink, black
  // shadows, neon liquid. The soft themes repaint the generated markup through
  // a colour map. Order matters: the named colours are swapped first, then the
  // generic white/black inversion catches whatever is left.
  var SOFT_LIQUID = [
    // liquid: a soft aqua that looks like fluid in soft UI, replacing the neon
    // cyan/violet which fought with the soft-UI palette
    [/#22d3ee/g, '#8fbdf2'],
    [/#a78bfa/g, '#7b6fe4'],
    [/#7c5cf0/g, '#6a5fd8'],
    [/rgba\(34,\s*211,\s*238,\s*([\d.]+)\)/g, 'rgba(143,189,242,$1)'],
    [/rgba\(167,\s*139,\s*250,\s*([\d.]+)\)/g, 'rgba(123,111,228,$1)'],
    [/#a6f0ff/g, '#d6e4fb'],
    [/#3ad7ff/g, '#6f93d8']
  ];

  var LIGHT_ART = SOFT_LIQUID.concat([
    // --- pen body: the dark barrel becomes a pale one ---
    [/#141926/g, '#e2e8f1'],
    [/#121724/g, '#e7ecf4'],
    [/#222a3c/g, '#d6dde9'],
    [/#2a3344/g, '#ccd5e3'],
    [/#2e3850/g, '#c4cede'],
    [/#3d4a66/g, '#b6c2d5'],
    [/#10141f/g, '#dde4ee'],
    [/rgba\(5,\s*8,\s*16,\s*([\d.]+)\)/g, 'rgba(196,206,222,$1)'],

    // --- metal + text stay readable, just darker ---
    [/#e8edf5/g, '#f4f7fb'],
    [/#e8ecf4/g, '#5a6880'],
    [/rgba\(232,\s*236,\s*244,\s*([\d.]+)\)/g, 'rgba(90,104,128,$1)'],
    [/rgba\(139,\s*149,\s*173,\s*([\d.]+)\)/g, 'rgba(122,134,158,$1)'],

    // --- generic inversion for structure lines and shadows ---
    [/rgba\(255,\s*255,\s*255,\s*([\d.]+)\)/g, 'rgba(94,108,132,$1)'],
    [/rgba\(0,\s*0,\s*0,\s*([\d.]+)\)/g, 'rgba(150,163,185,$1)']
  ]);

  // On the dark soft ground the classic white ink and dark pen barrel still
  // read correctly; only the neon liquid is swapped for the soft palette.
  var DARK_SOFT_ART = SOFT_LIQUID;

  function themeArt(svg) {
    var map = theme === 'light' ? LIGHT_ART : theme === 'soft-dark' ? DARK_SOFT_ART : null;
    if (!map) return svg;
    for (var i = 0; i < map.length; i++) {
      svg = svg.replace(map[i][0], map[i][1]);
    }
    return svg;
  }

  // The step icons live in the HTML, not in a generator, so their original
  // markup is cached once and repainted whenever the theme changes.
  var staticArtCache = null;
  function repaintStaticArt() {
    var icons = document.querySelectorAll('.step-icon');
    if (!staticArtCache) {
      staticArtCache = [];
      for (var i = 0; i < icons.length; i++) staticArtCache.push(icons[i].innerHTML);
    }
    for (var j = 0; j < icons.length; j++) icons[j].innerHTML = themeArt(staticArtCache[j]);
  }

  function applyTheme() {
    var html = document.documentElement;
    html.setAttribute('data-theme', theme);
    if (isSoft()) html.setAttribute('data-skin', 'soft');
    else html.removeAttribute('data-skin');
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', THEME_COLOR[theme]);
    var btns = document.querySelectorAll('.theme-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.toggle('active', btns[i].getAttribute('data-theme-opt') === theme);
    }
    syncPressed();
    repaintStaticArt();
  }

  function loadState() {
    try {
      var saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved) {
        Object.keys(saved).forEach(function(k) { state[k] = saved[k]; });
      }
    } catch (e) {}
    lang = state.lang || 'de';
    theme = THEMES.indexOf(state.theme) > -1 ? state.theme : 'light';
    // Saved states from before the preselection have an empty syringe step
    if (state.syringe == null) state.syringe = SYRINGE_DEFAULT;
    if (state.capacity == null) state.capacity = CAPACITY_DEFAULT;
    // Older saved states have no blend array — seed two empty rows.
    if (!Array.isArray(state.blend) || state.blend.length === 0) {
      state.blend = [{ name: '', amount: BLEND_DEFAULT_MG, unit: 'mg' }, { name: '', amount: BLEND_DEFAULT_MG, unit: 'mg' }];
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
    state.theme = theme;
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
      var rows = state.blend.filter(function(r) { return r.name || (r.amount != null && r.amount !== BLEND_DEFAULT_MG); });
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

    // Does this URL actually carry settings? (?fresh=1 and friends must not count)
    var carries = Object.keys(URL_KEYS).some(function(k) { return params.has(k); }) || params.has('b');
    if (!carries) return false;

    // Start from the defaults so a field the sender left unset — an unset blend
    // anchor, say — cannot be filled in from whatever the recipient had saved.
    // Language and theme are the reader's own display preferences, not part of
    // the sender's calculation — a shared link must not reset either.
    var keepLang = state.lang, keepTheme = state.theme;
    // kept so a link that turns out to carry nothing valid changes nothing
    var before = JSON.stringify(state);
    Object.keys(STATE_DEFAULTS).forEach(function(k) {
      state[k] = JSON.parse(JSON.stringify(STATE_DEFAULTS[k]));
    });
    state.lang = keepLang;
    state.theme = keepTheme;

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
        while (rows.length < 2) rows.push({ name: '', amount: BLEND_DEFAULT_MG, unit: 'mg' });
        state.blend = rows;
        applied = true;
      }
    }

    if (!applied) {
      var saved = JSON.parse(before);
      Object.keys(saved).forEach(function(k) { state[k] = saved[k]; });
      return false;
    }

    lang = state.lang || lang;
    // A shared link should not stay in the address bar once it is applied:
    // the settings now live in localStorage like any other session.
    try { history.replaceState(null, '', location.pathname); } catch (e) {}
    return true;
  }

  function getRecommended() {
    return state.peptide && PEPTIDE_DEFAULTS[state.peptide] ? PEPTIDE_DEFAULTS[state.peptide] : null;
  }
  function isRecommendedVial(v) { var r = getRecommended(); return r && r.vial === v; }
  function isRecommendedWater(v) {
    var r = getRecommended();
    if (!r) return false;
    return (state.mode === 'spray' && r.sprayWater ? r.sprayWater : r.water) === v;
  }
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
  function isNasal(name) {
    return !!(PEPTIDE_DEFAULTS[name] && PEPTIDE_DEFAULTS[name].nasal);
  }

  function enforceSprayDefaults() {
    if (state.mode !== 'spray') return;
    // A peptide that isn't used nasally drops its name, not the numbers —
    // the calculation keeps working, it just no longer claims that peptide.
    if (state.peptide && !isNasal(state.peptide)) {
      state.peptide = '';
      state.autoApplied = false;
    }
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
      state.blend = [{ name: '', amount: BLEND_DEFAULT_MG, unit: 'mg' }, { name: '', amount: BLEND_DEFAULT_MG, unit: 'mg' }];
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

  // Selection is drawn with the .active class alone, which a screen reader
  // cannot see. Mirror it onto aria-pressed for every toggle-style button.
  // Written only on change, so the per-keystroke pass costs next to nothing.
  function syncPressed() {
    var btns = document.querySelectorAll('button.pill, button.mode-btn, button.unit-toggle-btn, button.lang-btn, button.theme-btn');
    for (var i = 0; i < btns.length; i++) {
      var v = btns[i].classList.contains('active') ? 'true' : 'false';
      if (btns[i].getAttribute('aria-pressed') !== v) btns[i].setAttribute('aria-pressed', v);
    }
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
      placeOther(c, ob);
    }
  }

  // Experimental: "Other" gets a row of its own under the pills, and its entry
  // field (the group's "-custom" row) opens right beside it instead of on a
  // line of its own. The row is made once per group and kept across rebuilds.
  function placeOther(pills, other) {
    var custom = document.getElementById(pills.id.replace(/-pills$/, '-custom'));
    if (!custom) return;
    var row = custom.parentNode;
    if (!row.classList.contains('other-row')) {
      row = document.createElement('div');
      row.className = 'other-row';
      custom.parentNode.insertBefore(row, custom);
      row.appendChild(custom);
    }
    var old = row.querySelector('.pill');
    if (old) row.removeChild(old);
    row.insertBefore(other, custom);
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
      nameIn.setAttribute('aria-label', t('blendCustomName'));
      nameIn.value = row.name || '';
      nameIn.addEventListener('input', function() {
        row.name = nameIn.value;
        // naming a peptide fills in the usual 10 mg straight away if it has no amount yet
        if (row.amount == null && row.name.trim()) {
          row.amount = BLEND_DEFAULT_MG;
          amtIn.value = BLEND_DEFAULT_MG;
        }
        update();
      });
      item.appendChild(nameIn);

      var amtIn = document.createElement('input');
      amtIn.type = 'text';
      amtIn.inputMode = 'decimal';
      amtIn.className = 'blend-amount';
      amtIn.placeholder = '0';
      amtIn.setAttribute('aria-label', t('blendAmountLabel'));
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
      rm.setAttribute('aria-label', t('blendRemove'));
      rm.title = t('blendRemove');
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
    // Nose-spray mode lists only peptides with documented nasal use
    var spray = state.mode === 'spray';
    var keys = Object.keys(PEPTIDE_DEFAULTS).sort().filter(function(p) { return !spray || isNasal(p); });
    document.getElementById('peptide-nasal-hint').style.display = spray ? '' : 'none';
    keys.forEach(function(p) {
      var opt = document.createElement('option');
      opt.value = p;
      opt.textContent = p;
      sel.appendChild(opt);
    });
    sel.value = state.peptide;
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
    if (n == null || !isFinite(n)) return '-';
    if (n === 0) return '0';
    if (Math.abs(n) < 0.001) return n.toExponential(2);
    var fixed = n.toFixed(max);
    return parseFloat(fixed).toString();
  }

  // Zoomed draw scene: an upside-down vial on top, the needle through its
  // stopper into the liquid, and the first units of the barrel below. Authored
  // in the classic colours like the rest of the artwork, so themeArt() repaints it.
  function syringeDrawSvg(v, range, vialMl, label, mlPerUnit, overflow, wave, unitPx) {
    var W = 160, cx = 62;
    var fillColor = overflow ? '#f87171' : '#22d3ee', fillColor2 = overflow ? '#fca5a5' : '#a78bfa';

    // vial, upside down: rounded base at the top, crimp cap at the bottom
    // only the end of the body, a short neck and the cap are in view; the rest runs off the top and fades out
    var vX = cx - 32, vW = 64, vTop = -140, vBody = 12, neckW = 34, neckTop = 24, crimpTop = 30, crimpBot = 46;
    // the vial's water starts just inside the view and drops by what is drawn
    var pxPerMl = (crimpTop - 8) / vialMl;
    var levelY = 8 + Math.min(vialMl, v * mlPerUnit) * pxPerMl;
    // the surface rolls like a small sea while the dose is drawn: two waves
    // drifting against each other, flat again once the liquid settles
    var wAmp = wave ? wave.amp : 0, wPh = wave ? wave.phase : 0, surface = '';
    for (var wx = vX; wx <= vX + vW; wx += 4) {
      var wy = levelY + wAmp * (0.65 * Math.sin(0.17 * wx + wPh) + 0.35 * Math.sin(0.29 * wx - 1.4 * wPh));
      surface += (wx === vX ? 'M' : ' L') + wx + ' ' + wy.toFixed(2);
    }
    var vialPath = 'M' + vX + ' ' + (vTop + 12) + ' Q' + vX + ' ' + vTop + ' ' + (vX + 12) + ' ' + vTop +
      ' L' + (vX + vW - 12) + ' ' + vTop + ' Q' + (vX + vW) + ' ' + vTop + ' ' + (vX + vW) + ' ' + (vTop + 12) +
      ' L' + (vX + vW) + ' ' + vBody + ' C' + (vX + vW) + ' ' + (vBody + 7) + ' ' + (cx + neckW / 2) + ' ' + (neckTop - 6) + ' ' + (cx + neckW / 2) + ' ' + neckTop +
      ' L' + (cx + neckW / 2) + ' ' + crimpTop + ' L' + (cx - neckW / 2) + ' ' + crimpTop + ' L' + (cx - neckW / 2) + ' ' + neckTop +
      ' C' + (cx - neckW / 2) + ' ' + (neckTop - 6) + ' ' + vX + ' ' + (vBody + 7) + ' ' + vX + ' ' + vBody + ' Z';

    // syringe: hub, then the barrel running out of view
    // hub: a collar on the barrel's flat end, then a short faceted body that
    // narrows towards the needle
    var hubTop = 59, hubMid = 69, bX = cx - 20, bW = 40, bTop = 78, y0 = 82;
    // the barrel's end bulges slightly towards the hub, as on most syringes
    var domeTop = bTop - 4;
    // the barrel shows the scale down to `range`, a few units past the dose, then
    // fades out; long ranges are drawn tighter so the syringe stays compact
    var ppu = unitPx || 6.5 * Math.min(1, 40 / range);
    var H = Math.round((y0 + range * ppu + 22) * 100) / 100;
    var barrelPath = 'M' + bX + ' ' + (H + 10) + ' L' + bX + ' ' + (bTop + 1) +
      ' C' + bX + ' ' + (bTop - 3) + ' ' + (cx - 11) + ' ' + domeTop + ' ' + cx + ' ' + domeTop +
      ' C' + (cx + 11) + ' ' + domeTop + ' ' + (bX + bW) + ' ' + (bTop - 3) + ' ' + (bX + bW) + ' ' + (bTop + 1) +
      ' L' + (bX + bW) + ' ' + (H + 10) + ' Z';
    // the barrel fades out just past the last number of the window
    var fadeFrom = ((y0 + range * ppu + 6) / H).toFixed(3);
    var plungerY = y0 + v * ppu;
    var tipY = 20;

    var ticks = '', labels = '';
    // the scale keeps going past the window, as on a real syringe, and fades out with the barrel
    var last = Math.floor((H - y0) / ppu);
    for (var i = 0; i <= last; i++) {
      var step = range > 50 ? 2 : 1, every = range > 50 ? 10 : 5;
      if (i % step) continue;
      var ty = y0 + i * ppu, major = i % every === 0, tx = bX + bW;
      ticks += '<line x1="' + (tx - (major ? 12 : 7)) + '" y1="' + ty.toFixed(2) + '" x2="' + tx + '" y2="' + ty.toFixed(2) + '" stroke="rgba(232,236,244,' + (major ? 0.85 : 0.5) + ')" stroke-width="' + (major ? 1.2 : 0.8) + '"/>';
      if (major) labels += '<text x="' + (tx + 6) + '" y="' + (ty + 3.5).toFixed(2) + '" fill="rgba(232,236,244,0.7)" font-size="11" font-weight="600" font-family="ui-monospace, SFMono-Regular, Menlo, monospace">' + i + '</text>';
    }

    // light themes call the draw out in the highlight orange; overflow stays red
    var markerColor = overflow ? fillColor : (isSoft() ? '#FF8A1E' : fillColor);
    var indicator = v > 0.05 ?
      '<line x1="' + (bX - 5) + '" y1="' + plungerY.toFixed(2) + '" x2="' + (bX + bW + 4) + '" y2="' + plungerY.toFixed(2) + '" stroke="' + markerColor + '" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.85"/>' +
      '<rect x="' + (bX - 35) + '" y="' + (plungerY - 10).toFixed(2) + '" width="30" height="18" rx="4" fill="' + markerColor + '" opacity="0.18"/>' +
      '<text x="' + (bX - 20) + '" y="' + (plungerY + 3).toFixed(2) + '" fill="' + markerColor + '" font-size="11" text-anchor="middle" font-weight="700" font-family="ui-monospace, SFMono-Regular, Menlo, monospace">' + label + 'u</text>' : '';

    var fillH = plungerY - y0;
    return '<svg class="syringe-viz" viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg">' +
      '<defs>' +
        '<linearGradient id="sdFill" x1="0%" y1="0%" x2="100%" y2="0%">' +
          '<stop offset="0%" stop-color="' + fillColor + '" stop-opacity="0.45"/>' +
          '<stop offset="45%" stop-color="' + fillColor2 + '" stop-opacity="0.95"/>' +
          '<stop offset="100%" stop-color="' + fillColor + '" stop-opacity="0.4"/>' +
        '</linearGradient>' +
        '<linearGradient id="sdGlass" x1="0%" y1="0%" x2="100%" y2="0%">' +
          '<stop offset="0%" stop-color="rgba(255,255,255,0.03)"/>' +
          '<stop offset="12%" stop-color="rgba(255,255,255,0.18)"/>' +
          '<stop offset="45%" stop-color="rgba(255,255,255,0.04)"/>' +
          '<stop offset="88%" stop-color="rgba(255,255,255,0.10)"/>' +
          '<stop offset="100%" stop-color="rgba(255,255,255,0.02)"/>' +
        '</linearGradient>' +
        '<linearGradient id="sdSteel" x1="0%" y1="0%" x2="100%" y2="0%">' +
          '<stop offset="0%" stop-color="#5c6678"/>' +
          '<stop offset="35%" stop-color="#e8edf5"/>' +
          '<stop offset="60%" stop-color="#9aa5b8"/>' +
          '<stop offset="100%" stop-color="#3d4557"/>' +
        '</linearGradient>' +
        '<linearGradient id="sdStopper" x1="0%" y1="0%" x2="100%" y2="0%">' +
          '<stop offset="0%" stop-color="#10141f"/>' +
          '<stop offset="45%" stop-color="#3a4257"/>' +
          '<stop offset="100%" stop-color="#10141f"/>' +
        '</linearGradient>' +
        '<linearGradient id="sdPlunger" x1="0%" y1="0%" x2="100%" y2="0%">' +
          // rubber in a neutral grey the theme maps leave alone, so it stays solid in every theme
          '<stop offset="0%" stop-color="#2b2f37"/>' +
          '<stop offset="30%" stop-color="#5a606c"/>' +
          '<stop offset="65%" stop-color="#41464f"/>' +
          '<stop offset="100%" stop-color="#2b2f37"/>' +
        '</linearGradient>' +
        '<linearGradient id="sdFade" x1="0" y1="0" x2="0" y2="1">' +
          '<stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="0.03" stop-color="#fff"/><stop offset="' + fadeFrom + '" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/>' +
        '</linearGradient>' +
        '<mask id="sdMask"><rect width="' + W + '" height="' + H + '" fill="url(#sdFade)"/></mask>' +
        '<clipPath id="sdVialIn"><path d="' + vialPath + '"/></clipPath>' +
        '<clipPath id="sdBarrelIn"><path d="' + barrelPath + '" transform="translate(' + cx + ' 0) scale(0.9 1) translate(' + (-cx) + ' 1.5)"/></clipPath>' +
      '</defs>' +
      '<g mask="url(#sdMask)">' +
      // needle first: the liquid tints it and the crimp cap hides it where it
      // passes through the stopper
      '<path d="M' + (cx - 1.6) + ' ' + hubTop + ' L' + (cx - 1.6) + ' ' + (tipY + 8) + ' L' + cx + ' ' + tipY + ' L' + (cx + 1.6) + ' ' + (tipY + 8) + ' L' + (cx + 1.6) + ' ' + hubTop + ' Z" fill="url(#sdSteel)"/>' +
      '<line x1="' + (cx - 0.5) + '" y1="' + (tipY + 8) + '" x2="' + (cx - 0.5) + '" y2="' + hubTop + '" stroke="rgba(255,255,255,0.75)" stroke-width="0.5"/>' +
      // vial: liquid settles on the stopper side, its surface drops as the dose is drawn
      '<g clip-path="url(#sdVialIn)">' +
        '<path d="' + surface + ' L' + (vX + vW) + ' ' + (crimpTop + 2) + ' L' + vX + ' ' + (crimpTop + 2) + ' Z" fill="url(#sdFill)"/>' +
        '<path d="' + surface + '" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="1.4"/>' +
        '<rect x="' + (vX + 7) + '" y="' + (levelY + 4).toFixed(2) + '" width="3" height="' + Math.max(0, crimpTop - levelY - 10).toFixed(2) + '" fill="rgba(255,255,255,0.35)" rx="1.5"/>' +
        // the tip seen through the liquid inside the neck
        '<path d="M' + (cx - 1.6) + ' ' + crimpTop + ' L' + (cx - 1.6) + ' ' + (tipY + 8) + ' L' + cx + ' ' + tipY + ' L' + (cx + 1.6) + ' ' + (tipY + 8) + ' L' + (cx + 1.6) + ' ' + crimpTop + ' Z" fill="url(#sdSteel)" opacity="0.6"/>' +
      '</g>' +
      '<path d="' + vialPath + '" fill="url(#sdGlass)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>' +
      '<rect x="' + (vX + 4) + '" y="' + (vTop + 10) + '" width="2.5" height="' + (vBody - vTop - 16) + '" fill="rgba(255,255,255,0.22)" rx="1.2"/>' +
      // crimp cap and the stopper face the needle passes through
      '<rect x="' + (cx - 20) + '" y="' + crimpTop + '" width="40" height="' + (crimpBot - crimpTop) + '" rx="3" fill="url(#sdSteel)"/>' +
      '<line x1="' + (cx - 20) + '" y1="' + (crimpTop + 4) + '" x2="' + (cx + 20) + '" y2="' + (crimpTop + 4) + '" stroke="rgba(0,0,0,0.35)" stroke-width="1"/>' +
      '<rect x="' + (cx - 13) + '" y="' + (crimpBot - 2) + '" width="26" height="5" rx="2" fill="url(#sdStopper)"/>' +
      // barrel with its slightly convex end
      '<path d="' + barrelPath + '" fill="url(#sdGlass)" stroke="rgba(255,255,255,0.25)" stroke-width="1"/>' +
      '<rect x="' + (bX + 1) + '" y="' + (bTop + 2) + '" width="2.5" height="' + (H - bTop) + '" fill="rgba(0,0,0,0.3)" rx="1"/>' +
      // hub: collar seated on top of the dome, then the faceted body holding the needle
      '<rect x="' + (cx - 8) + '" y="' + hubMid + '" width="16" height="' + (domeTop - hubMid + 2) + '" rx="1.5" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.35)" stroke-width="0.8"/>' +
      '<path d="M' + (cx - 5.5) + ' ' + hubMid + ' L' + (cx - 3.5) + ' ' + hubTop + ' L' + (cx + 3.5) + ' ' + hubTop + ' L' + (cx + 5.5) + ' ' + hubMid + ' Z" fill="rgba(255,255,255,0.16)" stroke="rgba(255,255,255,0.35)" stroke-width="0.8"/>' +
      '<line x1="' + (cx - 1.8) + '" y1="' + hubMid + '" x2="' + (cx - 1.2) + '" y2="' + hubTop + '" stroke="rgba(255,255,255,0.3)" stroke-width="0.6"/>' +
      '<line x1="' + (cx + 1.8) + '" y1="' + hubMid + '" x2="' + (cx + 1.2) + '" y2="' + hubTop + '" stroke="rgba(0,0,0,0.25)" stroke-width="0.6"/>' +
      // once drawing starts the liquid fills the barrel from its end down to the stopper
      (fillH > 1 ? '<rect clip-path="url(#sdBarrelIn)" x="' + bX + '" y="' + domeTop + '" width="' + bW + '" height="' + (y0 - domeTop) + '" fill="url(#sdFill)"/>' : '') +
      (fillH > 1 ? '<rect x="' + (bX + 2) + '" y="' + y0 + '" width="' + (bW - 4) + '" height="' + fillH.toFixed(2) + '" fill="url(#sdFill)" rx="1.5"/>' +
        '<rect x="' + (bX + 5) + '" y="' + (y0 + 2) + '" width="2.5" height="' + Math.max(0, fillH - 6).toFixed(2) + '" fill="rgba(255,255,255,0.4)" rx="1.2"/>' : '') +
      // plunger: a dark rubber stopper whose top edge sits on the dose line, pushed by a
      // cross-shaped rod: seen from the side, a wide flat vane with the edge-on vane in the middle
      '<rect x="' + (bX + 4) + '" y="' + (plungerY + 8).toFixed(2) + '" width="' + (bW - 8) + '" height="' + Math.max(0, H + 10 - plungerY).toFixed(2) + '" fill="rgba(255,255,255,0.22)" stroke="rgba(255,255,255,0.4)" stroke-width="0.7"/>' +
      '<rect x="' + (cx - 4.5) + '" y="' + (plungerY + 8).toFixed(2) + '" width="9" height="' + Math.max(0, H + 10 - plungerY).toFixed(2) + '" fill="rgba(255,255,255,0.42)" stroke="rgba(255,255,255,0.55)" stroke-width="0.6"/>' +
      '<rect x="' + (cx - 2.5) + '" y="' + (plungerY + 8).toFixed(2) + '" width="1.6" height="' + Math.max(0, H + 10 - plungerY).toFixed(2) + '" fill="rgba(255,255,255,0.5)"/>' +
      '<rect x="' + (bX + 2) + '" y="' + plungerY.toFixed(2) + '" width="' + (bW - 4) + '" height="9" rx="1.5" fill="url(#sdPlunger)"/>' +
      '<line x1="' + (bX + 2.5) + '" y1="' + (plungerY + 0.4).toFixed(2) + '" x2="' + (bX + bW - 2.5) + '" y2="' + (plungerY + 0.4).toFixed(2) + '" stroke="rgba(255,255,255,0.35)" stroke-width="0.7"/>' +
      '<line x1="' + (bX + 2) + '" y1="' + (plungerY + 3).toFixed(2) + '" x2="' + (bX + bW - 2) + '" y2="' + (plungerY + 3).toFixed(2) + '" stroke="rgba(0,0,0,0.45)" stroke-width="1"/>' +
      '<line x1="' + (bX + 2) + '" y1="' + (plungerY + 6).toFixed(2) + '" x2="' + (bX + bW - 2) + '" y2="' + (plungerY + 6).toFixed(2) + '" stroke="rgba(0,0,0,0.45)" stroke-width="1"/>' +
      ticks + labels +
      '</g>' +
      indicator +
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
      '<rect x="' + (bodyX + 4) + '" y="150" width="2.5" height="' + (bodyBottom - 166) + '" rx="1.2" fill="rgba(255,255,255,0.22)"/>' +
      ticks + labels + indicator +
      '<text x="' + (rx + 14) + '" y="' + (bodyTop - 8) + '" fill="rgba(139,149,173,0.6)" font-size="10" text-anchor="start" font-family="ui-monospace, SFMono-Regular, Menlo, monospace">ml</text>' +
    '</svg>';
  }

  // Blend vial: liquid divided into horizontal bands proportional to each component's mg share
  function blendVialSvg(components, totalMg, waterMl, t) {
    // a real vial: 3 ml for up to 3 ml of water, then 5 ml, at most 10 ml; the
    // body is short and the picture is cropped to the vial, so the app can size
    // it to the text beside it like the syringe
    var maxMl = waterMl > 5 ? 10 : waterMl > 3 ? 5 : 3;
    var bodyTop = 146, bodyBottom = 252;
    var W = 150, H = bodyBottom + 18, cx = 75;
    // 0 ml sits on the inside of the glass base, not on its outer edge
    var zeroY = bodyBottom - 6;
    var pxPerMl = (zeroY - bodyTop) / maxMl;
    var clampMl = Math.max(0, Math.min(maxMl, waterMl || 0));
    var liquidY = zeroY - clampMl * pxPerMl;
    var bodyX = 42, bodyW = 66;
    var rx = bodyX + bodyW;

    // Scale ticks on the right (0..maxMl, halves)
    var ticks = '', labels = '';
    // half-ml ticks, a number every ml (every 2 ml on the 10 ml vial)
    for (var i = 0; i <= maxMl * 2; i++) {
      var ml = i / 2;
      var ty = zeroY - ml * pxPerMl;
      var major = i % (maxMl > 5 ? 4 : 2) === 0;
      ticks += '<line x1="' + rx + '" y1="' + ty + '" x2="' + (rx + (major ? 9 : 5)) + '" y2="' + ty + '" stroke="rgba(232,236,244,' + (major ? 0.7 : 0.4) + ')" stroke-width="' + (major ? 1.2 : 0.8) + '"/>';
      if (major) labels += '<text x="' + (rx + 13) + '" y="' + (ty + 4) + '" fill="rgba(232,236,244,0.6)" font-size="11" text-anchor="start" font-family="ui-monospace, SFMono-Regular, Menlo, monospace">' + ml + '</text>';
    }

    // the surface rolls with the syringe's double wave for a moment after the
    // vial comes into view or is tapped (t = seconds since then), then lies flat
    var amp = t >= 0 ? 2.6 * Math.exp(-2.6 * t) * Math.min(1, t / 0.1) : 0;
    var surface = '';
    for (var sx = bodyX + 2; sx <= rx - 2; sx += 5) {
      var sy = liquidY + amp * (0.65 * Math.sin(0.17 * sx + t * 7) + 0.35 * Math.sin(0.29 * sx - t * 9.8));
      surface += (sx === bodyX + 2 ? 'M' : ' L') + sx + ' ' + sy.toFixed(2);
    }

    // Liquid region path (rounded bottom) — used as clip for the color bands
    var liquidPath = surface + ' L' + (rx - 2) + ' ' + (zeroY - 8) +
      ' Q' + (rx - 2) + ' ' + zeroY + ' ' + (rx - 10) + ' ' + zeroY +
      ' L' + (bodyX + 10) + ' ' + zeroY +
      ' Q' + (bodyX + 2) + ' ' + zeroY + ' ' + (bodyX + 2) + ' ' + (zeroY - 8) + ' Z';

    // Stacked bands, first component at the bottom
    var bands = '';
    var liquidH = zeroY - liquidY;
    var yCursor = zeroY;
    for (var b = 0; b < components.length; b++) {
      var bandH = liquidH * (components[b].mg / totalMg);
      var yTop = yCursor - bandH;
      // the top layer reaches above the surface so the waves never open a gap
      var lift = b === components.length - 1 ? 4 : 0;
      bands += '<rect x="' + (bodyX + 2) + '" y="' + (yTop - lift) + '" width="' + (bodyW - 4) + '" height="' + (bandH + 0.5 + lift) + '" fill="' + components[b].color + '" opacity="0.5"/>';
      if (b < components.length - 1) {
        bands += '<line x1="' + (bodyX + 4) + '" y1="' + yTop + '" x2="' + (rx - 4) + '" y2="' + yTop + '" stroke="rgba(255,255,255,0.3)" stroke-width="0.8"/>';
      }
      yCursor = yTop;
    }

    // A real vial: a wide flat aluminium cap almost as wide as the glass over a
    // narrow neck (about two thirds of the body), a shoulder and a short straight body
    var vialPath = 'M' + (cx - 21) + ' 120 L' + (cx + 21) + ' 120 L' + (cx + 21) + ' 131' +
      ' C' + (cx + 21) + ' 138 ' + rx + ' 136 ' + rx + ' 145' +
      ' L' + rx + ' ' + (bodyBottom - 12) + ' Q' + rx + ' ' + bodyBottom + ' ' + (rx - 12) + ' ' + bodyBottom +
      ' L' + (bodyX + 12) + ' ' + bodyBottom + ' Q' + bodyX + ' ' + bodyBottom + ' ' + bodyX + ' ' + (bodyBottom - 12) +
      ' L' + bodyX + ' 145 C' + bodyX + ' 136 ' + (cx - 21) + ' 138 ' + (cx - 21) + ' 131 Z';

    return '<svg class="syringe-viz" viewBox="36 92 106 ' + (H - 92) + '" preserveAspectRatio="xMidYMin meet" xmlns="http://www.w3.org/2000/svg">' +
      '<defs>' +
        '<linearGradient id="blGlass" x1="0%" y1="0%" x2="100%" y2="0%">' +
          '<stop offset="0%" stop-color="rgba(255,255,255,0.03)"/>' +
          '<stop offset="12%" stop-color="rgba(255,255,255,0.18)"/>' +
          '<stop offset="45%" stop-color="rgba(255,255,255,0.04)"/>' +
          '<stop offset="88%" stop-color="rgba(255,255,255,0.10)"/>' +
          '<stop offset="100%" stop-color="rgba(255,255,255,0.02)"/>' +
        '</linearGradient>' +
        '<linearGradient id="blSteel" x1="0%" y1="0%" x2="100%" y2="0%">' +
          '<stop offset="0%" stop-color="#5c6678"/>' +
          '<stop offset="35%" stop-color="#e8edf5"/>' +
          '<stop offset="60%" stop-color="#9aa5b8"/>' +
          '<stop offset="100%" stop-color="#3d4557"/>' +
        '</linearGradient>' +
        '<linearGradient id="blRubber" x1="0%" y1="0%" x2="100%" y2="0%">' +
          '<stop offset="0%" stop-color="#10141f"/>' +
          '<stop offset="45%" stop-color="#3a4257"/>' +
          '<stop offset="100%" stop-color="#10141f"/>' +
        '</linearGradient>' +
        '<clipPath id="blClip"><path d="' + liquidPath + '"/></clipPath>' +
      '</defs>' +
      // Glass body with neck and shoulder
      '<path d="' + vialPath + '" fill="url(#blGlass)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>' +
      // the thick glass base under the liquid, clear, with its inner floor at 0 ml
      '<path d="M' + (bodyX + 1) + ' ' + zeroY + ' L' + (rx - 1) + ' ' + zeroY + ' L' + (rx - 1) + ' ' + (bodyBottom - 10) + ' Q' + (rx - 1) + ' ' + (bodyBottom - 1) + ' ' + (rx - 10) + ' ' + (bodyBottom - 1) +
        ' L' + (bodyX + 10) + ' ' + (bodyBottom - 1) + ' Q' + (bodyX + 1) + ' ' + (bodyBottom - 1) + ' ' + (bodyX + 1) + ' ' + (bodyBottom - 10) + ' Z" fill="rgba(255,255,255,0.10)"/>' +
      '<line x1="' + (bodyX + 3) + '" y1="' + zeroY + '" x2="' + (rx - 3) + '" y2="' + zeroY + '" stroke="rgba(255,255,255,0.5)" stroke-width="1"/>' +
      // the rubber stopper plugs the neck under the cap and shows through the glass
      '<path d="M' + (cx - 18.5) + ' 120 L' + (cx + 18.5) + ' 120 L' + (cx + 18.5) + ' 132 Q' + (cx + 18.5) + ' 137 ' + (cx + 13.5) + ' 137 L' + (cx - 13.5) + ' 137 Q' + (cx - 18.5) + ' 137 ' + (cx - 18.5) + ' 132 Z" fill="url(#blRubber)" opacity="0.85"/>' +
      '<line x1="' + (cx - 17.5) + '" y1="125" x2="' + (cx + 17.5) + '" y2="125" stroke="rgba(255,255,255,0.25)" stroke-width="1"/>' +
      // Flat aluminium cap with a light top edge and its rolled rim at the bottom
      '<rect x="' + (bodyX + 2) + '" y="96" width="' + (bodyW - 4) + '" height="24" rx="3" fill="url(#blSteel)"/>' +
      '<line x1="' + (bodyX + 4) + '" y1="97" x2="' + (rx - 4) + '" y2="97" stroke="rgba(255,255,255,0.5)" stroke-width="1"/>' +
      '<line x1="' + (bodyX + 2) + '" y1="116" x2="' + (rx - 2) + '" y2="116" stroke="rgba(0,0,0,0.35)" stroke-width="1"/>' +
      // Component bands clipped to the liquid region + meniscus
      (clampMl > 0 && components.length > 0 ?
        '<g clip-path="url(#blClip)">' + bands + '</g>' +
        '<path d="' + surface + '" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="1.4"/>' +
        '<rect x="' + (bodyX + 7) + '" y="' + (liquidY + 4) + '" width="3" height="' + Math.max(0, zeroY - liquidY - 10) + '" rx="1.5" fill="rgba(255,255,255,0.35)"/>'
      : '') +
      // Glass highlight
      '<rect x="' + (bodyX + 4) + '" y="148" width="2.5" height="' + (bodyBottom - 162) + '" rx="1.2" fill="rgba(255,255,255,0.22)"/>' +
      ticks + labels +
      '<text x="' + (rx + 14) + '" y="' + (bodyTop - 8) + '" fill="rgba(139,149,173,0.6)" font-size="10" text-anchor="start" font-family="ui-monospace, SFMono-Regular, Menlo, monospace">ml</text>' +
      // Total under the vial
      // the total sits right under the vial, never wider than the glass
      '<text x="' + cx + '" y="' + (bodyBottom + 13) + '" fill="rgba(232,236,244,0.6)" font-size="9" font-weight="500" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Inter, system-ui, sans-serif">' + formatNum(totalMg) + ' mg / ' + formatNum(clampMl) + ' ml</text>' +
    '</svg>';
  }

  // Nasal spray close-up in the pen dial's style: the black pump and nozzle of a
  // real spray on a clear glass bottle, upright in a pressed-in stage. `p` is the
  // moment of the animation from sprayPose(). Drawn in the classic colours like
  // the other artwork; the black parts use #fff highlights the theme maps leave
  // alone, so they stay black in every theme.
  function sprayDrawSvg(p, n) {
    var light = theme === 'light';
    var cx = 65, since = p.u, live = p.t >= 0;
    // each press kicks the liquid; the waves die down until the next one
    var amp = live ? 2.4 * Math.exp(-3.2 * Math.max(0, since - 0.1)) * Math.min(1, since / 0.1) : 0;
    var phase = Math.max(0, p.t) * 7;
    // every spray takes a visible bite out of the liquid
    var level = 236 + Math.min(40, p.count * 4);
    var surface = '';
    for (var x = 30; x <= 100; x += 4) {
      var y = level + amp * (0.65 * Math.sin(0.17 * x + phase) + 0.35 * Math.sin(0.29 * x - 1.4 * phase));
      surface += (x === 30 ? 'M' : ' L') + x + ' ' + y.toFixed(2);
    }
    // the liquid climbs the dip tube as the pump draws, then leaves the nozzle as vapour
    var rise = live ? Math.min(1, Math.max(0, since / 0.12)) : 0;
    var fade = live ? Math.max(0, 1 - Math.max(0, since - 0.2) / 0.25) : 0;
    var vu = since - 0.1;
    var vap = live && vu > 0 && vu < 0.7 ? Math.min(1, vu / 0.1) * (1 - vu / 0.7) : 0;
    var lift = Math.max(0, vu) * 60;
    var headY = (p.press * 8).toFixed(2);
    var bottle = 'M45 199 L85 199 L85 211 C85 220 99 222 99 236 L99 360 L31 360 L31 236 C31 222 45 220 45 211 Z';
    var tube = 'M54 346 C58 322 76 300 72 270 C69 246 62 228 66 199';

    // each spray leaves as one burst: a cone of fine droplets fanning out from
    // the nozzle with a soft cloud behind it, spreading and thinning as it rises
    var drops = '';
    for (var d = 0; d < 16; d++) {
      var ang = ((d * 7) % 16 / 15 - 0.5) * 0.8;
      var sp = 0.75 + ((d * 5) % 7) / 12;
      var dist = (1 - Math.pow(1 - Math.min(1, Math.max(0, vu) / 0.7), 2)) * 52 * sp;
      drops += '<circle cx="' + (cx + Math.sin(ang) * dist).toFixed(2) + '" cy="' + (42 - Math.cos(ang) * dist).toFixed(2) +
        '" r="' + (0.9 + ((d * 3) % 5) * 0.25 + Math.max(0, vu) * 1.2).toFixed(2) + '" fill="' + (d % 2 ? '#a78bfa' : '#22d3ee') +
        '" opacity="' + (0.85 - ((d * 11) % 6) * 0.08).toFixed(2) + '"/>';
    }

    return '<svg class="spray-viz" viewBox="0 -30 130 324" xmlns="http://www.w3.org/2000/svg">' +
      '<defs>' +
        '<linearGradient id="spBlack" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#000000"/><stop offset="18%" stop-color="#3b3c41"/><stop offset="42%" stop-color="#1a1b1e"/><stop offset="78%" stop-color="#0b0b0c"/><stop offset="100%" stop-color="#000000"/></linearGradient>' +
        '<linearGradient id="spGlass" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="rgba(255,255,255,0.03)"/><stop offset="12%" stop-color="rgba(255,255,255,0.18)"/><stop offset="45%" stop-color="rgba(255,255,255,0.04)"/><stop offset="88%" stop-color="rgba(255,255,255,0.10)"/><stop offset="100%" stop-color="rgba(255,255,255,0.02)"/></linearGradient>' +
        '<linearGradient id="spLiquid" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#22d3ee" stop-opacity="0.45"/><stop offset="45%" stop-color="#a78bfa" stop-opacity="0.95"/><stop offset="100%" stop-color="#22d3ee" stop-opacity="0.4"/></linearGradient>' +
        '<radialGradient id="spVapour" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#22d3ee" stop-opacity="0.55"/><stop offset="60%" stop-color="#a78bfa" stop-opacity="0.18"/><stop offset="100%" stop-color="#22d3ee" stop-opacity="0"/></radialGradient>' +
        '<clipPath id="spBottleIn"><path d="' + bottle + '" transform="translate(65 0) scale(0.93 1) translate(-65 0)"/></clipPath>' +
      '</defs>' +
      // bottle: clear glass, the liquid rolling inside, the dip tube curving down
      '<path d="' + bottle + '" fill="url(#spGlass)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>' +
      '<g clip-path="url(#spBottleIn)">' +
        '<path d="' + surface + ' L100 360 L30 360 Z" fill="url(#spLiquid)"/>' +
        '<path d="' + surface + '" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="1.4"/>' +
      '</g>' +
      '<path d="' + tube + '" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="3.4" stroke-linecap="round"/>' +
      '<path d="' + tube + '" pathLength="100" stroke-dasharray="100 100" stroke-dashoffset="' + (100 - rise * 100).toFixed(2) + '" fill="none" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" opacity="' + (0.85 * fade).toFixed(3) + '"/>' +
      '<path clip-path="url(#spBottleIn)" d="M48 211 C48 220 35 223 35 237 L35 330" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1.6"/>' +
      '<line x1="45" y1="203" x2="85" y2="203" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>' +
      '<line x1="45" y1="207" x2="85" y2="207" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>' +
      // the sprays given so far, in a small tile on the bottle
      '<rect x="45" y="242" width="40" height="34" rx="9" fill="#fff" fill-opacity="' + (light ? 0.6 : 0.14) + '" stroke="rgba(255,255,255,0.4)" stroke-width="1"/>' +
      '<text x="65" y="266" text-anchor="middle" font-size="20" font-weight="700" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" fill="' + (light ? '#333d4d' : '#fff') + '">' + p.count + '</text>' +
      // pump: ribbed cap on the bottle, a narrower waist, the body under the flange
      '<rect x="36" y="172" width="58" height="28" rx="3" fill="url(#spBlack)"/>' +
      '<line x1="38" y1="173" x2="92" y2="173" stroke="#fff" stroke-opacity="0.14" stroke-width="1"/>' +
      '<line x1="39.0" y1="175" x2="39.0" y2="198" stroke="#fff" stroke-opacity="0.12" stroke-width="0.8"/>' +
      '<line x1="41.5" y1="175" x2="41.5" y2="198" stroke="#fff" stroke-opacity="0.12" stroke-width="0.8"/>' +
      '<line x1="44.0" y1="175" x2="44.0" y2="198" stroke="#fff" stroke-opacity="0.12" stroke-width="0.8"/>' +
      '<line x1="46.5" y1="175" x2="46.5" y2="198" stroke="#fff" stroke-opacity="0.12" stroke-width="0.8"/>' +
      '<line x1="49.0" y1="175" x2="49.0" y2="198" stroke="#fff" stroke-opacity="0.12" stroke-width="0.8"/>' +
      '<line x1="51.5" y1="175" x2="51.5" y2="198" stroke="#fff" stroke-opacity="0.12" stroke-width="0.8"/>' +
      '<line x1="54.0" y1="175" x2="54.0" y2="198" stroke="#fff" stroke-opacity="0.12" stroke-width="0.8"/>' +
      '<line x1="56.5" y1="175" x2="56.5" y2="198" stroke="#fff" stroke-opacity="0.12" stroke-width="0.8"/>' +
      '<line x1="59.0" y1="175" x2="59.0" y2="198" stroke="#fff" stroke-opacity="0.12" stroke-width="0.8"/>' +
      '<line x1="61.5" y1="175" x2="61.5" y2="198" stroke="#fff" stroke-opacity="0.12" stroke-width="0.8"/>' +
      '<line x1="64.0" y1="175" x2="64.0" y2="198" stroke="#fff" stroke-opacity="0.12" stroke-width="0.8"/>' +
      '<line x1="66.5" y1="175" x2="66.5" y2="198" stroke="#fff" stroke-opacity="0.12" stroke-width="0.8"/>' +
      '<line x1="69.0" y1="175" x2="69.0" y2="198" stroke="#fff" stroke-opacity="0.12" stroke-width="0.8"/>' +
      '<line x1="71.5" y1="175" x2="71.5" y2="198" stroke="#fff" stroke-opacity="0.12" stroke-width="0.8"/>' +
      '<line x1="74.0" y1="175" x2="74.0" y2="198" stroke="#fff" stroke-opacity="0.12" stroke-width="0.8"/>' +
      '<line x1="76.5" y1="175" x2="76.5" y2="198" stroke="#fff" stroke-opacity="0.12" stroke-width="0.8"/>' +
      '<line x1="79.0" y1="175" x2="79.0" y2="198" stroke="#fff" stroke-opacity="0.12" stroke-width="0.8"/>' +
      '<line x1="81.5" y1="175" x2="81.5" y2="198" stroke="#fff" stroke-opacity="0.12" stroke-width="0.8"/>' +
      '<line x1="84.0" y1="175" x2="84.0" y2="198" stroke="#fff" stroke-opacity="0.12" stroke-width="0.8"/>' +
      '<line x1="86.5" y1="175" x2="86.5" y2="198" stroke="#fff" stroke-opacity="0.12" stroke-width="0.8"/>' +
      '<line x1="89.0" y1="175" x2="89.0" y2="198" stroke="#fff" stroke-opacity="0.12" stroke-width="0.8"/>' +
      '<rect x="43" y="157" width="44" height="16" fill="url(#spBlack)"/>' +
      '<rect x="38" y="130" width="54" height="28" rx="2" fill="url(#spBlack)"/>' +
      '<line x1="40" y1="157" x2="90" y2="157" stroke="#fff" stroke-opacity="0.12" stroke-width="1"/>' +
      // pump head: nozzle, ring and flange slide down together when pressed
      '<g transform="translate(0 ' + headY + ')">' +
        '<path d="M59 78 L59 50 Q59 44 65 44 Q71 44 71 50 L71 78 C71 81 75 82 75 86 L76 116 L54 116 L55 86 C55 82 59 81 59 78 Z" fill="url(#spBlack)"/>' +
        '<path d="M61.5 50 L61.5 78 C61.5 81 58 83 57.8 88 L57 113" fill="none" stroke="#fff" stroke-opacity="0.22" stroke-width="1.2" stroke-linecap="round"/>' +
        '<circle cx="65" cy="45.5" r="1.4" fill="#22d3ee" opacity="' + (0.4 + 0.6 * vap).toFixed(3) + '"/>' +
        '<rect x="52" y="115" width="26" height="8" rx="2" fill="url(#spBlack)"/>' +
        '<rect x="30" y="122" width="70" height="9" rx="3.5" fill="url(#spBlack)"/>' +
        '<line x1="33" y1="123" x2="97" y2="123" stroke="#fff" stroke-opacity="0.18" stroke-width="0.8"/>' +
      '</g>' +
      '<g opacity="' + vap.toFixed(3) + '">' +
        '<ellipse cx="65" cy="' + (30 - lift * 0.6).toFixed(2) + '" rx="' + (6 + Math.max(0, vu) * 48).toFixed(2) + '" ry="' + (5 + Math.max(0, vu) * 34).toFixed(2) + '" fill="url(#spVapour)"/>' +
        drops +
      '</g>' +
    '</svg>';
  }


  // Pen dose dial: a close-up of the dial end of an injector pen. When a pen
  // result comes into view the knob turns one click per unit and screws out of
  // the barrel, showing the numbers already dialed on its thread, then gives a
  // short push. The result panel is rebuilt on every keystroke, so the
  // animation state lives here and each rebuild re-attaches to the new element.
  var PEN_MAX_UNITS = 80;
  var penDial = { el: null, target: -1, v: 0, push: 0, played: false, raf: 0, timer: 0, io: null };

  function pdGradient(id, stops, horizontal) {
    var s = '';
    for (var i = 0; i < stops.length; i++) {
      // stop colour as a style, so a theme can supply it through a CSS variable
      s += '<stop offset="' + stops[i][0] + '%" style="stop-color: ' + stops[i][1] + '"' +
        (stops[i][2] !== undefined ? ' stop-opacity="' + stops[i][2] + '"' : '') + '/>';
    }
    return '<linearGradient id="' + id + '" x1="0" y1="0" x2="' + (horizontal ? 1 : 0) + '" y2="' + (horizontal ? 0 : 1) + '">' + s + '</linearGradient>';
  }

  // The barrel and pointer take the theme's accent (the --pen-* variables on
  // .pen-dial); the housing, window, sleeve and crown keep their real colours.
  function penDialHtml(target) {
    var svg = '<svg class="pen-dial-svg" viewBox="0 0 326 132" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">' +
      '<defs>' +
        pdGradient('pdBarrel', [[0, 'var(--pen-b0)'], [12, 'var(--pen-b1)'], [25, 'var(--pen-b2)'], [38, 'var(--pen-b3)'], [60, 'var(--pen-b4)'], [84, 'var(--pen-b5)'], [100, 'var(--pen-b6)']]) +
        pdGradient('pdHousing', [[0, '#000000'], [16, '#2e2f34'], [42, '#141518'], [100, '#070708']]) +
        pdGradient('pdFrame', [[0, '#eceef1'], [50, '#b7bbc2'], [100, '#868b94']]) +
        pdGradient('pdSleeve', [[0, '#9aa0aa'], [22, '#eceef2'], [50, '#ffffff'], [78, '#eceef2'], [100, '#9aa0aa']]) +
        pdGradient('pdSleeveShade', [[0, '#000000', 0.35], [100, '#000000', 0]]) +
        pdGradient('pdPointer', [[0, 'var(--pen-p0)'], [30, 'var(--pen-p1)'], [58, 'var(--pen-p2)'], [100, 'var(--pen-p3)']]) +
        pdGradient('pdScrew', [[0, '#9ea3ab'], [14, '#dfe1e5'], [40, '#fbfbfc'], [62, '#f4f5f7'], [86, '#d4d7dc'], [100, '#8f949d']]) +
        pdGradient('pdExit', [[0, '#000000', 0.5], [100, '#000000', 0]], true) +
        pdGradient('pdKnob', [[0, '#000000'], [18, '#3b3c41'], [42, '#1a1b1e'], [78, '#0b0b0c'], [100, '#000000']]) +
        pdGradient('pdKnobShade', [[0, '#000000', 0.55], [24, '#000000', 0], [66, '#000000', 0], [100, '#000000', 0.6]]) +
        pdGradient('pdCap', [[0, '#000000'], [20, '#44454a'], [46, '#1c1d20'], [80, '#080809'], [100, '#000000']]) +
        '<linearGradient id="pdFade" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="28" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff"/></linearGradient>' +
        '<mask id="pdMask"><rect width="326" height="132" fill="url(#pdFade)"/></mask>' +
        '<clipPath id="pdWinClip"><rect x="81" y="51" width="50" height="30" rx="2"/></clipPath>' +
        '<clipPath id="pdScrewClip"><rect class="pd-screw-clip" x="148" y="32" width="0" height="68"/></clipPath>' +
        '<clipPath id="pdKnobClip"><rect width="58" height="84" rx="5"/></clipPath>' +
        '<filter id="pdShadow" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="1" dy="1" stdDeviation="0.6" flood-opacity="0.45"/></filter>' +
      '</defs>' +
      '<g mask="url(#pdMask)"><g transform="translate(-16 0)">' +
        // Red barrel and the black housing that tapers into it, around the window
        '<rect x="-50" y="24" width="198" height="84" rx="3" fill="url(#pdBarrel)"/>' +
        '<path d="M100 34 H148 V98 H100 A120 32 0 0 1 100 34 Z" fill="url(#pdHousing)" stroke="rgba(0,0,0,0.5)"/>' +
        '<line x1="100" y1="34.5" x2="148" y2="34.5" stroke="rgba(255,255,255,0.12)"/>' +
        // Dose window: grey bevel, white number sleeve, raised red pointer
        '<rect x="78" y="48" width="56" height="36" rx="4" fill="url(#pdFrame)" stroke="#000"/>' +
        '<rect x="81" y="51" width="50" height="30" rx="2" fill="url(#pdSleeve)"/>' +
        '<g clip-path="url(#pdWinClip)"><g class="pd-nums"></g><rect x="81" y="51" width="50" height="5" fill="url(#pdSleeveShade)"/></g>' +
        // pointer: a slim tab growing out of the window's left edge, curved flanks, round tip
        '<path d="M81 59.5 C86 59.5 87 62.9 89.6 63.9 A2.2 2.2 0 0 1 89.6 68.1 C87 69.1 86 72.5 81 72.5 Z" fill="url(#pdPointer)" filter="url(#pdShadow)"/>' +
        '<path d="M82 61 C85.5 61 86.6 63.3 89.2 64.5" fill="none" stroke="rgba(255,255,255,0.55)" stroke-width="0.8" stroke-linecap="round"/>' +
        // Threaded screw between barrel and knob; clipped to how far it is out
        '<g clip-path="url(#pdScrewClip)">' +
          '<rect x="148" y="32" width="200" height="68" fill="url(#pdScrew)"/>' +
          '<g class="pd-screw"></g>' +
          '<rect x="148" y="32" width="14" height="68" fill="url(#pdExit)"/>' +
        '</g>' +
        // End button, behind the crown: pushed in, it slides into the crown
        '<path class="pd-cap" d="M2.5 0 Q14 0 14 14 V62 Q14 76 2.5 76 Q0 76 0 73.5 V2.5 Q0 0 2.5 0 Z" fill="url(#pdCap)"/>' +
        // Ribbed crown
        '<g class="pd-knob">' +
          '<rect width="58" height="84" rx="5" fill="url(#pdKnob)"/>' +
          '<g class="pd-ridges" clip-path="url(#pdKnobClip)"></g>' +
          '<rect width="58" height="84" rx="5" fill="url(#pdKnobShade)"/>' +
          '<circle cx="7" cy="42" r="2" fill="#f2f3f5"/>' +
        '</g>' +
      '</g></g>' +
    '</svg>';

    return '<div class="pen-dial" id="pen-dial">' +
      // the pen itself is the replay control: tap (or Enter/Space) restarts it
      '<button class="pen-dial-stage" type="button" aria-label="' + t('penDialAria', { n: target }) + '. ' + t('penReplay') + '">' + svg + '</button>' +
    '</div>';
  }

  function drawPenDial() {
    var el = penDial.el;
    if (!el || !el.isConnected) return;
    var v = penDial.v, target = penDial.target, push = penDial.push;
    var rad = Math.PI / 180;
    var html, k, phi, cos, x;

    // Dose sleeve seen through the window: higher numbers below, as on the
    // real pen, so the scale rolls upwards as you dial
    html = '';
    var base = Math.floor(v);
    for (k = Math.max(0, base - 3); k <= Math.min(PEN_MAX_UNITS, base + 4); k++) {
      // every number is printed (never skip one): 30 degrees per unit gives them
      // room, and the neighbours fade to grey so the current number stands out
      phi = (k - v) * 30 * rad;
      if (Math.abs(phi) >= 1.4) continue;
      cos = Math.cos(phi);
      // the lower, wider window shows the neighbours only peeking in at its edges
      var cy = 66 + 26 * Math.sin(phi);
      var op = (0.12 + 0.88 * Math.pow(cos, 4)).toFixed(3);
      html += '<text transform="translate(99 ' + cy.toFixed(2) + ') scale(1 ' + cos.toFixed(3) + ')" dominant-baseline="central" font-size="16" font-weight="600" fill="#111214" opacity="' + op + '">' + k + '</text>';
    }
    el.querySelector('.pd-nums').innerHTML = html;

    // From 20 units up the crown screws out until its button stops 10px from
    // the right edge (the pen is drawn 16px left of its old place); a smaller dose
    // moves it the same distance per unit as 20 units, so it stops short and
    // the sleeve's numbers keep their spacing instead of stretching apart
    var p = 116 / Math.max(20, target);
    var ext = Math.max(0, v) * p;

    // One turn spans about 40px of sleeve at any dose (6 to 24 units per turn),
    // so the exposed sleeve is tiled with two or three columns of numbers, as
    // on the real pen, instead of one column and empty space
    // The sleeve's printed scale runs from 0 at the crown up to the dose where
    // it leaves the barrel, so it never shows a number above the dialed one;
    // every number is printed. A large dose packs it at the real pen's density
    // (a number every 2.6px, 16 per turn); a small one spreads it out, with
    // the columns about 42px apart where the dose allows and the type grown to
    // fill the height.
    // The print is fixed on the screw, so it turns and travels with the crown.
    var pp = Math.max(2.6, p);
    // at least 9 per turn, so each visible column is a run of about 4 numbers
    var perTurn = Math.max(9, Math.min(16, 42 / pp));
    var pitch = pp * perTurn;
    var turn = 360 * ext / pitch;
    var rowGap = 30 * Math.sin(Math.min(90, 360 / perTurn) * rad);
    var font = Math.min(15, 0.95 * rowGap);

    // A slanted helix line with a tick per number hanging off it (long ticks
    // on even numbers); numbers rise going down a column, 0 next to the crown
    html = '';
    var prev = null;
    for (k = 0; k <= Math.floor((ext + 14) / pp) + 1; k++) {
      x = ext - 12 - k * pp;
      phi = (k * 360 / perTurn - turn) * rad;
      cos = Math.cos(phi);
      var X = 148 + x - 12, Y = 66 + 30 * Math.sin(phi);
      // fade in as it comes out of the barrel instead of showing it cut in half
      var emerge = Math.max(0, Math.min(1, (x - 2) / 12));
      var vis = cos > 0.15 && x > -14;
      if (vis && prev) {
        html += '<line x1="' + prev[0].toFixed(2) + '" y1="' + prev[1].toFixed(2) + '" x2="' + X.toFixed(2) + '" y2="' + Y.toFixed(2) +
          '" stroke="#3d4047" stroke-width="1" opacity="' + (Math.min(prev[2], cos) * emerge).toFixed(3) + '"/>';
      }
      prev = vis ? [X, Y, cos] : null;
      if (!vis) continue;
      var even = k % 2 === 0, len = (even ? 9 : 6) * font / 13;
      var op2 = ((0.3 + 0.7 * cos) * emerge).toFixed(3);
      html += '<line x1="' + X.toFixed(2) + '" y1="' + Y.toFixed(2) + '" x2="' + (X + len).toFixed(2) + '" y2="' + Y.toFixed(2) +
        '" stroke="#3d4047" stroke-width="' + (even ? 1.2 : 0.9) + '" opacity="' + op2 + '"/>';
      html += '<text transform="translate(' + (X + len + 1.5).toFixed(2) + ' ' + Y.toFixed(2) + ') scale(1 ' + (0.35 + 0.65 * cos).toFixed(3) +
        ')" dominant-baseline="central" font-size="' + font.toFixed(1) + '" font-weight="500" fill="#3d4047" opacity="' + op2 + '">' + k + '</text>';
    }
    el.querySelector('.pd-screw').innerHTML = html;
    // Only the end button is pushed; the crown and sleeve stay where the dial left them
    el.querySelector('.pd-screw-clip').setAttribute('width', Math.max(0, ext).toFixed(2));
    el.querySelector('.pd-knob').setAttribute('transform', 'translate(' + (148 + ext).toFixed(2) + ' 24)');
    // the button starts 4px under the crown's edge so the two read as one part
    el.querySelector('.pd-cap').setAttribute('transform', 'translate(' + (202 + ext + push).toFixed(2) + ' 28)');

    // Knurled knob: 48 ribs turning with the screw
    html = '';
    for (var i = 0; i < 48; i++) {
      var th = ((((i * 7.5 - turn) % 360) + 540) % 360) - 180;
      if (Math.abs(th) >= 88) continue;
      cos = Math.cos(th * rad);
      var h = Math.max(0.5, 2.6 * cos);
      var top = 42 + 40 * Math.sin(th * rad) - h / 2;
      html += '<rect x="3" y="' + top.toFixed(2) + '" width="52" height="' + h.toFixed(2) + '" fill="#fff" fill-opacity="' + (0.04 + 0.16 * cos).toFixed(3) + '"/>' +
        '<rect x="3" y="' + (top + h).toFixed(2) + '" width="52" height="1" fill="#000" fill-opacity="0.6"/>';
    }
    el.querySelector('.pd-ridges').innerHTML = html;
  }

  function stopPenDial() {
    cancelAnimationFrame(penDial.raf);
    clearTimeout(penDial.timer);
  }

  function playPenDial() {
    stopPenDial();
    penDial.played = true;
    var target = penDial.target;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || target === 0) {
      penDial.v = target;
      penDial.push = 0;
      drawPenDial();
      return;
    }
    var dur = Math.min(3000, 450 + target * 55) / 0.7 / 1000;
    // The crown starts gently from rest, runs into the dose, overshoots once and
    // springs back onto it. Its speed carries over into the bounce, so nothing jerks.
    var wdEnd = 2 * Math.PI / 0.4, decay = 7;
    var amp = Math.min(1.2, 0.12 * target);
    var m = Math.min(1.6, amp * wdEnd / 0.62 * dur / target);
    var vEnd = m * target / dur;
    var start = performance.now(), last = start, prev = 0;
    function frame(now) {
      var s = (now - start) / 1000, x;
      if (s < dur) {
        var q = s / dur;
        x = target * (q * q * (3 - 2 * q) + m * (q * q * q - q * q));
        // ease each unit into its click so the knob ratchets instead of gliding,
        // fading in after the start and out before the dose so both stay smooth
        var n = Math.floor(x), f = x - n;
        var w = Math.max(0, Math.min(1, x / 1.5, (target - 1 - x) / 1.5));
        x += w * (f * f * f * (f * (f * 6 - 15) + 10) - f);
      } else {
        var e = s - dur;
        x = target + vEnd / wdEnd * Math.exp(-decay * e) * Math.sin(wdEnd * e);
      }
      var done = s > dur + 0.9;
      penDial.v = done ? target : Math.max(0, x);
      drawPenDial();
      if (!done) penDial.raf = requestAnimationFrame(frame);
      else pushPenDial();
    }
    penDial.v = 0;
    penDial.push = 0;
    penDial.raf = requestAnimationFrame(frame);
  }

  // Once set, the end button is pressed in and springs back with a damped bounce
  function pushPenDial() {
    var depth = 7;
    var start = performance.now();
    function frame(now) {
      var s = (now - start) / 1000;
      var off = 0;
      if (s < 0.14) {
        off = -depth * (1 - Math.pow(1 - s / 0.14, 3));
      } else if (s < 1.2) {
        off = -depth * Math.exp(-6 * (s - 0.14)) * Math.cos((2 * Math.PI * (s - 0.14)) / 0.32);
      }
      penDial.push = off;
      drawPenDial();
      if (s < 1.2) penDial.raf = requestAnimationFrame(frame);
    }
    penDial.raf = requestAnimationFrame(frame);
  }

  // Called after every result render. A new dose replays from zero once the
  // dial is (almost) fully on screen; the same dose keeps whatever it shows.
  function mountPenDial(target) {
    if (penDial.io) { penDial.io.disconnect(); penDial.io = null; }
    var el = document.getElementById('pen-dial');
    if (!el) {
      stopPenDial();
      penDial.el = null;
      penDial.target = -1;
      return;
    }
    penDial.el = el;
    el.querySelector('.pen-dial-stage').addEventListener('click', playPenDial);
    if (target !== penDial.target) {
      stopPenDial();
      penDial.target = target;
      penDial.v = 0;
      penDial.push = 0;
      penDial.played = false;
    }
    drawPenDial();
    if (penDial.played) return;
    if (typeof IntersectionObserver === 'undefined') {
      penDial.timer = setTimeout(playPenDial, 350);
      return;
    }
    penDial.io = new IntersectionObserver(function(entries) {
      var entry = entries[entries.length - 1];
      clearTimeout(penDial.timer);
      // the short wait lets typing settle before the dial starts turning
      if (entry.isIntersecting && entry.intersectionRatio >= 0.85 && !penDial.played) {
        penDial.timer = setTimeout(playPenDial, 350);
      }
    }, { threshold: [0, 0.85, 1] });
    penDial.io.observe(el.querySelector('.pen-dial-stage'));
  }
  // Syringe draw: a close-up of the needle in an upside-down vial and the
  // first units of the barrel. When a syringe result comes into view the
  // plunger draws the dose from empty with the pen dial's motion, a gentle
  // start and a spring back onto the dose, while the vial's level drops.
  var syDraw = { el: null, key: '', args: null, v: 0, wave: { amp: 0, phase: 0 }, fitH: 0, ro: null, played: false, raf: 0, timer: 0, io: null };

  function drawSyringe() {
    var el = syDraw.el, a = syDraw.args;
    if (!el || !el.isConnected || !a) return;
    var target = a.units, v = syDraw.v;
    // the scale runs down to the height of the text beside the syringe, so the
    // two columns line up; it always shows the dose with a few units below it,
    // packing the units tighter only when the dose would not fit otherwise
    var range = Math.max(10, Math.ceil(target) + 3);
    var unitPx = 6.5 * Math.min(1, 40 / range);
    if (syDraw.fitH) {
      unitPx = Math.max(2.5, Math.min(6.5, (syDraw.fitH - 22 - 82) / range));
      range = Math.max(range, (syDraw.fitH - 22 - 82) / unitPx);
    }
    // the label rounds like a reading would, so it never shows 7.6e-4u or a number past the dose
    var label = formatNum(Math.min(target, Math.round(v * 2) / 2), 1);
    el.innerHTML = themeArt(syringeDrawSvg(v, range, a.water, label, a.mlPerUnit, a.overflow, syDraw.wave, unitPx))
      .replace('class="syringe-viz"', 'class="syringe-viz" aria-hidden="true"');
  }

  // Height of the text column in the drawing's own units, so drawSyringe() can
  // end the scale where the text ends. The drawing is sized by width in CSS.
  function fitSyringe() {
    // measure the text itself, first to last block: on phones the column is
    // stretched to the syringe's height, which would feed back into the fit
    var info = document.querySelector('.result-info');
    var svg = syDraw.el && syDraw.el.querySelector('svg');
    var w = svg ? svg.getBoundingClientRect().width : 0;
    if (!info || !info.firstElementChild || !w) { syDraw.fitH = 0; return; }
    var h = info.lastElementChild.getBoundingClientRect().bottom - info.firstElementChild.getBoundingClientRect().top;
    syDraw.fitH = h * 160 / w;
  }

  function stopSyringe() {
    cancelAnimationFrame(syDraw.raf);
    clearTimeout(syDraw.timer);
  }

  function playSyringe() {
    stopSyringe();
    syDraw.played = true;
    var target = syDraw.args ? syDraw.args.units : 0;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !(target > 0)) {
      syDraw.v = target;
      drawSyringe();
      return;
    }
    var dur = Math.min(3000, 450 + target * 55) / 0.7 / 1000;
    // same spring as the pen dial, see playPenDial()
    var wdEnd = 2 * Math.PI / 0.4, decay = 7;
    var amp = Math.min(1.2, 0.12 * target);
    var m = Math.min(1.6, amp * wdEnd / 0.62 * dur / target);
    var vEnd = m * target / dur;
    var start = performance.now(), last = start, prev = 0;
    function frame(now) {
      var s = (now - start) / 1000, x;
      if (s < dur) {
        var q = s / dur;
        x = target * (q * q * (3 - 2 * q) + m * (q * q * q - q * q));
      } else {
        var e = s - dur;
        x = target + vEnd / wdEnd * Math.exp(-decay * e) * Math.sin(wdEnd * e);
      }
      var settled = s > dur + 0.9;
      if (settled) x = target;
      // the faster the plunger pulls, the higher the waves; they ease off on their own
      var dt = Math.max(0.001, (now - last) / 1000);
      var swell = Math.min(2.4, Math.abs(x - prev) / dt * 0.12);
      syDraw.wave.amp += (swell - syDraw.wave.amp) * 0.06;
      syDraw.wave.phase += dt * 4.5;
      last = now;
      prev = x;
      syDraw.v = Math.max(0, x);
      var calm = settled && syDraw.wave.amp < 0.04;
      if (calm) syDraw.wave.amp = 0;
      drawSyringe();
      if (!calm) syDraw.raf = requestAnimationFrame(frame);
    }
    syDraw.v = 0;
    syDraw.wave.amp = 0;
    syDraw.raf = requestAnimationFrame(frame);
  }

  // Called after every result render, like mountPenDial(): a new dose or vial
  // replays from empty once in view, the same one keeps what it shows.
  function mountSyringeDraw(args) {
    if (syDraw.io) { syDraw.io.disconnect(); syDraw.io = null; }
    if (syDraw.ro) { syDraw.ro.disconnect(); syDraw.ro = null; }
    var el = args && document.querySelector('.syringe-stage');
    if (!el) {
      stopSyringe();
      syDraw.el = null;
      syDraw.key = '';
      return;
    }
    syDraw.el = el;
    syDraw.args = args;
    el.addEventListener('click', playSyringe);
    var key = [args.units, args.water, args.mlPerUnit, args.overflow].join('|');
    if (key !== syDraw.key) {
      stopSyringe();
      syDraw.key = key;
      syDraw.v = 0;
      syDraw.played = false;
    }
    drawSyringe();
    fitSyringe();
    drawSyringe();
    // the text column settles after fonts and wrapping; follow its height
    var info = document.querySelector('.result-info');
    if (info && typeof ResizeObserver !== 'undefined') {
      syDraw.ro = new ResizeObserver(function() {
        if (syDraw.el !== el || !el.isConnected) return;
        var before = syDraw.fitH;
        fitSyringe();
        if (Math.abs(syDraw.fitH - before) > 0.5) drawSyringe();
      });
      for (var c = info.firstElementChild; c; c = c.nextElementSibling) syDraw.ro.observe(c);
    }
    if (syDraw.played) return;
    if (typeof IntersectionObserver === 'undefined') {
      syDraw.timer = setTimeout(playSyringe, 350);
      return;
    }
    syDraw.io = new IntersectionObserver(function(entries) {
      var entry = entries[entries.length - 1];
      clearTimeout(syDraw.timer);
      // the short wait lets typing settle before the plunger moves
      if (entry.isIntersecting && entry.intersectionRatio >= 0.85 && !syDraw.played) {
        syDraw.timer = setTimeout(playSyringe, 350);
      }
    }, { threshold: [0, 0.85, 1] });
    syDraw.io.observe(el);
  }
  // Nasal spray: when a spray result comes into view the pump is pressed once
  // per spray, the liquid climbs the dip tube and leaves the nozzle as vapour,
  // the liquid in the bottle sloshes and the count on the bottle goes up.
  var sprayAnim = { el: null, n: 0, t: -1, played: false, raf: 0, timer: 0, io: null };

  // where the animation is at time t: press depth, sprays given so far and the
  // time since the current press began
  function sprayPose(t, n) {
    if (t < 0) return { t: -1, press: 0, count: n, u: 9 };
    var cycle = 0.9, i = Math.min(n - 1, Math.floor(t / cycle)), u = t - i * cycle, press = 0;
    if (u < 0.12) press = u / 0.12;
    else if (u < 0.2) press = 1;
    else if (u < 0.42) { var r = (u - 0.2) / 0.22; press = (1 - r) * Math.cos(r * Math.PI * 0.5) - 0.08 * Math.sin(r * Math.PI); }
    return { t: t, press: Math.max(-0.1, press), count: i + (u >= 0.12 ? 1 : 0), u: u };
  }

  function drawSpray() {
    var el = sprayAnim.el;
    if (!el || !el.isConnected) return;
    el.innerHTML = themeArt(sprayDrawSvg(sprayPose(sprayAnim.t, sprayAnim.n), sprayAnim.n))
      .replace('class="spray-viz"', 'class="spray-viz" aria-hidden="true"');
  }

  function stopSpray() {
    cancelAnimationFrame(sprayAnim.raf);
    clearTimeout(sprayAnim.timer);
  }

  function playSpray() {
    stopSpray();
    sprayAnim.played = true;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      sprayAnim.t = -1;
      drawSpray();
      return;
    }
    var total = sprayAnim.n * 0.9 + 0.3;
    var start = performance.now();
    function frame(now) {
      var t = (now - start) / 1000;
      sprayAnim.t = t < total ? t : -1;
      drawSpray();
      if (t < total) sprayAnim.raf = requestAnimationFrame(frame);
    }
    sprayAnim.t = 0;
    sprayAnim.raf = requestAnimationFrame(frame);
  }

  // Called after every result render, like mountPenDial(): a new spray count
  // replays from the start once in view, the same one keeps what it shows.
  function mountSprayDraw(args) {
    if (sprayAnim.io) { sprayAnim.io.disconnect(); sprayAnim.io = null; }
    var el = args && document.querySelector('.spray-stage');
    if (!el) {
      stopSpray();
      sprayAnim.el = null;
      sprayAnim.n = 0;
      return;
    }
    sprayAnim.el = el;
    el.addEventListener('click', playSpray);
    if (args.n !== sprayAnim.n) {
      stopSpray();
      sprayAnim.n = args.n;
      sprayAnim.t = -1;
      sprayAnim.played = false;
    }
    drawSpray();
    if (sprayAnim.played) return;
    if (typeof IntersectionObserver === 'undefined') {
      sprayAnim.timer = setTimeout(playSpray, 350);
      return;
    }
    sprayAnim.io = new IntersectionObserver(function(entries) {
      var entry = entries[entries.length - 1];
      clearTimeout(sprayAnim.timer);
      // the short wait lets typing settle before the pump moves
      if (entry.isIntersecting && entry.intersectionRatio >= 0.85 && !sprayAnim.played) {
        sprayAnim.timer = setTimeout(playSpray, 350);
      }
    }, { threshold: [0, 0.85, 1] });
    sprayAnim.io.observe(el);
  }
  // Blend vial: the liquid sloshes once when the result comes into view, and
  // again on tap; otherwise it lies still.
  var blendAnim = { el: null, key: '', args: null, t: -1, played: false, raf: 0, timer: 0, io: null };

  function drawBlendVial() {
    var el = blendAnim.el, a = blendAnim.args;
    if (!el || !el.isConnected || !a) return;
    el.innerHTML = themeArt(blendVialSvg(a.components, a.totalMg, a.water, blendAnim.t))
      .replace('class="syringe-viz"', 'class="syringe-viz" aria-hidden="true"');
  }

  function stopBlendVial() {
    cancelAnimationFrame(blendAnim.raf);
    clearTimeout(blendAnim.timer);
  }

  function playBlendVial() {
    stopBlendVial();
    blendAnim.played = true;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    var start = performance.now();
    function frame(now) {
      var t = (now - start) / 1000;
      blendAnim.t = t < 1.8 ? t : -1;
      drawBlendVial();
      if (t < 1.8) blendAnim.raf = requestAnimationFrame(frame);
    }
    blendAnim.raf = requestAnimationFrame(frame);
  }

  // Called after every result render, like mountPenDial(): a changed blend
  // sloshes again once in view, the same one stays still.
  function mountBlendVial(args) {
    if (blendAnim.io) { blendAnim.io.disconnect(); blendAnim.io = null; }
    var el = args && document.querySelector('.blend-stage');
    if (!el) {
      stopBlendVial();
      blendAnim.el = null;
      blendAnim.key = '';
      return;
    }
    blendAnim.el = el;
    blendAnim.args = args;
    el.addEventListener('click', playBlendVial);
    var key = args.water + '|' + args.components.map(function(c) { return c.name + ':' + c.mg; }).join(',');
    if (key !== blendAnim.key) {
      stopBlendVial();
      blendAnim.key = key;
      blendAnim.t = -1;
      blendAnim.played = false;
    }
    drawBlendVial();
    if (blendAnim.played) return;
    if (typeof IntersectionObserver === 'undefined') return;
    blendAnim.io = new IntersectionObserver(function(entries) {
      var entry = entries[entries.length - 1];
      clearTimeout(blendAnim.timer);
      if (entry.isIntersecting && entry.intersectionRatio >= 0.85 && !blendAnim.played) {
        blendAnim.timer = setTimeout(playBlendVial, 350);
      }
    }, { threshold: [0, 0.85, 1] });
    blendAnim.io.observe(el);
  }





  function renderResult() {
    var result = calculate();
    var card = document.getElementById('result-card');
    var content = document.getElementById('result-content');

    if (!result) {
      card.classList.remove('ready', 'settled');
      content.innerHTML =
        '<div class="result-empty">' +
          '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">' +
            '<path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>' +
          '</svg>' +
          '<div>' + t('empty') + '</div>' +
        '</div>';
      mountPenDial(-1);
      return;
    }

    // The panel is rebuilt on every keystroke, and each rebuild is a new element
    // that would replay the fade-in. Only the first appearance should animate.
    card.classList.toggle('settled', card.classList.contains('ready'));
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
    var penDialBlock = '';
    var penTarget = -1;
    var syDrawArgs = null;
    var sprayArgs = null;
    var blendArgs = null;
    if (isSpray) {
      var sprays = result.spraysNeeded;
      var spraysRounded = Math.ceil(sprays);
      primaryLabel = t('sprayTake');
      primaryValue = formatNum(spraysRounded, 0);
      primaryUnit = t(spraysRounded === 1 ? 'spraySingular' : 'sprayPlural');
      // mg (or IU) delivered by a single spray = concentration × spray volume.
      var mgPerSpray = result.concentration * state.sprayVolume;
      var sprayUnit = state.doseUnit === 'iu' ? 'IU' : 'mg';
      primarySub = t('sprayPerDose', { ml: formatNum(state.sprayVolume, 2), mg: formatNum(mgPerSpray, 3), u: sprayUnit }) +
        '<br>' + t('sprayOnDevice', { n: formatNum(sprays, 2), ml: formatNum(state.sprayVolume, 2) });
      sprayArgs = { n: Math.max(1, Math.ceil(sprays)) };
      vizHtml = '<button class="spray-stage" type="button" aria-label="' + t('sprayAria', { n: sprayArgs.n, w: t(sprayArgs.n === 1 ? 'spraySingular' : 'sprayPlural') }) + '. ' + t('sprayReplay') + '"></button>';
    } else if (isReverse) {
      primaryLabel = t('bacResult');
      primaryValue = formatNum(result.water, 2);
      primaryUnit = 'ml';
      primarySub = t('plainReverse', { u: unitsLabelText(unitsToDraw), d: doseLabelText(result) }) +
        '<br><span class="sub-tech">' + t('reverseSub', { u: formatNum(unitsToDraw, 0), ml: formatNum(volumeMl, 4) }) + '</span>';
      vizHtml = themeArt(vialFillSvg(result.water));
    } else if (isPen) {
      primaryLabel = t('penDial');
      primaryValue = formatNum(unitsToDraw, 2);
      primaryUnit = t('units');
      primarySub = t('plainPen', { u: unitsLabelText(unitsToDraw), d: doseLabelText(result) }) +
        '<br><span class="sub-tech">' + t('penSub', { ml: formatNum(volumeMl, 4) }) + '</span>';
      // The pen gets its dial close-up under the result instead of an artwork beside it
      vizHtml = '';
      penTarget = Math.round(unitsToDraw);
      if (penTarget >= 1 && penTarget <= PEN_MAX_UNITS) penDialBlock = penDialHtml(penTarget);
    } else if (isBlendResult) {
      primaryLabel = t('drawTo');
      primaryValue = formatNum(unitsToDraw, 2);
      primaryUnit = t('units');
      primarySub = t('plainDraw', { u: unitsLabelText(unitsToDraw), d: doseLabelText(result) }) +
        '<br><span class="sub-tech">≈ ' + formatNum(volumeMl, 4) + ' ml ' + t('onSyringe', { t: 'U100', c: '1', u: '100' }) + '</span>';
      blendArgs = { components: result.components, totalMg: result.totalMg, water: state.water };
      vizHtml = '<button class="blend-stage" type="button" aria-label="' + t('blendAria', { mg: formatNum(result.totalMg), ml: formatNum(state.water, 2) }) + '. ' + t('blendReplay') + '"></button>';
    } else {
      primaryLabel = t('drawTo');
      primaryValue = formatNum(unitsToDraw, 2);
      primaryUnit = t('units');
      primarySub = t('plainDraw', { u: unitsLabelText(unitsToDraw), d: doseLabelText(result) }) +
        '<br><span class="sub-tech">≈ ' + formatNum(volumeMl, 4) + ' ml ' + t('onSyringe', { t: 'U' + state.syringeType, c: formatNum(state.capacity, 2), u: formatNum(result.maxUnits, 1) }) + '</span>';
      syDrawArgs = { units: unitsToDraw, water: state.water, mlPerUnit: volumeMl / unitsToDraw, overflow: unitsToDraw > result.maxUnits };
      vizHtml = '<button class="syringe-stage" type="button" aria-label="' + t('syringeAria', { n: formatNum(unitsToDraw, 2) }) + '. ' + t('syringeReplay') + '"></button>';
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

    // One summary box: what a single unit holds, and how far the vial goes.
    // The mg/ml concentration is an intermediate step nobody acts on, so it is
    // no longer shown. Spray mode has no units; its per-spray amount is already
    // stated under the big number.
    var wholeDoses = formatNum(Math.floor(totalDoses), 0);
    var summaryHtml = isSpray
      ? t('summarySpray', { d: doseLabelText(result), n: wholeDoses })
      : t(isBlendResult ? 'summaryBlend' : 'summary', {
          pu: perUnitText(concentration, result.syringeType || state.syringeType),
          u: unitsLabelText(unitsToDraw),
          n: wholeDoses,
          d: doseLabelText(result)
        });

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
            '<div class="stat stat-summary">' + summaryHtml + '</div>' +
          '</div>' +
        '</div>' +
        (vizHtml ? '<div class="result-syringe">' + vizHtml + '</div>' : '') +
      '</div>' +
      penDialBlock +
      blendTableHtml +
      frequencyTableHtml(totalDoses, result, isSpray, unitsToDraw) +
      '<div class="actions">' +
        '<button class="btn danger" id="reset-btn" type="button">' +
          '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 109-9 9.75 9.75 0 00-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>' +
          t('reset') +
        '</button>' +
      '</div>';

    document.getElementById('reset-btn').addEventListener('click', resetAll);
    mountPenDial(penTarget);
    mountSyringeDraw(syDrawArgs);
    mountSprayDraw(sprayArgs);
    mountBlendVial(blendArgs);
  }

  // Clear every input. Shared by the reset button under the result and the one
  // at the top of the form, so a phone user need not scroll down to start over.
  function resetAll() {
    state.peptide = '';
    state.vial = null;
    state.water = null;
    state.dose = null;
    state.doseUnit = 'mg';
    state.syringe = SYRINGE_DEFAULT;
    state.syringeType = 100;
    state.capacity = CAPACITY_DEFAULT;
    state.targetUnits = null;
    state.sprayVolume = null;
    state.blend = [{ name: '', amount: BLEND_DEFAULT_MG, unit: 'mg' }, { name: '', amount: BLEND_DEFAULT_MG, unit: 'mg' }];
    state.blendAnchor = null;
    state.autoApplied = false;
    // Re-apply the mode rules: without this a reset in spray mode left the
    // dose unit on mg, which spray mode does not allow.
    enforceSprayDefaults();
    enforceBlendDefaults();
    saveState();
    document.getElementById('peptide-select').value = '';
    ['vial', 'water', 'dose', 'syringe', 'capacity', 'targetunits', 'spray'].forEach(function(k) {
      document.getElementById(k + '-custom').style.display = 'none';
      document.getElementById(k + '-input').value = '';
    });
    renderAll();
  }

  // True once the user has entered or picked anything worth resetting. Spray
  // mode's automatic 2 ml of saline does not count, nor does its forced mcg.
  function hasInput() {
    if (state.peptide || state.blendAnchor) return true;
    if (state.vial != null || state.dose != null || state.targetUnits != null || state.sprayVolume != null) return true;
    // the preselected U100 / 1 ml syringe is not something the user entered
    if ((state.syringe != null && state.syringe !== SYRINGE_DEFAULT) ||
        (state.capacity != null && state.capacity !== CAPACITY_DEFAULT)) return true;
    if (state.water != null && !(state.mode === 'spray' && state.water === 2)) return true;
    if (state.mode !== 'spray' && state.doseUnit !== 'mg') return true;
    // an unnamed row at its default 10 mg is not something the user entered
    return (state.blend || []).some(function(r) {
      return (r.name || '').trim() || (r.amount != null && r.amount !== BLEND_DEFAULT_MG);
    });
  }

  function syncResetTop() {
    var b = document.getElementById('reset-top');
    if (b) b.hidden = !hasInput();
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
    syncPressed();
    syncResetTop();
    // Copy and Share build the URL fresh, but a long-press "Copy Link" reads
    // the href directly — keep it current or it hands out stale settings.
    if (refreshShareLink) refreshShareLink();
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
    renderResult();
    syncPressed();
    syncResetTop();
    if (refreshShareLink) refreshShareLink();
  }

  // ---------- Event listeners ----------
  // Fill every step from a peptide's defaults. Nose-spray mode takes the
  // peptide's sprayWater when it has one: nasal doses are split into 0.1 ml
  // sprays, so they need a different dilution than an injection vial.
  function applyPeptideDefaults(name) {
    var d = PEPTIDE_DEFAULTS[name];
    state.vial = d.vial;
    state.water = state.mode === 'spray' && d.sprayWater ? d.sprayWater : d.water;
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
  }

  document.getElementById('peptide-select').addEventListener('change', function(e) {
    state.peptide = e.target.value;
    if (state.peptide && PEPTIDE_DEFAULTS[state.peptide]) {
      applyPeptideDefaults(state.peptide);
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
      // A peptide with its own nose-spray dilution switches to it (and back)
      // when the mode crosses the spray boundary — but only while the values
      // are still its untouched defaults; edited numbers are never overwritten.
      var pd = PEPTIDE_DEFAULTS[state.peptide];
      var reapply = state.autoApplied && pd && pd.sprayWater &&
        (newMode === 'spray') !== (state.mode === 'spray');
      state.mode = newMode;
      state.autoApplied = false;
      if (reapply) applyPeptideDefaults(state.peptide);
      enforceSprayDefaults();
      enforceBlendDefaults();
      if (newMode === 'blend') renderBlendRows();
      renderPeptideSelect();   // the list differs in spray mode
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
  applyQueryToState();
  applyTheme();
  // Restored state has to satisfy the same mode invariants a mode switch does —
  // blend and spray cannot dose in IU, and without this a saved (or shared)
  // blend+IU session silently read its mg concentration as IU.
  enforceSprayDefaults();
  enforceBlendDefaults();
  saveState();

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
      state.blend.push({ name: '', amount: BLEND_DEFAULT_MG, unit: 'mg' });
      renderBlendRows();
      update();
    });
  }

  document.getElementById('reset-top').addEventListener('click', resetAll);

  // Theme switch: light / dark (soft) / classic
  var themeBtns = document.querySelectorAll('.theme-btn');
  for (var tbi = 0; tbi < themeBtns.length; tbi++) {
    themeBtns[tbi].addEventListener('click', function() {
      var next = this.getAttribute('data-theme-opt');
      if (next === theme || THEMES.indexOf(next) === -1) return;
      theme = next;
      applyTheme();
      saveState();
      renderResult();   // the artwork is repainted per theme
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
    linkEl.textContent = base.replace(/^https?:\/\//, '').replace(/\/$/, '');
    // Runs on every edit, so touch the DOM only when the URL actually changed
    refreshShareLink = function() {
      var url = shareUrl();
      if (linkEl.getAttribute('href') !== url) linkEl.setAttribute('href', url);
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
