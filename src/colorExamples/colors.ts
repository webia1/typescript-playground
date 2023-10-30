const g = [
  '#000B06',
  '#002011',
  '#00351C',
  '#014A27',
  '#016A52', // Dark green
  '#01743D',
  '#018043', // Green
  '#019E53',
  '#01B35E',
  '#02C869',
  '#02DD74',
  '#02F27F',
  '#0DFD8A',
  '#22FD94',
  '#37FD9E',
  '#4CFEA8',
  '#58AB27', // Light Green
  '#76FEBD',
  '#8BFEC7',
  '#A0FED1',
  '#B5FEDB',
  '#CAFFE5',
  '#DFFFEC',
  '#F4FFFA',
];

const grays = [
  '#000000',
  '#060606',
  '#111111',
  '#1D1D1D',
  '#282828',
  '#323232',
  '#3D3D3D',
  '#484848',
  '#535353',
  '#5E5E5E',
  '#696969',
  '#747474',
  '#808080',
  '#8B8B8B',
  '#969696',
  '#A1A1A1',
  '#ACACAC',
  '#B7B7B7',
  '#C2C2C2',
  '#CDCDCD',
  '#D8D8D8',
  '#E3E3E3',
  '#EEEEEE',
  '#F9F9F9',
];

const extendedFarbkreis = [
  'yellow',
  'red',
  'blue',
  'green',
  'violet',
  'orange',
  'yelloworange',
  'redorange',
  'purplered',
  'bluepurple',
  'greenblue',
  'yellowgreen',
  'grays',
];

const shadeDescriptions = [
  {
    shadeName: 'Dark',
    remarks: 'Darkest Shade',
    tr: {
      de: 'Dunkel',
      en: 'Dark',
      fr: 'Sombre',
      it: 'Buio',
    },
  },
  {
    shadeName: 'Deep',
    remarks: '',
    tr: {
      de: 'Tief',
      en: 'Deep',
      fr: 'Profond',
      it: 'Profondo',
    },
  },
  {
    shadeName: 'Rich',
    remarks: '',
    tr: {
      de: 'Reich',
      en: 'Rich',
      fr: 'Riche',
      it: 'Ricco',
    },
  },
  {
    shadeName: 'Bold',
    remarks: '',
    tr: {
      de: 'Fett',
      en: 'Bold',
      fr: 'Audacieux',
      it: 'Audace',
    },
  },
  {
    shadeName: 'Muted',
    remarks: '',
    tr: {
      de: 'Gedämpft',
      en: 'Muted',
      fr: 'Atténué',
      it: 'Smorzato',
    },
  },
  {
    shadeName: 'Subtle',
    remarks: '',
    tr: {
      de: 'Dezent',
      en: 'Subtle',
      fr: 'Subtil',
      it: 'Sottile',
    },
  },
  {
    shadeName: 'Soft',
    remarks: '',
    tr: {
      de: 'Weich',
      en: 'Soft',
      fr: 'Doux',
      it: 'Morbid',
    },
  },
  {
    shadeName: 'Sublime',
    remarks: '',
    tr: {
      de: 'Erhaben',
      en: 'Sublime',
      fr: 'Sublime',
      it: 'Sublime',
    },
  },
  {
    shadeName: 'Intense',
    remarks: '',
    tr: {
      de: 'Intensiv',
      en: 'Intense',
      fr: 'Intense',
      it: 'Intenso',
    },
  },
  {
    shadeName: 'Luminous',
    remarks: '',
    tr: {
      de: 'Leuchtend',
      en: 'Luminous',
      fr: 'Lumineux',
      it: 'Luminoso',
    },
  },
  {
    shadeName: 'Saturated',
    remarks: '',
    tr: {
      de: 'Gesättigt',
      en: 'Saturated',
      fr: 'Saturé',
      it: 'Saturato',
    },
  },
  {
    shadeName: 'Vivid',
    remarks: '',
    tr: {
      de: 'Lebhaft',
      en: 'Vivid',
      fr: 'Vif',
      it: 'Vivido',
    },
  },
  {
    shadeName: 'Dense',
    remarks: '',
    tr: {
      de: 'Dicht',
      en: 'Dense',
      fr: 'Dense',
      it: 'Densità',
    },
  },
  {
    shadeName: 'Crisp',
    remarks: '',
    tr: {
      de: 'Knackig',
      en: 'Crisp',
      fr: 'Net',
      it: 'Nitido',
    },
  },
  {
    shadeName: 'Glowing',
    remarks: '',
    tr: {
      de: 'Leuchtend',
      en: 'Glowing',
      fr: 'Lumineux',
      it: 'Luminoso',
    },
  },
  {
    shadeName: 'Sharp',
    remarks: '',
    tr: {
      de: 'Scharf',
      en: 'Sharp',
      fr: 'Vif',
      it: 'Nitido',
    },
  },
  {
    shadeName: 'Sheer',
    remarks: '',
    tr: {
      de: 'Durchscheinend',
      en: 'Sheer',
      fr: 'Diaphane',
      it: 'Leggero',
    },
  },
  {
    shadeName: 'Glossy',
    remarks: '',
    tr: {
      de: 'Glänzend',
      en: 'Glossy',
      fr: 'Brillant',
      it: 'Lucido',
    },
  },
  {
    shadeName: 'Opulent',
    remarks: '',
    tr: {
      de: 'Opulent',
      en: 'Opulent',
      fr: 'Opulent',
      it: 'Opulento',
    },
  },
  {
    shadeName: 'Sleek',
    remarks: '',
    tr: {
      de: 'Geschmeidig',
      en: 'Sleek',
      fr: 'Épuré',
      it: 'Elegante',
    },
  },
  {
    shadeName: 'Harmonious',
    remarks: '',
    tr: {
      de: 'Harmonisch',
      en: 'Harmonious',
      fr: 'Harmonieux',
      it: 'Armonico',
    },
  },
  {
    shadeName: 'Ethereal',
    remarks: '',
    tr: {
      de: 'Ätherisch',
      en: 'Ethereal',
      fr: 'Éthéré',
      it: 'Etereo',
    },
  },

  {
    shadeName: 'Heavenly',
    remarks: '',
    tr: {
      de: 'Himmlisch',
      en: 'Heavenly',
      fr: 'Céleste',
      it: 'Celeste',
    },
  },
  {
    shadeName: 'Bright',
    remarks: 'Brightes shade',
    tr: {
      de: 'Hell',
      en: 'Bright',
      fr: 'Brillant',
      it: 'Luminosa',
    },
  },
];

console.log(g.length);
console.log(shadeDescriptions.length);
console.log(grays.reverse());
