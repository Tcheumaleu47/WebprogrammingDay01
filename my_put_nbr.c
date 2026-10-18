/*
** EPITECH PROJECT, 2026
** [NOM EXACT DU PROJET]
** File description:
** display an integer
*/

static void print_number(long number)
{
    if (number >= 10) {
        print_number(number / 10);
    }
    my_putchar(number % 10 + '0');
}

int my_put_nbr(int nb)
{
    long number;

    number = nb;
    if (number < 0) {
        my_putchar('-');
        number = -number;
    }
    print_number(number);
    return 0;
}
