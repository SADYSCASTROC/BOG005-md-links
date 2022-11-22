const { pathAbsolute } = require('./funciones');
const { readFiles } = require('./funciones');
const { validateHttp } = require('./funciones');
const route = process.argv[2];
/**
 * Retornar una promesa que resuelve un array de objetos
 * @param {*} path 
 * @param {*} options 
*/

const mdlinks = (path, options = { validate: false }) => {
  return new Promise((resolve, reject) => {
    const pathValidated = pathAbsolute(path)
    if (options.validate === true) {
      readFiles(pathValidated)
        .then(res => {
          Promise.all(res).then(x => {
            resolve(validateHttp(x.flat()))
          })
        })

    } else {
      readFiles(pathValidated)
        .then(res => {
          Promise.all(res).then(x => {
            resolve(x.flat())
          })
        })
    }
  })
}

  // mdlinks(route)
  // .then (res =>{
  //   console.log('ver el resultado de md-links; ', res)
  // })
  // .catch(err => {
  //   throw err + "errrrrrrrrr";
  // });

module.exports = { mdlinks };
