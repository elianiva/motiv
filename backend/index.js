const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const eta = require("eta")
const flash = require("connect-flash")
const session = require("express-session")
const methodOverride = require("method-override")

// load env variables
require("dotenv").config()

// connect to DB
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("MongoDB connected!")
)

// initiate express instance
const app = express()

// parse the request body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// use this for production
const PORT = process.env.PORT || 3000

// set static directory to serve (for images)
app.use(express.static("public"))

// use flash message middleware
app.use(flash())

// override methods using special keyword on action URL
app.use(methodOverride("_method"))

// use express-session for session management
app.use(
  session({
    secret: "thisisasecretthatisunreadablebecaseoflackofspaces",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 3600000,
      httpOnly: true,
    },
  })
)

// set cors
app.use(
  cors({
    // TODO: temporary
    origin: ["https://motiv.elianiva.me", "http://localhost:5000"],
    credentials: true,
  })
)

// set view engine
app.engine("eta", eta.renderFile)
app.set("view engine", "eta")
app.set("views", "./views")

// admin routes
const adminRoutes = require("./routes/admin")
app.get("/", (_, res) => res.redirect("/admin"))
app.use("/admin", adminRoutes)

// API routes
const apiRoutes = require("./routes/api")
app.use("/api", apiRoutes)

app.listen(PORT, () => console.log("Listening on port:", PORT))
