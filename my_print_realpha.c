/*
** EPITECH PROJECT, 2026
** my_print_revalpha.c
** File description:
** Some file
*/

#include <unistd.h>

int my_print_revalpha(void)
{
    char c = 'z';

    while (c >= 'a') {
        write(1, &c, 1);
        c--;
    }
    return 0;
}
