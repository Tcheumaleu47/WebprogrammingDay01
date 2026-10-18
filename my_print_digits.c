/*
** EPITECH PROJECT, 2026
** my_print_digits.c
** File description:
** Print digits from 0 to 9
*/

#include <unistd.h>

void my_print_digits(void)
{
    char c = '0';

    while (c <= '9') {
        write(1, &c, 1);
        c++;
    }
}
