const Facts = [
  { id: 1, name: 'bee allergy', keywords: ['bee', 'allergy'] },
  {
    id: 2,
    name: 'arachnophobia',
    keywords: [
      'spider',
      'scorpion',
      'arachnid',
      'intense',
      'irrational',
      'fear',
    ],
  },
];

type FactsType = typeof Facts[number];

//   ^ type FactsType = {
//       id: number;
//       name: string;
//       keywords: Array<string>;
//     }

type FactsKeywordType = typeof Facts[number]['keywords'];
//   ^ type FactsKeywordType = Array<string>
