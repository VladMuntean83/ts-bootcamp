// This is our main function

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
}

function fizzbuzz(): void {

    for (let i = 1; i <= 300; i++) {
        let printer: Printer = new Printer();

        if (i % 3 == 0)
            printer.add('Fizz')

        if (i % 5 == 0)
            printer.add('Buzz')

        if (i % 7 == 0)
            printer.add('Bang')

        if (i % 11 == 0)
            printer.overwrite('Bong')

        if (i % 13 == 0)
            printer.addBeforeBee('Fezz')

        if (i % 17 == 0)
            printer.reverse();

        printer.isEmpty() ? console.log(i) : printer.print();
    }
}
// Now, we run the main function:
fizzbuzz();