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

function decode(expr) {
    /let decodedMessage = '';

    // Split the string into chunks of 10 characters
    for (let i = 0; i < expr.length; i += 10) {
        const chunk = expr.slice(i, i + 10);

        if (chunk === '**********') {
            decodedMessage += ' '; // Space handling
            continue;
        }

        // Remove leading zeros
        let morseCode = '';
        for (let j = 0; j < 10; j += 2) {
            const pair = chunk.slice(j, j + 2);
            if (pair === '10') {
                morseCode += '.';
            } else if (pair === '11') {
                morseCode += '-';
            }
        }

        // Convert morse code to letter and add to decoded message
        decodedMessage += MORSE_TABLE[morseCode];
    }

    return decodedMessage;
}

module.exports = {
    decode
}