import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const ListedBooks = () => {


    const navigate = useNavigate();

    useEffect(() => {
        navigate("readBooks"); // default route to readBooks
      }, [navigate]);



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
            <h1>Read </h1>
        </TabPanel>
        <TabPanel>
            <h1>Wishlist</h1>
        </TabPanel>
      </Tabs>
    );
};

export default ListedBooks;