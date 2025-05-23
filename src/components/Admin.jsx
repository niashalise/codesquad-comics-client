import { useState, useEffect } from "react";
import booksData from "../data/data/books";

function Admin() {
    const [books, setBook] = useState([]);

    useEffect(() => {
    // use the setter function for books and set it to booksData imported from the books.js file
    setBook(booksData);
    }, []);

    return (
    <main>
        <h2>ADMIN PAGE</h2>
        <button type="button" className="add-comic">
        ADD NEW COMIC
        </button>
        <br />
        <br />
        <table className="comic-selection">
            <thead>
                <tr>
                    <th>COMIC TITLE</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book) => (
                    <tr key={book._id}>
                        <td>{book.title}</td>
                        <td>
                            <button type="button" className="edit-btn">EDIT</button>
                        </td>
                        <td>
                            <button type="button" className="delete-btn">DELETE</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </main>
    );
}

export default Admin;
