/*
** EPITECH PROJECT, 2026
** my_isneg.c
** File description:
** Display N if negative, P otherwise
*/

int my_isneg(int n)
{
    if (n < 0) {
        my_putchar('N');
    } else {
        my_putchar('P');
    }
    return 0;
}
