#!/usr/bin/python3

def fib(a, b):    # write Fibonacci series up to n
    print("{}".format(a + b), end = '\n')

if __name__ == "__main__":
    import sys
    arg1 = sys.argv[1]
    arg2 = sys.argv[2]
    fib(arg1, arg2)
