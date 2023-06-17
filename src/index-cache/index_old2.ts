export type KeyValueObjType = {
  key: string;
  value: string;
};

export type TranslationsType = {
  [index: string]: Array<KeyValueObjType>;
};

export const translations: TranslationsType = {
  de: [
    {
      key: 'SomeKey',
      value: 'Translation for Key',
    },
  ],
  en: [
    {
      key: 'SomeKey',
      value: 'Translation for Key',
    },
  ],
};

export const langKeys = Object.keys(translations);

export type LangKeysType = (typeof langKeys)[number]; // <--- !!

console.log(langKeys);

export type FlatValueType = {
  [key: string]: string;
};

export type FlatTranslationStringsType = {
  [lang in LangKeysType]: FlatValueType;
};

export const resultObj: FlatTranslationStringsType = {};

langKeys.forEach((langKey: string) => {
  const langArr: Array<KeyValueObjType> = translations[langKey];
  resultObj[langKey] = {};
  langArr.forEach((obj) => {
    resultObj[langKey][obj.key] = obj.value;
  });
});

console.log(resultObj);

/**
 * Output:
 * {
 *  de: { SomeKey: 'Translation for Key' },
 *  en: { SomeKey: 'Translation for Key' }
 * }
 */
