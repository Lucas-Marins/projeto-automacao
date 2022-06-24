const axios = require('axios')
const config = require('../settings/conexao')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const jwt =  require('jsonwebtoken')

const userCrtl = {
    // createUser: async(req,res) => {

    //     const template = await axios.get("/api/v2/organizations/{id}/users/",config.axiosOptionsGet)
    //     return res.status(200).json(template.data)
    // }

    register: async(req,res) => {
      try {
        const {name, email, password,organization_id} = req.body
  
        const user = await User.findOne({email})
        if(user){
          return res.status(400).json({
            msg: "E-mail já existe"
          })
        }
    
        if(password.length < 6) return res.status(400).json({msg: "Password is at least 6 characters"})
    
        
        // Password Encrypt
        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = new User({
          name,
          email,
          password: passwordHash,
          organization_id
        })
    
        await newUser.save()
    
        //Then create jswonwebtoken to authentication 
        // const accesstoken = createAccessToken({id: newUser._id})
        // const refreshtoken = createRefreshToken({id: newUser._id})
    
        // res.cookie('tokenrefresh', refreshtoken, {
        //   httpOnly: true,
        //   path: '/api/user/refresh_token',
        //   maxAge: 7*24*60*60*1000 // 7d
        // })
    
        return res.json({newUser})
    
      } catch (error) {
        return res.status(500).json({msg: "Try again"})
      } 
    },
    login: async(req, res) => {
      try {
        const {name, password} = req.body
  
        const user = await User.findOne({name})
        if(!user) return res.status(400).json({msg:"User does not exist"})
  
        const isMatch =  await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(400).json({msg:"Incorrect password"})
  
        // if login succes, create access token and refresh token
        const accesstoken = createAccessToken({id: user._id})
        const refreshtoken = createRefreshToken({id: user._id})
    
        res.cookie('tokenrefresh', refreshtoken, {
          httpOnly: true,
          path: '/api/user/refresh_token',
          maxAge: 7*24*60*60*1000 // 7d
        })
  
        return res.json({accesstoken})
    
  
      } catch (error) {
        return res.status(500).json({msg:error.message})
      }
    },
    logout: async(req,res) => {
      try {
        res.clearCookie('tokenrefresh', {path: '/api/user/refresh_token'})
        return res.json({msg:"Logged out"})
        
      } catch (error) {
        return res.status(500).json({msg:error.message})
      }
    },
    refreshToken: (req, res) => {
      try {
        const rf_token = req.cookies.tokenrefresh
        if(!rf_token) return res.status(400).json({msg: "Please Login or Register"})
  
        jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user)=>{
          if(err) return res.status(400).json({msg: "Please Login or Register"})
  
          const accesstoken = createAccessToken({id: user.id})
  
          res.json({user, accesstoken})
        })
        
      } catch (error) {
        return res.status(500).json({msg:err.message})
      }
    },
    getUser: async(req, res) =>{
      try {
        const user = await User.findById(req.user.id).select('-password')
        if(!user) return res.status(500).json({msg:"User does not exist"})
  
  
       res.json(user)
      } catch (error) {
        return res.status(500).json({msg:err.message})
      }
    },  
}

const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET,{expiresIn: '1d'})
}

const createRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET,{
    expiresIn: '7d'
  })
}

module.exports = userCrtl