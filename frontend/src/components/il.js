import React from 'react';
import axios from 'axios';

const ItemList = ({ items, refreshItems }) => {
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/items/${id}`);
            refreshItems();
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <ul>
            {items.map((item) => (
                <li key={item._id}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <button onClick={() => handleDelete(item._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ItemList;

