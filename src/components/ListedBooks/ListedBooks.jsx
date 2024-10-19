import React, { useEffect } from 'react';
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';

import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getReadBooks, getWishlistBooks } from '../../utility/addToDb';


const ListedBooks = () => {

    const booksData = useLoaderData();
    const navigate = useNavigate();

    useEffect(() => {
        navigate("readBooks"); // default route to readBooks
      }, [navigate]);

      let readListedBooks = [];
      const listedReadBooks = getReadBooks(); // get read books from local storage
    
      console.log(listedReadBooks);
    
      for (let i = 0; i < listedReadBooks.length; i++) { // find read books from booksData
        const findBook = booksData?.find(
          (data) => data.bookId == listedReadBooks[i]
        );
        if (findBook) {
          readListedBooks.push(findBook);
          
        }
      }
    
      let wishListedBooks = [];
      const wishListBooks = getWishlistBooks(); // get wishlist books from local storage
    
      for (let i = 0; i < wishListBooks.length; i++) { // find wishlist books from booksData
        const findBook = booksData?.find((data) => data.bookId == wishListBooks[i]);
        if (findBook) {
          wishListedBooks.push(findBook);
        }
        console.log(wishListedBooks);
      }

    return (
        <Tabs
        className="w-11/12 mx-auto"
        onSelect={(index) => {
          const routes = ["readBooks", "wishListBooks"];
          navigate(routes[index]);
        }}
      >
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
        <Outlet context={{ readListedBooks,wishListedBooks }} />
        </TabPanel>
        
      </Tabs>
    );
};

export default ListedBooks;