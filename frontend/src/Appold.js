import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

const App = () => {
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/items');
            setItems(response.data);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div>
            <h1>CRUD App</h1>
            <ItemForm refreshItems={fetchItems} />
            <ItemList items={items} refreshItems={fetchItems} />
        </div>
    );
};

export default App;

