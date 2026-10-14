export function makeCounter(start: number): () => number
{
    let count: number = start;

    return () => {  // ne recoit zero argument 
        return count++;
    };
}

export function makeMultiplier(factor: number): (x: number) => number
{
    
    return (x: number) => {
        return x * factor;
    };    
}

export function makeAdder(n: number): (x: number) => number
{
    return (x: number) => {
        return (n + x);  // ajoute n a argument      
    };
}

export function memoize(fn: (x: number) => number): (x: number) => number
{
    const cache = new Map<number, number>(); // Map c'est pour conserver les résultats.

   return (x: number) => {
       if (cache.has(x))
           return cache.get(x)!;

       const result = fn(x); //calcule le résultat.
       cache.set(x, result); // mémorise le résultat.
       return result;
   };
}
