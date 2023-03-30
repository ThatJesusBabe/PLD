#include <stdarg.h>
#include <stdio.h>
#include "main.h"

/**
 * print_binary - handles b specifier
 * @lists: arguments list
 * Return: the binary
 */

int print_binary(va_list lists, int print_number(int))
{
	int num, mon = 1, bin = 0, half;

	num = va_arg(lists, int);
	if (num == 0)
	{
		_putchar(num);
		if (num > 0)
		{
			while (num != 0)
			{
				half = num % 2;
				num /= 2;
				bin += half * mon;
				mon *= 10;
			}
			print_number(bin);
		}
	}
	return (print_number(bin));
}
