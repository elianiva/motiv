const multer = require("multer")
const path = require("path")

const MAX_SIZE = 5 * 1000 * 1000 // image max filesize (default: 5MB)
const SUPPORTED_FILETYPES = /\.(jpeg|jpg|png|webp)$/ // supported media filetypes
const SUPPORTED_MIMETYPES = /jpeg|jpg|png|webp/ // supported media mimetypes

const checkFileType = (file, cb) => {
  // test both extension name and mimetypes
  const extName = SUPPORTED_FILETYPES.test(
    path.extname(file.originalname).toLowerCase()
  )
  const mimeType = SUPPORTED_MIMETYPES.test(file.mimetype)
  if (mimeType && extName) return cb(null, true)

  // throw error if user upload anything instead of supported filetypes
  cb("Error: Images Only !!!")
}

// setup multer storage disk
const storage = multer.diskStorage({
  destination: "public/images",
  filename: (_, file, cb) => {
    // use `Date.now()` to make sure it's unique for each files
    cb(null, `${Date.now()}-${file.originalname}`)
  },
})

const uploadSingle = multer({
  storage,
  limits: { fileSize: MAX_SIZE },
  fileFilter: (_, file, cb) => checkFileType(file, cb),
}).single("image")

const uploadMultiple = multer({
  storage,
  limits: { fileSize: MAX_SIZE },
  fileFilter: (_, file, cb) => checkFileType(file, cb),
}).fields([
  { name: "content", maxCount: 100 },
  { name: "cover", maxCount: 1 },
])

module.exports = {
  uploadSingle,
  uploadMultiple,
}
