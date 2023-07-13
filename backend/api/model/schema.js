const mongoose=require('mongoose')

const UserSchema= mongoose.Schema({
   name:{
    type:String,
    require:true
   },
   email:{
    type:String,
 require:true
   },
   // image: {
   //    type: String,
   //    required: true,
   //  },
});

const Userdata=mongoose.model('newsd',UserSchema);
module.exports=Userdata;