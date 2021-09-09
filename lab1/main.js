// Crear un objeto literal
const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso de ingles",
        "Curso de Mate",
    ],
    //Forma de crear metodos
    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
};

//Hacer que Natalia apruebe otro curso
natalia.cursosAprobados.push("Curso de Quimica")
natalia.aprobarCurso("Curso de Quimica")

// Crear prototipo

function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;

    // Crear un metodo
    // this.aprobarCurso = function (nuevoCurso) {
    //     this.cursosAprobados.push(nuevoCurso);
    // }
}
// Tambien se puede crear metodos afuera del prototipo
Student.prototype.aprobarCurso = function (nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
}

// Crear una instancia de Student
const juanita = new Student(
    "Juanita Alejandra", 
    15,
    ["Curso de ingles",
    "Curso de Español"]
);