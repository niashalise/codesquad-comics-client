import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Admin() {
    const [books, setBook] = useState([]);

    const handleDeleteBook = (id) => {
        const url = `https://course-project-codesquad-comics-server.onrender.com/api/books/delete/${bookId}`;

        fetch(url)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log(error));
    }

    useEffect(() => {
        const url = "https://course-project-codesquad-comics-server.onrender.com/api/books";
      // In the useEffect hook, create a callback function that will send a GET method using fetch to "https://course-project-codesquad-comics-server.onrender.com/api/books" URL
        fetch(url)
            .then(response => response.json())
            .then(result => setBook(result.data.books))
            .catch(error => console.log(error));
        
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
                    <th><Link to="/update">UPDATE</Link></th>
                    <th><button type="button" onClick={handleDeleteBook(_id)}>Delete</button></th>
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
