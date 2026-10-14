export function doubleAll(arr: number[]): number[]
{
    return arr.map((n) => { // conserver le resultat dans n
        return n * 2;
    });
}

export function keepEven(arr: number[]): number[]
{
    return arr.filter((n) => { // filter sert a selectioner des element 
        return n % 2 === 0;
    });
}

export function sum(arr: number[]): number
{
    return arr.reduce((total, n) => {
        return total + n;
    }, 0);
}

export function wordsToLengths(words: string[]): number[]
{
     return words.map((word) => {
         return word.length; // c'est pour  calculer la longueur
     }                                                                                                                                                                               );
}
