const fs = require('fs');
const path = require("path");
const axios = require('axios');
const { log } = require('console');

// Verifica si la ruta es absoluta, y si no la convierte ==========================================================//
const pathAbsolute = (route) => path.isAbsolute(route) ? route : path.resolve(route);


// validando la extencion md
const fileMD = (route) => {
  if (path.extname(route) === '.md') {
    return route;
  } else {
    return 'no es md';
  }
};

// es un archivo o un directorio
const identify = (route) => {
  let files = []
  return new Promise((resolve, reject) => {
    fs.stat(route, (err, stats) => {
      if (err) {
      } else if (stats.isFile()) {
        if (fileMD(route) === ruta) {
          files.push(route)
        }
      }
      else if (stats.isDirectory()) {
        files.push(route)

      }
    });
  })
};

//Leer un archivo
const readFiles = (ruta) => {
  return new Promise((resolve, reject) => {
    fs.readFile(ruta, 'utf-8', (err, data) => {
      if (!err) resolve(getLinks(data, ruta))
    })
  })

};

//Funcion de extrear links  ==========================================================//
function getLinks(file, ruta) {
  let foundFile = file.match(/(?<!!)\[(.*?)\]\((.*?)\)/g);
  let arrayLinks = [];
  if (foundFile) {//si hay links
    foundFile.forEach((link) => {
      arrayLinks.push({
        href: link.match(/(?<!!)\((.*?)\)/g).toString().split('(')[1].split(')')[0],
        text: link.match(/(?<!!)\[(.*?)\]/g).toString().split('[')[1].split(']')[0],
        file: ruta,
      })
    })
  }
  else {
    arrayLinks.push({
      href: 'No hay URL',
      text: 'No hay texto de URL',
      file: ruta,
    })
  }
  return arrayLinks
}

//funcion stats ==========================================================//
const stats = (arrayPrueba) => {
  const objStats = {
    'Total': arrayPrueba.length,
    'Unique': new Set(arrayPrueba.map((element) => element.href)).size
  }
  return objStats
}


const statsBrokens = (arrayPrueba) => {
  const broken = arrayPrueba.filter((links) => links.OK === 'fail').length;
  const total = {
    'Total': arrayPrueba.length,
    'Unique': new Set(arrayPrueba.map((element) => element.href)).size,
    'Broken': broken
  }
  return total
}


//funcion validar http ==========================================================//
const validateHttp = (links) => {
  const validacion = links.map((link) => {
    return axios.get(link.href)
      .then((response) => {
        link.status = response.status,
          link.result = 'OK'
        return link;
      })
      .catch((error) => {
        link.status = 404,
          link.result = 'FAIL'

        return link
      })
  })

  return Promise.all(validacion).then(res => res)
};

module.exports = { pathAbsolute, fileMD, identify, readFiles, getLinks, stats, statsBrokens, validateHttp }




