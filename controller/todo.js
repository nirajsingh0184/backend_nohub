const Task = require('../model/todo');

const userController = {
    create: async (req, res) => {
        try {

            const {name,status,description,deadline} = req.body;
            let existingUser = await Task.findOne({ name });
            console.log(existingUser);
            if (existingUser) {
               return res.status(400).send({

                    message: "User Already Exists",
                    status: false
                })
            }
            
            const task = new Task({
                name,
                status,
                description,
                deadline
            })

            //     const user=new User({
            // firstname:"niraj",
            // email:'niraj@gmail.com',
            // password:'12345'

            //     })

            await task.save();

            res.status(200).send({
                message: "user created successfully",
                status: true,
            })

        } catch (err) {
            console.log("error", err);
            res.status(400).send({
                message: "user not created",
                status: false
            })
        }
    }




    }

module.exports = userController;