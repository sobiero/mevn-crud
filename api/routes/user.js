var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var UserController = require('../controllers/user.js')

router.get('/test', (req, res, next) => {
   UserController.welcomeMsg(req, res, next)
})

router.get('/', (req, res, next) => {
   UserController.findAll(req, res, next)
   
})

router.get('/:id', (req, res, next) => {
   UserController.findById(req, res, next)
   
})
router.post('/', (req, res, next) => {
   UserController.add(req, res, next)
   
})

router.put('/:id', (req, res, next) => {
   UserController.update(req, res, next)
   
})

router.delete('/:id', (req, res, next) => {
   UserController.remove(req, res, next)
   
})

/*

router.get('/add', (req, res, next) => {
   UserController.add(req, res, next)
   
})
*/

module.exports = router
