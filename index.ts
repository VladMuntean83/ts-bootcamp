import readline = require('readline');

class Printer {
    private wordList: string[];

    constructor() {
        this.wordList = [];
    }

    add(word: string) : void {
        this.wordList.push(word);
    }

    reverse() : void {
        this.wordList.reverse();
    }

    overwrite(word: string) : void {
        this.wordList = [word];
    }

    addBeforeBee(word: string) : void {
        let idx: number;
        for (idx = 0; idx < this.wordList.length; idx++)
            if (this.wordList[idx][0] == 'B')
                break;
        this.wordList.splice(idx, 0, word)
    }

    isEmpty() : boolean {
        return (this.wordList.length == 0);
    }

    print(): void {
        console.log(this.wordList.join(''));
    }

    result(): string {
        return this.wordList.join('');
    }
}

export const rules = {
    3: (printer: Printer, num: number): void => {
        if (num % 3 == 0) printer.add('Fizz');
    },
    5: (printer: Printer, num: number): void => {
        if (num % 5 == 0) printer.add('Buzz');
    },
    7: (printer: Printer, num: number): void => {
        if (num % 7 == 0) printer.add('Bang');
    },
    11: (printer: Printer, num: number): void => {
        if (num % 11 == 0) printer.overwrite('Bong');
    },
    13: (printer: Printer, num: number): void => {
        if (num % 13 == 0) printer.addBeforeBee('Fezz');
    },
    17: (printer: Printer, num: number): void => {
        if (num % 17 == 0) printer.reverse();
    }
};

export const restrictions: Set<string> = new Set<string>();

export function fizzbuzz(n: number, justN: boolean = false): string {

    let i = justN ? n : 1;
    let last: string;
    for (i; i <= n; i++) {
        let printer: Printer = new Printer();

        // Check for restrictions and run rules
        for (const [key, value] of Object.entries(rules))
            if(!restrictions.has(key))
                value(printer, i);

        // Print number if no word list generated
        printer.isEmpty() ? console.log(i) : printer.print();
        last = printer.result();
        if(last == '')
            last = String(i);
    }

    // Last element (n) for check, can be ignored
    return last;
}

// Read from terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Input max number + restrictions (space separated)
rl.question("Input a number (+ restrictions): ", (answer: string) => {
    let args: string[] = answer.split(" ");
    let num: number = Number(args[0]);

    // Check valid input
    if (isNaN(num)) {
        console.log("INVALID: Use a number! Exiting..");
    } else {
        // Check if number was given and add to set
        args.slice(1).forEach((arg: string): void => {
            if (!isNaN(Number(arg))) restrictions.add(arg);
        });

        fizzbuzz(num);
    }

    rl.close();
});