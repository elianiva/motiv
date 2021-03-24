const mongoose = require("mongoose")
const { Schema } = mongoose

const majalahSchema = new Schema({
  judul: {
    type: String,
    required: true
  },
  penerbit: {
    type: String,
    required: true
  },
  jumlahHalaman: {
    type: Number,
    required: true
  },
  tanggalTerbit: {
    type: Date,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  coverUrl: {
    type: String,
    required: true
  },
  pagesUrls: {
    type: [String],
    required: true
  },
})

module.exports = mongoose.model('Majalah', majalahSchema)
