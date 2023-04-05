
import Express from 'express';
import cors from 'cors';
const app = Express();
const port = 3000;
import { PrismaClient } from '@prisma/client'
import blogRoute from './blog.js'
const prisma = new PrismaClient()


async function main() {
  const allUsers = await prisma.posts.findMany()
  console.dir(allUsers, { depth: null })

}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })



app.use(cors({
  origin: '*'
}));


app.use(Express.json())
app.use("/blog",blogRoute)
app.listen(3000, () => {
  console.log("Running")
})