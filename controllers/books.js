const client = require("../db/db.js");
const queries = require("../models/addNewBook_model.js");

const getBook = async (req, res) => {
  try {
    const result = await client.query(queries.getBook);
    const book = result.rows;
    res.render("daftar", {
      book,
    });
  } catch (error) {
    console.error("error", error);
  }
};

const formBook = async (req, res) => {
  res.render("addbook");
};
const addBook = async (req, res) => {
  try {
    const { title, author, publisher } = req.body;
    if (!title || !author || !publisher) {
      return res.status(400).send("Data tidak lengkap");
    }
    await client.query(queries.addBook, [title, author, publisher]);
    res.redirect("/buku/daftar-buku");
  } catch (error) {
    console.error("add failed", error);
    res.status(500).send("Internal server error");
  }
};

const getDetail = async (req, res) => {
  try {
    const id = req.params.id;
    // Lakukan query untuk mendapatkan detail buku berdasarkan ID
    const result = await client.query(queries.bookDetail, [id]);
    // Jika tidak ada hasil, kembalikan 404
    if (result.rows.length === 0) {
      return res.status(404).send("Buku tidak ditemukan");
    }
    // Ambil data buku dari hasil query
    const bookItem = result.rows[0];
    // Render halaman bookdetail dengan data buku yang ditemukan
    res.render("bookdetail", {
      bookItem,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal server error");
  }
};

const updateBook = async (req, res) => {
  await client.query("BEGIN");
  try {
    const payload = req.body;
    const id = req.params.id;

    const rawOldData = await client.query(queries.oldDetail, [id]);
    const oldData = rawOldData.rows[0];
    const title = payload.title || oldData.title;
    const author = payload.author || oldData.author;
    const publisher = payload.publisher || oldData.publisher;

    const newRawData = await client.query(queries.newDetail, [id]);
    const newData = newRawData.rows;

    await client.query("COMMIT");
    res.redirect("buku/daftar-buku" + id);
  } catch (error) {
    await client.query("ROLLBACK");
    res.status(500).send("internal server error");
  }
};

module.exports = { getBook, addBook, formBook, getDetail, updateBook };
// async function addNewBook(req, res) {
//   const { title, author, publisher, quantity } = req.body;

//   await client.query("BEGIN");
//   try {
//     const insertBook = await client.query(
//       ,
//       [title, author, publisher, quantity]
//     );
//     await client.query("COMMIT");
//     res.status(200).json("sukses");
//   } catch (error) {
//     console.log(error);
//     await client.query("ROLLBACK");
//     res.status(500).send("internal server error");
//   }
// }

// module.exports = addNewBook;
