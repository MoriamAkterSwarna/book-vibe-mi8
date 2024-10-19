import React from 'react';
import SingleBookData from '../SingleBookData/SingleBookData';

const WishlistedBooks = () => {
    const { wishListedBooks } = useOutletContext();
    return (
        <div className="my-container relative">
        {wishListedBooks?.map((book) => (
          <SingleBookData key={book.bookId} book={book}></SingleBookData>
        ))}
      </div>
    );
};

export default WishlistedBooks;