const express = require('express');
const cors = require("cors");
const app = express()
const port = 8080
const db = require("./firebase");
const fetch = require('node-fetch');

app.use(express.json());
app.use(cors({origin: true}));
app.use(require("body-parser").json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

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
    console.log("fetching books...")
    try {
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
        
    } catch (error) {
        console.log("ERROR!:", error);
    }

});

//add a book to library
app.post("/books/add", async (req, res) => {
    console.log(req.body);
    const { title, author } = req.body;
    try {
        const resp = await db.collection("books").add({
            title,
            author,
        });
        console.log("Added document with ID: ", resp.id);
        res.sendStatus(200);
        
    } catch (error) {
        console.log("ERROR!:", error);
    }


});

// delete a book by document id
app.delete("/books/delete", async (req, res) => {
    console.log(req.body); //when req.body is empty there are problems
    let id = req.body;
    if (req.body == null){
        id = "string";
    }
    console.log("ID Type: ", typeof id);
    console.log("ID literal", id);
    const batch = db.batch();
    const idRef = db.collection('books').doc(id.id); //possibly causing a problem?

    try {
        batch.delete(idRef);

        await batch.commit();
    
        console.log("Deleted: ", id);
        res.sendStatus(200);
        
    } catch (error) {
        console.log("ERROR!:", error);
    }


});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})