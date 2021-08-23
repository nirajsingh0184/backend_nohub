
const express = require('express')
const task = require('../model/todo')
const router = express.Router()
//const movies = require('../model/movies')


// const arr = {
//     func:(req, res) => {
//         //console.log(movies);
//         const { id }=req.params;
//         const { name } = req.query;
// //console.log(id,name);

//         let movie = {};
//         movies.forEach(element => {
//             if (name === element.name) {
//                 movie=element;
//             }
//         })

//         res.send(movie);
//     }
// }


const arr = {
    fun1: (req, res) => {
        res.send(task);
    },

    fun2: (req, res) => {
        const { id } = req.params;
        let element=[];
        task.forEach(tasks => {

            if(id==tasks.id)
            {

                element.push(tasks);
            }
        })
        res.send(element);
    },

    fun3: (req, res) => {

        const {body}=req;
        task.push(body);
        res.send(
            {
                status:200,
                message:"Kam ho gaya"
            }
        )
    },

fun4:(req,res)=>
{
    const { id } = req.params;
    var index = task.findIndex((o)=>
    {
        return o.id === id;
   })
   if (index !== -1) 
   {
       task.splice(index, 1);
   }
   
   
   res.send(task);
},

fun5:(req,res)=>
{
    

}


}



module.exports = arr;