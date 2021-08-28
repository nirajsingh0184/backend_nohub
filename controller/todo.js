
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
        let element = [];
        task.forEach(tasks => {

            if (id == tasks.id) {
                element.push(tasks);
            }
        })
        res.send(element);
    },

    createTask: (req, res) => {

        const { body } = req;
        const { id, ...rest } = body;
        console.log(id);
        if (id) 
        {
            for (let i = 0; i < task.length; i++) 
            {
                if (task[i].id == id) 
                {
                    return res.send(
                        {
                            status: 400,
                            message: "task Already exist"
                        }
                    );
                }
            }
            task.push(body);
           return res.send(
                {
                    status: 200,
                    message: "success"
                })
        }
        else 
        {
            const uniqueId = Math.floor(Math.random() * 1000000);
            const newTask = { ...body, id: uniqueId };
        task.push(newTask);
        res.send(
            {
                status: 200,
                message: "success"
            }
        )
        }
    },

    deleteTask: (req, res) => {
        const { id } = req.params;
        for (let i = 0; i < task.length; i++) {
            if (task[i].id == id) {
                task.splice(i, 1);
            }
        }
        console.log(task);

        res.send(task);
    },

    updateTask: (req, res) => {
        const { id } = req.params;
        const { body } = req;
        const { id1, ...rest } = body;
        console.log(rest);

        for (let i = 0; i < task.length; i++) {
            if (task[i].id1 == id) {
                task[i] = { ...task[i], ...rest };
            }
        }
        res.send(task);
    }

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