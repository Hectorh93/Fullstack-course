palabra = """Empezamos con esta conversación:
-(1) Hola, le llamo para hablar de su seguro. 
-(2) No, gracias, no me interesa.
-(1) Bueno, una pena. Mucha suerte.
-(2) Igualmente. Adiós.
-(1) Adiós."""
print(palabra)
palabra_hola = palabra[palabra.find("Hola"):len("Hola") + palabra.find("Hola")]
print(palabra_hola)
palabra_adios = palabra.replace("Hola","adiós")
print(palabra_adios)