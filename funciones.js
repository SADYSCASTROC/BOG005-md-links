const fs = require('fs');
const path = require("path");

// const readFileSync = require ('node:fs');
//TODO: repasar sobre JSDOC
/**
 * Retornar una promesa que resuelve un array de objetos
 * @param {*} path 
 * @param {*} options 
*/ 
const ruta = 'C:\\\\Users\\Usuario\\Downloads\\sadys\\sadys\\md-link\\BOG005-md-links\\prueba\\pue.md';
const rot = 'C:\\Users\\Usuario\\Downloads\\sadys\\sadys\\md-link\\BOG005-md-links\\prueba\\prueb2\\ejemplo.md'

//verificando si la ruta existe
  const rutaExiste = (path)=>{
       if(fs.readFileSync(path)){
          return `si existe`;
        } else {
          return false;
        }
  };
  console.log(rutaExiste(ruta))

  // Verifica si la ruta es absoluta, y si no la convierte
const pathAbsolute = (route) => path.isAbsolute(route) ? route : path.resolve(route);
console.log(pathAbsolute(ruta ),' ====================== absoluta');


// validando la extencion md

const fileMD = (route) => {
  if(path.extname(route) === '.md' ){
    // console.log('si es md ');
    return route;
  }else{
    // console.log('no es md')
    return 'no es md';
  }
  };
console.log(fileMD(ruta),'======================verificando extencion md')

// es un archivo o un directorio
const identify = (route) => {
  let files = []
  return new Promise((resolve, reject) => {
    fs.stat(route, (err, stats) => {
      if (err) {
        console.log('La ruta no existe',48);
      } else if (stats.isFile()) {
        console.log('es un archivo')
        if (fileMD(route) === ruta) {
          files.push(route)
          console.log(files)
        }
      }
      else if (stats.isDirectory()) {
        console.log('es directorio')
        files.push(route)
        
      }
    });
  })
};
console.log(identify(rot))

//Leer un archivo
const  readFiles = (ruta)=>{
  
  let sedebeRetornar = new Promise((resolve, reject) => {
    fs.promises.readFile(ruta, 'utf-8')
    .then(resp=>{
      // resolve(resp)
      console.log(resp + '==========================================leyendo archivo')

    })
    .catch(()=> reject('Error al leer el archivo')) 
  })

    return sedebeRetornar;
};
console.log(readFiles(ruta));





// // funcion recursiva
// const recursion = (route) => {
//   let newArr = [];

// };

// // console.log(recursion(path))



module.exports =  readFiles, fileMD




