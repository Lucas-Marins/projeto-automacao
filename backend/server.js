// Seguir exemplo para dividr diretorios com axios : https://www.youtube.com/watch?v=w9m-_xYuR-E

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const upload = require('./settings/configMulter')
const axios = require('axios')
const app = express()
var bodyParser = require('body-parser')
const config = require('./settings/conexao')
require('dotenv').config()

const socketIo = require('socket.io')
const http = require('http')

const PORT = process.env.PORT || 3333
const server = http.createServer(app)

const fs = require('fs')
const stringify = require('csv-stringify').stringify

const corsOptions = {
    origin:'http://localhost:3000', 
    credentials: true,            
}

const io = socketIo(server,{ 
    cors: {
        origin:'http://localhost:3000', 
        credentials: true,  
    }
})


app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use(bodyParser.json())

app.listen(3333)

// io.on("connection", socket => {
//     console.log(`New client connected`);
 
//     socket.on("receive_id", async (id) => {

//       const response = await axios.get(`http://192.168.1.10/api/v2/jobs/${id}/job_events/`, config.axiosOptionsGet)
//       socket.emit("FromAPI", response.data);
//     })

//     socket.on("disconnect", () => console.log("Client disconnected"));
//   });



// Routes
const deployRouter = require('./routes/deploy')
const hostRouter = require('./routes/hosts')
const templateRouter = require('./routes/template')
const userRouter = require('./routes/user')
const logRouter = require('./routes/log')
const dashboardRouter = require('./routes/dashboard')

app.use('/api',deployRouter)
app.use('/api', hostRouter)
app.use('/api',templateRouter)
app.use('/api', logRouter)
app.use('/api', dashboardRouter )
app.use('/api/user', userRouter)


app.post("/api/upload", upload.array('file') , function(req, res) {
    return res.json({status: 'Arquivo enviado com sucesso', uploaded: req.files})
});

app.post('/api/create', (req, res) => {
    const data = req.body.data
  
    if (!data || !data.length) {
      return res.status(400).json({success: false, message: 'Please enter at least 1 row'})
    }
  
    stringify(data, {
      header: true
    }, function (err, str) {
      const path = './files/' + Date.now() + '.csv'
      //create the files directory if it doesn't exist
      if (!fs.existsSync('./files')) {
        fs.mkdirSync('./files')
      }
      fs.writeFile(path, str, function (err) {
        if (err) {
          console.error(err)
          return res.status(400).json({success: false, message: 'An error occurred'})
        }
  
        res.download(path, 'file.csv')
      })
      
    })
  })





const URI = process.env.MONGODB_URL 
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {

    if(err) throw err;
    console.log("Connected to MongoDB")
})


// server.listen(3333, ()=> {
//     console.log('Servidor rodando na', PORT)
//   })

   
