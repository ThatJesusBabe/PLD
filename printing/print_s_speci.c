#include "main.h"

/**
 * spec_s - handles s specifier
 * @args: arguments list
 *
 * Return: the string
 */

int print_string(va_list lists, int (*f)(char *))
{
	return (f(va_arg(lists, char *)));
}
