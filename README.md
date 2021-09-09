# Curso básico de programación orientada a objetos en JavaScript

### Paradigmas
En la programacion son formas, caminos o lineamientos generales que podemos seguir para programar nuestras aplicaciones.
Los paradigmas más comunes son:
* Programación estructurada
* Porgramación orientada a objetos
* Programación funcional

### Ventajas POO
* Orden
* Todo esta conectado
* Reutilizar código -> los moldes son las clases, que se usan para instanciar objetos.

Los objetos tienen **métodos** (funciones) y **atributos** (caracteristicas).
 
> JavaScript a pesar de ser un lenguaje orientado a objetos, este no esta basado en clases, sino en prototipos.

## Objetos, clases y prototipos

**¿Qué es un objeto en JS?**

Un objeto en JS es muy dificil de entender, para comenzar con esta deficinion hay que tener en cuenta primero varias cosas.

Partamos de esta premisa.
> Los objetos literales no son lo mismo que las instancias.

Cuando hablamos de la POO hablamos de clases y objetos, pero los objetos en JS no son lo mismo que en POO.

Un ejemplo de objetos en POO en php es el siguiente.
```php
class Student {
    public $name = 'Nombre';
    public $age = 18;
    public $points = 750;
}

$juanita = new Student;
```
Tenemos la clase ``Student`` con los atributos *name, age y points* seguido tenemos el objeto ``juanita`` que es como una instancia de la clase ``Student``

Tenemos la misma estructura en python
```python
class Student:
    name = 'Nombre'
    age = 18
    points = 750

juanita = Student()
```
### ¿Entonces, que pasa con JS?
veamos el mismo ejemplo de 'clases' (su verdadero termino es **prototipo**) en JS
```js
function Student(){
    this.name = 'Nombre';
    this.age = 18;
    this.points = 750;
}

const juanita = new Student();
```
No parece diferente de la estructura que teniamos en php y python, pero en este lenguaje se empieza con ```function``` y no con ``class`` como en los otros lenguajes.

>La palabra clave ``class`` se introdujo en ES2015, pero sólo para endulzar la sintaxis, ya que JavaScript sigue estando basado en prototipos.

Ahora hay más cosas que tener en cuenta:
* en esta función estamos usando la palabra reservada ``this`` para guardar los atributos.

    ``this`` hace referencia al objeto, o prototipo. 
* Para llamar a la *instancia* del prototipo (en este caso la función) usamos la palabra reservada ``new``

### Diferencias entre objetos e instancias

cuando creamos un objeto en JS 
```js
const natalia = {
    name: "Natalia",
    age: 20,
    points: 700,
};
natalia;
// La consola nos retorna lo siguiente
{name: 'Natalia', age: 20, points: 700}
    age: 20
    name: "Natalia"
    points: 700
    [[Prototype]]: Object
```
ahora, si creamos una instancia en JS
```js
const juanita = new Student();
juanita;
// La consola nos retorna lo siguiente
Student {name: 'Nombre', age: 18, points: 750}
    age: 18
    name: "Nombre"
    points: 750,
    [[Prototype]]: Object
```
Las instancias de los objetos son muy parecidas a los objetos literales en JS. La diferencia radica en que cuando llamamos a los objetos, la consola nos avisa cuando un objeto es una instancia, si te fijas en el objeto juanita aparece antes de la ``{`` la palabra ``Student``, con esto la consolo nos dice *juanita es una instancia de `student`*

¿Es la única diferencia? ¿Cómo nos afecta el usar un objeto literal o una instancia?

Para responder estas preguntas necesitamos conocer el atributo ``Prototype`` o ``__proto__`` que nos aparece en la consola.
cuando expandimos este atributo de cualquier objeto literal podemos observar que tiene muchos métodos.
```js
[[Prototype]]: Object
    constructor: ƒ Object()
    hasOwnProperty: ƒ hasOwnProperty()
    isPrototypeOf: ƒ isPrototypeOf()
    propertyIsEnumerable: ƒ propertyIsEnumerable()
    toLocaleString: ƒ toLocaleString()
    toString: ƒ toString()
    valueOf: ƒ valueOf()
    __defineGetter__: ƒ __defineGetter__()
    __defineSetter__: ƒ __defineSetter__()
    __lookupGetter__: ƒ __lookupGetter__()
    __lookupSetter__: ƒ __lookupSetter__()
    __proto__: (...)
    get __proto__: ƒ __proto__()
    set __proto__: ƒ __proto__()
```
Podemos acceder a todos estos métodos desde nuestros objetos literales sin necesidad de entrar al atributo ``Prototype``
por ejemplo, usemos el método ``hasOwnProperty``
```js
natalia.hasOwnProperty("name"); //true
const miObjeto = {};
miObjeto.hasOwnProperty("name"); //false
```
Pero en ningun momento hemos definido ``hasOwnProperty`` ni para ``natalia`` ni para ``miObjeto``, ¿de dónde sale este método? todo esto esta dentro de ``Prototype`` y podemos usar todos los metodos dentro de este con solo escribir el nombre del metodo que deseamos, como vimos en este ejemplo.

Cada vez que creemos un objeto en JS vamos a tener el atributo ``Prototype``, pero tambien pasa lo mismo con los arrays.
```js
const miLista = [];
miLista;
//consola
milista
[]
    length: 0
    [[Prototype]]: Array(0)
        ...
        map: ƒ map()
        pop: ƒ pop()
        push: ƒ push()
        reduce: ƒ reduce()
        ...
        Symbol(Symbol.iterator): ƒ values()
        Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}
        [[Prototype]]: Object
```
Los arrays tienen su propio ``Prototype``, pero funciona igual que los ``Prototype`` de los objetos.
Podemos usar los metodos del array como el ``.push`` sin necesidad de decir ``miLista.Prototype.push(1)``, de hecho, cuando aprendemos arrays ya sabemos que si deseamos agregar un elemento basta con escribir ``miLista.push(1)``.

Nosotros no hemos creado ningun método ``push``, ``map``, ``pop``, etc. pero siempre que creamos un array vamos a tener estos métodos dentro del objeto ``Prototype``.

¿Pero de dónde sale ``Protorype``?

Recordemos que cuando llamamos a ``juanita`` en la consola, esta no solo nos muestra los métrodos y atributos de ``juanita``, sino que tambien nos muestra que es una instancia del prototipo ``Student``. 

Esto mismo ocurre cuando creamos objetos literales o arrays. La consola nos muestra los elememtos guardados en estos, pero tambien nos muestra la propiedad ``Prototype`` junto con ``Array(0)`` si es para arrays, u ``Object`` si es para objetos. ¿Qué nos dice esto? que ``miLista`` es una instancia de un Array y que ``miObjeto`` es una instancia de Object.

JS tiene algunos prototipos por defecto como ``Object``, ``Array``, incluso ``String``. y al escribir ``{}`` o ``[]`` este lo hace es crear una nueva instancia de los prototipos ``Object`` o ``Array``.

Por eso tenemos estos métodos dentro de nuestros objetos o arrays, ya estan definidos.

Regresando al **prototipo** ``Student``, cuando creamos a ``juanita`` tambien aparece el método ``Prototype``, ¿qué sucede aqui? Cuando creamos instancias de un prototipo (``Student``), no solo recibimos los métodos y atributos del prototipo en particular, sino que tambien recibimos los métodos y atributos del prototipo ``Object``.

Ahora si recuerdas la premisa escrita anteriormente

>Los objetos literales no son lo mismo que las instancias.

no es del todo cierto, los **objetos literales** no son instancias de ningun prototipo que nosotros hayamos creado, y esto hace que se comporte diferente.

La realidad es que los objetos literales si son instancias del prototipo ``Object`` que viene por defecto en JS.

> "Vivo en una sociedad donde todo es un objeto" -JS

Bueno JS no dijo eso pero estenderas esta frase cuando comprendas lo que realmente son las clases en JS.

Aqui los objetos son:
- Objetos literales
- Las instancias de prototipos
- Los arrays
- El prototipo ``Object``

Si lograste entender hasta aqui felicitaciones!!!

aqui te dejo un resumen

Un objeto en JavaScript es una colección de propiedades. Una propiedad en JavaScript es simplemente una asociación entre un nombre (llave) y un valor. Cuando este valor es una función, podemos decir que se trata de un método.
 
Los objetos en JavaScript, al ser un lenguaje basado en prototipos, heredan propiedades de otros objetos por medio del prototipo.
 
Podemos construir objetos de dos formas: De la “nada” (o también llamado objeto literal) o clonando un objeto ya existente. En la mayoría de lenguajes que soportan prototipos existe una clase raíz (por lo general llamada Object) que tiene las propiedades mínimas necesarias para la creación de objetos.
