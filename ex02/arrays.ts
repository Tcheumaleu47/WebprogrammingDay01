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