-- CreateTable
CREATE TABLE "posts" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "post" VARCHAR(500) NOT NULL,
    "author" VARCHAR(15),

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

