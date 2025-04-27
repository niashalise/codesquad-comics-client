import { useState, useEffect } from "react";
import booksData from "../data/data/books";
import { useParams, useNavigate } from "react-router-dom";
import styles from '../Update.module.css'


function Update() {
    const navigate = useNavigate();
    const { bookId } = useParams();
    const [book, setBook] = useState({});

    useEffect(() => {
      const url = "https://course-project-codesquad-comics-server.onrender.com/api/books/${bookId}";
        
      fetch(url)
        .then(response => response.json)
        .then(result => {
          console.log(result)
          setBook(result);
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
          .then(response => response.json)
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
                  placeholder="title value stored in database"
                  required
                />
                <br />
              </div>
              <div>
                <br />
                <label htmlFor="author">Author: </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  placeholder="author value stored in database"
                  required
                />
                <br />
              </div>
              <div>
                <br />
                <label htmlFor="Publisher">Publisher: </label>
                <select id="publisher" name="publisher">
                  <option value="">publisher value stored in database</option>
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
                <br />
              </div>
              <div>
                <br />
                <label htmlFor="genre">Genre: </label>
                <input
                  type="text"
                  id="genre"
                  name="genre"
                  placeholder="genre data stored in database"
                  required
                />
                <br />
              </div>
              <div>
                <br />
                <label htmlFor="pages">Number of pages: </label>
                <input
                  type="text"
                  id="pages"
                  name="pages"
                  placeholder="255"
                  required
                />
                <br />
              </div>
              <div>
                <br />
                <label htmlFor="rating">Rating: </label>
                <input
                  type="text"
                  id="rating"
                  name="rating"
                  maxLength="3"
                  size="3"
                  placeholder="5"
                  required
                />
                <br />
              </div>
              <div>
                <br />
                <label htmlFor="synopsis">Synopsis: </label>
                <textarea
                  name="synopsis"
                  id="synopsis"
                  rows="2"
                  cols="23"
                  required
                  defaultValue={"synopsis value stored in database"}
                ></textarea>
                <br />
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
