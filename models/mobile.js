const mongoose = require('mongoose')

const mobileSchema = new mongoose.Schema({
  name:{
      type:String,
      
  }
})

module.exports = mongoose.model('Mobile', mobileSchema)