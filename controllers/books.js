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
  const updateId = req.query.update_id;
  res.render("addbook", { updateId });
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
      id,
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

    // Ambil data lama dari database
    const rawOldData = await client.query(queries.oldDetail, [id]);
    const oldData = rawOldData.rows[0];

    // Perbarui data buku dengan data yang dikirim dalam permintaan
    const title = payload.title || oldData.title;
    const author = payload.author || oldData.author;
    const publisher = payload.publisher || oldData.publisher;

    // Eksekusi query untuk memperbarui data buku
    await client.query(queries.newDetail, [title, author, publisher, id]);

    // Komit transaksi
    await client.query("COMMIT");

    // Arahkan pengguna ke halaman detail buku
    res.redirect("/buku/daftar-buku/detail/" + id);
  } catch (error) {
    // Gulung transaksi jika terjadi kesalahan
    await client.query("ROLLBACK");
    console.error("Error:", error);
    res.status(500).send("Internal server error");
  }
};

const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    await client.query(queries.deleteData, [id]); // melakukan penghapusan data berdasarkan id
    res.redirect("/buku/daftar-buku"); // setelah berhasil menghapus, redirect kembali ke halaman daftar buku
  } catch (error) {
    console.error("delete failed", error);
    res.status(500).send("Internal server error");
  }
};

module.exports = {
  getBook,
  addBook,
  formBook,
  getDetail,
  updateBook,
  deleteBook,
};
