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
        <ul className="list-group">
            {items.map((item) => (
                <li key={item._id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        <h5>{item.name}</h5>
                        <p className="mb-1">{item.description}</p>
                    </div>
                    <button className="btn btn-danger" onClick={() => handleDelete(item._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ItemList;

