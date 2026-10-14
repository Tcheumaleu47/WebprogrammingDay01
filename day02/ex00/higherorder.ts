export function apply(fn: (x: number) => number, value: number): number //Elle signifie que fn est une fonction qui reçoit un nombre et renvoie un nombre.
{
    let result: number

    result = fn(value);
    return result;
}

export function applyTwice(fn: (x: number) => number, value: number): number
{
    let result: number

    result = fn(value);
    result = fn(result);

    return result;
}

export function applyN(fn: (x: number) => number, n: number, value: number): number
{
    let result: number;
    let i: number;

    result = value;
    i = 0;

    while (i < n) {
        result = (fn(result)); 
        i++;
    }
    return result;
}