import Express from 'express';
const app = Express();
const port = 3000;

import blogRoute from './blog.js'


app.use(Express.json())
app.use("/",blogRoute)
app.set("view engine","ejs")

// app.post("/users")

app.listen(3000, () => {
  console.log("Running")
})