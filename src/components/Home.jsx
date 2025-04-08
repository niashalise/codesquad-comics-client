import { useState, useEffect } from "react";
import booksData from "../data/data/books";

function Home() {
  const [books, setBook] = useState([]);

  useEffect(() => {
    // use the setter function for books and set it to booksData imported from the books.js file
    setBook((prevBook) => booksData);
  }, []);

  return (
    <main>
      <div className="codesquad-comics">
        <h2>CODESQUAD COMICS</h2>
        <p>
          CodeSquad Comics is a collection of graphic novels read by Your Name.
          The site is intended to display comic book covers along with
          information about each book, including the author, a rating, and other
          details about the graphic novel. Browse through the complete
          collection below. Click on the cover image or the Details link to see
          even more information for each graphic novel including the publisher,
          genre, number of pages, and a brief synopsis. The About page includes
          meta information about this collection. Login is only available to the
          site administrator at this time.
        </p>
        <h2>COMPLETE COMIC COLLECTION</h2>
        <section className="collection">
          {books.map((book) => (
            <div key={book._id}>
              <img src={`./images/${book.imageUrl}`} alt={book.title} />
              <br />
              <em>{book.title}</em>
              <br />
              by {book.author}
              <br />
              {book.rating} stars
              <br />
              <a href="#">Details</a>
              <br />
            </div>
          ))}
        </section>
        <button type="button" className="display">
          DISPLAY MORE
        </button>
      </div>
    </main>
  );
}

export default Home;
