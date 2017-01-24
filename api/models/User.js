/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
 var bcrypt = require('bcryptjs');

module.exports = {
  tableName: 'user',
  attributes: {
	username: {
		type: 'string'
	},
	email: {
		type: 'string',
		index:true
	},
	password: {
		type: 'string'
	},
	date: {
		type:'Date',
		default:Date.now
	},
	token: {
		type:'string',
		default:"Logged Out"
	}
  },

  beforeCreate: function(user, cb) {
      bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash(user.password, salt, function(err, hash) {
            if(err) {
                sails.log(err);
                cb(err);
            } else {
                user.password = hash;
                sals.log(hash);
                cb(null, user);
            }
          });
      });
  }

 



};

