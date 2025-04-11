function Update() {
  return (
    <div>
      <h2>UPDATE COMIC</h2>
      <form className="update-comics">
        <div className="form-fields">
          <div>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="title value stored in database"
            />
          </div>
          <div>
            <label htmlFor="author">Author: </label>
            <input
              type="text"
              id="author"
              name="author"
              placeholder="author value stored in database"
            />
          </div>
          <div>
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
          </div>
          <div>
            <label htmlFor="genre">Genre: </label>
            <input
              type="text"
              id="genre"
              name="genre"
              placeholder="genre data stored in database"
            />
          </div>
          <div>
            <label htmlFor="pages">Number of pages: </label>
            <input type="text" id="pages" name="pages" placeholder="255" />
          </div>
          <div>
            <label htmlFor="rating">Rating: </label>
            <input
              type="text"
              id="rating"
              name="rating"
              maxLength="3"
              size="3"
              placeholder="5"
            />
          </div>
          <div>
            <label htmlFor="synopsis">Synopsis: </label>
            <textarea
              name="synopsis"
              id="synopsis"
              rows="2"
              cols="23"
              defaultValue={"synopsis value stored in database"}
            ></textarea>
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
