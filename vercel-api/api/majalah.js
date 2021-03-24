const data = [
  {
    _id: 1,
    judul: "Motiv",
    penerbit: "Motiv",
    jumlahHalaman: "40",
    tanggalTerbit: "2020-12-08",
    desc:
      "Majalah Motiv adalah majalah yang membahas hal hal yang berhubungan dengan teknologi, informasi, dan komunikasi serta berbagai macam hal seperti kreatif di tengah pandemi serta informasi menarik lainnya.",
    coverUrl: "images/pages/cover.webp",
    pagesUrls: [
      "images/pages/cover.webp",
      "images/pages/page-3.webp",
      "images/pages/page-4.webp",
      "images/pages/page-5.webp",
      "images/pages/page-6.webp",
      "images/pages/page-7.webp",
      "images/pages/page-8.webp",
      "images/pages/page-9.webp",
      "images/pages/page-10.webp",
      "images/pages/page-11.webp",
      "images/pages/page-12.webp",
      "images/pages/page-13.webp",
      "images/pages/page-14.webp",
      "images/pages/page-15.webp",
      "images/pages/page-16.webp",
      "images/pages/page-17.webp",
      "images/pages/page-18.webp",
      "images/pages/page-19.webp",
      "images/pages/page-20.webp",
      "images/pages/page-21.webp",
      "images/pages/page-22.webp",
      "images/pages/page-23.webp",
      "images/pages/page-24.webp",
      "images/pages/page-25.webp",
      "images/pages/page-26.webp",
      "images/pages/page-27.webp",
      "images/pages/page-28.webp",
      "images/pages/page-29.webp",
      "images/pages/page-31.webp",
      "images/pages/page-32.webp",
      "images/pages/page-33.webp",
      "images/pages/page-34.webp",
      "images/pages/page-35.webp",
      "images/pages/page-36.webp",
      "images/pages/page-37.webp",
      "images/pages/page-38.webp",
      "images/pages/page-39.webp",
      "images/pages/page-40.webp",
      "images/pages/cover-back.webp",
    ],
  },
]

const handler = async (req, res) => {
  if (req.query.type === "all") {
    try {
      res.status(200).json(data)
    } catch (err) {
      res.send({ msg: "Not Found", status: 404 })
    }
    return
  }

  if (req.query.title) {
    try {
      const result = data.filter(item => item.judul === req.query.title)
      res.status(200).json(result)
    } catch (err) {
      res.send({ msg: "Not Found", status: 404 })
    }
    return
  }

  if (req.query.id) {
    try {
      const result = data.filter(item => item._id === parseInt(req.query.id))
      console.log(data[0]._id, parseInt(req.query.id))
      res.status(200).json(result[0])
    } catch (err) {
      res.send({ msg: "Not Found", status: 404 })
    }

    return
  }

  if (req.query.filter) {
    try {
      const result = data.filter(x =>
        x.judul.toLowerCase().includes(req.query.filter)
      )
      res.status(200).json(result)
    } catch (err) {
      res.send({ msg: "Not Found", status: 404 })
    }

    return
  }

  res.status(200).send([])
}

module.exports = handler
