const mattressWords = [
  'california king',
  'king',
  'queen',
  'full',
  'twin',
  'crib',
  'box spring',
  'adjustable bed',
  'bed frames',
  'headboards',
  'bed sets',
  'brand',
  "Sleepy's",
  'Serta',
  'Beautyrest',
  'Tempur-pedic',
  'Purple',
  'Sterns & Foster',
  'Seally',
  'save',
  '50%',
  'best prices',
  'extra firm',
  'firm',
  'medium',
  'plush',
  'ultra plush',
  'soft',
  'snuggle',
  'comfy',
  'innerspring',
  'memory foam',
  'hybrid',
  'encased coil',
  'gel memory foam',
  'pillow top',
  'sleep trial',
  'free delivery',
  'low price guarantee',
  'special financing',
  "America's top-rated brands",
  'customized shopping options',
  'tulo mattress',
  'nap',
  'snooze',
  'snoring',
  'shut eye',
  'dreams',
  'zzzzzz',
  'sleep expert',
  'bed sheets',
  'comforters',
  'futon',
  'bunk bed',
  'pillowcases',
  'mattress toppers',
  'pillow protectors',
  'linens',
  'cooling',
  'latex',
  'hypoallergenic',
  'down',
  'position',
  'stomach',
  'back',
  'spine',
  'neck',
  'pain',
  'side',
  'loft',
  'size',
  'comfort',
  'hot',
  'bundle',
  'malouf wrap',
];
const mattressIpsumStart = 'Mattress ipsum dolor amet ';

const randomNoRepeats = (array: string[]) => {
  let copy = array.slice(0);
  return function () {
    if (copy.length < 1) {
      copy = array.slice(0);
    }
    const index = Math.floor(Math.random() * copy.length);
    const item = copy[index];
    copy.splice(index, 1);
    return item;
  };
};

const getUniqueWord = randomNoRepeats(mattressWords);

// generates a paragraph from random sentences
const getParagraph = (numOfWordsInParagraph: number) => {
  let paragraph: string[] = [];
  // Set the minimum number of words
  let firstWord = true;
  while (paragraph.length < numOfWordsInParagraph) {
    if (firstWord) {
      paragraph = paragraph.concat(getUniqueWord());
      paragraph[0] = paragraph[0].charAt(0).toUpperCase() + paragraph[0].slice(1);
      firstWord = false;
    } else {
      paragraph = paragraph.concat(getUniqueWord());
    }
  }
  return paragraph.join(' ');
};

const mattressIpsumGenerator = (numberOfParagraphs = 4, numOfWordsInParagraph = 50) => {
  let allParagraphs = [];
  // Generate the number of paragraphs as specified by the user
  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(getParagraph(numOfWordsInParagraph));
  }
  // Convert array into big string
  let mattressParagraph = mattressIpsumStart;
  allParagraphs.forEach(function (paragraph) {
    mattressParagraph += `${paragraph}
    
`;
  });
  return mattressParagraph;
};

export default mattressIpsumGenerator;
