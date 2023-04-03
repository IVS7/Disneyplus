import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import Detail from './components/Detail';
import OriginalsNavButton from './components/OriginalsNavButton';
import MoviesNavButton from './components/MoviesNavButton';
import SeriesNavButton from './components/SeriesNavButton';
import Watchlist from './components/Watchlist';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Login/>}>
          </Route>
          <Route path='/home' element={<Home/>}>
          </Route>
          <Route path='/detail/:id' element={<Detail/>}>
          </Route>
          <Route path='/originals' element={<OriginalsNavButton/>}>
          </Route>
          <Route path='/movies' element={<MoviesNavButton/>}>
          </Route>
          <Route path='/series' element={<SeriesNavButton/>}>
          </Route>
          <Route path='/watchlist' element={<Watchlist/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
