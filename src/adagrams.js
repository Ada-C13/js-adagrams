const Adagrams = {
  drawLetters() {
    const letters_info = {
      'A': {
        'quantity': 9,
        'score': 1
      },
      'B': {
        'quantity': 2,
        'score': 3
      },
      'C': {
        'quantity': 2,
        'score': 3
      },
      'D': {
        'quantity': 4,
        'score': 2
      }, 
      'E': {
        'quantity': 12,
        'score': 1
      },
      'F': {
        'quantity': 2,
        'score': 3
      },
      'G': {
        'quantity': 3,
        'score': 2
      },
      'H': {
        'quantity': 2,
        'score': 4
      },
      'I': {
        'quantity': 9,
        'score': 1
      },
      'J': {
        'quantity': 1,
        'score': 8
      },
      'K': {
        'quantity': 1,
        'score': 5
      },
      'L': {
        'quantity': 4,
        'score': 1
      },
      'M': {
        'quantity': 2,
        'score': 3
      },
      'N': {
        'quantity': 6,
        'score': 1
      },
      'O': {
        'quantity': 8,
        'score': 1
      },
      'P': {
        'quantity': 2,
        'score': 3
      },
      'Q': {
        'quantity': 1,
        'score': 10
      },
      'R': {
        'quantity': 6,
        'score': 1
      },
      'S': {
        'quantity': 4,
        'score': 1
      },
      'T': {
        'quantity': 6,
        'score': 1
      },
      'U': {
        'quantity': 4,
        'score': 1
      },
      'V': {
        'quantity': 2,
        'score': 4
      },
      'W': {
        'quantity': 2,
        'score': 4
      },
      'X': {
        'quantity': 1,
        'score': 8
      },
      'Y': {
        'quantity': 2,
        'score': 4
      },
      'Z': {
        'quantity': 1,
        'score': 10
      },
    };

    let letters_deck = []

    for (let key in letters_info) {
      while (letters_info[key]['quantity'] > 0) {
        letters_deck.push(key);
        letters_info[key] -= 1;
      };
    };

    letters_deck.sort(() => Math.random() - 0.5);
    return letters.slice(0, 10);
  },
};

export default Adagrams;
