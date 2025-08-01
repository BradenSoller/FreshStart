CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR(60),
    "password" VARCHAR(80),
    "isAdmin" BOOLEAN
);



CREATE TABLE "AddItem" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR (120) NOT NULL,
	"description" TEXT,
	"image" VARCHAR(120),
	"size" VARCHAR(120),
	"is_liked" BOOLEAN DEFAULT FALSE
);