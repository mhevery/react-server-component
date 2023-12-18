
export const usePeople = (props: { size?: number }) => {
  const size = props.size || 100;
  const people: Person[] = [];
  for (let i = 0; i < size; i++) {
    people.push({
      id: String(i),
      name: randomWord() + " " + randomWord() + " " + randomWord(),
      age: Math.round(Math.random() * 100),
      location: randomWord() + randomWord(),
    });
  }
  return people;
};

const WORDS = [
  "lorem",
  "ipsum",
  "plurum",
  "pas",
  "or",
  "athm",
  "con",
  "laso",
  "daum",
  "fun",
  "arum",
  "malu",
  "var",
];

function randomWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

export interface Person {
  id: string;
  name: string;
  age: number;
  location: string;
}