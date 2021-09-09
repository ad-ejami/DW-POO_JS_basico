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

## 1- Los objetos literales no son lo mismo que las instancias.

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
veamos el mismo ejemplo de 'clases' en JS
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
* Para llamar a la *instancia* de la clase (en este caso la función) usamos la palabra reservada ``new``

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


