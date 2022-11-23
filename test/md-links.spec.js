const {mdlinks} = require('../index.js');
const {mocksData} = require('../mocks')


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


