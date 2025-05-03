import './css/App.css'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import MovieDetail from './pages/MovieDetail'
import NavBar from './components/NavBar'
import { MovieProvider } from './context/MovieContext'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/favourites' element={<Favourites />}/>
          <Route path='/movie/:id' element={<MovieDetail />}/>
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App;
