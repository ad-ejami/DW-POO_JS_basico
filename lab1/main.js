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

// Prototipos con sintaxis clases
class Student2 {
    constructor({
      name,
      cursosAprobados = [],
      age,
      email,
    }) {
      this.name = name;
      this.email = email;
      this.age = age;
      this.cursosAprobados = cursosAprobados;
    }
  
    aprobarCurso(nuevoCursito) {
      this.cursosAprobados.push(nuevoCursito);
    }
  }
  
  const miguelito = new Student2({
    name: "Miguel",
    age: 28,
    email: "miguelito@platzi.com",
  });

  // Crear estudiantes on objetos literales

const juan1 = {
    name: "Edu",
    username: "honquito",
    points: 100,
    socialMedia: {
        twitter: "BryanJami",
        instagram: "Lalo",
        facebook: underfined,
    },
    approvedCourses: [
        "Curso de ingles",
        "Curso de Mate",
    ],
    learningPath: [
        {
            name: "Escuela de DW",
            courses: [
                "Curso de ingles",
                "Curso de Mate",
                "Curso de Quimica",
            ]
        }
    ]
}

class LearningPath {

}

const escuelaWeb = new LearningPath();
const escuelaData = new LearningPath();
const escuelaVgs = new LearningPath();

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const juan2 = new Student({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
  ],
});

const miguelito2 = new Student({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});