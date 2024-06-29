import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './Pages/MovieList';
import MovieDetail from './Pages/MovieDetail';
import BookingForm from './Pages/BookingForm';
import BookingConfirmed from './Pages/BookingConfirmed';

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<MovieList />} />
                <Route path='/movie/:id' element={<MovieDetail />} />
                <Route path='/book/:id' element={<BookingForm />} />
                <Route path='/confirm' element={<BookingConfirmed />} />
            </Routes>
        </Router>
    );
}

export default App;
