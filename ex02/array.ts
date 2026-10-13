export function countDown(from: number): number[]
{
    let i = from;

     const result: number[] = [];  //on crée un tableau vide de nombres comme ceci

     while(i > 0) {
     result.push(i);
     i--;
     }
     return result;
}

export function buildMultiplicationTable(n: number): number[][]
{
    let i = 0;
    let result: number [][] = [];

    while(i <= 9) {
        result.push([i + 1, (i + 1) * n]);
        i++;
    }
    return result;
}

export function range(start: number, end: number): number[]
{
    let i = start;
    let result: number [] = [];

    while(i <= end) {
        result.push(i);
        i++;
    }
    return result;
}