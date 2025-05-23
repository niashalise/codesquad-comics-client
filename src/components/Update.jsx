import { useState, useEffect } from "react";
import booksData from "../data/data/books"

function Update() {
    const id = "2d4f24ca-f395-461f-bc57-6a7ca61d63b9";
    const [book, setBook] = useState({});

    useEffect(() => {
        const foundBook = booksData.find((book) => book._id === id)
        setBook(foundBook)
    }, [])

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Default prevented.");
        console.log(e.input.value);
    };

    return (
      <div>
        <h2>UPDATE COMIC</h2>
        <form className="update-comics" onSubmit={handleFormSubmit}>
          <div className="form-fields">
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
              <label htmlFor="publisher">Publisher: </label>
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
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
}

export default Update;
