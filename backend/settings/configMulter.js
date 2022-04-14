
var multer = require('multer')
var sftpStorage = require('multer-sftp')
const csv = require('csv-parser')
const csvtojson = require('csvtojson')
const path = require('path')
const fs = require('fs')



// Importar localmente


const storage = multer.diskStorage({
    destination: (req, file, callback) => {
       //  callback(null, path.resolve("uploads"))
        callback(null, path.resolve(""))
    },
    filename:(req,file,callback) =>{
        const time = new Date().getTime();

       //  callback(null, `${time}_${file.originalname}`)
       callback(null, 'sample.csv')
    }
})


// const storage = sftpStorage({
//     sftp: {
//         host: '192.168.1.10',
//         port: 22,
//         username: 'lucas',
//         password: '123456',
//     },
//     destination: function(req, file, cb) {
//         cb(null, ''); // /var/www/CDN/folder
//     },
//     filename: function(req, file, cb) {
//         cb(null, "tutiho.csv" + '-' + Date.now());
//     }
// });

const upload = multer({
   storage: storage,
   // limits: {
   //     fieldSize: 8 * 1000000, // 8 MB in bytes
   // },
   fileFilter: (req, file, cb) => {
       if (file.mimetype !== 'text/csv' && file.mimetype !== 'text/plain') cb(new Error("IMG_EXT_UNSUPPORTED"), false);
       else cb(null, true);
   },
})


// ========= CSV METODO ===========

// const results = []
// fs.createReadStream('sample.csv')
//    .pipe(csv({}))
//    .on('data', (data) => results.push(data))
//    .on('end', () => {})

// const csvfilepath = 'sample.csv'

// csvtojson()
//  .fromFile(csvfilepath)
//  .then((json) => {
//      fs.writeFileSync("output.json", JSON.stringify(json), "utf-8", (err)=>{
//          if(err) console.log(err)
//      })
//  })



module.exports = upload


