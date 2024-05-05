const { Router } = require("express");

const {
  getBook,
  addBook,
  formBook,
  getDetail,
  updateBook,
  //deleteBook,
} = require("../controllers/books");

const router = Router();

router.get("/daftar-buku", getBook);
router.get("/daftar-buku/detail/:id", getDetail);
router.put("/daftar-buku/update/:id", updateBook);
router.get("/addbook", formBook);
router.post("/addbook", addBook);
//router.delete("/daftar-buku/delete/:id", deleteBook);

module.exports = router;
