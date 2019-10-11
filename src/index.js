// eslint-disable-next-line no-unused-vars
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
    let endPoint = expr.length;    
    let beginPoint = endPoint - 10;
    let result = "";
       
    do {
        let rawSymbol = expr.slice(beginPoint, endPoint); // откусываем кусок строки
        beginPoint = beginPoint - 10;
        endPoint = endPoint - 10;
          
        let symbol = '';

        if (rawSymbol == "**********") {
            MORSE_TABLE[symbol] = " ";
        }
        else {
            for (let index = 0; index < 10; index = index + 2) {  // переводим двоичный код в строку
            var element = rawSymbol[index] + rawSymbol[index+1];
                switch (element) {
                    case "00":
                        break;
                    case "11":
                        symbol = symbol + "-";
                        break;
                    case "10":
                        symbol = symbol + ".";
                        break;
                    default:
                        break;
                    }
                }
            }
        result = MORSE_TABLE[symbol] + result;
        
    } while (expr.slice(beginPoint, endPoint).length != 0); // проверяем, что осталось

return result;               
}

module.exports = {
    decode
}