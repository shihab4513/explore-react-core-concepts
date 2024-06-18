import './Book.css';

/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

export default function Book({ book }) {
    const { name, price } = book;
    return (
        <div className='book'>
            <h3>Book Name : {name}</h3>
            <p>Price: {price}</p>
        </div>
    )
}