/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var bcrypt = require('bcryptjs');

module.exports = {
	checkMail:function(req,res)
	{
		var email = req.param('empMailId');
		sails.log("mailid is---->"+email);

		// Lookup the user in the database

		User.find({email:email})
				.exec(function(err,user){

					if(err)
						res.json({error:err});
					if(user === undefined)
						res.json({notFound:true});
					else
						res.json({notFound:false,userData:user});
					
				});

},

	createUser:function(data,res){

		sails.log('--------Inside creat user function------')

		//var email = req.param('empMailId')
// var data = {
// 			username:"Testing15",
//             email: "Testing15@gmail.com",
//             password: "testing15"
//         }

   User.find({email:data.email})
				.exec(function(err,user){

					if(err)
						res.json({error:err});
					if(user.length === 0){
						sails.log("user is undefined"+user);
						User.create(data).exec(function(err,user){
       						 if(err)
           					res.json({error:err});
        					 if(user === undefined)
         					res.json({created:true})
        					 else
         					res.json({created:true,userData:user})

      					 });
					}
					else{
						sails.log(user);
						res.json({created:false,userData:user});
					}
					
				});


	},

	login:function(req,res){

		// Get password and username from request
        var email = req.param('email');
        var password = req.param('password');

        // No username/password entered
        if(!(email && password)) {
            return res.send('No email or password specified!', 500);
        }

        // Lookup the user in the database

        User.findOne({
            email: email
        }).exec(function (err, user) {

            // Account not found
            if (err || !user) {
                return res.send('Invalid email and password combination!', 500);
            }

            // Compare the passwords
            bcrypt.compare(password, user.password, function(err, valid) {
                if(err || !valid)
                    return res.send('Invalid email and password combination!', 500)

                // The user has authenticated successfully, set their session
                req.session.authenticated = true;
                req.session.User = user;

                // Redirect to protected area
                //return res.send("SUCCESS");
                return res.json({success:true,userData:user});
            });
        });

	}
	
};

