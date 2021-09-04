const express = require('express')
//const connection = require('./connection');
const arr=require('./controller/user')
const router = express.Router()

// router.get('/name', (req, res) => {
//   res.send('Hello World!');
//   console.log(req.body);
// })

// router.get('/:id/[A-Z]{4}', (req, res) => {
//   console.log(req.params);
//   res.send('Birds home page')
// })

//   router.get('/:id',(req, res)=> {
//     console.log(req.query);
//   res.send('welcome to the future')
// })


// router.get('/', (req, res) => {
//   connection.query('SELECT * FROM users', (err, rows, fields) => {
//     if (err)
//       throw err;
//     else
//       res.send(rows);
//   })
// });



// router.post('/', (req, res) => {
//   connection.query("INSERT INTO customers (name, address) VALUES ('Company Inc', 'Valley 345')", (err, rows, fields) => {
//     if (err)
//       throw err;
//     else
//       res.end("done");
//     console.log("data inserted");
//   })
// });


// router.delete('/', (req, res) => {
//   connection.query("DELETE FROM customers WHERE address = 'Highway 37'", (err, rows, fields) => {
//     if (err)
//       throw err;
//     else
//       res.end("done");
//     console.log("data deleted");
//   })
// });

// router.put('/', (req, res) => {
//   connection.query("UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'", (err, rows, fields) => {
//     if (err)
//       throw err;
//     else
//       res.end("done");
//     console.log("data updated");
//   })
// });





// router.get('*', (req, res) => {
//   res.status(400);
//   res.send("jgjgg");
// })

// router.post('/names', (req, res) => {
//   if (req.body.password === '12344') {
//     res.send("success")
//   }
//   else {
//     res.send('not')
//   }
// })

router.post('/',arr.create)
router.post('/login',arr.login)
// router.get('/',arr.getAllTask)
// router.get('/:id',arr.getTask)
// router.delete('/:id',arr.deleteTask)
// router.put('/:id',arr.updateTask)

module.exports = router