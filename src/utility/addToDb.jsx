import { toast } from "react-toastify";

const getReadBooks = () => {
  const storeBook = localStorage.getItem("read-books");
  if (storeBook) {
    return JSON.parse(storeBook);
  }
  return [];
};

const addReadBooks = (id) => {
  const storedBooks = getReadBooks();
  const exists = storedBooks.find((bookId) => bookId === id);
  if (!exists) {
    storedBooks.push(id);
    localStorage.setItem("read-books", JSON.stringify(storedBooks));
    toast.success("Books  Added to Read List");
    return;
  } else {
    toast.error("You have Already Read this book!");
  }
};

export { addReadBooks, getReadBooks };