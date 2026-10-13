export function myStrlen(str: string): number {
str.length
let count = 0;
let i = 0;

while(count < str.length) {
    count++;
}

return count;
}

export function myPower(base: number, exp: number): number {
let result = 1;

if (exp === 0)
    return 1;
while (exp > 0) {
    result = result * base;
    exp = exp - 1;
}
return result;
}

export function myIsPrime(n: number): boolean {
    let i = 2;

if (n <= 1)
    return false;

while(i < n) {
    if (n % i === 0)
        return false;
     i++;
}
        return true;
}

export function myRepeat(str: string, n: number): string {
    let result = "";
    let i = 0;

    for(i = 0; i < n; i++) {  
        result += str;
    }
   return result;
}
