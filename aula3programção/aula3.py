import os
os.system ('cls')

num = int(input('digite um numero de três algarismo:'))
d1 = num//100
d2 = num%100//10
d3 = num%10

print (f'{d3}{d2}{d1}')
