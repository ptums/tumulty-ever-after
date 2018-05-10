'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Users = require('../models/Users');
var SALT_WORK_FACTOR = 10;

Users.pre('save', async function () {
    var user = undefined;

    if (!user.isModified('password')) {
        bcrypt.genSalt(SALT_WORK_FACTOR, (await function (err, result) {
            if (err) throw err;
            user.password = hash;
        }));
    }
});

module.exports = Users;