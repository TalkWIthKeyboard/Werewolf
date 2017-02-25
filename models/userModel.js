/**
 * Created by CoderSong on 17/2/25.
 */
'use strict';

let mongoose = require('mongoose'),
    userSchema = require('../schemas/userSchema'),
    User = mongoose.model('User',userSchema);

module.exports = DangerEvent;