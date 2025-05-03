import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { findMovie } from "../services/api";

function MovieDetail(){
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const findSpecificMovie = async (id) => {
            try{
                const movie = await findMovie(id);
                if(!movie) throw new Error("Movie not found");
                console.log(movie);
                setMovie(movie)
            } catch (err) {
                console.error(err);
                setError("Failed to load movie details.")
            }
            finally {
                setLoading(false)
            }
        }

        findSpecificMovie(id)
    }, [id]);

    if(loading) return <p>Loading...</p>
    if(error) return <p style={{color:"red"}}>error</p>
    if(!movie) return <p>No movie data available.</p>

    return (
        <div className="movie-detail">
            <div className="movie-banner"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '400px',
                    width: '100%',
                }}
            ></div>
            <div className="movie-info">
                <div>
                    <h2>{movie.title}</h2>
                    <p><strong>Release Date:</strong> {movie.release_date}</p>
                    <p><strong>Rating:</strong> {movie.vote_average} / 10</p>
                    <p>{movie.overview}</p>
                </div>
            </div>
        </div>
    );
    // return (
    //     <div >
    //         <div className="movie-banner"></div>
    //         <div className="movie-info"></div>
    //         <div className="cast-list"></div>
    //         <div className="trailer"></div>
    //         <div className="recommendation"></div>
    //     </div>
    // )
}

export default MovieDetail;