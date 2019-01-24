//Urer Controller
var User    = require('../models/User')
var express = require('express')
var router  = express.Router()

const welcomeMsg = (req, res, next) => {

    res.json ( {'http-status': 200, msg: 'ok', 'data': "Hello from CRUD User"} )

}    

const findAll = (req, res, next) => {

    //console.log( req.query.page_length );
    //var query = JSON.parse( req.query ); //{ filter: '', page_length: '2', page_number: '1' }
    var skip  = parseInt( (req.query.page_number - 1 )) * parseInt( req.query.page_length) 
    var limit = parseInt( req.query.page_length );

    //console.log(vskip);
    
    var resp = {}
    User.find({}, {}, {skip: skip, limit: limit }, (err, data) => {
        if(err) {
            resp = {'http-code': 501, 'http-status': 'error', 'msg': 'error getting users' + err.message, 'data':data }
        } else {

            //var datax = data


            User.countDocuments({}, (err, count) => {
               resp = {'http-code': 200, 'http-status': 'success', 'msg': 'ok', 'data':data, 'count': count }
               res.json(resp);
            });

            // resp = {'http-code': 200, 'http-status': 'success', 'msg': 'ok', 'data':data }
        }
        
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

    //console.log( req.body.first_name )

    var formUser = JSON.parse(req.body.user);

    user.first_name   = formUser.first_name
    user.last_name    = formUser.last_name
    user.national_id  = formUser.national_id
    user.dob          = formUser.dob

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

    // console.log(req);

    User.findById( userId, (err, data) => {
        if(err) {
            resp = {'http-code': 501, 'http-status': 'error', 'msg': 'error getting user data. ' + err.message, 'data':data }
            res.json(resp)

        } else {
            
            User.findById( userId, (err, user) => {

            //  console.log(user);
            
            if(err) {
                
                resp = {'http-code': 501, 'http-status': 'error', 'msg': 'error getting user data. ' + err.message, 'data':user }
                res.json(resp)
            
            } else {

                var formUser = JSON.parse(req.body.user);
                
                user.first_name   = formUser.first_name
                user.last_name    = formUser.last_name
                user.national_id  = formUser.national_id
                user.dob          = formUser.dob

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
