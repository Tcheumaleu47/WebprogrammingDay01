/*
** EPITECH PROJECT, 2026
** [NOM EXACT DU PROJET]
** File description:
** display combinations of two two-digit numbers
*/

static void print_number(int number)
{
    my_putchar(number / 10 + '0');
    my_putchar(number % 10 + '0');
}

static void print_separator(int first, int second)
{
    if (first != 98 || second != 99) {
        my_putchar(',');
        my_putchar(' ');
    }
}

int my_print_comb2(void)
{
    int first;
    int second;

    first = 0;
    while (first <= 98) {
        second = first + 1;
        while (second <= 99) {
            print_number(first);
            my_putchar(' ');
            print_number(second);
            print_separator(first, second);
            second++;
        }
        first++;
    }
    return 0;
}
