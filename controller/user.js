const User = require('../model/User');

const userController = {
    create: async (req, res) => {
        try {

            const { firstname, email, password,age,dob } = req.body;
            let existingUser = await User.findOne({ email });
            console.log(existingUser);
            if (existingUser) {
               return res.status(400).send({

                    message: "User Already Exists",
                    status: false
                })
            }
            
            const user = new User({
                firstname,
                email,
                password,
                age,
                dob
            })

            //     const user=new User({
            // firstname:"niraj",
            // email:'niraj@gmail.com',
            // password:'12345'

            //     })

            await user.save();

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