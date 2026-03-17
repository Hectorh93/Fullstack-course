# Exercise 1

def suma(uno, dos, tres):
    if (
        (type(uno) == type(dos) == type(tres)) and (
        type(uno) == dict)
        ):
        return uno | dos | tres
    elif type(uno) == type(dos) == type(tres):
        return uno + dos + tres
    else :
        print(
            """Las variables no son del mismo tipo 
            y por lo tanto no se pueden sumar"""
            )
        return

print("Ejercicio 1")
print(suma("Pepe"," Jose", " y Sara"))

# Excecise 2
# Con lambda es mucho más complicado ya que se debe hacer en una linea y queda horrendo.

suma_dos_complx = lambda uno, dos, tres : uno | dos | tres if ((type(uno) == type(dos) == type(tres)) and (type(uno) == dict)) else (uno + dos + tres if (type(uno) == type(dos) == type(tres)) else print("Las variables no son del mismo tipo y por lo tanto no se pueden sumar"))

# Se deja una función mucho más sencilla a modo de resolución del ejercicio

suma_dos = lambda uno, dos, tres: uno + dos + tres

print("Ejercicio 2\nSe repite dos veces para comprobar que ambas funciones dan output")
print(suma_dos(1,2,3))
print(suma_dos_complx(1,2,3))

# Exercise 3

check_variable = [False, None, None]
nombre = "Enrique"
lista_nombre = ["Jessica", "Paul", "George", "Henry", "Adán"]

for x in range(len(lista_nombre)):
    if lista_nombre[x] == nombre:
        check_variable = [True,lista_nombre[x],x]

print("Ejercicio 3")

if check_variable[0] == True:
    print(f"El nombre {nombre} está en la lista, en la posición {check_variable[2]}")
else: 
    print(f"El nombre no está en la lista")