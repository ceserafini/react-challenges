
export const LetterCount = (line: string) => { 
  let words = line.split(/[^\w]/g);
  let index = -1;
  let amount = new Array(words.length).fill(0);

  words.forEach((word, idx) => {
    let letters = word.toLowerCase().split('');
    while (letters.length > 1) {
      const letter: any = letters.shift();
      if ( letters.indexOf(letter) !== -1 ) {
        amount[idx] = amount[idx] + 1;
      }
    }
  });
  return Math.max(...amount) > 0 ? words[amount.indexOf(Math.max(...amount))] : -1;
}

// keep this function call here 
// console.log(LetterCount("Today, is the greatest day ever!"));