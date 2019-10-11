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
    // console.log(expr);
//    console.log('\n' + "---------" + "\n");
    console.log(expr.slice(-10)); // откусываем кусок строки
    // TODO добавить преобразование буквы

    let rawSymbol = expr.slice(-10); // отрезок строки, в котором одна буква
    let symbol = '';

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
    console.log(rawSymbol + " ноли и единицы " + symbol + " точки и тире " );
    //        console.log();
    console.log(MORSE_TABLE[symbol] + " тут один символ");
        
                
}

module.exports = {
    decode
}