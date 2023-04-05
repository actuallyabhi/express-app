//Todo : Create a CURD blog
import Express from 'express'
const router = Express.Router()
import ejs from 'ejs'
let blogs = [
  {
    id: 1,
    title: "Blog 1",
    description : " This is a dummy blog"
  },
  {
    id: 2,
    title: "Blog 2",
    description: "This is second dummy blog",
  }
]

// Get a blog 
router.get("/", (req,res) => {
 res.json(blogs)
})

router.post("/", (req,res) => {
  // console.log(req.body)
  const {title, description} = req.body
  blogs.push({
    id: blogs.length+1,
    title: title,
    description: description
  })
  console.log(blogs)
  res.send("Post added sucessfully")

})

router.put("/", (req,res) => {
  // console.log(req.query.id)
  // console.log(req.body)
  for (let i=1; i < blogs.length; i++) {
    if (blogs[i].id == req.query.id) {
      blogs[i].title = req.body.title
      console.log(blogs[i])
      res.render("index",{blogs:blogs})        
      return;
    } 
  }
  res.send("not found")
})

router.delete("/", (req,res) => {
  const newArray = blogs.filter((post) => post.id != req.query.id)
  if (newArray.length != blogs) {
    res.send("Post deleted sucessfully")
    blogs = newArray
    console.log(blogs)
  }else {
    res.send("Post does not exist")
  }
  
})

export default router
