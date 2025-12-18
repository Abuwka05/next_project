export type Lesson = {
  id: string;
  title: string;
  description: string;
  words: {
    term: string;
    translation: string;
  }[];
};

export const lessons: Lesson[] = [
  {
    id: 'basic-english',
    title: 'Basic English',
    description: 'Common everyday English words',
    words: [
      { term: 'Hello', translation: 'Salom' },
      { term: 'Book', translation: 'Kitob' },
      { term: 'Water', translation: 'Suv' },
    ],
  },
  {
    id: 'travel-english',
    title: 'Travel English',
    description: 'Useful words for traveling',
    words: [
      { term: 'Airport', translation: 'Aeroport' },
      { term: 'Hotel', translation: 'Mehmonxona' },
    ],
  },
];
