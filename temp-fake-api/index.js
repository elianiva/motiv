const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())

const data = [
  {
    date: Date.now(),
    category: "maspion",
    articles: [
      {
        id: 1,
        title: "Motiv 1",
        desc:
          "Amet animi voluptate reiciendis iste error Debitis nulla et culpa culpa quasi, expedita Voluptatum voluptatum labore cumque tempora accusantium! Nemo rem minima molestiae accusantium at nobis? Ducimus accusantium fugiat unde",
        img: "/images/cover-1.jpg",
        writer: "nama penulis",
        pageNum: "20",
        publish_date: Date.now(),
        category: "maspion",
        pages: [
          "cover-2.jpg",
          "page-1.jpg",
          "page-2.jpg",
          "cover-belakang.jpg",
        ],
      },
      {
        id: 2,
        title: "Motiv 2",
        desc:
          "Amet animi voluptate reiciendis iste error Debitis nulla et culpa culpa quasi, expedita Voluptatum voluptatum labore cumque tempora accusantium! Nemo rem minima molestiae accusantium at nobis? Ducimus accusantium fugiat unde",
        img: "/images/cover-2.jpg",
        writer: "penulis",
        pageNum: "20",
        publish_date: Date.now(),
        category: "maspion",
        pages: [
          "cover-2.jpg",
          "page-1.jpg",
          "page-2.jpg",
          "cover-belakang.jpg",
        ],
      },
      {
        id: 3,
        title: "Motiv 3",
        desc:
          "Amet animi voluptate reiciendis iste error Debitis nulla et culpa culpa quasi, expedita Voluptatum voluptatum labore cumque tempora accusantium! Nemo rem minima molestiae accusantium at nobis? Ducimus accusantium fugiat unde",
        img: "/images/cover-1.jpg",
        writer: "penulis",
        pageNum: "20",
        publish_date: Date.now(),
        category: "maspion",
        pages: [
          "cover-2.jpg",
          "page-1.jpg",
          "page-2.jpg",
          "cover-belakang.jpg",
        ],
      },
    ],
  },
  {
    date: Date.now(),
    category: "techno",
    articles: [
      {
        id: 4,
        title: "Motiv 4",
        desc:
          "Amet animi voluptate reiciendis iste error Debitis nulla et culpa culpa quasi, expedita Voluptatum voluptatum labore cumque tempora accusantium! Nemo rem minima molestiae accusantium at nobis? Ducimus accusantium fugiat unde",
        img: "/images/cover-2.jpg",
        writer: "nama penulis",
        pageNum: "20",
        publish_date: Date.now(),
        category: "techno",
        pages: [
          "cover-2.jpg",
          "page-1.jpg",
          "page-2.jpg",
          "cover-belakang.jpg",
        ],
      },
      {
        id: 5,
        title: "Motiv 5",
        desc:
          "Amet animi voluptate reiciendis iste error Debitis nulla et culpa culpa quasi, expedita Voluptatum voluptatum labore cumque tempora accusantium! Nemo rem minima molestiae accusantium at nobis? Ducimus accusantium fugiat unde",
        img: "/images/cover-1.jpg",
        writer: "penulis",
        pageNum: "20",
        publish_date: Date.now(),
        category: "techno",
        pages: [
          "cover-2.jpg",
          "page-1.jpg",
          "page-2.jpg",
          "cover-belakang.jpg",
        ],
      },
      {
        id: 6,
        title: "Motiv 6",
        desc:
          "Amet animi voluptate reiciendis iste error Debitis nulla et culpa culpa quasi, expedita Voluptatum voluptatum labore cumque tempora accusantium! Nemo rem minima molestiae accusantium at nobis? Ducimus accusantium fugiat unde",
        img: "/images/cover-2.jpg",
        writer: "penulis",
        pageNum: "20",
        publish_date: Date.now(),
        category: "techno",
        pages: [
          "cover-2.jpg",
          "page-1.jpg",
          "page-2.jpg",
          "cover-belakang.jpg",
        ],
      },
    ],
  },
  {
    date: Date.now(),
    category: "tokoh",
    articles: [
      {
        id: 7,
        title: "motiv",
        desc:
          "Amet animi voluptate reiciendis iste error Debitis nulla et culpa culpa quasi, expedita Voluptatum voluptatum labore cumque tempora accusantium! Nemo rem minima molestiae accusantium at nobis? Ducimus accusantium fugiat unde",
        img: "/images/cover-2.jpg",
        writer: "penulis",
        pageNum: "20",
        publish_date: Date.now(),
        category: "tokoh",
        pages: [
          "cover-2.jpg",
          "page-1.jpg",
          "page-2.jpg",
          "cover-belakang.jpg",
        ],
      },
      {
        id: 8,
        title: "motiv",
        desc:
          "Amet animi voluptate reiciendis iste error Debitis nulla et culpa culpa quasi, expedita Voluptatum voluptatum labore cumque tempora accusantium! Nemo rem minima molestiae accusantium at nobis? Ducimus accusantium fugiat unde",
        img: "/images/cover-2.jpg",
        writer: "penulis",
        pageNum: "20",
        publish_date: Date.now(),
        category: "tokoh",
        pages: [
          "cover-2.jpg",
          "page-1.jpg",
          "page-2.jpg",
          "cover-belakang.jpg",
        ],
      },
      {
        id: 9,
        title: "motiv",
        desc:
          "Amet animi voluptate reiciendis iste error Debitis nulla et culpa culpa quasi, expedita Voluptatum voluptatum labore cumque tempora accusantium! Nemo rem minima molestiae accusantium at nobis? Ducimus accusantium fugiat unde",
        img: "/images/cover-1.jpg",
        writer: "penulis",
        pageNum: "20",
        publish_date: Date.now(),
        category: "tokoh",
        pages: [
          "cover-2.jpg",
          "page-1.jpg",
          "page-2.jpg",
          "cover-belakang.jpg",
        ],
      },
      {
        id: 10,
        title: "motiv",
        desc:
          "Amet animi voluptate reiciendis iste error Debitis nulla et culpa culpa quasi, expedita Voluptatum voluptatum labore cumque tempora accusantium! Nemo rem minima molestiae accusantium at nobis? Ducimus accusantium fugiat unde",
        img: "/images/cover-2.jpg",
        writer: "penulis",
        pageNum: "20",
        publish_date: Date.now(),
        category: "tokoh",
        pages: [
          "cover-2.jpg",
          "page-1.jpg",
          "page-2.jpg",
          "cover-belakang.jpg",
        ],
      },
    ],
  },
  {
    date: Date.now(),
    category: "sponsor",
    articles: [
      {
        id: 11,
        title: "motiv",
        desc:
          "Amet animi voluptate reiciendis iste error Debitis nulla et culpa culpa quasi, expedita Voluptatum voluptatum labore cumque tempora accusantium! Nemo rem minima molestiae accusantium at nobis? Ducimus accusantium fugiat unde",
        img: "/images/cover-1.jpg",
        writer: "penulis",
        pageNum: "20",
        publish_date: Date.now(),
        category: "sponsor",
        pages: [
          "cover-2.jpg",
          "page-1.jpg",
          "page-2.jpg",
          "cover-belakang.jpg",
        ],
      },
      {
        id: 12,
        title: "motiv",
        desc:
          "Amet animi voluptate reiciendis iste error Debitis nulla et culpa culpa quasi, expedita Voluptatum voluptatum labore cumque tempora accusantium! Nemo rem minima molestiae accusantium at nobis? Ducimus accusantium fugiat unde",
        img: "/images/cover-2.jpg",
        writer: "penulis",
        pageNum: "20",
        publish_date: Date.now(),
        category: "sponsor",
        pages: [
          "cover-2.jpg",
          "page-1.jpg",
          "page-2.jpg",
          "cover-belakang.jpg",
        ],
      },
      {
        id: 13,
        title: "motiv",
        desc:
          "Amet animi voluptate reiciendis iste error Debitis nulla et culpa culpa quasi, expedita Voluptatum voluptatum labore cumque tempora accusantium! Nemo rem minima molestiae accusantium at nobis? Ducimus accusantium fugiat unde",
        img: "/images/cover-1.jpg",
        writer: "penulis",
        pageNum: "20",
        publish_date: Date.now(),
        category: "sponsor",
        pages: [
          "cover-2.jpg",
          "page-1.jpg",
          "page-2.jpg",
          "cover-belakang.jpg",
        ],
      },
      {
        id: 14,
        title: "motiv",
        desc:
          "Amet animi voluptate reiciendis iste error Debitis nulla et culpa culpa quasi, expedita Voluptatum voluptatum labore cumque tempora accusantium! Nemo rem minima molestiae accusantium at nobis? Ducimus accusantium fugiat unde",
        img: "/images/cover-1.jpg",
        writer: "penulis",
        pageNum: "20",
        publish_date: Date.now(),
        category: "sponsor",
        pages: [
          "cover-2.jpg",
          "page-1.jpg",
          "page-2.jpg",
          "cover-belakang.jpg",
        ],
      },
    ],
  },
]

app.get("/api/articles", (req, res) => {
  if (req.query.type === "all") {
    res.status(200).json(data)
    return
  }

  if (req.query.category) {
    const result = data.filter(x => x.category === req.query.category)
    res.status(200).json(result)
    return
  }

  if (req.query.title) {
    const result = data
      .reduce((acc, curr) => {
        acc.push(curr.articles)
        return acc
      }, [])
      .flat()
      .filter(x => x.title === req.query.title.replace(/-/g, " "))[0]

    res.status.json(result)
    return
  }

  if (req.query.id) {
    const result = data
      .reduce((acc, curr) => {
        acc.push(curr.articles)
        return acc
      }, [])
      .flat()
      .filter(x => x.id === parseInt(req.query.id))[0]

    res.status(200).json(result)
    return
  }

  if (req.query.filter) {
    const result = data
      .reduce((acc, curr) => {
        acc.push(curr.articles)
        return acc
      }, [])
      .flat()
      .filter(x => x.title.toLowerCase().includes(req.query.filter))

    res.status(200).json(result)
    return
  }
})

// app.get("/api/articles", (_, res) => res.json(data))

// app.get("/api/articles/all", (_, res) =>
//   res.json(data.map(x => x.articles).flat())
// )

// app.get("/api/articles/:category", (req, res) => {
//   const result = data.filter(x => x.category === req.params.category)
//   res.json(result)
// })

// app.get("/api/articles/title/:title", (req, res) => {
//   const result = data
//     .reduce((acc, curr) => {
//       acc.push(curr.articles)
//       return acc
//     }, [])
//     .flat()
//     .filter(x => x.title === req.params.title.replace(/-/g, " "))[0]

// res.json(result)
// })

// app.get("/api/articles/id/:id", (req, res) => {
//   const result = data
//     .reduce((acc, curr) => {
//       acc.push(curr.articles)
//       return acc
//     }, [])
//     .flat()
//     .filter(x => x.id === parseInt(req.params.id))[0]

// res.json(result)
// })

app.get("/api/articles/filter/:title", (req, res) => {
  const result = data
    .reduce((acc, curr) => {
      acc.push(curr.articles)
      return acc
    }, [])
    .flat()
    .filter(x => x.title.toLowerCase().includes(req.params.title))

  console.log(req.params.title)

  res.json(result)
})

app.listen(3000, () => console.log("Listening on port 3000"))
