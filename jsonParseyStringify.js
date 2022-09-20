let infoCurso = {
  titulo: "Aprende Node.js",
  numVistas: 45642,
  numLikes: 2113,
  temas: [
    "JavaScript",
    "Node.js"
  ],
  publico: true
}
 // Objeto JS -> String JSON
let infoCursoJSON = JSON.stringify(infoCurso);
console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

// String JSON -> Objeto JS
let infoCursoObjeto = JSON.parse(infoCursoJSON);
console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);