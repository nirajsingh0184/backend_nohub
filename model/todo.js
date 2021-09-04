

const mongoose=require('mongoose');


const UserSchema=new mongoose.Schema({
name:{
    type:String,
    required:true,
},
status:{
type:Boolean,
required:true,

},
description:
{
    type:String,
    required:false,
},
deadline:
{
    type:Date,
    required:false
}

})

module.exports=Task=mongoose.model('task',UserSchema);
