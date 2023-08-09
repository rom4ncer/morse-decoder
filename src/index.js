const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const DECODE_TABLE = {
    '00': '',
    '10': '.',
    '11': '-',
    '**': '**'
};

function decode(expr) {
    // write your solution here
    answer = [];
    arr = [];
    while (expr.length > 0) {
        arr.push(expr.slice(0, 10));
        expr = expr.slice(10);
    } 
    arr.forEach( (item) => {
        let word = '';
        for (let i = 0; i < 10; i += 2) {
            let char = item.slice(i, i + 2);
            word += DECODE_TABLE[char];
        }
        (word == '**********') ? answer += [' '] : answer += [MORSE_TABLE[word]];
    });
    return answer;
}

module.exports = {
    decode
}