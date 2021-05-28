const express = require('express');
const cors = require("cors");
const app = express()
const port = 8080
const db = require("./firebase");
const fetch = require('node-fetch');

app.use(express.json());
app.use(cors({origin: true}));

//get library
app.get('/books/get', async (req, res) => {
  const snapshot = await db.collection("books").get();
  
  const books = [];

  snapshot.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id});
  });
  res.send(books);
});

//get books from google api
app.get('/google/get', async (req, res) => {
    const url = new URL("https://www.googleapis.com/books/v1/volumes");
    url.searchParams.append("q", req.query.title);

        fetch(url)
            .then((resp) => {
                return resp.json();
            })
            .then((obj) => {
                if (obj != null) {
                    console.log(obj);
                    res.send(obj.items);
                } else {
                    console.log("Oops.")
                }
            });
});

//add a book to library
app.post("/books/add", async (req, res) => {
    const { title, author } = req.body;

    const resp = await db.collection("books").add({
        title,
        author,
    });
    console.log("Added document with ID: ", resp.id);
    res.sendStatus(200);
});

//delete a book by document id
app.delete("/books/delete", async (req, res) => {
    const { id } = req.body;
    const batch = db.batch();
    const idRef = db.collection('books').doc(id);

    batch.delete(idRef);

    await batch.commit();

    console.log("Deleted: ", id);
    res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})