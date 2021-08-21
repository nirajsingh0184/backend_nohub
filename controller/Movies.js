
const express = require('express')
const movies = require('../model/movies')
const router = express.Router()
//const movies = require('../model/movies')


const arr = {
    func:(req, res) => {
        //console.log(movies);
        const { id }=req.params;
        const { name } = req.query;
//console.log(id,name);

        let movie = {};
        movies.forEach(element => {
            if (name === element.name) {
                movie=element;
            }
        })

        res.send(movie);
    }
}

module.exports=arr;