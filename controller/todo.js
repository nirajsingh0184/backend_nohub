
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
    getAllTask: (req, res) => {
        res.send(task);
    },

    getTask: (req, res) => {
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

    createTask: (req, res) => {

        const {body}=req;
        task.push(body);
        res.send(
            {
                status:200,
                message:"success"
            }
        )
    },

deleteTask:(req,res)=>
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

updateTask:(req,res)=>
{
    const { id } = req.params;
    const { body }=req;
    
    var index = task.findIndex((o)=>
    {
        if(o.id === id){
            return o;
        }
   })
  let obj=task[index];
   if (index !== -1) 
   {
    Object.assign(obj,{...body})
   }
   res.send(task);
},

// fun6:return new Promise(resolve,reject) => {
//     // //connection.query('SELECT * FROM users', (err, rows, fields) => {
//     //   if (err)
//     //     throw err;
//     //   else
//     //     res.send(rows);


//     })

    // new Promise(function(resolve, reject) {
    //     // do a thing, possibly async, then…
      
    //     if (a==7) {
    //       resolve("Stuff worked!");
    //     }
    //     else {
    //       reject(Error("It broke"));
    //     }
    //   });

}



module.exports = arr;