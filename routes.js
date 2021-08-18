const express = require('express')
const router = express.Router()

  router.get('/name', (req, res) => {
    res.send('Hello World!')
  })

  router.get('/:id/[A-Z]{4}',(req, res)=> {
      console.log(req.params);
    res.send('Birds home page')
  })

  router.get('/:id',(req, res)=> {
    console.log(req.query);
  res.send('welcome to the future')
})

  router.post('/names', (req, res) => {
    if(req.body.password==='12344')
    {
      res.send("success")
    }
else{
    res.send('not')
}
  })

  router.get('*', (req, res) => {
    res.status(400);
    res.send("jgjgg");
  })

  module.exports=router