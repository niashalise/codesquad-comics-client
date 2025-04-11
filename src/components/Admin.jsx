import booksData from "../data/data/books";

function Admin() {
  return (
    <main>
      <h2>ADMIN PAGE</h2>
      <button type="button" className="add-comic">
        ADD NEW COMIC
      </button>
      <table className="comic-selection">
        <thead>
          <tr>
            <th>COMIC TITLE</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {booksData.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>
                <button type="button" className="edit-btn">
                  EDIT
                </button>
              </td>
              <td>
                <button type="button" className="delete-btn">
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Admin;
