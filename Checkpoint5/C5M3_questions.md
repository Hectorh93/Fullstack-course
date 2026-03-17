# M3C5 Questions

---

## 1. ¿Qué es un condicional?  

- Los condionales son estructuras de control que permiten que un código  
pueda tomar decisiones por sí mismo permitiendo filtrar la ejecución de partes del código.  

- Para la comprobación de una condición se utilizan elementos llamados comparadores, cuando el código es evaluado en la ejecución del programa, estos bloques de código se sustituyen por "TRUE" o "FALSE". A continuación la lista de comparadores:

    - "==" igual que
    - "!=" distinto que
    - ">" mayor que
    - ">=" mayor o igual que
    - "<" menor que
    - "<=" menor o igual que

    > Como ejemplo: 
    >   
    > ```  
    >  a = 2  
    >  b = 3  
    >  print (a > b) 
    >  print (a =! b)  
    >  ```  
    > Obtendremos como resultado FALSO ya que "a" es menor que "b" y TRUE ya que "a" no es igual a "b"  
    &nbsp;


    Los comparados de >, >=, < y <= se utilizan principalmente con números ya que no tiene mucho sentido comparar otros tipos de variables con estos. 

- Cuando queremos unir distintas condiciones, es decir, [Concion 1] enlazado con [Condicion 2], se utilizan operadores lógicos. A continuación una lista:  
    - "and" cuando todas las condiciones son TRUE la salida es TRUE  
    - "or" cuando al menos una de las condiciones es TRUE la salida es TRUE 
    - "not" invierte la condición si es TRUE pasa a FALSE y viceversa  

    Un ejemplo de esto:  
    ```  
    TRUE and FALSE -> (FALSE)
    TRUE or FALSE -> (TRUE)
    not False and TRUE -> TRUE  
    ``` 

- Existe un número muy reducido de elementos de control:  

    1. Condicional "if" se estructura de la siguiente manera:  

        ``` 
        if [condición verdadera]:  
            [ejecuta este código]
        ```  
        Sustituyendo condición verdadera por una expresión que de por resultado TRUE or FALSE siendo TRUE cuando se ejecuta el codigo siguiente.  

    2. Condicional "if-else", es una expansión del sistema anterior donde se añade una alterantiva cuando la condición no se ejecuta, se ejecuta de la siguiente manera:  

        ```
        if [condición verdadera]:  
            [ejecuta este código]  
        else:  
            [ejecuta este otro codigo]  
        ```  
        En este caso, cuando la condición es FALSE, se ejecuta el codigo anexado a la estructura else. Esto nos da mucha flexibilidad con las condiciones y los efectos que esto tiene. Para obtener este efecto con "if" tendríamos que sustituir el "else" por otro "if" e inverir la condición, lo cual implica repetición de código y la dificultad de tener condiciones no contempladas que nunca ejecutarán código.

    3. Condicional "if-elif-else", es la última de las estructuras y es la más completa. Se estructura de la siguiente manera:  
    
        ```
        if [condición verdadera]:  
            [ejecuta este código]
        elif [otra condición verdadera]:
            [ejecuta este segundo código]  
        else:  
            [ejecuta este otro codigo]  
        ```  
        Como se puede ver, este sistema permite que dentro del mismo conjunto se ejecuten diferentes condiciones y además tener un código que se ejecute cuando ninguna se cumpla. Se pueden añadir tantos elif como se requieran encadenandolos uno debajo del otro y hay que tener en cuenta que a menos que si varias condiciones se cumplen a la vez, el programa ejecutará ambos códigos. Este sistema sustituye a otras funciones populares en otros lenguages de programación como "switch" o "case". 
    

## 2. ¿Cuáles son los diferentes tipos de bucles en Python? ¿Por qué son útiles?  

Existen dos tipos de bucles en Python, bucles "for" y "while" ambos permiten hacer iteraciones pero de diferentes maneras. Son muy comunes en casi todos los lenguajes de programación. En python se echa de menos el bucle "do" que ejecuta el código una vez al menos independiente de la condición. Se detalla a continuación cada uno de ellos:  
- Bucle "for". Su estructura está disiñeda para limitar el bucle a través de una variable de iteración y un rango de actuación por lo que siempre tiene un limite de iteraciones establecido.  
    - Se escribe usando la siguiente formula:  

    ```
    for [variable iteración] in [elemento iterable (lista, cadena, rango, etc)]:
        [ejecuta este código]
    ``` 
    - La variable de iteración no tiene que ser declarada antes del bucle, es un elemento interno. El cuerpo del bucle se ejecturá tantas veces como elementos iterables haya.
    - Se pueden anidar multiples bucles, se recomienda cambiar de variable de iteración en cada uno para no mezclarlos. 
    - La propia variable de iteración se puede usar dentro del código a ejecutar por lo que se puede modificar lo que hace este en cada iteración.
  
  
    > Es el bucle más común ya que no genera bucles infinito y permite de manera muy visual recorrer variables de múltiples elementos (listas, tupples, diccionarios, etc)

- Bucle "while". Siempre requiere de una condición como las descritas en la pregunta anterior y mientras esta sea TRUE, el código seguira ejecutandose. Si la condición nunca es FALSE, el código se queda en un bucle infinito, por lo que hay que tener cuidado a la hora de usarlo.  
    - Es muy común utilizarlo en sistemas donde se espera un input externo (por ejemplo darle a un botón) o en videojuegos donde se quiere que siga existiendo algo hasta que se deje de mirar.
    - Se escribe con la siguiente estructura:  
    ```
    while [condicion = TRUE]:
        [ejecuta este código]
    ```   
    - Como gran ventaja es que al ser una condición y no un iterando, esto permite un inmenso dinamismo e incluso mantener códigos funcionando por tiempos indeterminados.

- En los bucles se pueden usar instrucciones como "continue" and "break". El primero, salta al siguiente ciclo del bucle omitiendo el resto del código. "break" nos sacará del bucle y seguirá ejecutando el resto del código.

- La clave de los bucles es que nos permiten repetir tareas sin tener que escribir el código multiples veces, un código que ademas va a ser muy similar permitiendo y repetitivo haciendolo más limpio y lógico. Este tipo de loops son muy comunes en otros lenguages y está muy extendido su uso.

## 3. ¿Qué es una lista por comprensión en Python?

Una lista por comprensión es una manera simplificada de generación de listas donde se crea un bucle for para ejecutar la acción deseada. Desde crear una nueva lista:  
```
a = [i for i in range(10)]
```
Donde se genera una lista de 10 elementos desde 0 a 9.  
Como vemos la estructura pasa por declarar la variable de iteración (se le puede añadir una actualización o una condición) y luego hacer un bucle. 

```
a = [i for in in range(10) if i % 2 == 0]
b = [i*2 for i in range(100)]
```  
La primera devuelve una lista con los valores pares del 0 al 9 y la segunda saca los valores con un incremento de dos.  
La principla ventaja que tiene este tipo de código es se simplifica la escritura mientras que se mantiene la claridad para entenderlo.
## 4. ¿Qué es un argumento en Python?

- Un argumento es un valor que se introduce en funciones y métodos para que estos los incorporen y gestionen. Es decir, una función puede requerir variables para ejecutarse como en el ejemplo siguiente:  
    ```  
    def pan(a,b,c):
        return a - b + c
    print(pan(2,5,4)) -> 7 
    ```
    Al escribir como argumentos dentro de la función se convierten en variables de una ecuación donde al ejecutar la función estos se sustituyen por los introducidos al llamarla.  
    También se pueden dar argumentos por defecto para cuando estos no sean espeficados, el orden de llamada es important:  

     ```  
    def pan(a=6,b=9,c=12):
        return a - b + c
    print(pan(2,5)) -> c=12 -> 15 
    ```

- Existen otros dos tipos de argumentos (*args y **kwargs). Al añadir un asterisco, la función admite cierta flexibildad con el argumento introducido en esa posición. 
```
def f(*args,patata)
    return args,b
print(f(1,2,3)) -> b no se ha declarado
print(f(1,2,b=3)) -> ((1,2),3)
```
Como vemos, hay que tener cuidado cuando se utilice args ya que cogerá todos los argumentos y los acaparará para sí mismo. Además como nota, vemos que los mete en un tuple ya que así los convierte en valores inmutables.
**kwargs es similar pero con argumentos tipo diccionario es decir, llave con valor
```
def f(**kwargs)
    return kwargs
print(f(a=3,b=2. c="s")) -> {"a": 3, "b": 2, "c" : "s"}
```
Para este caso se deben asignar las variables para que la función pueda asignar correctamente cada par.
## 5. ¿Qué es una función Lambda en Python?

Es una función simplificada de tipo anónimo que se caracteriza por realizar lo mismo que una función hecha con "def" pero que se debe ejecutar en una linea, sin nombre y con una sola expresión. Esta puede ser compuesta. Como ejemplo: 
```
suma_dos = lambda uno, dos, tres: uno + dos + tres
print(suma_dos(1,2,3)) -> 6 
```
Convierte esa asignación en una función, también admite el uso de comparadores:  
```
suma_par = lambda a, b : a + b if a % 2 == 0 and b % 2 == 0 else "No"
print(suma_par(1,4)) -> "No"
print(suma_par(2,4)) ->  6
```
La ventaja es clara, poco espacio y claridad.
## 6. ¿Qué es un paquete pip?

- Pip es un sistema de gestión de paquetes estandar y oficial para Python. Sus siglas significan "Pip Installs Packages" y es una herramienta común y sencilla de instalara paquete de Python.  
Hay varios metodos de inslatación dependiendo del Sistema Operativo pero una vez instalado se ejecutan de manera similar desde la consola terminal.  
- Al instalar un paquete lo que conseguiremos es tener acceso desde nuestro a nuevo código, funciones y métodos solamente con la instrucción "import" o sus diferentes variantes para llamar solamente a un método o función en vez de toda la librería.
- Pip tiene multipes funciones como descargar, instalar y desinstalar paquetes. Puedes ver con "list" los paquetes instalados y con "check" que están instalados y no tienen dependencias. Por último, con "show" podemos ver los detalles del paquete.
