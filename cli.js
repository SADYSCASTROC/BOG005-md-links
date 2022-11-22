

 const { mdlinks } = require('./index.js');
 const { stats, statsBrokens } = require('./funciones.js')
 const route = process.argv[2];
 const argv = process.argv


 const cli = (route, argv) => {

     if (route) {
         mdlinks(route, { validate: argv.includes('--validate') }).then((res) => {
             if (argv.includes('--validate') && argv.includes('--stats')) {
                 console.log('stats and validate', statsBrokens(res))

             }else if (argv.includes('--stats')) {
                 console.log('stats and ', stats(res))

             } else if (argv.includes('--validate')) {
                 res.forEach(link => {
                     console.log(link.file, link.href, link.result, link.status, link.text)
                 });
             }
         })
        }
 }

 cli(route, argv)