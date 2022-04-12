// Seguir exemplo para dividr diretorios com axios : https://www.youtube.com/watch?v=w9m-_xYuR-E

const express = require('express')
const axios = require('axios')
const app = express()
const cors = require('cors')

var multer = require('multer')
var sftpStorage = require('multer-sftp')

var bodyParser = require('body-parser');

const path = require('path')
const fs = require('fs')


const csv = require('csv-parser')
const csvtojson = require('csvtojson')


app.listen(3333)

const corsOptions = {
    origin:'http://localhost:3000', 
    credentials: true,            
}

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())


const axiosOptionsGet = {
    headers: {
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer 4Gu3QKxXEgZobDcxEH7ibNLhrXvUHH`,
        "Access-Control-Allow-Credentials" : true ,
      }
}


const axiosOptionsPost = {
    headers: {
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer zxwL6l6pRv2QW4OAHXSlux2J2tqqHg`,
        "Access-Control-Allow-Credentials" : true  
      }
}



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
}).single("file");



const getHost = async (req,res) => {
    // const token = "ssnzCg0CmqAK9WwzYBtJM5F5WhBzsp"

    const hosts = await axios.get('http://192.168.1.10/api/v2/hosts/',axiosOptionsGet)
    return res.status(200).json(hosts.data)
}

const getTemplate = async(req,res) => {

    const template = await axios.get("http://192.168.1.10/api/v2/job_templates/",axiosOptionsGet)
    return res.status(200).json(template.data)
}

const deployTemplate = async (req,res) => {
    // const triggerhost = await axios.post('http://192.168.1.10/api/v2/job_templates/7/launch/',{}, axiosOptionsPost)
    // return res.status(201).json(triggerhost.data)

    const triggerhost = await axios.post('http://192.168.1.10/api/v2/job_templates/7/launch/',{
        extra_vars: {
          survey_var: 7,
          name: 'lucas',
          equipe: 'diti',
        }
      }, axiosOptionsPost)
    return res.status(201).json(triggerhost.data)
    
    
}

app.get('/sms', getHost) 
app.get('/template', getTemplate)
app.post('/deploy', deployTemplate)
app.post("/upload", function(req, res) {
    upload(req, res, function(err) {
        if (err) {
            return res.end("Alguma coisa deu errado");
        }
         return res.json({status: 'Arquivo enviado com sucesso', uploaded: req.file})
    });
});





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


   
   
