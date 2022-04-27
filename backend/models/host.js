const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
   facts:{
       type: Array,
   }
},{timestamp: true})

module.exports = mongoose.model('Fact', userSchema)