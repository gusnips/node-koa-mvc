//https://github.com/balderdashy/waterline-docs
var Waterline = require('waterline');
var bcrypt = require('bcrypt');
var User = Waterline.Collection.extend({
    attributes: {
        email: {
            type: 'string',
            required: true,
            email: true
        },
        password: {
            type: 'string',
            password: true,
            minLength: 6,
            maxLength: 21
        },
        passwordConfirmation: function(){
            return this.passwordConfirmation;
        }
    },
    //custom validation rules
    types: {
        password: function(password) {
            return password === this.passwordConfirmation;
        }
    },
    beforeCreate: function(values, next) {
        bcrypt.hash(values.password, 10, function(err, hash) {
          if(err) 
            return next(err);
          values.password = hash;
          next();
        });
    },
    comparePassword: function *(candidatePassword) {
      return yield bcrypt.compare(candidatePassword, this.password);
    },
    matchUser: function *(email, password) {  
        var user = yield this.findOne({ 'email': email.toLowerCase() }).exec();
        if (!user) 
            throw new Error('User not found');
        
        if (yield user.comparePassword(password))
            return user;
    
        throw new Error('Password does not match');
    }
});

module.exports= User;