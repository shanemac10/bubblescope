var mongoose = require('mongoose');

var ContactEntry = mongoose.model('ContactEntry', {
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  image: String

});

module.exports = ContactEntry;
