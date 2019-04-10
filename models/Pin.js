const mongoose = require('mongoose');

const PinSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    image: String,
    latitude: Number,
    longitude: Number,
    author: { type: mongoose.Schema.ObjectId, ref: 'User' },
    comments: [
      {
        text: String,
        createdAt: { type: Date, default: Date.now },
        author: { type: mongoose.Schema.ObjectId, ref: 'User' }
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Pin', PinSchema);
