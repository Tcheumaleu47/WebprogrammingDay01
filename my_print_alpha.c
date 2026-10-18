/*
** EPITECH PROJECT, 2026
** my_print_alpha.c
** File description:
** Some file
*/

#include <unistd.h>

int my_print_alpha(void)
{
    char c = 'a';

    while (c <= 'z') {
        write(1, &c, 1);
        c++;
    }
    return 0;
}
