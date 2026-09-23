// Peptide reconstitution defaults — edit this list to add or adjust peptides.
// Fields: vial (mg or IU), water (ml), dose (number), doseUnit ('mg'|'mcg'|'iu'), syringe (units/ml),
//         nasal (true = listed in nose-spray mode),
//         sprayWater (ml of saline in nose-spray mode, when it differs from water).
// nasal is set where intranasal use in humans is documented — an approved nasal
// product or a human study using the nasal route; the source is noted on each
// line. Melanotan 1 and 2 are the exception: no human nasal data exists, but
// both are widely sold and used as sprays, so they are listed on purpose. Their
// nasal dose is the injection dose; sprayWater (10 mg in 4 ml) makes it come out
// at whole 0.1 ml sprays. Left out: BPC-157 (sold as a spray, no human nasal
// data), Ipamorelin and GHRP-6 (one-volunteer doping test only), Kisspeptin-10
// (the nasal study used kisspeptin-54) and HGH (nasal study used a special
// formulation; spray mode cannot dose in IU).
// Loaded before app.js so PEPTIDE_DEFAULTS is available globally.

var PEPTIDE_DEFAULTS = {
  'BPC-157':           { vial: 5,  water: 2.0, dose: 0.25, doseUnit: 'mg', syringe: 100 },
  'TB-500':            { vial: 5,  water: 2.0, dose: 2,    doseUnit: 'mg', syringe: 100 },
  'GHK-Cu':            { vial: 50, water: 3.0, dose: 2,    doseUnit: 'mg', syringe: 100 },
  'KPV':               { vial: 5,  water: 2.0, dose: 0.5,  doseUnit: 'mg', syringe: 100 },
  'CJC-1295 DAC':      { vial: 2,  water: 2.0, dose: 1,    doseUnit: 'mg', syringe: 100 },
  'Ipamorelin':        { vial: 5,  water: 2.0, dose: 0.3,  doseUnit: 'mg', syringe: 100 },
  'Sermorelin':        { vial: 5,  water: 2.0, dose: 0.3,  doseUnit: 'mg', syringe: 100, nasal: true }, // intranasal GHRH(1-29) study, 3-5% bioavailable (Wilton 1993)
  'Tesamorelin':       { vial: 5,  water: 2.0, dose: 2,    doseUnit: 'mg', syringe: 100 },
  'Hexarelin':         { vial: 5,  water: 2.0, dose: 0.1,  doseUnit: 'mg', syringe: 100, nasal: true }, // intranasal trials in children (Laron 1995)
  'GHRP-2':            { vial: 5,  water: 2.0, dose: 0.2,  doseUnit: 'mg', syringe: 100, nasal: true }, // intranasal trials in children (Pihoker 1997)
  'GHRP-6':            { vial: 5,  water: 2.0, dose: 0.2,  doseUnit: 'mg', syringe: 100 },
  'MOTS-c':            { vial: 10, water: 2.0, dose: 10,   doseUnit: 'mg', syringe: 100 },
  'Epithalon':         { vial: 10, water: 2.0, dose: 10,   doseUnit: 'mg', syringe: 100 },
  'Selank':            { vial: 5,  water: 2.0, dose: 0.25, doseUnit: 'mg', syringe: 100, nasal: true }, // approved nasal drops (Russia)
  'Semax':             { vial: 5,  water: 2.0, dose: 0.25, doseUnit: 'mg', syringe: 100, nasal: true }, // approved nasal drops (Russia)
  'Semaglutide':       { vial: 5,  water: 2.0, dose: 0.5,  doseUnit: 'mg', syringe: 100 },
  'Tirzepatide':       { vial: 10, water: 2.0, dose: 5,    doseUnit: 'mg', syringe: 100 },
  'Retatrutide':       { vial: 10, water: 2.0, dose: 4,    doseUnit: 'mg', syringe: 100 },
  'Cagrilintide':      { vial: 5,  water: 2.0, dose: 1,    doseUnit: 'mg', syringe: 100 },
  'Liraglutide':       { vial: 15, water: 3.0, dose: 2,    doseUnit: 'mg', syringe: 100 },
  'PT-141':            { vial: 10, water: 2.0, dose: 1,    doseUnit: 'mg', syringe: 100, nasal: true }, // intranasal human trials; dropped for BP spikes, now SC only
  'Melanotan 1':       { vial: 10, water: 2.0, dose: 0.5,  doseUnit: 'mg', syringe: 100, nasal: true, sprayWater: 4.0 }, // 0.5-1 mg SC; nasal: no human data, sold as spray
  'Melanotan 2':       { vial: 10, water: 2.0, dose: 0.25, doseUnit: 'mg', syringe: 100, nasal: true, sprayWater: 4.0 }, // 250-500 mcg SC; nasal: no human data, sold as spray
  'Oxytocin':          { vial: 2,  water: 2.0, dose: 0.05, doseUnit: 'mg', syringe: 100, nasal: true }, // approved nasal spray (Syntocinon, EU)
  'LL-37':             { vial: 5,  water: 2.0, dose: 0.5,  doseUnit: 'mg', syringe: 100 },
  'Thymosin Alpha-1':  { vial: 5,  water: 2.0, dose: 1.6,  doseUnit: 'mg', syringe: 100 },
  'Thymalin':          { vial: 10, water: 2.0, dose: 10,   doseUnit: 'mg', syringe: 100 },
  'IGF-1 LR3':         { vial: 1,  water: 1.0, dose: 0.05, doseUnit: 'mg', syringe: 100 },
  'IGF-1 DES':         { vial: 1,  water: 1.0, dose: 0.1,  doseUnit: 'mg', syringe: 100 },
  'MGF (C-terminal)':  { vial: 2,  water: 2.0, dose: 0.2,  doseUnit: 'mg', syringe: 100 },
  'PEG-MGF':           { vial: 2,  water: 2.0, dose: 0.2,  doseUnit: 'mg', syringe: 100 },
  'HGH Fragment 176-191': { vial: 5, water: 2.0, dose: 0.5,  doseUnit: 'mg', syringe: 100 },
  'AOD9604':           { vial: 5,  water: 2.0, dose: 0.3,  doseUnit: 'mg', syringe: 100 },
  'SS-31':             { vial: 5,  water: 2.0, dose: 5,    doseUnit: 'mg', syringe: 100 },
  'FOXO4-DRI':         { vial: 5,  water: 2.0, dose: 5,    doseUnit: 'mg', syringe: 100 },
  'NAD+':              { vial: 50, water: 2.0, dose: 50,   doseUnit: 'mg', syringe: 100 },
  'Glutathione':       { vial: 50, water: 2.0, dose: 50,   doseUnit: 'mg', syringe: 100, nasal: true }, // intranasal RCTs in Parkinson's (Mischley 2015, 2017)
  'DSIP':              { vial: 5,  water: 2.0, dose: 0.25, doseUnit: 'mg', syringe: 100, nasal: true }, // intranasal human study (Hruz 2001)
  'Kisspeptin-10':     { vial: 5,  water: 2.0, dose: 0.1,  doseUnit: 'mg', syringe: 100 },
  'Gonadorelin':       { vial: 10, water: 2.0, dose: 0.1,  doseUnit: 'mg', syringe: 100, nasal: true }, // approved nasal spray (Kryptocur, Germany)
  'GHRH':              { vial: 5,  water: 2.0, dose: 0.1,  doseUnit: 'mg', syringe: 100, nasal: true }, // intranasal GHRH-44 dose study (1990)
  'ModGRF 1-29':       { vial: 5,  water: 2.0, dose: 0.1,  doseUnit: 'mg', syringe: 100 },
  'Follistatin-315':   { vial: 1,  water: 2.0, dose: 0.1,  doseUnit: 'mg', syringe: 100 },
  'Follistatin-344':   { vial: 1,  water: 2.0, dose: 0.1,  doseUnit: 'mg', syringe: 100 },
  'HGH (Somatropin)':  { vial: 10, water: 1.0, dose: 2,    doseUnit: 'iu', syringe: 100 }
};
