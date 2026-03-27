# M3C6 Assignment 
# Cree una clase de Python llamada Usuario que use
# el método init y cree un nombre de usuario y una contraseña.
# Crea un objeto usando la clase.

# Clase Usuario
class Usuario:
    def __init__(self, nombre, password):
        self.nombre = nombre
        self.password = password
# Objetos

first_user = Usuario("Pepe","$$sabor234")

#Print para saber que lo he hecho bien

print(first_user.nombre + "  " + first_user.password )