const Majalah = require("../model/Majalah")
const User = require("../model/User")
const bcrypt = require("bcrypt")
const fs = require("fs-extra")

module.exports = {
  viewDashboard: async (_, res) => {
    const data = await Majalah.find()
    res.render("index", {
      data,
    })
  },
  viewLogin: async (_, res) => {
    res.render("login")
  },
  actionLogin: async (req, res) => {
    try {
      const { username, password } = req.body
      const user = await User.findOne({ username })

      if (!user) {
        req.flash("alertMessage", "User yang anda masukan tidak ada!")
        req.flash("alertStatus", "danger")
        res.redirect("/admin/login")
      }

      const isPasswordMatched = await bcrypt.compare(password, user.password)
      if (!isPasswordMatched) {
        req.flash("alertMessage", "Password yang anda masukan tidak cocok!")
        req.flash("alertStatus", "danger")
        res.redirect("/admin/login")
      }

      req.session.user = {
        id: user.id,
        username: user.username,
      }

      res.redirect("/admin/dashboard")
    } catch (error) {
      res.redirect("/admin/login")
    }
  },
  viewAddData: async (_, res) => {
    res.render("add_data")
  },
  viewEditData: async (req, res) => {
    const { id } = req.params
    const majalah = await Majalah.findOne({ _id: id })
    res.render("edit_data", { data: majalah })
  },
  actionAddData: async (req, res) => {
    try {
      const { judul, penerbit, jumlahHalaman, tanggalTerbit, desc } = req.body

      // save the data into database
      const majalah = new Majalah({
        judul,
        penerbit,
        jumlahHalaman,
        tanggalTerbit,
        desc,
        coverUrl: `images/${req.files.cover[0].filename}`,
        pagesUrls: req.files.content.map(x => `images/${x.filename}`),
      })
      await majalah.save()

      req.flash("alertMessage", "Success Add Category")
      req.flash("alertStatus", "success")
      res.redirect("/admin/dashboard")
    } catch (error) {
      req.flash("alertMessage", `${error.message}`)
      req.flash("alertStatus", "danger")
      res.redirect("/admin/dashboard")
    }
  },
  actionRemoveData: async (req, res) => {
    try {
      const { id } = req.params
      const majalah = await Majalah.findOne({ _id: id })
      await fs.unlink(`public/${majalah.coverUrl}`)
      majalah.pagesUrls.forEach(async item => {
        await fs.unlink(`public/${item}`)
      })
      majalah.remove()
      // req.flash("alertMessage", "Success Delete Category")
      // req.flash("alertStatus", "success")
      res.redirect("/admin/dashboard")
    } catch (error) {
      console.log(error)
      // req.flash("alertMessage", `${error.message}`)
      // req.flash("alertStatus", "danger")
      res.redirect("/admin/dashboard")
    }
  },
  actionEditData: async (req, res) => {
    try {
      const { judul, penerbit, jumlahHalaman, tanggalTerbit, desc } = req.body
      const { id } = req.params
      const majalah = await Majalah.findOne({ _id: id })

      // override images is the request contains files
      majalah.judul = judul
      majalah.penerbit = penerbit
      majalah.jumlahHalaman = jumlahHalaman
      majalah.tanggalTerbit = tanggalTerbit
      majalah.desc = desc

      if (req.files.cover) {
        await fs.unlink(`public/${majalah.coverUrl}`)
        majalah.coverUrl = `images/${req.files.cover[0].filename}`
      }

      if (req.files.content) {
        majalah.pagesUrls.forEach(async item => {
          await fs.unlink(`public/${item}`)
        })
        majalah.pagesUrls = req.files.content.map(x => `images/${x.filename}`)
      }

      // save the new data
      await majalah.save()

      // req.flash("alertMessage", "Success Add Category")
      // req.flash("alertStatus", "success")
      res.redirect("/admin/dashboard")
    } catch (error) {
      console.log(error)
      // req.flash("alertMessage", `${error.message}`)
      // req.flash("alertStatus", "danger")
      res.redirect("/admin/dashboard")
    }
  },
}
