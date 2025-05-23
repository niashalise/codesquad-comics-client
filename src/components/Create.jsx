function Create() {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Default prevented.")
        console.log(e.target.title.value);
        console.log(e.target.author.value);
        console.log(e.target.publisher.value);
        console.log(e.target.genre.value);
        console.log(e.target.pages.value);
        console.log(e.target.synopsis.value);
        console.log(e.target.rating.value);

    }

    return (
        <main>
            <h2>CREATE NEW COMIC</h2>
            <form className="create-form" onSubmit={handleFormSubmit}>
                <div className="form-fields">
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input type="text" id="title" name="title" placeholder="Title" required />
                    </div>
                    <div>
                        <label htmlFor="author">Author: </label>
                        <input type="text" id="author" name="author" placeholder="Author" required />
                    </div>
                    <div>
                        <label htmlFor="publisher">Publisher: </label>
                        <select id="publisher" name="publisher" required>
                            <option value="">Select</option>
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
                        <input type="text" id="genre" name="genre" placeholder="Genre" required />
                    </div>
                    <div>
                        <label htmlFor="pages">Number of pages: </label>
                        <input type="text" id="pages" name="pages" placeholder="Number of pages" required />
                    </div>
                    <div>
                        <label htmlFor="rating">Rating: </label>
                        <input type="text" id="rating" name="rating" maxLength="3" size="3" required />
                    </div>
                    <div>
                        <label htmlFor="synopsis">Synopsis: </label>
                        <textarea name="synopsis" id="synopsis" rows="2" cols="20" defaultValue={"Synopsis"} required></textarea>
                    </div>
                    <div>
                        <button type="submit" className="submit-btn">Submit</button>
                    </div>
                </div>
            </form>
        </main>
    );
}

export default Create;
