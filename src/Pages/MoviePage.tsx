import '../Pages/MoviePage.css';
function Moviepage() {
    return (
        <div className="MoviePage Text">
            <center>
                <h1>Movie Page</h1>
            </center>
            <center>
                <div className="MovieSearch">
                    <form action="GET">
                        <label htmlFor="movie">Search for a movie:</label>
                        <input type="text" id="movie" name="movie" />
                        <button>Submit</button>
                  </form>
                </div>
            </center>
        </div>
    );
}
export default Moviepage;