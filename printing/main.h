#ifndef MAIN_H
#define MAIN_H

#include <stdio.h>
#include <stdarg.h>

int print_binary(va_list list, int print_number(int));
int _putchar(char c);
int _puts(char *str);
int print_string(va_list list, int (*f)(char *));
int _printf(const char *format, ...);

#endif
