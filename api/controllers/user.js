//Urer Controller
var User    = require('../models/User')
var express = require('express')
var router  = express.Router()

const welcomeMsg = (req, res, next) => {

    res.json ( {'http-status': 200, msg: 'ok', 'data': "Hello from CRUD User"} )

}    

const findAll = (req, res, next) => {
    
    var resp = {}
    User.find({}, (err, data) => {
        if(err) {
            resp = {'http-code': 501, 'http-status': 'error', 'msg': 'error getting users' + err.message, 'data':data }
        } else {
            resp = {'http-code': 200, 'http-status': 'success', 'msg': 'ok', 'data':data }
        }
        res.json(resp);
   })

}

const findById = (req, res, next) => {
    var userId = req.params.id
    var resp = {}
    User.findById( userId, (err, user) => {
        if(err) {
            resp = {'http-code': 501, 'http-status': 'error', 'msg': 'error getting user data. ' + err.message, 'data':user }
        } else {
            resp = {'http-code': 200, 'http-status': 'success', 'msg': 'ok', 'data':user }
        }
        res.json(resp);
   })

}

const add = (req, res, next) => {

    var resp = {}
    var user = new User()

    user.first_name   = req.body.form.first_name
    user.last_name    = req.body.form.last_name
    user.national_id  = req.body.form.national_id
    user.dob          = req.body.form.dob

    user.save({}, (err) => {
        if(err) {
            resp = {'http-code': 501, 'http-status': 'error', 'msg': 'error saving user! ' + err.message, 'data':'' }
        } else {
            resp = {'http-code': 200, 'http-status': 'success', 'msg': 'user saved', 'data':'' }
        }

        res.json(resp);
    })

}

const update = (req, res, next) => {
    var userId = req.params.id
    var resp = {}
    User.findById( userId, (err, data) => {
        if(err) {
            resp = {'http-code': 501, 'http-status': 'error', 'msg': 'error getting user data. ' + err.message, 'data':data }
            res.json(resp)

        } else {
            
            User.findById( userId, (err, user) => {
            
            if(err) {
                
                resp = {'http-code': 501, 'http-status': 'error', 'msg': 'error getting user data. ' + err.message, 'data':user }
                res.json(resp)
            
            } else {
                
                user.first_name   = req.body.form.first_name
                user.last_name    = req.body.form.last_name
                user.national_id  = req.body.form.national_id
                user.dob          = req.body.form.dob

                user.save({}, (err) => {
                if(err) {
                    resp = {'http-code': 501, 'http-status': 'error', 'msg': 'error updating user! ' + err.message, 'data':'' }
                } else {
                    resp = {'http-code': 200, 'http-status': 'success', 'msg': 'user updated', 'data':'' }
                }
                    res.json(resp)
                
                })

            }

            })    
            
        }

   })

}

const remove = (req, res, next) => {
    var userId = req.params.id
    var resp = {}
    User.findById( userId, (err, data) => {
        if(err) {
            resp = {'http-code': 501, 'http-status': 'error', 'msg': 'error getting user data. ' + err.message, 'data':data }
            res.json(resp)
        
        } else {
            
            User.findById( userId, (err, user) => {
            
                if(err) {
                    
                    resp = {'http-code': 501, 'http-status': 'error', 'msg': 'error getting user data. ' + err.message, 'data':user }
                    res.json(resp)
                
                } else {
                     
                    user.remove( { _id: userId }, (err) => {

                        if(err) {
                            resp = {'http-code': 501, 'http-status': 'error', 'msg': 'error deleting user! ' + err.message, 'data':'' }
                        } else {
                            resp = {'http-code': 200, 'http-status': 'success', 'msg': 'user deleted', 'data':'' }
                        }
                        
                        res.json(resp)
                    
                    })

                }

            })    
            
        }

   })

}

module.exports = {   
    welcomeMsg,
    findAll,
    findById,
    add,
    update,
    remove
}
