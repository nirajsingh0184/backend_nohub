const express = require('express')
//const connection = require('./connection');
const func=require('./controller/Movies')
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


// router.get('/users', (req, res) => {
//   connection.query('SELECT * FROM users', (err, rows, fields) => {
//     if (err)
//       throw err;
//     else
//       res.send(rows);
//   })
// });



// router.post('/users', (req, res) => {
//   connection.query("INSERT INTO customers (name, address) VALUES ('Company Inc', 'Valley 345')", (err, rows, fields) => {
//     if (err)
//       throw err;
//     else
//       res.end("done");
//     console.log("data inserted");
//   })
// });


// router.delete('/users', (req, res) => {
//   connection.query("DELETE FROM customers WHERE address = 'Highway 37'", (err, rows, fields) => {
//     if (err)
//       throw err;
//     else
//       res.end("done");
//     console.log("data deleted");
//   })
// });

// router.put('/users', (req, res) => {
//   connection.query("UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'", (err, rows, fields) => {
//     if (err)
//       throw err;
//     else
//       res.end("done");
//     console.log("data updated");
//   })
// });

// var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log("Table created");
// });
// if (err) throw err;
// con.query("SELECT * FROM customers", function (err, result, fields) {
//   if (err) throw err;
//   console.log(result);




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

router.get('/:id', func.func)

module.exports = router