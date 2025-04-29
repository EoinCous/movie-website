import MovieCard from "../components/MovieCard"
import { useState } from "react";
import '../css/Home.css'

function Home(){
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "Oppenheimer", release_date: "2023"},
        {id: 2, title: "Terminator", release_date: "1999"},
        {id: 3, title: "The Matrix", release_date: "1998"},
        {id: 4, title: "Shrek 2", release_date: "2009"},
        {id: 5, title: "Interstellar", release_date: "2016"}
    ];

    const handleSearch = () => {
        e.preventDefault()
        alert({searchQuery})
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for movies..." 
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}>
                </input>
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map(movie => 
                    <MovieCard movie={movie} key={movie.id}/>
                )}
            </div>
        </div>
    )
}

export default Home;