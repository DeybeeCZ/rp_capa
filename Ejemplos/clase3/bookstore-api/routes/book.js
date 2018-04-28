var express = require('express');
var mongoose = require('mongoose');
var bookSchema = mongoose.model('Book');
var router = express.Router();
var utils = require('../utils');

/**
 * @api {get} /user 1. Get all users
 * @apiName GetAllUser
 * @apiGroup User
 * @apiDescription
 * EN: Get all users.
 * SP: Obtiene todos los usuarios
 * @apiPermission Bearer Authenticated
 *
 * @apiSuccess (200) {Array} User user object
 * @apiSuccess (User) {User} User user object
 */
router.get('/', function(req, res, next) {
  bookSchema.find({enable:true}, function (err,users) {
      if (err) return next(err);
      res.json(users);
  });
});

/**
 * @api {get} /user/:id 2. Get user detail
 * @apiName GetUser
 * @apiGroup User
 * @apiDescription
 * EN: Get user by id
 * SP: Obtiene un usuario por su id
 * @apiPermission Bearer Authenticated
 *
 * @apiParam {String} id Users unique ID.
 */
router.get('/:id', function(req, res, next) {
    bookSchema.findById(req.params.id)
    .select({
        '_id': 1,
        'name': 1,
        'lastname': 1,
        'modules': 1,
        'enable': 1,
    })
    .populate('modules')
    .populate('candidate')
    .exec(function(err,user) {
        res.json(user);
    })
});

/**
 * @api {post} /user Create new user
 * @apiName saveUser
 * @apiGroup User
 * @apiDescription
 * EN: Save new user.
 * SP: Crea un nuevo usuario
 * @apiPermission Bearer Authenticated
 * @apiHeader {String} Autorization Bearer accesstoken
 *
 * @apiParam {String} name user name
 * @apiParam {String} lastname user last name
 * @apiParam {String} email user email
 * @apiParam {String} password password by user
 * @apiParam {Array} roles Array by roles ids
 *
 */
router.post('/',function(req,res,next){
    params=req.body;
    params.password=utils.encript.password(params.password);
    var newUser = new bookSchema(params);
    newUser.save(function(err,result){
        res.json(result);
    });
})

/**
 * @api {put} /user/:id Update user
 * @apiName PutUser
 * @apiGroup User
 * @apiPermission Bearer Authenticated
 *
 * @apiHeader {String} Autorization Bearer accesstoken
 *
 * @apiDescription
 * EN: Update any field from user.
 * SP: Actualizar cualquier campo del usuario.
 * @apiParam {String} id user id
 * @apiParam (form){String} name user name
 * @apiParam (form){String} lastname user last name
 * @apiParam (form){String} email user email
 * @apiParam (form){String} password password by user
 * @apiParam (form){Array} modules Array by modules ids
 *
 */
router.put('/:id',function(req,res,next){
    var userId = req.params.id;
    var query = req.body;
    var up = Date.now();
    query.updateAt = up;
    bookSchema.update({_id: userId},
        { $set : query },
        function(err, numAffected) {
            if(err) {
                res.json(err);
            }
            res.json(numAffected);
        }
    );
});

/**
 * @api {delete} /user/:id Delete User
 * @apiName DeleteUser
 * @apiGroup User
 * @apiPermission Bearer Authenticated
 *
 * @apiHeader {String} Autorization Bearer accesstoken
 *
 * @apiDescription
 * EN: Delete user.
 * SP: Eliminar un usuario.
 * @apiParam {String} id user id
 *
 */
router.delete('/:id',function(req,res,next){
    bookSchema.update({_id:req.params.id},
        {$set:{"updateAt":Date.now(),"enable":false}},
        function(err, numAffected){
            res.json(numAffected);
        }
    );
});

module.exports = router;
