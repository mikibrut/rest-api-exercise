const mongoose = require('mongoose');
const { Schema } = mongoose;

const showSchema = new Schema({
  title: {
    type: String,
    required: [true, 'You must introduce a title to insert new show']
  },
  creator: String,
  launched: Number,
  image: {
    type: String,
    default: 'https://www.shutterstock.com/image-illustration/vintage-tv-receiver-on-white-260nw-1034278819.jpg'
  },
  genre: String,
  description: {
    type: String,
    default: 'No description was provided yet'
  },
},
  {
    timestamps: true
  });

const Show = mongoose.model('Show', showSchema);

module.exports = Show;