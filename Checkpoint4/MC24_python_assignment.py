# Exercise 1
# Para tener un decimal hay que importar la librería decimal
from decimal import Decimal

unalista = ["Comida", "Pajaro", "Angulo", "Letra", "Ciudad",]
untuple = ("Panadería", 3 , ["hoy", "mañana", "pasado"],)
unfloat = 3.2
unint = 10
undecimal = Decimal("0.1")
undiccionario =  {"Panes": 10, "Pescados" : 2, "Alubias": 300, "Comprador" : "Pepe"}

print("Exercise 1")
print("lista " + str(unalista))
print(type(unalista))
print("tuple " + str(untuple))
print(type(untuple))
print("float " + str(unfloat))
print(type(unfloat))
print("int " + str(unint))
print(type(unint))
print("decimal " + str(undecimal))
print(type(undecimal))
print("diccionario " + str(undiccionario))
print(type(undiccionario))

# Exercise 2
# Para hacer operaciones de este estilo o
# se importa una libreria como "math" o se tiene que hacer una función
import math

redondedado_up = math.ceil(unfloat)
print("Exercise 2")
print("redondeo hacia arriba de " + str(unfloat))
print(redondedado_up)
print(type(redondedado_up))

# Exercise 3

raiz_float = math.sqrt(unfloat)
print("Exercise 3")
print("raiz de " + str(unfloat))
print(raiz_float)

# Exercise 4
# No tengo claro que quiere decir precisamente el primer elemento. Asi que imprimo el conjunto, la llave y el valor.

print("Exercise 4")
primer_elemento_dic = list(undiccionario.items())[0]
primer_key_dic = list(undiccionario.keys())[0]
primer_valor_dic = list(undiccionario.values())[0]
print("Elemento primero del diccionario, primero, el conjunto como tuple " + str(primer_elemento_dic) +
".\nLuego, la primera llave " + primer_key_dic + ".\nPor útlimo, su valor " + str(primer_valor_dic) + 
"."
)

# Exercise 5

segundo_tuple = untuple[1]
print("Exercise 5")
print("El segundo elemento del tuple es " + str(segundo_tuple))

# Exercise 6

unalista.append("Premura")
print("Exercise 6")
print("La nueva lista es " + str(unalista))

# Exercise 7

unalista[0] = "Todo"
print("Exercise 7")
print("Reemplazando el primer elemento queda " + str(unalista))

# Exercise 8

unalista.sort()
print("Exercise 8")
print("Ordenadando la lista por orden queda " + str(unalista))

# Exercise 9

untuple += ("Amor de madre",)
print("Exercise 8")
print("Añadiendo un elemento al tuple "+ str(untuple))