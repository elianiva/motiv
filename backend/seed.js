const seeder = require("mongoose-seed")
const mongoose = require("mongoose")
require("dotenv").config()

// connect seeder to mongoose
seeder.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  },
  function () {
    // load mongoose models
    seeder.loadModels(["./model/Majalah.js", "./model/User.js"])

    // clear leftover models
    seeder.clearModels(["Majalah", "User"], () => {
      // Callback to populate DB once collections have been cleared
      seeder.populateModels(data, (err, done) => {
        if (err) return console.log("seed err", err)
        if (done) return console.log("seed done", done)
        seeder.disconnect()
      })
    })
  }
)

const data = [
  {
    model: "Majalah",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc901111"),
        judul: "Motiv",
        penerbit: "Motiv",
        jumlahHalaman: "40",
        tanggalTerbit: "2020-12-08",
        desc:
          "Adipisicing tempora similique et vitae deserunt Dolores commodi perspiciatis repellendus explicabo tenetur Recusandae neque dolores minus obcaecati iste. Error est.",
        coverUrl: "images/pages/cover.webp",
        pagesUrls: [
          "images/pages/cover.webp",
          "images/pages/page-5.webp",
          "images/pages/page-6.webp",
          "images/pages/page-9.webp",
          "images/pages/page-10.webp",
          "images/pages/page-11.webp",
          "images/pages/page-12.webp",
          "images/pages/page-13.webp",
          "images/pages/page-14.webp",
          "images/pages/page-16.webp",
          "images/pages/page-17.webp",
          "images/pages/page-18.webp",
          "images/pages/page-19.webp",
          "images/pages/page-20.webp",
          "images/pages/page-31.webp",
          "images/pages/page-32.webp",
          "images/pages/page-33.webp",
        ],
      },
    ],
  },
  {
    model: "User",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc901111"),
        username: "admin",
        password: "admin",
      },
    ],
  },
]
