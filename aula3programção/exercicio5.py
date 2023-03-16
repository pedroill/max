import os 
os.system ('cls')

import math

sombra = float (input('digite o comprimento da sombra em m.'))
angulo = math.radians(float(input('digite o angulo em grau:')))
altura = math.tan(angulo) * sombra

print (f'a altura do predio é de {altura:.1f} m')