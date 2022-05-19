// Seguir exemplo para dividr diretorios com axios : https://www.youtube.com/watch?v=w9m-_xYuR-E

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const upload = require('./settings/configMulter')
const axios = require('axios')
const app = express()
const config = require('./settings/conexao')
require('dotenv').config()

const socketIo = require('socket.io')
const http = require('http')

const PORT = process.env.PORT || 3333
const server = http.createServer(app)



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

app.use('/api',deployRouter)
app.use('/api', hostRouter)
app.use('/api',templateRouter)
app.use('/api', logRouter)
app.use('/user', userRouter)


app.post("/api/upload", upload.array('file') , function(req, res) {
    return res.json({status: 'Arquivo enviado com sucesso', uploaded: req.files})
});





// const URI = process.env.MONGODB_URL 
// mongoose.connect(URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, err => {

//     if(err) throw err;
//     console.log("Connected to MongoDB")
// })


// server.listen(3333, ()=> {
//     console.log('Servidor rodando na', PORT)
//   })

   
