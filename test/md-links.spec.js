const {mdlinks} = require('../index.js');
const {stats} = require('../funciones.js');
const {mocksData} = require('../mocks')
const {statsBrokens} = require('../funciones')

describe('mdlinks', () => {
  it('Is a function', () => {
    expect(typeof mdlinks).toBe('function');
  });

   it('mdlinks con validate en false', done => {
     mdlinks(mocksData.path, { validate: true })
       .then((res) => {
         const inValidatetrue = mocksData.validateTrue;
         expect(res).toEqual(inValidatetrue);
       });
       done()
   });

   it('mdlinks con validate en false', done => {
     mdlinks(mocksData.path, { validate:false})
       .then((res) => {
         const inValidaFalse = mocksData.validateFalse;
         expect(res).toEqual(inValidaFalse);
       });
       done()
   });


});

it('stats sea una funcion', () => {
  expect(typeof stats).toBe('function');
});

it('stats cuando es true', done => {
  mdlinks(mocksData.path, { validate: true }).then(res => {
    const resStats = stats(res)
    const inStatsTrue = mocks.statsTrue
    expect(resStats).toEqual(inStatsTrue)
    })
    done()
});

it('statsAndValidate sea una funcion', () => {
  expect(typeof statsBrokens).toBe('function');
});

it('statsAndValidate cuando se dan las dos opciones', done => {
  mdlinks(mocksData.path, { validate: true }).then(res => {
    const resStatsAndValidate = statsBrokens(res)
    const inStatsAndValidate = mocks.statsAndValidate
    expect(resStatsAndValidate).toEqual(inStatsAndValidate)
  })
  done()

});



