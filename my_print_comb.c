/*
** EPITECH PROJECT, 2026
** G-CPE-100-STG-1-1-cpoolday03
** File description:
** display all different combinations of three digits
*/

static void print_comb(int a, int b, int c)
{
    my_putchar(a + '0');
    my_putchar(b + '0');
    my_putchar(c + '0');
}

static void print_separator(int number)
{
    if (number != 789) {
        my_putchar(',');
        my_putchar(' ');
    }
}

int my_print_comb(void)
{
    int number = 12;
    int a;
    int b;
    int c;

    while (number <= 789) {
        a = number / 100;
        b = (number / 10) % 10;
        c = number % 10;
        if (a < b && b < c) {
            print_comb(a, b, c);
            print_separator(number);
        }
        number++;
    }
    return 0;
}
