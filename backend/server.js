// Seguir exemplo para dividr diretorios com axios : https://www.youtube.com/watch?v=w9m-_xYuR-E

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const upload = require('./settings/configMulter')

const corsOptions = {
    origin:'http://localhost:3000', 
    credentials: true,            
}
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.listen(3333)



// Routes
const deployRouter = require('./routes/deploy')
const hostRouter = require('./routes/hosts')
const templateRouter = require('./routes/template')

app.use('/api',deployRouter)
app.use('/api', hostRouter)
app.use('/api',templateRouter)


app.post("/upload", upload.single('file') , function(req, res) {
    return res.json({status: 'Arquivo enviado com sucesso', uploaded: req.file})
});




   
   
