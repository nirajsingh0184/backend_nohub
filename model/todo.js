let task=[
    {
        id:"1",
        name:"task 1",
        status:"false",
        description:"jgjgjgj"
    },
    {
        id:"2",
        name:"task 2",
        status:"false",
        description:"jgjgjgj"
    },  
    ]
module.exports=task;

const mongoose=require('mongoose');


const UserSchema=new mongoose.Schema({
firstname:{
    type:String,
    required:true,
},
password:{
type:String,
required:true,

},
email:
{
    type:String,
    required:true,
},
age:
{
    type:Number,
    required:false,
},
dob:
{
    type:Date,
    required:false,
},
active:
{
    type:Boolean,
    required:true,
    default:true,
}

})

module.exports=User=mongoose.model('user',UserSchema);
