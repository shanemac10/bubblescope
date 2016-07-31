var mongoose = require('mongoose');

var ContactEntry = mongoose.model('ContactEntry', {
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  image: String,
  street: String,
  city: String,
  state: String,
  postalCode: String,
  company: String,
  title: String,
  workPhone: String,
  fax: String,
  notes: String

});

module.exports = ContactEntry;
