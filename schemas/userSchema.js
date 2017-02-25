/**
 * Created by CoderSong on 17/2/25.
 */
'use strict';

let mongoose = require('mongoose'),
  config = require('./../service/config');

let UserSchema = new mongoose.Schema({
  username:String,
  account:String,
  password:String,
  createAt: {
    type: Date,
    default: Date.now()
  },
  updateAt: {
    type: Date,
    default: Date.now()
  }
});

UserSchema.pre('save', function (next) {
  if (this.isNew) {
    this.createAt = this.updateAt = Date.now()
  }
  else {
    this.updateAt = Date.now()
  }
  next()
});

UserSchema.statics = {
  findById: function (id, cb) {
    return this
      .findOne({_id: id})
      .exec(cb)
  },

  findByUserName: function (userName, cb) {
    return this
      .findOne({username: userName})
      .exec(cb)
  }
};

module.exports = DangerEventSchema;