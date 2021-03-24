const Majalah = require("../model/Majalah")

module.exports = async (req, res) => {
  if (req.query.type === "all") {
    try {
      const data = await Majalah.find()
      res.status(200).json(data)
    } catch (err) {
      res.sendStatus(404)
    }
    return
  }

  if (req.query.title) {
    try {
      const data = await Majalah.findOne({ judul: req.query.title })
      res.status(200).json(data)
    } catch (err) {
      res.sendStatus(404)
    }
    return
  }

  if (req.query.id) {
    try {
      const data = await Majalah.findOne({ _id: req.query.id })
      res.status(200).json(data)
    } catch (err) {
      res.sendStatus(404)
    }

    return
  }

  if (req.query.filter) {
    try {
      const data = await Majalah.find()
      const result = data.filter(x =>
        x.judul.toLowerCase().includes(req.query.filter)
      )
      res.status(200).json(result)
    } catch (err) {
      res.sendStatus(404)
    }

    return
  }

  res.status(200).send("hi!")
}
