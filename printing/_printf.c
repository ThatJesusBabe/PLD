#include "main.h"

/**
 * _printf - prints to stdout
 * @format: a character string
 * Return: the number of characters printed
 */

int _printf(const char *format, ...)
{
	int count = 0, i;
	va_list lists;
	va_start(lists, format);

	for (i = 0; format[i] != '\0'; i++)
	{
		if (format[i] != '%')
		{
			count = count + i;
			_putchar(format[i]);
		}
		else if ((format[i] == '%') && (format[i + 1] == ' '))
		{
			count = count + i;
			switch(format[i + 1])
			{
				case 'c':
					_putchar(va_arg(lists, int));
					break;
				case 's':
					print_string(va_arg(lists, char*));
					break;
				case '%':
					_putchar('%');
					break;
				case 'd':
					print_number(va_arg(lists, int));
					break;
				case 'i':
					print_number(va_arg(lists, int));
					break;
				case 'b':
					print_binary(va_arg(lists, int));
					break;
				default:
					break;
			}
			i += 2;
		}
	}
	va_end(lists);
	return (count);
}
