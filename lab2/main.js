class Class{
	constructor({
		name,
		video,
		sources,
		contributions,
		questions,
	}){
		this.name = name;
		this.video = video;
		this.sources = sources;
		this.contributions = contributions;
		this.questions = questions;
	}
}

class Course{
	constructor({
		name,
		// teacher,
		classes = [],
	}){
		this.name = name;
		// this.teacher = teacher;
		this.classes = classes;
	}
}
const cursoProgBasica = new Course({
	name: "Curso Gratis de Programación Básica",
})
const cursoDefinitivoHTML = new Course({
	name: "Curso Definitivo de HTML y CSS",
})
const cursoPractivoHTML = new Course({
	name: "Curso Práctico de HTML y CSS",
})

class LearningPath{
	constructor({
		name,
		courses = [],
	}){
		this.name = name;
		this.courses = courses;
	}
}
const escuelaWeb = new LearningPath({
	name: "Escuela de desarrollo Web",
	courses: [
		cursoProgBasica,
		cursoDefinitivoHTML,
		cursoPractivoHTML
	]
})
const escuelaData = new LearningPath({
	name: "Escuela de Data Science",
	courses: [
		cursoProgBasica,
		cursoDefinitivoHTML,
		cursoPractivoHTML
	]
})
const escuelaVgs = new LearningPath({
	name: "Escuela de Videojuegos",
	courses: [
		cursoProgBasica,
		cursoDefinitivoHTML,
		cursoPractivoHTML
	]
})
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