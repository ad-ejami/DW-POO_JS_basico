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
		this._name = name;
		// this.teacher = teacher;
		this.classes = classes;
	}
	get name(){
		return this._name;
}
	set name(NuevoNombre){
		if (NuevoNombre === "Nombre malo"){
				console.error("Web... error name");
		}else{
				this._name = NuevoNombre;
		}
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
		this._name = name;
		this._courses = courses;
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
		this._name = name;
		this._email = email;
		this._username = username;
		this._socialMedia = {
			twitter,
			instagram,
			facebook,
		};
		this._approvedCourses = approvedCourses;
		this._learningPaths = learningPaths;
	}
	get name(){
		return this._name;
	}
	get email(){
		return this.email;
	}
	get username(){
		return this._username;
	}
	get socialMedia(){
		return this._socialMedia;
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