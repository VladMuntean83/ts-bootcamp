// This is our main function

function fizzbuzz(): void {

    for (let i = 1; i <= 300; i++) {
        let printer: string[] = []

        if (i % 3 == 0)
            printer.push('Fizz')

        if (i % 5 == 0)
            printer.push('Buzz')

        if (i % 7 == 0)
            printer.push('Bang')

        if (i % 11 == 0)
            printer = ['Bong']

        if (i % 13 == 0) {
            let idx: number;
            for (idx = 0; idx < printer.length; idx++)
                if (printer[idx][0] == 'B')
                    break;
            printer.splice(idx, 0, 'Fezz')
        }

        if (i % 17 == 0)
            printer.reverse();

        if (printer.length == 0)
            console.log(i);
        else
            console.log(printer.join(''))
    }
}
// Now, we run the main function:
fizzbuzz();