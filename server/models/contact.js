const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 50 },
  phone: { type: String, required: true, length: 10 },
  message: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.models.Contact || mongoose.model('Contact', contactSchema);