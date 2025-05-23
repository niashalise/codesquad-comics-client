import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from '../Update.module.css'


function Update() {
    const navigate = useNavigate();
    const { bookId } = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
      const url = `https://course-project-codesquad-comics-server.onrender.com/api/books/${bookId}`;
        
      fetch(url)
        .then(response => response.json())
        .then(result => {
          console.log(result)
          setBook(result.data.book);
        })
        .catch(error => console.log(error));
    }, [])

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const body = {
          title: e.target.title.value,
          author: e.target.author.value,
          publisher: e.target.publisher.value,
          genre: e.target.genre.value,
          pages: e.target.pages.value,
          synopsis: e.target.synopsis.value,
          rating: e.target.rating.value,
        };
        const url = "https://course-project-codesquad-comics-server.onrender.com/api/books/edit/${bookId}";

        fetch(url, {
          method: "POST",
          body: JSON.stringify(body)
        })
          .then(response => response.json())
          .then(result => {
            setBook(result);
            navigate("/admin");
          })
          .catch(error => console.log(error));

    };

    return (
      <main className={styles.main}>
        <div className={styles.update}>
          <h2>UPDATE COMIC</h2>
          <form className="update-comics" onSubmit={handleFormSubmit}>
            <div className={styles.formFields}>
              <div>
                <label htmlFor="title">Title: </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={book.title}
                  required
                />
                
              </div>
              <div>
                <label htmlFor="author">Author: </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={book.author}
                  required
                />
              </div>
              <div>
                <label htmlFor="publisher">Publisher: </label>
                <select id="publisher" name="publisher" value={book.publisher} defaultValue="default">
                  <option value="default">Select an option</option>
                  <option value="boom">BOOM! Box</option>
                  <option value="dc">DC Comics</option>
                  <option value="harry">Harry N. Abrams</option>
                  <option value="icon">Icon Books</option>
                  <option value="image">Image Comics</option>
                  <option value="marvel">Marvel</option>
                  <option value="simon-schuster">Simon & Schuster</option>
                  <option value="top-shelf">Top Shelf Productions</option>
                  <option value="viz">VIZ Media LLC</option>
                </select>
              </div>
              <div>
                <label htmlFor="genre">Genre: </label>
                <input
                  type="text"
                  id="genre"
                  name="genre"
                  value={book.genre}
                  required
                />
              </div>
              <div>
                <label htmlFor="pages">Number of pages: </label>
                <input
                  type="text"
                  id="pages"
                  name="pages"
                  value={book.pages}
                  required
                />
              </div>
              <div>
                <label htmlFor="rating">Rating: </label>
                <input
                  type="text"
                  id="rating"
                  name="rating"
                  maxLength="3"
                  size="3"
                  value={book.rating}
                  required
                />
              </div>
              <div>
                <label htmlFor="synopsis">Synopsis: </label>
                <textarea
                  name="synopsis"
                  id="synopsis"
                  rows="2"
                  cols="23"
                  required
                  value={book.synopsis}
                />
              </div>
              <div>
                <button type="submit" className={styles.submitBtn}>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    );
}

export default Update;
