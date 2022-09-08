const express = require("express");
const router = express.Router();
const Book = require("../models/books");
// Creat a book
router.post("/", (req, res) =>{
    const book = new Book({
        name:req.body.bookName,
        author:{
            name: req.body.authorName,
            age: req.body.authorAge,
        },
        genre: req.body.genre
    })

    book.save().then(book => {
        res.send(book);
    }).catch(error=>{
        res.status(500).send("Book was not stored in a database", error);
    })
})

// Get all books
router.get("/", async(req, res)=>{
   const books = await Book.find();
   if(!books) res.status(500).send("Something went wrong",error)
   res.send(books);
        
})

//GET Book by Id

router.get("/:BookId", async(req, res)=>{
   const book = await Book.findById(req.params.BookId);
        if(!book) res.status(404).send("Book not found");
        res.send(book);
})

//UPDATED based on ID

router.put("/:bookId", async(req, res)=>{
    const updatedBook = await Book.findByIdAndUpdate(req.params.bookId, {
        name: req.body.bookName,
        author:{
            name: req.body.authorName,
            age: req.body.authorAge,
        },
        genre: req.body.genre,
    }, {new:true});

    if(!updatedBook) res.status(404).send("book not found");
    res.send(updatedBook);
})

// Delete a book

router.delete("/:bookId", async(req, res)=>{
    const deletedBook = await Book.findByIdAndRemove(req.params.bookId);
    if(!deletedBook) res.status(404).send("book not found");
    res.send(deletedBook);
})
module.exports = router;